//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZEVjZmaWtuaTJwdWRHY0JreW0zZ2FWU0V4ZGsrY25LMWRkeUlMR0dscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09zZGJjcHlXMFhjOWlUMzBta2laZGNyS3lmamVQOHM5YWNqWlF1V0ZqRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UGlFbkM5K0dvNk52WTZCZjMrL0l3WHR6T3BPYnhjSjFHeEl1QnJuaG5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVXgzd3F0TGo1OUMwMmtGTUEvaUhxOXBoY2lSNTV2dTRITUVzNlpSb1djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIT2RlMDNldGZITi9STVBYYzEvQkJVY3RNVnFFcGRGdjRXaGp2N0lEVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpWWkdyVk1KYWQyM21PekFQcWNUak5jMisvR3hpaCs1aGFuSm5UTG8xeGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpCT2ZBRytVS3R5NnZJNmt3Qk9PZnRoU2VnQW54R1JWaWFOdDM1U1Mwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3YxMjJ6R09sMVMvTDZUVXNkbTJ4WHdWZW5PcVc2OHFCUGxQY2h2ZERnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNR1YyQVAzM1JyYmk0aGVqTE9yNjZxbUtiNlJVVkwrcUsxZ0ZvK2tBRmNHbVRZOCs3eHkvZGErcnNRSnFVMFBzaC9xdVZRY0E4ZmEvaTdwYWFRc0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiMk1haTVFY21YMEkyQno0ZFNXT1lhS3JlMU9ERUVobWlmbHlzSTFDRzB2ND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDEzNjMwMTQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQUFBMjk0MzlFMkRFNTcxMkUyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMyMTg4NTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpxZFRNTjRrUWJXZHdlY1ZQQURjU1EiLCJwaG9uZUlkIjoiNzczMzM2OGItNTQwZi00ZjFlLWI3ZWYtODQ2OTY0NmU0MGQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxMM0c4QW1PMXRxbTBPQ2FsK1BETTYxWWgrUT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVExGeTBXZ0VVMTFranFZZm5rb1piazVDSnl3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzdpbGZjQkVKYjMyTFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiLy9JVkdHeGE2bmFtZVI2Z0s3eTNFVDI4anQzaE5LU1F6SllnZFdKNUdoUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSUN2d2pTcE42ZXlJaEpEKzl3bTRjeEhrcHVIYTg4TXhtdVNPZmlvZmx1T1BwY0VCbXJUN3E2dFI2NzY3ZURZa1p5Z2ROM2M0WGRtaG5zSHQxdWxoQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkpIdzJCMlcxb2ZBSEZkam0rRUU4Z3BQOFFtdjd1ciszUVQwYjZjbHAwQlkyNWNRUXJRWUdEK3RHcUJ6SEJnREJWdk1EV2QzVVkvbGZuUCsyY00wTUNRPT0ifSwibWUiOnsiaWQiOiIyMzQ3MDEzNjMwMTQ4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU21hbGxjaGluYSIsImxpZCI6IjI1Mjc4MDczNjQ0NjU0MToxQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDEzNjMwMTQ4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZi95RlJoc1d1cDJwbmtlb0N1OHR4RTl2STdkNFRTa2tNeVdJSFZpZVJvVSJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMjE4ODUxLCJsYXN0UHJvcEhhc2giOiIxeWhJUkEiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNEQSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
