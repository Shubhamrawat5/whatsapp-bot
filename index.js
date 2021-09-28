// WEB SERVER
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("Bot is running fine... no tension :)");
});

/* ------------------------------- DRIVE Authorization -------------------------------- */
// Drive TG bot : https://github.com/Shubhamrawat5/shared-gdrive-bot

app.use(express.urlencoded({ extended: true }));
const authHiddenPath = process.env.authHiddenPath; //to have a hidden path for gmail authorization

const { google } = require("googleapis");
const credentials = JSON.parse(process.env.credentials); //read api credentials file
const client_id = credentials.web.client_id;
const client_secret = credentials.web.client_secret;
const redirect_uris = credentials.web.redirect_uris;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

let drive; //will hold our shared gdrive object
//open in desktop to see team drive id
let ourTeamDriveId = [
  { name: "Adi", id: "0AIHchxZOKWruUk9PVA" },
  { name: "Adi 3", id: "0AD7cWi12pRrHUk9PVA" },
]; // PVX - ADI drive id
let extraData = {
  corpora: "drive",
  includeItemsFromAllDrives: true,
  supportsAllDrives: true,
};
// q: "mimeType = 'application/vnd.google-apps.folder' and name contains 'hello'",

let isDriveAuthorized = false;
let refreshToken = ""; // refersh token use to get new access token
const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];
// this scope can access team drive

