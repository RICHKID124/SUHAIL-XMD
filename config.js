const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139966731";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_10_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgODgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDcyLFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwLFxuICAgICAgICA2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSmEzZTdVY2QzUitrSHBDVUFNZStlL3ZqSGtZeXZhenRubG1sVnpUSVpPRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWUd3Q2p3NWhRZHk2b2Fad1F5UlZfZ1wiLFxuICBcInBob25lSWRcIjogXCIxYTA2MWZmYy1hMzliLTRkN2ItOWE0Mi05MzBjMTI2YTU1ZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAyMjMsXG4gICAgICAxNzMsXG4gICAgICAxNzcsXG4gICAgICA1OCxcbiAgICAgIDEwOCxcbiAgICAgIDE4LFxuICAgICAgODMsXG4gICAgICAxNDYsXG4gICAgICAxMzMsXG4gICAgICAxMjIsXG4gICAgICAxODcsXG4gICAgICAxMDcsXG4gICAgICAyMjksXG4gICAgICAxNjUsXG4gICAgICAxMjAsXG4gICAgICAxNDQsXG4gICAgICAxNzAsXG4gICAgICA3MyxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDQ5LFxuICAgICAgMTM4LFxuICAgICAgNjksXG4gICAgICAxMDIsXG4gICAgICA5MCxcbiAgICAgIDU5LFxuICAgICAgMjIwLFxuICAgICAgNSxcbiAgICAgIDEyNCxcbiAgICAgIDgxLFxuICAgICAgMTQ0LFxuICAgICAgOTksXG4gICAgICA4LFxuICAgICAgMTUwLFxuICAgICAgMTAwLFxuICAgICAgMjA5LFxuICAgICAgODAsXG4gICAgICAxMTYsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDMTlSOVRGMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzOTk2NjczMTo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc4MzE0NDc2MDE1ODQxOjQzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QcWlQa0hFSVBLNXJrR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVpIcnJKVjJRbEUyT1RlN0dBWjFxS2N2MkcvMWIwdWhTRXM1eEFncDNSQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSanlOTW9uUGhiRVVDaEk2SllQUHZjbllsU3hnV1N6ajNoNE9DYWxqaDFjN1pWbW1lR2lYcVptRklJdkE2SW9ta3I0SWVxOCttWE5DOU10dU9QeHlEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrNm1NdnY3Y0tsZk9QTkpNNmVMRkRtci9CNFNRb1N6WklZYnVyOGdqTXBldk1OUVZ5TGRsdlFwYnQ0YS83MW1mZU1YWVFHWWFKb0pJYklQRmpMeGRDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5OTY2NzMxOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODMxMDQ4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
