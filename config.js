const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254751242851";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_39_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDM4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICA3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNKeDVUZ1ZQZzFyYTNhRnF0QTdmbUQvY3V1MXp6TXg2cjZTSzIrSUlFMVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlB5ZGlGQmFpUU1DcDAwOEdXbXBpS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzA4ZWFlOTQtZWJmMi00YWE1LWFlZGQtNzhjMDA1ZjBlNTY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMjUxLFxuICAgICAgMTIwLFxuICAgICAgMjUwLFxuICAgICAgMTkxLFxuICAgICAgMzksXG4gICAgICAyMjYsXG4gICAgICAyMDEsXG4gICAgICAxNixcbiAgICAgIDIwMSxcbiAgICAgIDE3NSxcbiAgICAgIDEzMixcbiAgICAgIDU2LFxuICAgICAgOTYsXG4gICAgICAxLFxuICAgICAgMTMxLFxuICAgICAgMTQyLFxuICAgICAgMTgyLFxuICAgICAgMTU4LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAzNSxcbiAgICAgIDk3LFxuICAgICAgMTgxLFxuICAgICAgMTMzLFxuICAgICAgODMsXG4gICAgICAxOCxcbiAgICAgIDIxOCxcbiAgICAgIDE5MixcbiAgICAgIDcwLFxuICAgICAgOTcsXG4gICAgICA5NCxcbiAgICAgIDI1MyxcbiAgICAgIDIxLFxuICAgICAgNyxcbiAgICAgIDEzMSxcbiAgICAgIDIyOCxcbiAgICAgIDE5MCxcbiAgICAgIDIxLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFLWjNBTUdDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTEyNDI4NTE6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDcmF6eWtpZCMwOFwiLFxuICAgIFwibGlkXCI6IFwiMTU1MzcwNzI3MTkwNzE4OjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiMzI5OERFTHYrbnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXZIbUJKbEdGWVBpb3A1c3EyaU9tQVlGazR6N0k2Q1cvU0QxY2I5MDBocz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrZW14S0ZUV3JDc3o2NmR4bUFhYmkvNmNuMHlaSmV2ZW5NYWx6VG1idmUwRjZFZ1dTUHB6aUR6YWZwcUZhSWRvY3BJWFV6UGF4UUVyaGVzemo3TTZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnVkQrV1VZckpJaVRkUXFkY083MU9rV3V1aUlWbm55elhMQTlhVkNudWQ4UmZCYUt2elk5WFBqWWVCTC9wNkl1L1JXMjgvYWxKZVlROC9mMk9lSHBDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTEyNDI4NTE6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTcyMzU2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "crazykid",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
