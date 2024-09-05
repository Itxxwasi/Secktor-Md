const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919628516236'
global.devs = '919628516236';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SamPandey001' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ?  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZqZlE0bUtOQTJoLy9vTi9UWGY1MHhyRWtKTmpldFJ1VG9hdldITjVsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1pzZ2hocEt4emY4SEhXSzE4cUdYeEVuSFR6dUlleEZZSWJMU2FuVXpWaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzS05QTWY3bk5CVW9va1BjY2pTV2FUNE1wVHVoZXVzN3lGUno4d1ZLcG5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzT3lEWE5EZ1RYM29rMElybVJCKzN2eCtRelRqVkJSMFo4dGRlZWFmQmlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNZ3ZWRExXVWpEckNuemlwdVFxLytNclBjd1ord1pwMmMwWGJEbHBzbDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh0RkFQRmNpb3dHUVIyU3J0YVU3MDgybjNqVzk2NHVYa1ArRmlYb3pZM0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUVLdDBpLzJRcGFSM1cwZmNOSWJNeTVLbmZmVGlkSGxEc1dvWDJMTGhFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTgvd280YUp5NkE3V0tSZFg0Z3lwYjFvcG9EMFU3RFFRUU9vQ0RDV2RSWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhLS1FaYkExZzhHdVA2OTZtbWg5cHJ4Ti95ckwrUG9wNWtPWTIvV1gxbGpEVFF1aTY2aDBTbFFSNFk3dzY5STdxZkh6WlNTMEZ1MzQxSXFSUkhkZGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6IjZxNkZvdGhHZk5UMnJCTEVSdmI0aFVRNy9HcVRoclJyd1krblhjSlZFTjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhVVUpHMWRkUzNHOFNJT2YxSF9mb2ciLCJwaG9uZUlkIjoiZjMxMzQzYmItOGRlOC00MmViLTk3NTItODZkMjI2ZTk3MWQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVzbmRkemNUSVZ5UEEvdG1Rd2RldStJeVZZND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyMjR0Rkw2UFplZkRvY1lTenFJTmlETWlLODA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS05FUUxUNkEiLCJtZSI6eyJpZCI6IjI1ODg3NjY2Njc3MDoxNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkRWbFBvREVMNll5cllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRmxlc3ZjYVFaNXdrUG95NXhUZUtMOUpLMTNtOCthVlgzdHV6NHBUMGFodz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibnZwQlRJUFQrd0JvaGhsZHdqazlzdUFCY0MvZ2hoQVp1NXpZOVZ2RTNrQXZQUHY5Nk96T0M2T2IyVnVad0NlWHZLSHdWY3VBVE5MTXpUSUFHK1M5QkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkNEZER3VnZtVEp5T0NFVm9nWk5oQUxXVUx0NFdVQkRFcFIzSUN4cEVOYThad0VvWWFmNmJtSy9LRS9OdEpwNm5MVGRIM3FLdTlFNkoveWtuSHl3MWpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU4ODc2NjY2NzcwOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJaWHJMM0drR2VjSkQ2TXVjVTNpaS9TU3RkNXZQbWxWOTdicytLVTlHb2MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUwNzQ1MDh9" : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'SamPandey001' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Secktor-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
