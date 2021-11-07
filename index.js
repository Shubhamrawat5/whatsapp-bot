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
const { getCricketScore } = require("./functions/cricket");
const { getScoreCard } = require("./functions/cricketScoreCard");
const { button } = require("./functions/button");
const { commandList } = require("./functions/list");
const { commandListOwner } = require("./functions/listOwner");
const { countToday } = require("./DB/countDB");
const { dropAuth } = require("./DB/dropauthDB");
const { getNews } = require("./functions/news");
const { getInstaVideo } = require("./functions/insta");
const { getFbVideo } = require("./functions/fb");
const { getGender } = require("./functions/gender");
const { getQuote } = require("./functions/quote");
const { takeGroupbackup } = require("./DB/backupDB");
const {
  getVotingData,
  setVotingData,
  stopVotingData,
} = require("./DB/VotingDB");

const ytdl = require("ytdl-core");
const AdmZip = require("adm-zip");
let stickertg = false;
let setIntervaltg;

// BASIC SETTINGS
prefix = "!";
require("dotenv").config();
const myNumber = process.env.myNumber;
const clientId = process.env.clientID;

//CRICKET variables
let matchIdGroups = {}; //to store every group name with its match ID
let cricSetIntervalGroups = {}; //to store every group name with its setInterval value so that it can be stopped
let cricStartedGroups = {}; //to store every group name with boolean value to know if cricket score is already started or not

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
  const { connectToWA } = clientId
    ? require("./DB/localdatabase")
    : require("./DB/authDB");
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
          console.log("Bot is added to new group!");
          conn.sendMessage(
            from,
            `*─「 🔥 <{PVX}> BOT 🔥 」─* \n\nSEND ${prefix}help FOR BOT COMMANDS`,
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
      // if (mek.key.fromMe) return;
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
      let body =
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

      if (body[1] == " ") body = body[0] + body.slice(2); //remove space when space btw prefix and commandName like "! help"
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
        admin_error: "❌ I'm not Admin here!",
      };

      const isGroup = from.endsWith("@g.us");
      const chat_id = mek.key.remoteJid;
      // console.log(mek);
      let sender = isGroup ? mek.participant : mek.key.remoteJid;
      if (mek.key.fromMe) sender = botNumberJid;
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
      const isTaggedDocument =
        type === "extendedTextMessage" && content.includes("documentMessage");

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

      // send every command info to my whatsapp, won't work when i send something for bot
      if (myNumber && myNumber + "@s.whatsapp.net" !== sender) {
        let count = await countToday();
        // await conn.sendMessage(
        //   myNumber + "@s.whatsapp.net",
        //   `${count}) [${prefix}${command}] by ${
        //     sender.split("@")[0]
        //   }\n      [${groupName}]`,
        //   MessageType.text
        // );
        await conn.sendMessage(
          myNumber + "@s.whatsapp.net",
          `${count}) [${prefix}${command}] [${groupName}]`,
          MessageType.text
        );
      }

      /* -------------------------- CRICKET HELPING FUNCTIONS ------------------------- */
      const stopcHelper = () => {
        reply("✔️ Stopping Cricket scores for this group !");
        console.log("Stopping Cricket scores for " + groupName);
        clearInterval(cricSetIntervalGroups[groupName]);
        cricStartedGroups[groupName] = false;
      };

      //return false when stopped in middle. return true when run fully
      const startcHelper = async (commandName, isFromSetInterval = false) => {
        if (!groupDesc) {
          conn.sendMessage(
            from,
            `❌
- Group description is empty.
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !

# If you've put correct match ID in description starting and still facing this error then contact developer by !dev`,
            MessageType.text,
            {
              quoted: mek,
              detectLinks: false,
            }
          );
          return false;
        }

        matchIdGroups[groupName] = groupDesc.slice(0, 5);
        if (commandName === "startc" && !isFromSetInterval) {
          reply(
            "✔️ Starting Cricket scores for matchID: " +
              matchIdGroups[groupName] +
              " (taken from description)"
          );
        }

        let response = await getCricketScore(
          matchIdGroups[groupName],
          commandName
        );

        //response.info have "MO" only when command is startc
        if (commandName === "startc" && response.info === "MO") {
          sendText(response.message);
          reply("✔️ Match over! Stopping Cricket scores for this group !");
          console.log("Match over! Stopping Cricket scores for " + groupName);
          clearInterval(cricSetIntervalGroups[groupName]);
          cricStartedGroups[groupName] = false;
          return false;
        } else if (commandName === "startc" && response.info === "IO") {
          sendText(response.message);
          reply(
            "✔️ Inning over! Open again live scores later when 2nd inning will start by !startc"
          );
          stopcHelper();
          return false;
        } else if (response.info === "ER") {
          conn.sendMessage(
            from,
            `❌
- Group description starting is "${matchIdGroups[groupName]}"
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !

# If you've put correct match ID in description starting and still facing this error then contact developer by !dev`,
            MessageType.text,
            {
              quoted: mek,
              detectLinks: false,
            }
          );
          return false;
        }
        sendText(response.message);
        return true;
      };

      // give command name with comma seperated to be blocked for particular group in first line of description like (82132 is matchid for cricket scores)
      //82132,score,add,remove
      let blockCommandsInDesc = []; //commands to be blocked
      if (groupDesc) {
        let firstLineDesc = groupDesc.split("\n")[0];
        blockCommandsInDesc = firstLineDesc.split(",");
      }

      if (blockCommandsInDesc.includes(command)) {
        reply("❌ Command blocked for this group!");
        return;
      }

      /* ------------------------------------ - ----------------------------------- */
      /* -------------------------------- COMMANDS -------------------------------- */
      /* ------------------------------------ - ----------------------------------- */
      let votingResult;
      switch (command) {
        /* ------------------------------- CASE: HELP ------------------------------ */
        case "help":
          reply(commandList(prefix));
          break;

        /* ------------------------------- CASE: helpr ------------------------------ */
        case "helpr":
          reply(commandListOwner(prefix));
          break;

        /* ------------------------------- CASE: PVXSTATS ------------------------------ */
        case "pvxstats":
          if (myNumber + "@s.whatsapp.net" !== sender) {
            reply(`❌ Owner only command for avoiding spam!`);
            return;
          }
          let groups = conn.chats
            .all()
            .filter(
              (v) =>
                v.jid.endsWith("g.us") &&
                !v.read_only &&
                v.message &&
                !v.announce &&
                v.name.startsWith("<{PVX}>")
            )
            .map((v) => {
              return { name: v.name, jid: v.jid };
            });
          // console.log(groups);

          let pvxMsg = "*📛 PVX STATS 📛*";
          let totalMem = 0;
          let uniqueMem = new Set();
          let temppvxMsg = "";
          for (let group of groups) {
            const mdpvx = await conn.groupMetadata(group.jid);
            // console.log(mdpvx);
            totalMem += mdpvx.participants.length;
            temppvxMsg += `\n\n*${mdpvx.subject}*\nMembers: ${mdpvx.participants.length}`;
            for (let parti of mdpvx.participants) {
              uniqueMem.add(parti.jid);
            }
          }

          pvxMsg += `\nTotal Groups: ${groups.length}\nTotal Members: ${totalMem}\nUnique Members: ${uniqueMem.size}`;
          pvxMsg += temppvxMsg;
          reply(pvxMsg);
          break;

        /* ------------------------------- CASE: TEST ------------------------------ */
        case "test":
          if (myNumber + "@s.whatsapp.net" !== sender) {
            reply(`❌ Command only for developer for bot testing purpose!`);
            return;
          }
          if (args.length === 0) {
            reply(`❌ EMPTY!`);
          }

          let resultTest = eval(args[0]);
          if (typeof resultTest === "object") reply(JSON.stringify(resultTest));
          else reply(resultTest.toString());
          break;

        /* ------------------------------- CASE: tagall ------------------------------ */
        case "tagall":
          if (![myNumber + "@s.whatsapp.net", botNumberJid].includes(sender)) {
            reply(`❌ Owner only command for avoiding spam!`);
            return;
          }
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }

          let jids = [];
          let mesaj = "ALL: ";
          if (
            mek.message.extendedTextMessage &&
            mek.message.extendedTextMessage.contextInfo.quotedMessage
              .conversation
          ) {
            mesaj +=
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .conversation + "\n\n";
          } else {
            mesaj += args.length ? args.join(" ") + "\n\n" : "";
          }

          for (let i of groupMembers) {
            mesaj += "@" + i.id.split("@")[0] + " ";
            jids.push(i.id.replace("c.us", "s.whatsapp.net"));
          }
          await conn.sendMessage(from, mesaj, MessageType.extendedText, {
            contextInfo: { mentionedJid: jids },
            quoted: mek,
          });

          break;

        /* ------------------------------- CASE: DELETE ------------------------------ */
        case "delete":
        case "d":
          try {
            if (!mek.message.extendedTextMessage) {
              reply(`❌ Tag message of bot to delete.`);
              return;
            }
            if (
              botNumberJid ==
              mek.message.extendedTextMessage.contextInfo.participant
            ) {
              const chatJid = mek.key.remoteJid;
              const chatId =
                mek.message.extendedTextMessage.contextInfo.stanzaId;
              await conn.deleteMessage(chatJid, {
                id: chatId,
                remoteJid: chatJid,
                fromMe: true,
              });
            } else {
              reply(`❌ Tag message of bot to delete.`);
            }
          } catch (err) {
            console.log(err);
            reply(`❌ Error!`);
          }
          break;

        /* ------------------------------- CASE: DELETEAUTH ------------------------------ */
        case "deleteauth":
          if (myNumber + "@s.whatsapp.net" !== sender) {
            reply(`❌ Command only for owner!`);
            return;
          }
          try {
            await dropAuth();
            reply(`✔ auth data deleted!`);
          } catch (err) {
            console.log(err);
            reply(`❌ Error!`);
          }
          break;

        /* ------------------------------- CASE: TG sticker ------------------------------ */
        case "stg":
          if (myNumber + "@s.whatsapp.net" !== sender) {
            reply(`❌ Owner only command for avoiding spam!`);
            return;
          }
          if (!stickertg) {
            reply(`❌ tg stickers download is not started!`);
            return;
          }

          clearInterval(setIntervaltg);
          stickertg = false;
          reply(`✔ Stopped tg stickers download!`);

          break;

        case "tg":
          if (myNumber + "@s.whatsapp.net" !== sender) {
            reply(`❌ Owner only command for avoiding spam!`);
            return;
          }
          if (!isTaggedDocument) {
            reply(`❌ Send zip document file!`);
            return;
          }
          if (stickertg) {
            reply(`❌ Another process is going on. wait till it finish!`);
            return;
          }
          try {
            stickertg = true;
            const encmediatg = JSON.parse(
              JSON.stringify(mek).replace("quotedM", "m")
            ).message.extendedTextMessage.contextInfo;

            console.log("downloading...");
            const mediatg = await conn.downloadAndSaveMediaMessage(encmediatg);
            console.log("downloaded", mediatg);

            // reading zip
            let zip = new AdmZip(`./${mediatg}`);
            // extracts everything
            zip.extractAllTo(`./`, true);
            let zipEntries = zip.getEntries(); // an array of ZipEntry records

            // let filestg = fs.readdirSync(dirNametg);
            let stickerCounttg = zipEntries.length;
            console.log("extracted: files " + stickerCounttg);

            reply(`✔ Sending all ${stickerCounttg} stickers`);
            let itg = -1;
            setIntervaltg = setInterval(async () => {
              itg += 1;

              //last file
              if (itg >= stickerCounttg - 1) {
                stickertg = false;
                clearInterval(setIntervaltg);
                reply(`✔ Finished!`);
              }
              console.log("Sending sticker ", itg);
              if (zipEntries[itg].entryName.endsWith(".webp")) {
                let filepath = `${__dirname}`;
                //add slash of not present
                filepath += zipEntries[itg].entryName.startsWith("/")
                  ? ""
                  : "/";
                filepath += `${zipEntries[itg].entryName}`;

                //"<{PVX}> BOT 🤖"
                //"www.pvxfamily.tech"
                const webpWithMetadatatg = await WSF.setMetadata(
                  "",
                  "https://pvxfamily.tech",
                  filepath
                );
                await conn.sendMessage(
                  from,
                  webpWithMetadatatg,
                  MessageType.sticker
                );
              }
            }, 0);
          } catch (err) {
            console.log(err);
            reply(`❌ Some error came!`);
            stickertg = false;
          }
          break;

        /* ------------------------------- CASE: groupbackup ------------------------------ */
        case "groupbackup":
          if (myNumber + "@s.whatsapp.net" !== sender) {
            reply(`❌ Command only for owner!`);
            return;
          }
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }

          let responseGB = await takeGroupbackup(
            groupName,
            groupDesc,
            groupMetadata.participants
          );
          if (responseGB) reply(`✔ Group backup taken!`);
          else reply(`❌ There is some problem!`);
          break;

        /* ------------------------------- CASE: ALIVE ------------------------------ */
        case "alive":
        case "a":
          reply(`*─「 <{PVX}> BOT 」 ─*\n\nYES! BOT IS ALIVE !!!`);
          break;

        /* ------------------------------- CASE: 91only ------------------------------ */
        case "91only":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }

          reply(
            `*─「 <{PVX}> BOT 」 ─*\n\n_To instant ban all the numbers other than 91 when added to group_\n\n_Give text "only91" (without quotes) in first line of group description_\n\n_If other commands is to be added in description also like of matchID or blocked commands then add in starting of group description, like_\n82621,score,quote,only91`
          );
          break;

        /* ------------------------------- CASE: VOTE ------------------------------ */
        case "startvote":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(
              `❌ Give some values seperated with # to vote on like ${prefix}startvote #title #name1 #name2 #name3`
            );
            return;
          }
          votingResult = await getVotingData(chat_id);
          if (votingResult.is_started) {
            reply(
              `❌ Voting already going on, Stop by ${prefix}stopvote command`
            );
            return;
          }
          // let voteChoices = body.trim().replace(/ +/, ",").split(/,/).slice(1);
          let voteList = body
            .trim()
            .replace(/ +/, ",")
            .split(",")[1]
            .split("#");
          let voteTitle = voteList[1].trim();
          let voteChoices = voteList.slice(2);

          if (voteChoices.length < 2) {
            reply("❌ Give more than 1 voting choices!");
            return;
          }

          let voteListCount = new Array(voteChoices.length).fill(0); //[0,0,0]
          let voteListMember = [];
          for (let i = 0; i < voteChoices.length; ++i) voteListMember.push([]);

          await setVotingData(
            chat_id,
            true,
            sender,
            voteTitle,
            voteChoices,
            voteListCount,
            voteListMember,
            []
          );
          votingResult = await getVotingData(chat_id);

          let voteMsg = `*Voting started!*\nsend "${prefix}vote number" to vote\n\n*🗣️ ${voteTitle}*`;

          votingResult.choices.forEach((name, index) => {
            voteMsg += `\n${index + 1} for [${name.trim()}]`;
          });

          voteMsg += `\n\n_send ${prefix}checkvote or ${prefix}cv to see current status and ${prefix}stopvote to stop voting and see the result._`;
          reply(voteMsg);

          break;

        case "vote":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          votingResult = await getVotingData(chat_id);
          if (!votingResult.is_started) {
            reply(
              `❌ Voting is not started here, Start by \n${prefix}startvote #title #name1 #name2 #name3`
            );
            return;
          }
          if (votingResult.voted_members.includes(sender)) {
            reply("❌ You already voted.");
            return;
          }
          if (args.length === 0) {
            reply("❌ Give value to vote on!");
            return;
          }

          let voteNumber = Math.floor(Number(args[0]));
          if (isNaN(voteNumber)) {
            reply("❌ Give a number!");
            return;
          }

          if (voteNumber > votingResult.count.length || voteNumber < 1) {
            reply("❌ Number out of range!");
            return;
          }

          votingResult.count[voteNumber - 1] += 1; //increase vote

          let user = conn.contacts[sender];
          let username = user.notify || user.vname || "unknown";
          votingResult.members_voted_for[voteNumber - 1].push(username); // save who voted

          votingResult.voted_members.push(sender); //member voted

          await setVotingData(
            chat_id,
            true,
            votingResult.started_by,
            votingResult.title,
            votingResult.choices,
            votingResult.count,
            votingResult.members_voted_for,
            votingResult.voted_members
          );

          reply(
            `_✔ Voted for [${votingResult.choices[voteNumber - 1].trim()}]_`
          );
          break;

        case "stopvote":
        case "checkvote":
        case "cv":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }

          votingResult = await getVotingData(chat_id);
          if (!votingResult.is_started) {
            reply(
              `❌ Voting is not started here, Start by \n${prefix}startvote #title #name1 #name2 #name3`
            );
            return;
          }

          let resultVoteMsg = "";
          if (command === "stopvote") {
            if (votingResult.started_by === sender || isGroupAdmins) {
              await stopVotingData(chat_id);
              resultVoteMsg += `*Voting Result:*\n🗣️ ${votingResult.title}`;
            } else {
              reply(
                "❌ Only admin or that member who started the voting, can stop current voting!"
              );
              return;
            }
          } else {
            resultVoteMsg += `send "${prefix}vote number" to vote\n\n*🗣️ ${votingResult.title}*`;
            votingResult.choices.forEach((name, index) => {
              resultVoteMsg += `\n${index + 1} for [${name.trim()}]`;
            });
            resultVoteMsg += `\n\n*Voting Current Status:*`;
          }

          let totalVoted = votingResult.voted_members.length;

          votingResult.choices.forEach((name, index) => {
            resultVoteMsg += `\n======= ${(
              (votingResult.count[index] / totalVoted) *
              100
            ).toFixed()}% =======\n📛 *[${name.trim()}] : ${
              votingResult.count[index]
            }*\n`;

            //add voted members username
            votingResult.members_voted_for[index].forEach((mem) => {
              resultVoteMsg += `_${mem},_ `;
            });
          });
          sendText(resultVoteMsg);
          break;

        /* ------------------------------- CASE: VOTECOMMAND ------------------------------ */
        case "votecommand":
        case "vc":
          reply(`_*🗣️ VOTING COMMANDS:*_

📛 *${prefix}startvote #title #name1 #name2..*
    - _Start voting with seperated values with #_

📛 *${prefix}vote number*
    - _To vote for particular number!_

📛 *${prefix}checkvote*
    - _Status of current ongoing voting!_
    Alias: ${prefix}cv
    
📛 *${prefix}stopvote*
    - _Stop voting and see final result!_`);
          break;

        /* ------------------------------- CASE: BLOCK ------------------------------ */
        case "block":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }

          reply(
            `*─「 <{PVX}> BOT 」 ─*\n\n_# Give command name (with comma seperated and without spaces) to be blocked in *first line of group description* , like:_\nscore,add,quote\n\n_# If cricket matchId is to be added in description also then give matchId in starting always, like_\n82621,score,add,quote`
          );
          break;

        /* ------------------------------- CASE: BTN ------------------------------ */
        case "btn":
          //not working yet, maybe for whatsapp business
          await conn.sendMessage(from, button, MessageType.listMessage);
          break;

        /* ------------------------------- CASE: PVXLINK ------------------------------ */
        case "pvxlink":
          reply(
            "*─「 🔥 JOIN <{PVX}> FAMILY 🔥 」─*\n\n>> https://pvxfamily.tech <<"
          );
          break;

        /* ------------------------------- CASE: SONG ------------------------------ */
        case "song":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(`❌ Query is empty! \nSend ${prefix}song query`);
            return;
          }
          try {
            let randomName = getRandom(".mp3");
            let query = args.join("%20");
            let response = await downloadSong(randomName, query);
            if (response == "NOT") {
              reply(
                `❌ Song not found!\nTry to put correct spelling of song along with singer name.`
              );
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
            reply(`❌ There is some problem.`);
          }
          break;

        /* ------------------------------- CASE: YT ------------------------------ */
        case "yt":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}yt url`);
            return;
          }
          try {
            let urlYt = args[0];
            let infoYt = await ytdl.getInfo(urlYt);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp4");
            const stream = ytdl(urlYt, {
              filter: (info) => info.itag == 22 || info.itag == 18,
            }).pipe(fs.createWriteStream(`./${randomName}`));
            //22 - 1080p/720p and 18 - 360p
            console.log("Video downloading !", urlYt);
            reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
              stream.on("error", reject);
              stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 30) {
              await conn.sendMessage(
                from,
                fs.readFileSync(`./${randomName}`),
                MessageType.video,
                {
                  mimetype: Mimetype.mp4,
                  caption: `*─「 <{PVX}> BOT 」 ─*\n\n${titleYt}`,
                  quoted: mek,
                }
              );
            } else {
              reply(`❌ File size bigger than 30mb.`);
            }

            fs.unlinkSync(`./${randomName}`);
          } catch (err) {
            console.log(err);
            reply(`❌ There is some problem.`);
          }
          break;

        /* ----------------------------------- FB ----------------------------------- */
        case "fb":
          //not working in heroku
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}fb url`);
            return;
          }
          let urlFb = args[0];
          let randomName = getRandom(".mp4");
          try {
            let { videoDirectLinkFb } = await getFbVideo(urlFb);
            if (videoDirectLinkFb) {
              await saveInstaVideo(randomName, videoDirectLinkFb);
              console.log(`video saved-> ./${randomName}`);
              await conn.sendMessage(
                from,
                fs.readFileSync(`./${randomName}`), // can send mp3, mp4, & ogg
                MessageType.video,
                { mimetype: Mimetype.mp4, quoted: mek }
              );
              fs.unlinkSync(`./${randomName}`);
            } else {
              //TODO: throw err
              reply(`❌ There is some problem!`);
            }
          } catch (err) {
            console.log(err);
            reply(`❌ There is some problem.`);
          }
          break;

        /* ------------------------------- CASE: INSTA ------------------------------ */
        case "insta":
        case "i":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}insta url`);
            return;
          }
          let urlInsta = args[0];

          if (
            !(
              urlInsta.includes("instagram.com/p/") ||
              urlInsta.includes("instagram.com/reel/") ||
              urlInsta.includes("instagram.com/tv/")
            )
          ) {
            reply(
              `❌ Wrong URL! Only Instagram posted videos, tv and reels can be downloaded.`
            );
            return;
          }

          try {
            // console.log("Trying saving", urlInsta);
            let { imgDirectLink, videoDirectLink } = await getInstaVideo(
              urlInsta
            );
            if (videoDirectLink) {
              let randomName = getRandom(".mp4");
              await saveInstaVideo(randomName, videoDirectLink);
              let stats = fs.statSync(`./${randomName}`);
              let fileSizeInBytes = stats.size;
              // Convert the file size to megabytes (optional)
              let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
              console.log("Video downloaded ! Size: " + fileSizeInMegabytes);

              //  { caption: "hello there!", mimetype: Mimetype.mp4 }
              // quoted: mek for tagged
              if (fileSizeInMegabytes <= 30) {
                await conn.sendMessage(
                  from,
                  fs.readFileSync(`./${randomName}`), // can send mp3, mp4, & ogg
                  MessageType.video,
                  {
                    mimetype: Mimetype.mp4,
                    caption: "*─「 <{PVX}> BOT 」 ─*",
                    quoted: mek,
                  }
                );
              } else {
                reply(`❌ File size bigger than 30mb.`);
              }
              fs.unlinkSync(`./${randomName}`);
            } else if (imgDirectLink) {
              await conn.sendMessage(
                from,
                { url: imgDirectLink },
                MessageType.image,
                { caption: "*─「 <{PVX}> BOT 」 ─*", quoted: mek }
              );
            } else {
              reply(`❌ There is some problem!`);
            }
          } catch (err) {
            console.log(err);
            reply(`❌ There is some problem.`);
          }
          break;

        /* ------------------------------- CASE: TECHNEWS ------------------------------ */
        case "technews":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          let news = await getNews();
          sendText(news);
          break;

        /* ------------------------------- CASE: QUOTES ------------------------------ */
        case "quote":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          let quote = await getQuote();
          reply(quote);
          break;

        /* ------------------------------- CASE: GENDER ------------------------------ */
        case "gender":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(`❌ Name is not given! \nSend ${prefix}gender firstname`);
            return;
          }
          let namePerson = args[0];
          if (namePerson.includes("@")) {
            reply(`❌ Don't tag! \nSend ${prefix}gender firstname`);
            return;
          }
          let genderText = await getGender(namePerson);
          reply(genderText);
          break;

        /* ------------------------------- CASE: TEXT ------------------------------ */
        case "text":
          if (!isGroup) {
            reply("❌ Group command only!");
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
            reply("❌ Give image having text!");
          }
          break;

        /* ------------------------------- CASE: DEV ------------------------------ */
        case "dev":
          reply(
            `*─「 <{PVX}> BOT 」 ─*\n\n_Message https://t.me/KryptonPVX in telegram to report any bug or to give new ideas/features for this bot!_ `
          );
          break;

        /* ------------------------------- CASE: startc ------------------------------ */
        case "startc":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (cricStartedGroups[groupName]) {
            reply("❌ CRICKET SCORES already started for this group!");
            return;
          }

          let respCric = await startcHelper("startc");
          if (!respCric) return;

          cricStartedGroups[groupName] = true;
          cricSetIntervalGroups[groupName] = setInterval(async () => {
            respCric = await startcHelper("startc", true);
            if (!respCric) return;
          }, 1000 * 60); //1 min
          break;

        /* ------------------------------- CASE: SCORE ------------------------------ */
        case "score":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }

          await startcHelper("score");
          break;

        /* ------------------------------- CASE: stopc ------------------------------  */
        case "stopc":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }

          if (cricStartedGroups[groupName]) stopcHelper();
          else reply("❌ CRICKET scores was never started for this group!");
          break;

        /* ------------------------------- CASE: SCORECARD ------------------------------  */
        case "scorecard":
        case "scoreboard":
        case "sc":
        case "sb":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (!groupDesc) {
            conn.sendMessage(
              from,
              `❌ 
- Group description is empty.
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !
  
  # If you've put correct match ID in description starting and still facing this error then contact developer by !dev`,
              MessageType.text,
              {
                quoted: mek,
                detectLinks: false,
              }
            );
            return false;
          }

          let scoreCardMessage = await getScoreCard(groupDesc.slice(0, 5));
          if (scoreCardMessage) sendText(scoreCardMessage);
          else
            conn.sendMessage(
              from,
              `❌
- Group description starting is "${matchIdGroups[groupName]}"
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !

# If you've put correct match ID in description starting and still facing this error then contact developer by !dev`,
              MessageType.text,
              {
                quoted: mek,
                detectLinks: false,
              }
            );

          break;
        /* ------------------------------- CASE: CRICKETCOMMAND ------------------------------ */
        case "cricketcommand":
        case "cc":
          conn.sendMessage(
            from,
            `_*🏏  CRICKET COMMANDS:*_

- Put matchID in starting of group description.
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !

📛 *${prefix}score*
    - _current score of match!_
📛 *${prefix}scorecard*
    - _current scorecard of players!_
    Alias: ${prefix}sc ${prefix}sb
📛 *${prefix}startc*
    - _start match live score every 1 min!_
📛 *${prefix}stopc*
    - _Stop match live score!_`,
            MessageType.text,
            {
              quoted: mek,
              detectLinks: false,
            }
          );
          break;

        /* ------------------------------- CASE: SOURCE ------------------------------ */
        case "source":
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
        case "s":
          if (!isGroup) {
            reply("❌ Group command only!");
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
          if (args.includes("crop") || args.includes("c")) {
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
            // console.log("MEDIA", media); // MEDIA undefined.jpeg
            // console.log("RAN", ran); //RAN 1126.webp

            await ffmpeg(`./${media}`)
              .input(media)
              .on("error", function (err) {
                fs.unlinkSync(media);
                //unlinkSync remove the given file
                console.log(`Error : ${err}`);
                reply("❌ Failed to convert image into sticker!");
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
              "❌ Only video with length less than 11 seconds are accepted!"
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
                reply(`❌ Failed to convert ${mediaType} to sticker! ❌`);
              })
              .on("end", function () {
                buildSticker(media, ran);
              })
              .addOutputOptions(outputOptions)
              .toFormat("webp")
              .save(ran);
          } else {
            reply(
              "_❌ Give a media (image/gif/video) to convert into sticker! ❌_"
            );
          }
          break;

        /* ------------------------------- CASE: DRIVE ------------------------------ */
        // case "drive":
        // if (blockCommandsInDesc.includes(command)) {            reply("❌ Command blocked for this group!");   return;}

        //   if (!isGroup) {
        //     reply("❌ Group command only!");
        //     return;
        //   }
        //   if (args.length === 0) {
        //     reply(`❌ Query is empty! \nSend ${prefix}drive query_name`);
        //     return;
        //   }
        //   let query = args.join(" ");
        //   let respo = await driveQuery(query);
        //   reply(respo);

        //   break;

        /* ------------------------------- CASE: ADD ------------------------------ */
        case "add":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (!isGroupAdmins) {
            reply("❌ Admin command!");
            return;
          }
          if (!isBotGroupAdmins) {
            reply("❌ I'm not Admin here!");
            return;
          }

          let num;
          if (mek.message.extendedTextMessage) {
            //member's message is tagged to add
            num = mek.message.extendedTextMessage.contextInfo.participant;
          } else {
            //number is given like !add 919557---82
            if (args.length === 0) {
              reply("❌ Give number to add!");
              return;
            }
            num = `${args.join("").replace(/ |-|\(|\)/g, "")}@s.whatsapp.net`; //remove spaces , ( , ) and -
            if (num.startsWith("+")) {
              //remove + sign from starting if given
              num = num.slice(1);
            }
          }
          try {
            const response = await conn.groupAdd(from, [num]);
            console.log("RES", response);

            let number = `${num.split("@s.whatsapp.net")[0]}`;
            let get_status = response[`${number}@c.us`];
            if (get_status == 400) {
              reply("_❌ Invalid number, include country code also!_");
            } else if (get_status == 403) {
              reply("_❌ Number has privacy on adding group!_");
            } else if (get_status == 408) {
              reply("_❌ Number has left the group recently!_");
            } else if (get_status == 409) {
              reply("_❌ Number is already in group!_");
            } else if (get_status == 500) {
              reply("_❌ Group is currently full!_");
            } else if (get_status == 200) {
              reply("_✔ Number added to group!_");
            }
          } catch {
            reply("_❌ Give correct number with country code also!_");
          }
          break;

        /* ------------------------------- CASE: KICK ------------------------------ */
        case "kick":
        case "ban":
        case "remove":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (!isGroupAdmins) {
            reply("❌ Admin command!");
            return;
          }
          if (!isBotGroupAdmins) {
            reply("❌ I'm not Admin here!");
            return;
          }
          if (!mek.message.extendedTextMessage) {
            reply("❌ Tag someone!");
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
                reply("❌ Cannot remove admin!");
                return;
              }
              conn.groupRemove(from, mentioned);
              reply("_✔ Number removed from group!_");
            } else {
              //if multiple members are tagged
              reply("❌ Mention only 1 member!");
            }
          } else {
            //when message is tagged with command
            let taggedMessageUser = [
              mek.message.extendedTextMessage.contextInfo.participant,
            ];
            if (groupAdmins.includes(taggedMessageUser[0])) {
              //if admin then don't remove
              reply("❌ Cannot remove admin!");
              return;
            }
            conn.groupRemove(from, taggedMessageUser);
            reply("_✔ Number removed from group!_");
          }
          break;

        /* ------------------------------- CASE: MUTE ------------------------------ */
        case "mute":
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (!isGroupAdmins) {
            reply("❌ Admin command!");
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
          if (!isGroup) {
            reply("❌ Group command only!");
            return;
          }
          if (!isGroupAdmins) {
            reply("❌ Admin command!");
            return;
          }
          await conn.groupSettingChange(
            from,
            GroupSettingChange.messageSend,
            false
          );
          break;

        default:
          reply(`Send ${prefix}help for <{PVX}> BOT commands list!`);
          break;
      }
    } catch (err) {
      console.log(err);
    }
  });
};
main();
