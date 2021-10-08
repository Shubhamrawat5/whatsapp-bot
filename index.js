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
const myNumber = process.env.myNumber;

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
  const { connectToWA } = require("./DB/database");

  const conn = await connectToWA(WAConnection);
  let botNumberJid = conn.user.jid;

  // member left or join
  conn.on("group-participants-update", async (anu) => {
    try {
      const groupMetadata = await conn.groupMetadata(anu.jid);
      let groupDesc = groupMetadata.desc;
      let blockCommandsInDesc = []; //commands to be blocked
      if (groupDesc) {
        let firstLineDesc = groupDesc.split("\n")[0];
        blockCommandsInDesc = firstLineDesc.split(",");
      }

      if (anu.action == "add") {
        let from = anu.jid;
        let botNumberJid = conn.user.jid;
        let numJid = anu.participants[0];
        let num_split = `${numJid.split("@s.whatsapp.net")[0]}`;

        // other than 91 are blocked from joining when description have written in first line -> only91
        if (
          !num_split.startsWith(91) &&
          blockCommandsInDesc.includes("only91")
        ) {
          conn.sendMessage(
            from,
            `*─「 🔥 <{PVX}> BOT 🔥 」─* \n\nOnly 91 numbers are allowed !!!!`,
            MessageType.text
          );
          conn.groupRemove(from, anu.participants);
        }

        if (numJid === botNumberJid) {
          console.log("Bot is add to new group!");
          conn.sendMessage(
            from,
            `*─「 🔥 <{PVX}> BOT 🔥 」─\n\nSEND !help FOR BOT COMMANDS`,
            MessageType.text
          );
        }
        console.log("Joined: ", numJid);
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
        admin_error: "_❌ ERROR: I'm not Admin here!_",
      };

      const isGroup = from.endsWith("@g.us");
      const sender = isGroup ? mek.participant : mek.key.remoteJid;
      const groupMetadata = isGroup ? await conn.groupMetadata(from) : "";
      const groupName = isGroup ? groupMetadata.subject : "";
      const groupDesc = isGroup ? groupMetadata.desc : "";
      const groupMembers = isGroup ? groupMetadata.participants : "";
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
      const isBotGroupAdmins = groupAdmins.includes(botNumberJid) || false;
      const isGroupAdmins = groupAdmins.includes(sender) || false;

      const isMedia = type === "imageMessage" || type === "videoMessage"; //image or video
      const isTaggedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isTaggedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isTaggedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");

      // Display every command info
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

      const sendText = (message) => {
        conn.sendMessage(from, message, MessageType.text);
      };

      // send every command info to my whatsapp
      if (myNumber) {
        let { countToday } = require("./DB/countDB");
        let count = await countToday();
        await conn.sendMessage(
          myNumber + "@s.whatsapp.net",
          `${count}) [${prefix}${command}] by [${
            sender.split("@")[0]
          }]\n      in [${groupName}]`,
          MessageType.text
        );
      }

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
          sendText(response.message);
          reply("✔️ Match over! Stopping IPL scores for this group !");
          console.log("Match over! Stopping IPL scores for " + groupName);
          clearInterval(iplsetIntervalGroups[groupName]);
          iplStartedGroups[groupName] = false;
          return false;
        } else if (commandName === "startipl" && response.info === "IO") {
          sendText(response.message);
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
        sendText(response.message);
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

        /* ------------------------------- CASE: ALIVE ------------------------------ */
        case "alive":
          reply(`*─「 <{PVX}> BOT 」 ─*\n\nYES! BOT IS ALIVE !!!`);
          break;

        /* ------------------------------- CASE: 91only ------------------------------ */
        case "91only":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }

          reply(
            `*─「 <{PVX}> BOT 」 ─*\n\n_To instant ban all the numbers other than 91 when added to group_\n\n_Give text "only91" (without quotes) in first line of group description_\n\n_If other commands is to be added in description also like of matchID or blocked commands then add in starting of group description, like_\n82621,score,quote,only91`
          );
          break;

        /* ------------------------------- CASE: BLOCK ------------------------------ */
        case "block":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }

          reply(
            `*─「 <{PVX}> BOT 」 ─*\n\n_Give command name (with comma seperated and without spaces) to be blocked for particular group in first line of group description, like_\nscore,add,quote\n\n_If matchId is to be added in description also then add in starting, like_\n82621,score,add,quote`
          );
          break;

        /* ------------------------------- CASE: BUTTON ------------------------------ */
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
          sendText(news);
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
            `*─「 <{PVX}> BOT 」 ─*\n\n_Message t.me/KryptonPVX in telegram to report any bug or to give new ideas/features for this bot!_ `
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
          }, 1000 * 60); //1 min
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

        /* ------------------------------- CASE: STOPIPL ------------------------------  */
        case "stopipl":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }

          if (iplStartedGroups[groupName]) stopIplHelper();
          else reply("❌ ERROR: IPL scores was never started for this group!");
          break;

        /* ------------------------------- CASE: SCORECARD ------------------------------  */
        case "scorecard":
          if (blockCommandsInDesc.includes(command)) return;

          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
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

          let { getScoreCard } = require("./functions/scoreCardIPL");
          let scoreCardMessage = await getScoreCard(groupDesc.slice(0, 5));
          if (scoreCardMessage) sendText(scoreCardMessage);
          else
            reply(`*❌ ERROR:* 
- Group description starting is "${matchIdGroups[groupName]}"
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !

# If you've put correct match ID in description starting and still facing this error then contact developer by !dev`);

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
          let packName = "<{PVX}> BOT 🤖";
          let authorName = "";
          let ran = getRandom(".webp");

          let outputOptions = [
            `-vcodec`,
            `libwebp`,
            `-vf`,
            `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`,
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
          async function buildSticker(media, ran) {
            const webpWithMetadata = await WSF.setMetadata(
              packName,
              authorName,
              ran
            );
            await conn.sendMessage(from, webpWithMetadata, MessageType.sticker);
            fs.unlinkSync(media);
            fs.unlinkSync(ran);
          }

          if ((isMedia && !mek.message.videoMessage) || isTaggedImage) {
            //IMAGE TO STICKER
            const encmedia = isTaggedImage
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
            const media = await conn.downloadAndSaveMediaMessage(encmedia);
            // reply("⌛ Processing image wait... ⏳");
            console.log("MEDIA", media);
            console.log("RAN", ran);
            await ffmpeg(`./${media}`)
              .input(media)
              .on("error", function (err) {
                fs.unlinkSync(media);
                //unlinkSync remove the given file
                console.log(`Error : ${err}`);
                reply("_❌ ERROR: Failed to convert image into sticker!_");
              })
              .on("end", function () {
                buildSticker(media, ran);
              })
              .addOutputOptions(outputOptions)
              .toFormat("webp")
              .save(ran);
          } else if (
            (isMedia && mek.message.videoMessage.seconds > 10) ||
            (isTaggedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds > 10)
          ) {
            //VIDEO/GIF TO STICKER, BUT INVALID LENGTH
            reply(
              "❌ ERROR: Only video with length less than 11 seconds are accepted!"
            );
          } else if (
            (isMedia && mek.message.videoMessage.seconds < 11) ||
            (isTaggedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)
          ) {
            //VIDEO/GIF TO STICKER
            const encmedia = isTaggedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
            const media = await conn.downloadAndSaveMediaMessage(encmedia);
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
                buildSticker(media, ran);
              })
              .addOutputOptions(outputOptions)
              .toFormat("webp")
              .save(ran);
          } else {
            reply(
              "_❌ ERROR: Give a media (image/gif/video) to convert into sticker! ❌_"
            );
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
          if (!isBotGroupAdmins) {
            reply("❌ ERROR: I'm not Admin here!");
            return;
          }

          let num;
          if (mek.message.extendedTextMessage) {
            //member's message is tagged to add
            num = mek.message.extendedTextMessage.contextInfo.participant;
          } else {
            //number is given like !add 919557---82
            if (args.length === 0) {
              reply("❌ ERROR: Give number to add!");
              return;
            }
            num = `${args.join("").replace(/ |-|\(|\)/g, "")}@s.whatsapp.net`; //remove spaces , ( , ) and -
            if (num.startsWith("+")) {
              //remove + sign from starting if given
              num = num.slice(1);
            }
          }
          const response = await conn.groupAdd(from, [num]);
          let number = `${num.split("@s.whatsapp.net")[0]}`;
          let get_status = response[`${number}@c.us`];
          if (get_status == 400) {
            reply("_❌ ERROR: Invalid number, include 91 also!_");
          } else if (get_status == 403) {
            reply("_❌ ERROR: Number has privacy on adding group!_");
          } else if (get_status == 408) {
            reply("_❌ ERROR: Number has left the group recently!_");
          } else if (get_status == 409) {
            reply("_❌ ERROR: Number is already in group!_");
          } else if (get_status == 500) {
            reply("_❌ ERROR: Group is currently full!_");
          } else if (get_status == 200) {
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
          if (!isBotGroupAdmins) {
            reply("❌ ERROR: I'm not Admin here!");
            return;
          }
          if (!mek.message.extendedTextMessage) {
            reply("❌ ERROR: Tag someone!");
            return;
          }

          /*
          1) when !ban OR !ban xyz
          { conversation: '!ban' }

          2) when !ban tagMember
          {
            extendedTextMessage: {
              text: '!ban @91885---7364',
              previewType: 'NONE',
              contextInfo: { mentionedJid: [Array] }
            }
          }

          3) when !ban tagMessage
          {
            extendedTextMessage: {
              text: '!ban',
              previewType: 'NONE',
              contextInfo: {
                stanzaId: '3C2B0F3CE0-----D970A0C648B4BC3',
                participant: '919675---959@s.whatsapp.net',
                quotedMessage: [Object]
              }
            }
          }
          */
          let mentioned =
            mek.message.extendedTextMessage.contextInfo.mentionedJid;
          if (mentioned) {
            //when member are mentioned with command
            if (mentioned.length === 1) {
              if (groupAdmins.includes(mentioned[0])) {
                //if admin then don't remove
                reply("❌ ERROR: Cannot remove admin!");
                return;
              }
              conn.groupRemove(from, mentioned);
              reply("_✔ SUCCESS: Number removed from group!_");
            } else {
              //if multiple members are tagged
              reply("❌ ERROR: Mention only 1 member!");
            }
          } else {
            //when message is tagged with command
            let taggedMessageUser = [
              mek.message.extendedTextMessage.contextInfo.participant,
            ];
            if (groupAdmins.includes(taggedMessageUser[0])) {
              //if admin then don't remove
              reply("❌ ERROR: Cannot remove admin!");
              return;
            }
            conn.groupRemove(from, taggedMessageUser);
            reply("_✔ SUCCESS: Number removed from group!_");
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
          reply("Send !help for <{PVX}> BOT commands list!");
          break;
      }
    } catch (err) {
      console.log(err);
    }
  });
};
main();
