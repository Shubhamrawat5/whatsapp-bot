/* --------------------------------- SERVER --------------------------------- */
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("Bot is running fine... no tension :)");
});
app.listen(port, () => {
  console.clear();
  console.log("\nWeb-server running!\n");
});

/* ---------------------------------- SONG ---------------------------------- */
const downloadSong = async (randomName, query) => {
  try {
    const INFO_URL = "https://slider.kz/vk_auth.php?q=";
    const DOWNLOAD_URL = "https://slider.kz/download/";
    let { data } = await axios.get(INFO_URL + query);

    if (data["audios"][""].length <= 1) {
      console.log("==[ SONG NOT FOUND! ]==");
      return "NOT";
    }

    //avoid remix,revisited,mix
    let i = 0;
    let track = data["audios"][""][i];
    while (/remix|revisited|mix/i.test(track.tit_art)) {
      i += 1;
      track = data["audios"][""][i];
    }
    //if reach the end then select the first song
    if (!track) {
      track = data["audios"][""][0];
    }

    let link = DOWNLOAD_URL + track.id + "/";
    link = link + track.duration + "/";
    link = link + track.url + "/";
    link = link + track.tit_art + ".mp3" + "?extra=";
    link = link + track.extra;
    link = encodeURI(link); //to replace unescaped characters from link

    let songName = track.tit_art;
    songName =
      songName =
      songName =
        songName.replace(/\?|<|>|\*|"|:|\||\/|\\/g, ""); //removing special characters which are not allowed in file name
    // console.log(link);
    // download(songName, link);
    const res = await axios({
      method: "GET",
      url: link,
      responseType: "stream",
    });
    data = res.data;
    const path = `./${randomName}`;
    const writer = fs.createWriteStream(path);
    data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on("finish", () => resolve(songName));
      writer.on("error", () => reject);
    });
  } catch (err) {
    console.log(err);
    return "ERROR";
  }
};