//do not give your authHiddenPath value to unknown as they can revoke your authorization by providing theirs.
app.get("/" + authHiddenPath, (req, res) => {
  oAuth2Client.removeAllListeners(); // helps to remove all previous eventListneners

  // tokens evernt - handle refresh token - RT is used to get new access token as AT expires in 1 hour.. [listener]
  oAuth2Client.on("tokens", (tokens) => {
    console.log(
      "(tokens) This tokens event only occurs in the first authorization!"
    );
    if (tokens.refresh_token) {
      console.log("(tokens) SAVING REFRESH TOKEN: ", tokens.refresh_token);
      refreshToken = tokens.refresh_token;

      // After every 55 min, remove all the token details from oAuth2Client.credentials and set only refresh_token which will make to generate a new access_token
      setInterval(() => {
        console.log(
          "(tokens) SET INTERVAL TO PUT REFRESH_TOKEN TO GET NEW ACCESS TOKEN !!"
        );
        // we are removing access_token and other details from credentials and only putting the refresh_token
        // so if access_token won't be there then google will check refresh_token value and will provide a access_token automatically
        oAuth2Client.setCredentials({
          refresh_token: refreshToken,
        });
      }, 1000 * 60 * 55); //55 min
    }
    console.log("(tokens) ACCESS_TOKEN: ", tokens.access_token);
  });

  // prompt variable to get refresh token also everytime
  const authUrl = oAuth2Client.generateAuthUrl({
    prompt: "consent",
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("AUTH URL: ", authUrl);
  res.redirect(authUrl);
  // return res.send(authUrl);
});

const getAndSetToken = async (code) => {
  // getToken give {access_token, refresh_token, scope, expiry_date}
  const { tokens } = await oAuth2Client.getToken(code);
  console.log(tokens);
  oAuth2Client.setCredentials(tokens); // set token
  return tokens;
};

app.get("/getToken", async (req, res) => {
  if (!req.query.code && req.query.code.length < 10) {
    return res.status(400).send("Invalid Request");
  }

  let token = await getAndSetToken(req.query.code);
  drive = google.drive({ version: "v3", auth: oAuth2Client });

  console.log("TOKEN ACCEPTED");
  isDriveAuthorized = true;
  res.send("TOKEN ACCEPTED");
});

/* ---------------------------------- Drive Query ----------------------------------- */
const driveQuery = async (query) => {
  if (!isDriveAuthorized) return "❌ ERROR: Bot has no access to Drive !";
  function generateMessage(searchType, count, arr) {
    if (arr.length === 0) return "";
    let msg = `\n-----------------------------\n`;
    msg += `🔍 ${searchType} : ${arr.length}\n`;

    arr.slice(0, count).forEach((url, index) => {
      msg += `\n*(${index + 1}) ${url.name}*
https://drive.google.com/folderview?id=${url.id}`;
    });

    return msg;
  }

  try {
    console.log("QUERY TO SEARCH: ", query);
    let message = `*💾 PVX GDRIVE 💾*\n`;
    message += `🔍 Query: ${query} 🔍`;

    //for mulitple drive search
    for (let i = 0; i < ourTeamDriveId.length; ++i) {
      message += `\n\n##################\n`;
      message += `*📛 GDrive: ${ourTeamDriveId[i].name} 📛*`;
      /* ------------------------------ FOLDER SEARCH ----------------------------- */
      let queryData = {
        ...extraData,
        driveId: ourTeamDriveId[i].id,
        q: `mimeType = 'application/vnd.google-apps.folder' and name contains '${query}'`,
      };

      let response = await drive.files.list(queryData);
      message += generateMessage("FOLDERS (TOP 10)", 10, response.data.files);

      /* ------------------------------- MP4 SEARCH ------------------------------- */
      queryData = {
        ...extraData,
        driveId: ourTeamDriveId[i].id,
        q: `mimeType = 'video/mp4' and name contains '${query}'`,
      };
      response = await drive.files.list(queryData);
      message += generateMessage("MP4 (TOP 2)", 2, response.data.files);

      /* ------------------------------- MKV SEARCH ------------------------------- */
      queryData = {
        ...extraData,
        driveId: ourTeamDriveId[i].id,
        q: `mimeType = 'video/x-matroska' and name contains '${query}'`,
      };
      response = await drive.files.list(queryData);
      message += generateMessage("MKV (TOP 2)", 2, response.data.files);

      /* ------------------------------- TAR SEARCH ------------------------------- */
      queryData = {
        ...extraData,
        driveId: ourTeamDriveId[i].id,
        q: `mimeType = 'application/x-tar' and name contains '${query}'`,
      };
      response = await drive.files.list(queryData);
      message += generateMessage("TAR (TOP 10)", 10, response.data.files);

      /* ------------------------------- ZIP SEARCH ------------------------------- */
      queryData = {
        ...extraData,
        driveId: ourTeamDriveId[i].id,
        q: `mimeType = 'application/zip' and name contains '${query}'`,
      };
      response = await drive.files.list(queryData);
      message += generateMessage("ZIP (TOP 10)", 10, response.data.files);

      /* ------------------------------- PDF SEARCH ------------------------------- */
      queryData = {
        ...extraData,
        driveId: ourTeamDriveId[i].id,
        q: `mimeType = 'application/pdf' and name contains '${query}'`,
      };
      response = await drive.files.list(queryData);
      message += generateMessage("PDF (TOP 10)", 10, response.data.files);

      // no data found!
      if (!/-/g.test(message)) message += `\nno data found!`;
    }

    /* -------------------------------- message ------------------------------- */
    message = message.slice(0, 4096); // tg message limit is 4096
    return message;
    // send a message to the chat acknowledging receipt of their message
  } catch (err) {
    return err.toString();
  }
};

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
      writer.on("finish", resolve);
      writer.on("error", reject);
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

/* ------------------------------------ - ----------------------------------- */
app.listen(port, () => {
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
        let num = anu.participants[0];
        let from = anu.jid;
        let num_split = `${num.split("@s.whatsapp.net")[0]}`;
        if (num_split === "919720391303") {
          console.log("Bot is add to new group!");
          conn.sendMessage(
            from,
            `*─「 🔥 PVX BOT 🔥 」─\n\nSEND !help FOR BOT COMMANDS`,
            MessageType.text
          );
        }
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

      const reply = (message) => {
        conn.sendMessage(from, message, MessageType.text, {
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

      /* -------------------------------- COMMANDS -------------------------------- */
      let data;
      switch (command) {
        case "pvxlink":
          reply(
            "*─「 🔥 JOIN PVX FAMILY 🔥 」─*\n\n>> https://pvxfamily.tech <<"
          );
          break;

        case "song":
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
            console.log(`song saved-> ./${randomName}`);
            await conn.sendMessage(
              from,
              { url: `./${randomName}` },
              MessageType.audio,
              { mimetype: Mimetype.mp4Audio }
            );
          } catch (err) {
            console.log(err);
            reply(`❌ ERROR: There is some problem.`);
          }
          break;

        case "insta":
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
            reply(`❌ ERROR: Wrong Instagram URL!`);
            return;
          }

          try {
            console.log("Trying saving", urlInsta);
            let instaObj = await getInstaVideo(urlInsta);
            let videoDirectLink = instaObj.videoDirectLink;
            if (videoDirectLink) {
              let randomName = getRandom(".mp4");
              await saveInstaVideo(randomName, videoDirectLink);
              console.log(`video saved-> ./${randomName}`);

              await conn.sendMessage(
                from,
                fs.readFileSync(`./${randomName}`), // can send mp3, mp4, & ogg
                MessageType.video,
                { mimetype: Mimetype.mp4 }
              );
            } else {
              reply(`❌ ERROR: There is some problem.`);
            }
          } catch (err) {
            console.log(err);
            reply(`❌ ERROR: There is some problem.`);
          }
          break;
        case "technews":
          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          let news = await getNews();
          conn.sendMessage(from, news, MessageType.text);
          break;

        case "text":
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

        case "dev":
          reply(`─「 PVX BOT 」 ─\n
_Message wa.me/919557666582 to report any bug or to give new ideas/features for this bot!_ `);
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
            data = await startIplHelper("startipl", true);
            if (!data) return;
          }, 1000 * 60 * 1.5);
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
          reply(commandList(prefix));
          break;

        case "source":
          conn.sendMessage(
            from,
            "https://github.com/Shubhamrawat5/whatsapp-bot",
            MessageType.text,
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

        case "drive":
          if (!isGroup) {
            reply("❌ ERROR: Group command only!");
            return;
          }
          if (args.length === 0) {
            reply(`❌ ERROR: Query is empty! \nSend !drive query_name`);
            return;
          }
          let query = args.join(" ");
          let respo = await driveQuery(query);
          reply(respo);

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

        case "kick":
        case "ban":
        case "remove":
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
            conn.groupRemove(from, mentioned);
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
