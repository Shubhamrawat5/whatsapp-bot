/* ------------------------------- DRIVE Authorization -------------------------------- */
// Drive TG bot : https://github.com/Shubhamrawat5/shared-gdrive-bot
// const authHiddenPath = process.env.authHiddenPath; //to have a hidden path for gmail authorization

// const { google } = require("googleapis");
// const credentials = JSON.parse(process.env.credentials); //read api credentials file
// const client_id = credentials.web.client_id;
// const client_secret = credentials.web.client_secret;
// const redirect_uris = credentials.web.redirect_uris;
// const oAuth2Client = new google.auth.OAuth2(
//   client_id,
//   client_secret,
//   redirect_uris[0]
// );

// let drive; //will hold our shared gdrive object
// //open in desktop to see team drive id
// let ourTeamDriveId = [
//   { name: "Adi", id: "0AIHchxZOKWruUk9PVA" },
//   { name: "Adi 3", id: "0AD7cWi12pRrHUk9PVA" },
// ]; // PVX - ADI drive id
// let extraData = {
//   corpora: "drive",
//   includeItemsFromAllDrives: true,
//   supportsAllDrives: true,
// };
// // q: "mimeType = 'application/vnd.google-apps.folder' and name contains 'hello'",

// let isDriveAuthorized = false;
// let refreshToken = ""; // refersh token use to get new access token
// const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];
// // this scope can access team drive

// //do not give your authHiddenPath value to unknown as they can revoke your authorization by providing theirs.
// app.get("/" + authHiddenPath, (req, res) => {
//   oAuth2Client.removeAllListeners(); // helps to remove all previous eventListneners

//   // tokens evernt - handle refresh token - RT is used to get new access token as AT expires in 1 hour.. [listener]
//   oAuth2Client.on("tokens", (tokens) => {
//     console.log(
//       "(tokens) This tokens event only occurs in the first authorization!"
//     );
//     if (tokens.refresh_token) {
//       console.log("(tokens) SAVING REFRESH TOKEN: ", tokens.refresh_token);
//       refreshToken = tokens.refresh_token;

//       // After every 55 min, remove all the token details from oAuth2Client.credentials and set only refresh_token which will make to generate a new access_token
//       setInterval(() => {
//         console.log(
//           "(tokens) SET INTERVAL TO PUT REFRESH_TOKEN TO GET NEW ACCESS TOKEN !!"
//         );
//         // we are removing access_token and other details from credentials and only putting the refresh_token
//         // so if access_token won't be there then google will check refresh_token value and will provide a access_token automatically
//         oAuth2Client.setCredentials({
//           refresh_token: refreshToken,
//         });
//       }, 1000 * 60 * 55); //55 min
//     }
//     console.log("(tokens) ACCESS_TOKEN: ", tokens.access_token);
//   });

//   // prompt variable to get refresh token also everytime
//   const authUrl = oAuth2Client.generateAuthUrl({
//     prompt: "consent",
//     access_type: "offline",
//     scope: SCOPES,
//   });
//   console.log("AUTH URL: ", authUrl);
//   res.redirect(authUrl);
//   // return res.send(authUrl);
// });

// const getAndSetToken = async (code) => {
//   // getToken give {access_token, refresh_token, scope, expiry_date}
//   const { tokens } = await oAuth2Client.getToken(code);
//   console.log(tokens);
//   oAuth2Client.setCredentials(tokens); // set token
//   return tokens;
// };

// app.get("/getToken", async (req, res) => {
//   if (!req.query.code && req.query.code.length < 10) {
//     return res.status(400).send("Invalid Request");
//   }

//   let token = await getAndSetToken(req.query.code);
//   drive = google.drive({ version: "v3", auth: oAuth2Client });

//   console.log("TOKEN ACCEPTED");
//   isDriveAuthorized = true;
//   res.send("TOKEN ACCEPTED");
// });

// /* ---------------------------------- Drive Query ----------------------------------- */
// const driveQuery = async (query) => {
//   if (!isDriveAuthorized) return "❌ ERROR: Bot has no access to Drive !";
//   function generateMessage(searchType, count, arr) {
//     if (arr.length === 0) return "";
//     let msg = `\n-----------------------------\n`;
//     msg += `🔍 ${searchType} : ${arr.length}\n`;

//     arr.slice(0, count).forEach((url, index) => {
//       msg += `\n*(${index + 1}) ${url.name}*
// https://drive.google.com/folderview?id=${url.id}`;
//     });

//     return msg;
//   }

//   try {
//     console.log("QUERY TO SEARCH: ", query);
//     let message = `*💾 <{PVX}> GDRIVE 💾*\n`;
//     message += `🔍 Query: ${query} 🔍`;

//     //for mulitple drive search
//     for (let i = 0; i < ourTeamDriveId.length; ++i) {
//       message += `\n\n##################\n`;
//       message += `*📛 GDrive: ${ourTeamDriveId[i].name} 📛*`;
//       /* ------------------------------ FOLDER SEARCH ----------------------------- */
//       let queryData = {
//         ...extraData,
//         driveId: ourTeamDriveId[i].id,
//         q: `mimeType = 'application/vnd.google-apps.folder' and name contains '${query}'`,
//       };

//       let response = await drive.files.list(queryData);
//       message += generateMessage("FOLDERS (TOP 10)", 10, response.data.files);

//       /* ------------------------------- MP4 SEARCH ------------------------------- */
//       queryData = {
//         ...extraData,
//         driveId: ourTeamDriveId[i].id,
//         q: `mimeType = 'video/mp4' and name contains '${query}'`,
//       };
//       response = await drive.files.list(queryData);
//       message += generateMessage("MP4 (TOP 2)", 2, response.data.files);

//       /* ------------------------------- MKV SEARCH ------------------------------- */
//       queryData = {
//         ...extraData,
//         driveId: ourTeamDriveId[i].id,
//         q: `mimeType = 'video/x-matroska' and name contains '${query}'`,
//       };
//       response = await drive.files.list(queryData);
//       message += generateMessage("MKV (TOP 2)", 2, response.data.files);

//       /* ------------------------------- TAR SEARCH ------------------------------- */
//       queryData = {
//         ...extraData,
//         driveId: ourTeamDriveId[i].id,
//         q: `mimeType = 'application/x-tar' and name contains '${query}'`,
//       };
//       response = await drive.files.list(queryData);
//       message += generateMessage("TAR (TOP 10)", 10, response.data.files);

//       /* ------------------------------- ZIP SEARCH ------------------------------- */
//       queryData = {
//         ...extraData,
//         driveId: ourTeamDriveId[i].id,
//         q: `mimeType = 'application/zip' and name contains '${query}'`,
//       };
//       response = await drive.files.list(queryData);
//       message += generateMessage("ZIP (TOP 10)", 10, response.data.files);

//       /* ------------------------------- PDF SEARCH ------------------------------- */
//       queryData = {
//         ...extraData,
//         driveId: ourTeamDriveId[i].id,
//         q: `mimeType = 'application/pdf' and name contains '${query}'`,
//       };
//       response = await drive.files.list(queryData);
//       message += generateMessage("PDF (TOP 10)", 10, response.data.files);

//       // no data found!
//       if (!/-/g.test(message)) message += `\nno data found!`;
//     }

//     /* -------------------------------- message ------------------------------- */
//     message = message.slice(0, 4096); // tg message limit is 4096
//     return message;
//     // send a message to the chat acknowledging receipt of their message
//   } catch (err) {
//     return err.toString();
//   }
// };
