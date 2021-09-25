// WEB SERVER
const express = require("express");
const server = express();
const port = process.env.PORT || 8000;
server.get("/", (req, res) => {
  res.send("Bot is running fine... no tension :)");
});
server.listen(port, () => {
  console.clear();
  console.log("\nWeb-server running!\n");
});

// LOAD Baileys
const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");

// LOAD ADDITIONAL NPM PACKAGES
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const WSF = require("wa-sticker-formatter");

//importing function files
const { getIplScore } = require("./functions/ipl");
const { commandList } = require("./functions/list");
const { response } = require("express");

// BASIC SETTINGS
prefix = "!";
let matchIdGroups = {}; //to store every group name with its match ID
let iplsetIntervalGroups = {}; //to store every group name with its setInterval value so that it can be stopped
let iplStartedGroups = {}; //to store every group name with boolean value to know if ipl score is already started or not

// LOAD CUSTOM FUNCTIONS
const getGroupAdmins = (participants) => {
  admins = [];
  for (let i of participants) {
    i.isAdmin ? admins.push(i.jid) : "";
  }
  return admins;
};

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

//MAIN FUNCTION
const main = async () => {
  const { connectToWA } = require("./functions/database");
  const conn = await connectToWA(WAConnection);

  // member left or join
  conn.on("group-participants-update", async (anu) => {
    try {
      const mdata = await conn.groupMetadata(anu.jid);
      console.log(anu);
      if (anu.action == "add") {
        num = anu.participants[0];
        num_split = `${num.split("@s.whatsapp.net")[0]}`;
        console.log("Joined: ", num);
      }
    } catch (e) {
      console.log(e);
    }
  });

  // new message
  conn.on("chat-update", async (mek) => {
    try {
      if (!mek.hasNewMessage) return;
      mek = JSON.parse(JSON.stringify(mek)).messages[0];
      if (!mek.message) return;
      if (mek.key && mek.key.remoteJid == "status@broadcast") return;
      if (mek.key.fromMe) return;
      const content = JSON.stringify(mek.message);
      global.prefix;
      const from = mek.key.remoteJid;
      const type = Object.keys(mek.message)[0];
      const {
        text,
        extendedText,
        contact,
        location,
        liveLocation,
        image,
        video,
        sticker,
        document,
        audio,
        product,
      } = MessageType;
      body =
        type === "conversation" && mek.message.conversation.startsWith(prefix)
          ? mek.message.conversation
          : type == "imageMessage" &&
            mek.message.imageMessage.caption.startsWith(prefix)
          ? mek.message.imageMessage.caption
          : type == "videoMessage" &&
            mek.message.videoMessage.caption.startsWith(prefix)
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            mek.message.extendedTextMessage.text.startsWith(prefix)
          ? mek.message.extendedTextMessage.text
          : "";
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
      const args = body.trim().split(/ +/).slice(1);
      const isCmd = body.startsWith(prefix);
      if (!isCmd) return;

      errors = {
        admin_error: "_❌ ERROR: I'm not Admin here! ❌_",
      };

      const botNumber = conn.user.jid;
      const isGroup = from.endsWith("@g.us");
      const sender = isGroup ? mek.participant : mek.key.remoteJid;
      const groupMetadata = isGroup ? await conn.groupMetadata(from) : "";
      const groupName = isGroup ? groupMetadata.subject : "";
      const groupDesc = isGroup ? groupMetadata.desc : "";
      const groupMembers = isGroup ? groupMetadata.participants : "";
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
      const isGroupAdmins = groupAdmins.includes(sender) || false;

      const reply = (message) => {
        conn.sendMessage(from, message, text, {
          quoted: mek,
        });
      };

      const costum = (message, tipe, target, target2) => {
        conn.sendMessage(from, message, tipe, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${target}`,
              ...(from
                ? {
                    remoteJid: from,
                  }
                : {}),
            },
            message: {
              conversation: `${target2}`,
            },
          },
        });
      };

      const stopIplHelper = () => {
        reply("✔️ Stopping IPL scores for this group !");
        console.log("Stopping IPL scores for " + groupName);
        clearInterval(iplsetIntervalGroups[groupName]);
        iplStartedGroups[groupName] = false;
      };

      //return false when stopped in middle. return true when run fully
      const startIplHelper = async (commandName) => {
        if (!groupDesc) {
          reply(
            "❌ ERROR: Group description is empty, Put match id in in starting of group description. Get match ID from cricbuzz url, like https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 so match ID is 37572 !"
          );
          return false;
        }

        matchIdGroups[groupName] = groupDesc.slice(0, 5);
        if (commandName === "startipl") {
          reply(
            "✔️ Starting IPL scores for matchID: " +
              matchIdGroups[groupName] +
              " (taken from description)"
          );
        }

        let response = await getIplScore(matchIdGroups[groupName], commandName);
        //if commandName is score then either "error" or "message" will come
        //if commandName is startipl then "match over","error" or "message" will come
        if (response === "match over") {
          reply("✔️ Match over! Stopping IPL scores for this group !");
          console.log("Match over! Stopping IPL scores for " + groupName);
          clearInterval(iplsetIntervalGroups[groupName]);
          iplStartedGroups[groupName] = false;
          return false;
        } else if (response === "error") {
          reply(
            "❌ ERROR: some error came, Put match id in in starting of group description. Get match ID from cricbuzz url, like https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 so match ID is 37572 !"
          );
          return false;
        } else if (
          commandName === "startipl" &&
          response.slice(-11) === "Inning over"
        ) {
          conn.sendMessage(from, response, MessageType.text);
          reply(
            "✔️ Inning over! Open again live scores later when 2nd inning will start by !startipl"
          );
          stopIplHelper();
          return false;
        }
        conn.sendMessage(from, response, MessageType.text);
        return true;
      };

      const isMedia = type === "imageMessage" || type === "videoMessage";
      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");
      if (isCmd && isGroup)
        console.log(
          "[COMMAND]",
          command,
          "[FROM]",
          sender.split("@")[0],
          "[IN]",
          groupName
        );

      /////////////// COMMANDS \\\\\\\\\\\\\\\
      let data;
      switch (command) {
        case "dev":
          reply(`─「 PVX BOT 」 ─

_Message wa.me/919557666582 to report any bug or to give new ideas/features for this bot!_`);
          break;

        //This takes match ID from group description! Put match ID in starting of group description.
        //Get match ID from cricbuzz url like https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 so match ID is 37572
        case "startipl":
          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          if (iplStartedGroups[groupName]) {
            reply("❌ ERROR: IPL SCORES already started for this group!");
            return;
          }

          data = await startIplHelper("startipl");
          if (!data) return;

          iplStartedGroups[groupName] = true;
          iplsetIntervalGroups[groupName] = setInterval(async () => {
            data = await startIplHelper("score");
            if (!data) return;
          }, 1000 * 60 * 1);
          break;

        case "score":
          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }

          data = await startIplHelper("score");
          break;

        case "stopipl":
          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          stopIplHelper();
          break;

        /////////////// HELP \\\\\\\\\\\\\\\

        case "help":
          if (!isGroup) return;
          costum(commandList(prefix), text);

          break;

        case "source":
          conn.sendMessage(
            from,
            "https://github.com/Shubhamrawat5/whatsapp-bot",
            text,
            {
              quoted: mek,
              detectLinks: true,
            }
          );
          break;

        case "sticker":
          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }

          // Format should be <prefix>sticker pack <pack_name> author <author_name>
          var packName = "PVX BOT";
          var authorName = "";

          outputOptions = [
            `-vcodec`,
            `libwebp`,
            `-vf`,
            `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
          ];
          if (args.includes("crop") == true) {
            outputOptions = [
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `crop=w='min(min(iw\,ih)\,500)':h='min(min(iw\,ih)\,500)',scale=500:500,setsar=1,fps=15`,
              `-loop`,
              `0`,
              `-ss`,
              `00:00:00.0`,
              `-t`,
              `00:00:10.0`,
              `-preset`,
              `default`,
              `-an`,
              `-vsync`,
              `0`,
              `-s`,
              `512:512`,
            ];
          }

          if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
            const encmedia = isQuotedImage
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
            const media = await conn.downloadAndSaveMediaMessage(encmedia);
            ran = getRandom(".webp");
            reply("⌛ Processing image... ⏳");
            await ffmpeg(`./${media}`)
              .input(media)
              .on("error", function (err) {
                fs.unlinkSync(media);
                console.log(`Error : ${err}`);
                reply("_❌ ERROR: Failed to convert image into sticker! ❌_");
              })
              .on("end", function () {
                buildSticker();
              })
              .addOutputOptions(outputOptions)
              .toFormat("webp")
              .save(ran);

            async function buildSticker() {
              if (args.includes("nometadata") == true) {
                conn.sendMessage(from, fs.readFileSync(ran), sticker, {
                  quoted: mek,
                });
                fs.unlinkSync(media);
                fs.unlinkSync(ran);
              } else {
                const webpWithMetadata = await WSF.setMetadata(
                  packName,
                  authorName,
                  ran
                );
                conn.sendMessage(from, webpWithMetadata, MessageType.sticker);
                fs.unlinkSync(media);
                fs.unlinkSync(ran);
              }
            }
          } else if (
            (isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)
          ) {
            const encmedia = isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
            const media = await conn.downloadAndSaveMediaMessage(encmedia);
            ran = getRandom(".webp");
            reply("⌛ Processing animation... ⏳");
            await ffmpeg(`./${media}`)
              .inputFormat(media.split(".")[1])
              .on("error", function (err) {
                fs.unlinkSync(media);
                mediaType = media.endsWith(".mp4") ? "video" : "gif";
                reply(
                  `_❌ ERROR: Failed to convert ${mediaType} to sticker! ❌_`
                );
              })
              .on("end", function () {
                buildSticker();
              })
              .addOutputOptions(outputOptions)
              .toFormat("webp")
              .save(ran);

            async function buildSticker() {
              if (args.includes("nometadata") == true) {
                conn.sendMessage(from, fs.readFileSync(ran), sticker, {
                  quoted: mek,
                });
                fs.unlinkSync(media);
                fs.unlinkSync(ran);
              } else {
                const webpWithMetadata = await WSF.setMetadata(
                  packName,
                  authorName,
                  ran
                );
                conn.sendMessage(from, webpWithMetadata, MessageType.sticker);
                fs.unlinkSync(media);
                fs.unlinkSync(ran);
              }
            }
          }
          break;

        case "add":
          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          if (!isGroupAdmins) {
            reply("❌ ERROR: Admin command!");
            return;
          }
          if (!isBotGroupAdmins) return reply(errors.admin_error);
          if (args.length < 1) return;
          var num = "";
          if (args.length > 1) {
            for (let j = 0; j < args.length; j++) {
              num = num + args[j];
            }
            num = `${num.replace(/ /g, "")}@s.whatsapp.net`;
          } else {
            num = `${args[0].replace(/ /g, "")}@s.whatsapp.net`;
          }
          if (num.startsWith("+")) {
            num = `${num.split("+")[1]}`;
          }
          const response = await conn.groupAdd(from, [num]);
          get_status = `${num.split("@s.whatsapp.net")[0]}`;
          get_status = response[`${get_status}@c.us`];
          if (get_status == 400) {
            reply("_❌ ERROR: Invalid number! ❌_");
          }
          if (get_status == 403) {
            reply("_❌ ERROR: Number has privacy on adding group! ❌_");
          }
          if (get_status == 408) {
            reply("_❌ ERROR: Number has left the group recently! ❌_");
          }
          if (get_status == 409) {
            reply("_❌ ERROR: Number is already exists! ❌_");
          }
          if (get_status == 500) {
            reply("_❌ ERROR: Group is currently full! ❌_");
          }
          if (get_status == 200) {
            reply("_✔ SUCCESS: Number added to group! ✔_");
          }
          break;

        default:
          reply("Send !help for PVX bot commands list!");
          break;
      }
    } catch (e) {
      console.log("Error : %s", e);
    }
  });
};
main();
