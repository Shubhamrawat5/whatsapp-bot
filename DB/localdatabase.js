require("dotenv").config();

let auth_obj = {
  clientID: process.env.clientID,
  serverToken: process.env.serverToken,
  clientToken: process.env.clientToken,
  encKey: process.env.encKey,
  macKey: process.env.macKey,
};

module.exports.connectToWA = async (WAConnection) => {
  // LOADING SESSION
  const conn = new WAConnection();
  conn.logger.level = "warn";
  conn.on("qr", () => {
    console.log("SCAN THE ABOVE QR CODE TO LOGIN!");
  });
  conn.loadAuthInfo(auth_obj);
  conn.on("connecting", () => {
    console.log("Connecting...");
  });
  conn.on("open", () => {
    console.clear();
    console.log("Connected!");
  });
  await conn.connect({ timeoutMs: 30 * 1000 });
  return conn;
};
