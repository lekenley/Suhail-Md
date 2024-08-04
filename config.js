const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_33_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHRjQvUGQ0b2dJU0Vva1NydnZaR3NoeUVnN2x4UUFyak43bW11bWhwNytvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFbWNQYjFrQlJ5NmRHLURvc2dkdTZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc4YzE5MzM2LTI1MjktNGRhZC1hODBkLTI3ODY0YzM2YzE4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICA0MCxcbiAgICAgIDMsXG4gICAgICAxMDAsXG4gICAgICAxMDgsXG4gICAgICA4OSxcbiAgICAgIDkwLFxuICAgICAgMjM3LFxuICAgICAgMTI4LFxuICAgICAgMjA4LFxuICAgICAgNjMsXG4gICAgICAxLFxuICAgICAgMTksXG4gICAgICAyNTMsXG4gICAgICAxMjQsXG4gICAgICAxMjEsXG4gICAgICAxODEsXG4gICAgICAxODQsXG4gICAgICAzMixcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDExOSxcbiAgICAgIDE5NixcbiAgICAgIDE1MCxcbiAgICAgIDQzLFxuICAgICAgMzAsXG4gICAgICAxMjMsXG4gICAgICAxOSxcbiAgICAgIDI4LFxuICAgICAgNjYsXG4gICAgICAyMDIsXG4gICAgICA5NixcbiAgICAgIDIyLFxuICAgICAgMjI2LFxuICAgICAgMTI3LFxuICAgICAgMTAsXG4gICAgICAzMSxcbiAgICAgIDIxLFxuICAgICAgNzYsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDJQR1hFTUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTU1NDc2MzM5OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3OTEzNDY4OTM0NTc4MTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016RTlkNEZFTHFpdnJVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnkxNVRUdWxBUjZ2azJURmlsODM5bUdBckd6SHcvakR0ZXFOaVBhSzhRZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJITDZzdHVKVEhLWk02OGRwSklzc3I3VDJOdk5vRUlSOXdlemhJUVJEZWl2TTFDNXJPUEFqQTN6dE9wVkwzMzNUUjRzb0FyVmh1VjZlaGRRenlTSTVDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3YVFvM2xpL1pzUVJhS0RmeHN1ZC9SOGgyOGUyeURrYW10UjJOWVk4WDV6cDlDQWlWNEZMOHBDS1A3cXNUTkV0UkxYWjhHTVJtMGNSWGx5dEpTRU5CQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk1NTQ3NjMzOTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzgyMDE1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᬊ᭄𝑮۝𝒅 𝖋𝖑𝖊𝖆𝖚𝖝 𝑺۝𝖚𝖐𝖚𝖓𝖆",
  ownername:process.env.OWNER_NAME|| "𝙇𝞢 𝘿𝞒𝞓𝙂𝙐𝞢𝙐𝞒 𝙂𝞢𝞢 𝞙𝞢𝞜𝙇𝞢𝙔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
