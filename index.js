// WEB SERVER
const express = require("express");
const server = express();
const axios = require("axios");
const port = process.env.PORT || 8000;
server.get("/", (req, res) => {
  res.send("Bot is running fine... no tension :)");
});
server.listen(port, () => {
  console.clear();
  console.log("\nWeb-server running!\n");
});

// let lastPostedOver = "";
let matchIdGroups = {}; //to store every group name with its match ID
let iplsetIntervalGroups = {}; //to store every group name with its setInterval value so that it can be stopped
let iplStartedGroups = {}; //to store every group name with boolean value to know if ipl score is already started or not

//return 0 when match over, return -1 when error, therwise return match details
const getIplScore = async (matchID, commandName) => {
  try {
    let { data } = await axios.get("https://criapi.vercel.app/live");
    // if (commandName !== "score" && lastPostedOver == data.bowlerover) return; //to not to post same score again

    // lastPostedOver = data.bowlerover;
    let title = data.title;
    title = title.slice(0, title.search(","));
    let score = data.current;
    let runrate = data.runrate;
    let lastwicket = data.lastwicket;
    let recentballs = data.recentballs;
    let bowler = data.bowler;
    let bowlerover = data.bowlerover;
    let bowlerruns = data.bowlerruns;
    let bowlerwickets = data.bowlerwickets;
    if (recentballs === "Data Not Found") recentballs = data.lastwicket;

    let d = await axios.get(
      "https://cricket-scorecard-2021.herokuapp.com/scorecard/" + matchID
    );
    data = d.data;

    //is match over?
    if (
      commandName !== "score" &&
      data["result"]["winning_team"] !== "Not Completed"
    )
      return 0;

    let batsman1 = "out ho gaya",
      batsman2 = "out ho gaya";
    let currentInning;
    let alt = true;

    let firstInningRuns = "";
    let firstInningTeam = "";

    if (Object.keys(data.Innings2[2]).length === 0) {
      currentInning = "Innings1";
    } else {
      currentInning = "Innings2";
      firstInningRuns = data.Innings1[2].runs + "/" + data.Innings1[2].wickets;
      firstInningTeam = data.Innings1[2].team
        .match(/(\b\S)?/g)
        .join("")
        .toUpperCase();
    }

    let update = currentInning === "Innings2" ? data["result"]["update"] : "";

    data[currentInning][0]["Batsman"].forEach((batsman) => {
      if (batsman.dismissal === "batting") {
        if (alt) {
          let batsmanName = batsman.name;
          if (batsmanName.search(/\(/) !== -1) {
            batsmanName = batsmanName.slice(0, batsmanName.search(/\(/) - 1);
          }
          batsman1 = `${batsmanName}: ${batsman.runs} (${batsman.balls})`;
          alt = false;
        } else {
          let batsmanName = batsman.name;
          if (batsmanName.search(/\(/) !== -1) {
            batsmanName = batsmanName.slice(0, batsmanName.search(/\(/) - 1);
          }
          batsman2 = `${batsmanName}: ${batsman.runs} (${batsman.balls})`;
        }
      }
    });

    let isInningOver = false;

    //inning over
    if (batsman2 === batsman1) isInningOver = true;

    let message = "";
    message += `*${title}*
`;
    message +=
      firstInningRuns !== ""
        ? `
${firstInningTeam + " - " + firstInningRuns}`
        : "";
    message += `
${score} ${runrate}
`;

    message += isInningOver
      ? ""
      : `
🏏 ${batsman1}
🏏 ${batsman2}

⚾ ${bowler} ${bowlerruns}-${bowlerwickets} (${bowlerover})
${batsman2 === "out ho gaya" ? "Last Wicket: " + lastwicket : ""}
_recent balls_
${recentballs}`;

    message +=
      update === "" || isInningOver
        ? ""
        : `

${update}`;

    return message;
  } catch {
    return -1;
  }
};

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

// LOAD DB CONNECTION
const db = require("./database");

// LOAD ADDITIONAL NPM PACKAGES
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const WSF = require("wa-sticker-formatter");
const { match } = require("assert");

async function fetchauth() {
  try {
    auth_result = await db.query("select * from auth;");
    console.log("Fetching login data...");
    auth_row_count = await auth_result.rowCount;
    if (auth_row_count == 0) {
      console.log("No login data found!");
    } else {
      console.log("Login data found!");
      auth_obj = {
        clientID: auth_result.rows[0].clientid,
        serverToken: auth_result.rows[0].servertoken,
        clientToken: auth_result.rows[0].clienttoken,
        encKey: auth_result.rows[0].enckey,
        macKey: auth_result.rows[0].mackey,
      };
    }
  } catch {
    console.log("Creating database...");
    await db.query(
      "CREATE TABLE auth(clientID text, serverToken text, clientToken text, encKey text, macKey text);"
    );
    await fetchauth();
  }
}

// BASIC SETTINGS
prefix = "#";

// LOAD CUSTOM FUNCTIONS
const getGroupAdmins = (participants) => {
  admins = [];
  for (let i of participants) {
    i.isAdmin ? admins.push(i.jid) : "";
  }
  return admins;
};
const adminHelp = (prefix, groupName) => {
  return `─「 PVX BOT 」 ─
Group: *${groupName}* 

*${prefix}sticker*
    - _Create original size sticker from different media types!_

*${prefix}sticker crop*
    - _Create full size sticker from different media types!_

*${prefix}add <phone number>*
    - _Add any new member!_

*${prefix}source*
    - _Get bot source code!_
    
_*IPL COMMANDS:*_
NOTE: Put matchID (from cricbuzz) in description starting!

${prefix}score
    - _Give IPL match current score!_
${prefix}startipl
    - _Start IPL match live score every 1 min!_
${prefix}stopipl
    - _Stop IPL match live score!_`;
};

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

// MAIN FUNCTION
async function main() {
  // LOADING SESSION
  const conn = new WAConnection();
  conn.logger.level = "warn";
  conn.on("qr", () => {
    console.log("SCAN THE ABOVE QR CODE TO LOGIN!");
  });
  await fetchauth(); //GET LOGIN DATA
  if (auth_row_count == 1) {
    conn.loadAuthInfo(auth_obj);
  }
  conn.on("connecting", () => {
    console.log("Connecting...");
  });
  conn.on("open", () => {
    console.clear();
    console.log("Connected!");
  });
  await conn.connect({ timeoutMs: 30 * 1000 });
  const authInfo = conn.base64EncodedAuthInfo(); // UPDATED LOGIN DATA
  load_clientID = authInfo.clientID;
  load_serverToken = authInfo.serverToken;
  load_clientToken = authInfo.clientToken;
  load_encKey = authInfo.encKey;
  load_macKey = authInfo.macKey;
  // INSERT / UPDATE LOGIN DATA
  if (auth_row_count == 0) {
    console.log("Inserting login data...");
    db.query("INSERT INTO auth VALUES($1,$2,$3,$4,$5);", [
      load_clientID,
      load_serverToken,
      load_clientToken,
      load_encKey,
      load_macKey,
    ]);
    db.query("commit;");
    console.log("New login data inserted!");
  } else {
    console.log("Updating login data....");
    db.query(
      "UPDATE auth SET clientid = $1, servertoken = $2, clienttoken = $3, enckey = $4, mackey = $5;",
      [
        load_clientID,
        load_serverToken,
        load_clientToken,
        load_encKey,
        load_macKey,
      ]
    );
    db.query("commit;");
    console.log("Login data updated!");
  }

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

      const reply = (teks) => {
        conn.sendMessage(from, teks, text, {
          quoted: mek,
        });
      };

      const costum = (pesan, tipe, target, target2) => {
        conn.sendMessage(from, pesan, tipe, {
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
        case "check":
          //for testing
          console.log(groupDesc);
          console.log(groupDesc.slice(0, 5));
          conn.sendMessage(from, groupDesc, MessageType.text);
          break;

        //This takes match ID from group description! Put match ID in starting of group description.
        //Get match ID from cricbuzz url like https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 so match ID is 37572
        case "startipl":
          if (!isGroup) return;
          if (iplStartedGroups[groupName]) {
            reply("❌ ERROR: IPL SCORES already started for this group!");
            return;
          }
          if (!isGroupAdmins) {
            reply("❌ ERROR: Admin command!");
            return;
          }
          if (!groupDesc) {
            reply(
              "❌ ERROR: Group description is empty, try to put cricbuzz match id of today match in starting of description !"
            );
            return;
          }
          matchIdGroups[groupName] = groupDesc.slice(0, 5);
          // let allowed = ["919557666582", "918178802088"];
          // if (!allowed.includes(sender.split("@")[0])) {
          //   reply("❌ ERROR: Permission nahi h tere pass!");
          //   return;
          // }

          reply(
            "✔️ Starting IPL scores for matchID: " +
              matchIdGroups[groupName] +
              " (taken from description)"
          );
          lastPostedOver = "";
          console.log(
            "✔️ Starting IPL scores for matchID: " + matchIdGroups[groupName]
          );
          data = await getIplScore(matchIdGroups[groupName], "startipl");
          if (data === 0) {
            reply("✔️ Match over! Stopping IPL scores for this group !");
            clearInterval(iplsetIntervalGroups[groupName]);
            iplStartedGroups[groupName] = false;
            return;
          } else if (data == -1) {
            reply(
              "❌ ERROR: some error came, try to put correct cricbuzz match id in description !"
            );
            return;
          }
          conn.sendMessage(from, data, MessageType.text);
          iplStartedGroups[groupName] = true;

          iplsetIntervalGroups[groupName] = setInterval(async () => {
            data = await getIplScore(matchIdGroups[groupName], "startipl");
            if (data === 0) {
              reply("✔️ Match over! Stopping IPL scores for this group !");
              clearInterval(iplsetIntervalGroups[groupName]);
              iplStartedGroups[groupName] = false;
              return;
            } else if (data == -1) {
              reply(
                "❌ ERROR: some error came, try to put correct cricbuzz match id in description !"
              );
              return;
            }
            conn.sendMessage(from, data, MessageType.text);
          }, 1000 * 60 * 1);
          break;

        case "score":
          if (!isGroup) return;

          matchIdGroups[groupName] = groupDesc.slice(0, 5);
          data = await getIplScore(matchIdGroups[groupName], "score");
          if (data == -1) {
            reply(
              "❌ ERROR: some error came, try to put correct cricbuzz match id in description !"
            );
            return;
          }
          conn.sendMessage(from, data, MessageType.text);
          break;

        case "stopipl":
          if (!isGroup) return;
          // if (sender.split("@")[0] !== "919557666582") {
          //   reply("❌ ERROR: Permission nahi h tere pass!");
          //   return;
          // }
          if (!isGroupAdmins) {
            reply("❌ ERROR: Admin command!");
            return;
          }
          reply("✔️ Stopping IPL scores for this group !");
          clearInterval(iplsetIntervalGroups[groupName]);
          iplStartedGroups[groupName] = false;
          break;
        //     /////////////// HELP \\\\\\\\\\\\\\\

        case "help":
          if (!isGroup) return;
          costum(adminHelp(prefix, groupName), text);

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
          if (!isGroup) return;

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

        /////////////// ADMIN COMMANDS \\\\\\\\\\\\\\\

        case "add":
          if (!isGroup) return;
          if (!isGroupAdmins) return;
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
          break;
      }
    } catch (e) {
      console.log("Error : %s", e);
    }
  });
}
main();