/* ------------------------------------ INSTA -----------------------------------  */
const saveInstaVideo = async (randomName, videoDirectLink) => {
  const response = await axios({
    url: videoDirectLink,
    method: "GET",
    responseType: "stream",
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "max-age=0",
      "sec-ch-ua":
        '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      "sec-ch-ua-mobile": "?1",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
  });

  const path = `./${randomName}`;
  const writer = fs.createWriteStream(path);
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

/* ------------------------------------ Baiileys ----------------------------------- */
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
const tesseract = require("node-tesseract-ocr");
const axios = require("axios");

//importing function files
const { getIplScore } = require("./functions/ipl");
const { commandList } = require("./functions/list");
const { getNews } = require("./functions/news");
const { getInstaVideo } = require("./functions/insta");

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

const getRandom = (text) => {
  return `${Math.floor(Math.random() * 10000)}${text}`;
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
        let num = anu.participants[0];
        let from = anu.jid;
        let num_split = `${num.split("@s.whatsapp.net")[0]}`;

        // other than 91 are blocked from joining
        if (!num_split.startsWith(91)) {
          conn.sendMessage(
            from,
            `*─「 🔥 <{PVX}> BOT 🔥 」─* \n\nOnly 91 numbers are allowed !!!!`,
            MessageType.text
          );
          console.log("#", anu.participants);
          conn.groupRemove(from, anu.participants);
        }

        if (num_split === "919720391303") {
          console.log("Bot is add to new group!");
          conn.sendMessage(
            from,
            `*─「 🔥 <{PVX}> BOT 🔥 」─\n\nSEND !help FOR BOT COMMANDS`,
            MessageType.text
          );
        }
        console.log("Joined: ", num);
      }
    } catch (err) {
      console.log(err);
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

      //body will have the text message
      body =
        type === "conversation" && mek.message.conversation.startsWith(prefix)
          ? mek.message.conversation
          : type == "imageMessage" &&
            mek.message.imageMessage.caption &&
            mek.message.imageMessage.caption.startsWith(prefix)
          ? mek.message.imageMessage.caption
          : type == "videoMessage" &&
            mek.message.videoMessage.caption &&
            mek.message.videoMessage.caption.startsWith(prefix)
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            mek.message.extendedTextMessage.text &&
            mek.message.extendedTextMessage.text.startsWith(prefix)
          ? mek.message.extendedTextMessage.text
          : "";

      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
      const args = body.trim().split(/ +/).slice(1);
      const isCmd = body.startsWith(prefix);
      if (!isCmd) return;

      /* [INFO] 
      1) quoted == tagged messages 
      
      2) when normal text received
      mek = {
        key: {
          remoteJid: "91955782-1559476348@g.us",
          fromMe: false,
          id: "B98FBDD5A762DEA9F4DD733",
        },
        message: { conversation: "!help" },
        messageTimestamp: "1632654425",
        participant: "919836014@s.whatsapp.net",
        ephemeralOutOfSync: false,
      };

      3) type = "conversation" , "imageMessage" , "videoMessage" , "extendedTextMessage"
        -> extendedTextMessage are tagged messages
      */

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

      const isMedia = type === "imageMessage" || type === "videoMessage"; //image or video
      const isTaggedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isTaggedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isTaggedSticker =
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

      const reply = (message) => {
        conn.sendMessage(from, message, MessageType.text, {
          quoted: mek,
        });
      };

      /* -------------------------- IPL HELPING FUNCTIONS ------------------------- */
      const stopIplHelper = () => {
        reply("✔️ Stopping IPL scores for this group !");
        console.log("Stopping IPL scores for " + groupName);
        clearInterval(iplsetIntervalGroups[groupName]);
        iplStartedGroups[groupName] = false;
      };

      //return false when stopped in middle. return true when run fully
      const startIplHelper = async (commandName, isFromSetInterval = false) => {
        if (!groupDesc) {
          reply(`*❌ ERROR:* 
- Group description is empty.
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !

# If you've put correct match ID in description starting and still facing this error then contact developer by !dev`);
          return false;
        }

        matchIdGroups[groupName] = groupDesc.slice(0, 5);
        if (commandName === "startipl" && !isFromSetInterval) {
          reply(
            "✔️ Starting IPL scores for matchID: " +
              matchIdGroups[groupName] +
              " (taken from description)"
          );
        }

        let response = await getIplScore(matchIdGroups[groupName], commandName);

        //response.info have "MO" only when command is startipl
        if (commandName === "startipl" && response.info === "MO") {
          conn.sendMessage(from, response.message, MessageType.text);
          reply("✔️ Match over! Stopping IPL scores for this group !");
          console.log("Match over! Stopping IPL scores for " + groupName);
          clearInterval(iplsetIntervalGroups[groupName]);
          iplStartedGroups[groupName] = false;
          return false;
        } else if (commandName === "startipl" && response.info === "IO") {
          conn.sendMessage(from, response.message, MessageType.text);
          reply(
            "✔️ Inning over! Open again live scores later when 2nd inning will start by !startipl"
          );
          stopIplHelper();
          return false;
        } else if (response.info === "ER") {
          reply(`*❌ ERROR:* 
- Group description starting is "${matchIdGroups[groupName]}"
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !

# If you've put correct match ID in description starting and still facing this error then contact developer by !dev`);
          return false;
        }
        conn.sendMessage(from, response.message, MessageType.text);
        return true;
      };

      // give command name with comma seperated to be blocked for particular group in first line of description like (82132 is matchid for ipl scores)
      //82132,score,add,remove
      let blockCommandsInDesc = []; //commands to be blocked
      if (groupDesc) {
        let firstLineDesc = groupDesc.split("\n")[0];
        blockCommandsInDesc = firstLineDesc.split(",");
      }

      /* -------------------------------- COMMANDS -------------------------------- */
      let data;
      switch (command) {
        case "testt":
          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          if (!groupDesc) {
            reply(`*❌ ERROR:* EMPTY!`);
          }

          reply(groupDesc);

          break;

        case "block":
          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }

          reply(
            `*─「 <{PVX}> BOT 」 ─*\n\n_Give command name (with comma seperated and without spaces) to be blocked for particular group in first line of group description, like_\nscore,add,quote\n\n_If matchId is to be added in description also then add in starting, like_\n82621,score,add,quote`
          );
          break;

        case "button":
          if (blockCommandsInDesc.includes(command)) return;

          //not working yet, maybe of whatsapp business
          let { button } = require("./functions/button");
          await conn.sendMessage(from, button, MessageType.listMessage);
          break;

        /* ------------------------------- CASE: PVXLINK ------------------------------ */
        case "pvxlink":
          if (blockCommandsInDesc.includes(command)) return;

          reply(
            "*─「 🔥 JOIN <{PVX}> FAMILY 🔥 」─*\n\n>> https://pvxfamily.tech <<"
          );
          break;

        /* ------------------------------- CASE: SONG ------------------------------ */
        case "song":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(`❌ ERROR: query is empty! \nSend !song query`);
            return;
          }
          try {
            let randomName = getRandom(".mp3");
            let query = args.join("%20");
            let response = await downloadSong(randomName, query);
            if (response == "NOT") {
              reply("❌ ERROR: Song not found!");
              return;
            }
            console.log(`song saved-> ./${randomName}`, response);

            await conn.sendMessage(
              from,
              fs.readFileSync(`./${randomName}`),
              MessageType.document,
              {
                mimetype: "audio/mpeg",
                filename: response + ".mp3",
                quoted: mek,
              }
            );
          } catch (err) {
            console.log(err);
            reply(`❌ ERROR: There is some problem.`);
          }
          break;

        /* ------------------------------- CASE: INSTA ------------------------------ */
        case "insta":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(`❌ ERROR: URL is empty! \nSend !insta url`);
            return;
          }
          let urlInsta = args[0];

          if (
            !(
              urlInsta.includes("instagram.com/p/") ||
              urlInsta.includes("instagram.com/reel/")
            )
          ) {
            reply(
              `❌ ERROR: Wrong URL! Only Instagram posted videos and reels can be downloaded.`
            );
            return;
          }

          try {
            // console.log("Trying saving", urlInsta);
            let instaObj = await getInstaVideo(urlInsta);
            let videoDirectLink = instaObj.videoDirectLink;
            if (videoDirectLink) {
              let randomName = getRandom(".mp4");
              await saveInstaVideo(randomName, videoDirectLink);
              console.log(`video saved-> ./${randomName}`);

              //  { caption: "hello there!", mimetype: Mimetype.mp4 }
              // quoted: mek for tagged
              await conn.sendMessage(
                from,
                fs.readFileSync(`./${randomName}`), // can send mp3, mp4, & ogg
                MessageType.video,
                { mimetype: Mimetype.mp4, quoted: mek }
              );
            } else {
              reply(`❌ ERROR: There is some problem.`);
            }
          } catch (err) {
            console.log(err);
            reply(`❌ ERROR: There is some problem.`);
          }
          break;

        /* ------------------------------- CASE: TECHNEWS ------------------------------ */
        case "technews":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          let news = await getNews();
          conn.sendMessage(from, news, MessageType.text);
          break;

        /* ------------------------------- CASE: QUOTES ------------------------------ */
        case "quote":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          let { getQuote } = require("./functions/quote");
          let quote = await getQuote();
          reply(quote);
          break;

        /* ------------------------------- CASE: GENDER ------------------------------ */
        case "gender":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(`❌ ERROR: Name is not given! \nSend !gender firstname`);
            return;
          }
          let namePerson = args[0];
          if (namePerson.includes("@")) {
            reply(`❌ ERROR: Don't tag! \nSend !gender firstname`);
            return;
          }
          let { getGender } = require("./functions/gender");
          let genderText = await getGender(namePerson);
          reply(genderText);
          break;

        /* ------------------------------- CASE: TEXT ------------------------------ */
        case "text":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }

          if (type === "imageMessage" || isTaggedImage) {
            const encmedia = isTaggedImage
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;

            const media = await conn.downloadAndSaveMediaMessage(encmedia);
            let message = await tesseract.recognize(`./${media}`, {
              lang: "eng",
              oem: 1,
              psm: 3,
            });
            message = message.replace(/\s{2,}/g, " ").trim(); //remove multiple spaces
            message = message.replace(/(\n){2,}/g, "\n").trim(); //remove multiple \n

            reply(message);
          } else {
            reply("❌ ERROR: Give image having text!");
          }
          break;

        /* ------------------------------- CASE: DEV ------------------------------ */
        case "dev":
          if (blockCommandsInDesc.includes(command)) return;

          reply(
            `*─「 <{PVX}> BOT 」 ─*\n\n_Message wa.me/919557666582 to report any bug or to give new ideas/features for this bot!_ `
          );
          break;

        /* ------------------------------- CASE: STARTIPL ------------------------------ */
        case "startipl":
          if (blockCommandsInDesc.includes(command)) return;

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
            data = await startIplHelper("startipl", true);
            if (!data) return;
          }, 1000 * 60 * 1.5);
          break;

        /* ------------------------------- CASE: SCORE ------------------------------ */
        case "score":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }

          data = await startIplHelper("score");
          break;

        /* ------------------------------- CASE: STOPIPL ------------------------------ */
        case "stopipl":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          stopIplHelper();
          break;

        /* ------------------------------- CASE: HELP ------------------------------ */
        case "help":
          if (blockCommandsInDesc.includes(command)) return;

          reply(commandList(prefix));
          break;

        /* ------------------------------- CASE: SOURCE ------------------------------ */
        case "source":
          if (blockCommandsInDesc.includes(command)) return;

          conn.sendMessage(
            from,
            `*─「 <{PVX}> BOT 」 ─*\n\nhttps://github.com/Shubhamrawat5/whatsapp-bot \n\nGive a star if you like or using this. Many new cool helpful commands will be keep on adding.`,
            MessageType.text,
            {
              quoted: mek,
              detectLinks: true,
            }
          );
          break;

        /* ------------------------------- CASE: STICKER ------------------------------ */
        case "sticker":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }

          // Format should be <prefix>sticker pack <pack_name> author <author_name>
          var packName = "<{PVX}> BOT";
          var authorName = "";

          outputOptions = [
            `-vcodec`,
            `libwebp`,
            `-vf`,
            `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
          ];
          if (args.includes("crop")) {
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

          if ((isMedia && !mek.message.videoMessage) || isTaggedImage) {
            const encmedia = isTaggedImage
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
            const media = await conn.downloadAndSaveMediaMessage(encmedia);
            ran = getRandom(".webp");
            // reply("⌛ Processing image wait... ⏳");
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
            (isMedia && mek.message.videoMessage.seconds > 10) ||
            (isTaggedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds > 10)
          ) {
            reply(
              "❌ ERROR: Only video with length less than 11 seconds are accepted!"
            );
          } else if (
            (isMedia && mek.message.videoMessage.seconds < 11) ||
            (isTaggedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)
          ) {
            const encmedia = isTaggedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
            const media = await conn.downloadAndSaveMediaMessage(encmedia);
            ran = getRandom(".webp");
            // reply("⌛ Processing animation... ⏳");
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

        /* ------------------------------- CASE: DRIVE ------------------------------ */
        // case "drive":
        // if (blockCommandsInDesc.includes(command)) return;

        //   if (!isGroup) {
        //     reply("❌ ERROR: Group command only!");
        //     return;
        //   }
        //   if (args.length === 0) {
        //     reply(`❌ ERROR: Query is empty! \nSend !drive query_name`);
        //     return;
        //   }
        //   let query = args.join(" ");
        //   let respo = await driveQuery(query);
        //   reply(respo);

        //   break;

        /* ------------------------------- CASE: ADD ------------------------------ */
        case "add":
          if (blockCommandsInDesc.includes(command)) return;

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
            reply("_❌ ERROR: Invalid number, include 91 also!_");
          }
          if (get_status == 403) {
            reply("_❌ ERROR: Number has privacy on adding group!_");
          }
          if (get_status == 408) {
            reply("_❌ ERROR: Number has left the group recently!_");
          }
          if (get_status == 409) {
            reply("_❌ ERROR: Number is already in group!_");
          }
          if (get_status == 500) {
            reply("_❌ ERROR: Group is currently full!_");
          }
          if (get_status == 200) {
            reply("_✔ SUCCESS: Number added to group!_");
          }
          break;

        /* ------------------------------- CASE: KICK ------------------------------ */
        case "kick":
        case "ban":
        case "remove":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          if (!isGroupAdmins) {
            reply("❌ ERROR: Admin command!");
            return;
          }
          if (!isBotGroupAdmins) return reply(errors.admin_error);
          if (
            mek.message.extendedTextMessage === undefined ||
            mek.message.extendedTextMessage === null
          )
            return;
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
          // if (groupAdmins.includes(`${mentioned}`) == true) return;
          if (mentioned.length > 1) {
            reply("❌ ERROR: Mention member with command!");
            return;
          } else {
            console.log("#", mentioned);
            conn.groupRemove(from, mentioned);
          }
          break;

        /* ------------------------------- CASE: MUTE ------------------------------ */
        case "mute":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          await conn.groupSettingChange(
            from,
            GroupSettingChange.messageSend,
            true
          );
          break;

        /* ------------------------------- CASE: UNMUTE ------------------------------ */
        case "unmute":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          await conn.groupSettingChange(
            from,
            GroupSettingChange.messageSend,
            false
          );
          break;

        default:
          reply("Send !help for <{PVX}> bot commands list!");
          break;
      }
    } catch (err) {
      console.log(err);
    }
  });
};
main();
