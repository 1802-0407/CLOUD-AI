import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const alive = async (m, sock) => {
  // Use the mode from your config, if needed for the menu display.
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  // Check if the message is exactly "menu" (case-insensitive)
  if (m.body.trim().toLowerCase() === "menu") {
    await m.React('⏳'); // React with a loading icon

    // Calculate uptime
    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    // Get real time
    const realTime = moment().tz("Asia/Karachi").format("HH:mm:ss");
    const time2 = moment().tz("Asia/Karachi").format("HH:mm:ss");

    let pushwish = "";
    if (time2 < "05:00:00") {
      pushwish = `Good Morning 🌄`;
    } else if (time2 < "11:00:00") {
      pushwish = `Good Morning 🌄`;
    } else if (time2 < "15:00:00") {
      pushwish = `Good Afternoon 🌅`;
    } else if (time2 < "18:00:00") {
      pushwish = `Good Evening 🌃`;
    } else if (time2 < "19:00:00") {
      pushwish = `Good Evening 🌃`;
    } else {
      pushwish = `Good Night 🌌`;
    }

    // Construct the menu message (you can adjust the menu content as needed)
    const aliveMessage = `╭┈───────────────•*
*⇆ HELLO ⇆* *${pushName}*
             _${pushwish}_
*⇆ ✨ ʙᴇʀᴀ ᴛᴇᴄʜ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ  ✨ ⇆*
*╰┈───────────────•*
*╭┈───────────────•* 
*│  ◦* 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴: ʙᴇʀᴀ ᴛᴇᴄʜ ʙᴏᴛ
*│  ◦* 𝚅𝙴𝚁𝚂𝙸𝙾𝙽: 1.0
*│  ◦* 𝙳𝙴𝚅: ʙʀᴜᴄᴇ ʙᴇʀᴀ
*│  ◦* 𝙼𝙾𝙳𝙴: *${mode}*
*│  ◦* 𝚄𝙿𝚃𝙸𝙼𝙴: *${days}d ${hours}h ${minutes}m ${seconds}s*
*│  ◦* 𝙲𝚄𝚁𝚁𝙴𝙽𝚃 𝚃𝙸𝙼𝙴: *${realTime}*
*╰┈───────────────•*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*[ • *👻𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧👻* • ]*
*╭┈───────────────•*
*┋*🫡𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔🫡*
*╰┈───────────────•*
*|ENSURE YOU TURN OFF SHENG AI 🤝🥲|*
*[ •  𝙾𝚆𝙽𝙴𝚁 𝙲𝙼𝙳  ‎• ]*
*╭┈───────────────•*
*┋*sheng on /off
*┋*UNBLOCK
*┋*JOIN
*┋*LEAVE
*┋*block
*┋*RESTART
*┋*PP
*┋*Restart
*┋*OwnerReact
*┋*HeartReact
*┋*Join
*┋*Left 
*┋*Broadcast 
*┋*View  [for view once]
*┋*Del
*┋*Save
*╰┈───────────────•*
*╭───❍「 *👻ᴄʜʀɪsᴛɪᴀɴ ᴍᴇɴᴜ👻* 」 
*│ *ʙɪʙʟᴇ 
*│  *ʙɪʙʟᴇʟʟɪsᴛ 
*╰───────────❍* 
*╭───❍「 👻ɪsʟᴀᴍɪᴄ ᴍᴇɴᴜ👻 」 
*│*𝚂𝚞𝚛𝚊𝚑𝚊𝚞𝚍𝚒𝚘 
*│*𝚂𝚞𝚛𝚊𝚑𝚞𝚛𝚍𝚞 
*│*𝙰𝚜𝚖𝚊𝚞𝚕𝚑𝚞𝚜𝚗𝚊
*│*𝙿𝚛𝚘𝚙𝚑𝚎𝚝𝚗𝚊𝚖𝚎 
*╰───────────❍*
*╭───❍「 👻ʟᴏɢᴏ ᴍᴇɴᴜ👻 *
*┋*𝗅𝗈𝗀𝗈 
*┋*hacker 
*┋*𝖻𝗅𝖺𝖼𝗄𝗉𝗂𝗇𝗄 
*┋*𝗀𝗈𝗌𝗌𝗒𝗌𝗂𝗅𝗏𝖾𝗋 
*┋*𝗇𝖺𝗋𝗎𝗋𝗈 
*┋*𝖽𝗂𝗀𝗂𝗍𝖺𝗅𝗀𝗅𝗂𝗍𝖼𝗁 
*┋*𝗉𝗂𝗑𝖾𝗅𝗀𝗅𝗂𝗍𝖼𝗁 
*┋*𝗌𝗍𝖺𝗋 
*┋*𝗌𝗆𝗈𝗄𝖾 
*┋*𝖻𝖾𝖺𝗋 
*┋*𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅 
*┋*𝗌𝖼𝗋𝖾𝖾𝗇 
*┋*𝗇𝖺𝗍𝗎𝗋𝖾 
*┋*𝖽𝗋𝖺𝗀𝗈𝗇𝖻𝖺𝗅𝗅 
*┋*𝖿𝗈𝗀𝗀𝗒𝗀𝗅𝖺𝗌𝗌 
*┋*𝗇𝖾𝗈𝗇𝗅𝗂𝗀𝗁𝗍 
*┋*𝖼𝖺𝗌𝗍𝗅𝖾𝗉𝗈𝗉 
*┋*𝖿𝗋𝗈𝗓𝖾𝗇𝖼𝗁𝗋𝗂𝗌𝗍𝗆𝖺𝗌 
*┋*𝖿𝗈𝗂𝗅𝖻𝖺𝗅𝗅𝗈𝗈𝗇 
*┋*𝖼𝗈𝗅𝗈𝗋𝖿𝗎𝗅𝗉𝖺𝗂𝗇𝗍 
*┋*𝖺𝗆𝖾𝗋𝗂𝖼𝖺𝗇𝖿𝗅𝖺𝗀 
*┋*water 
*┋*𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅 
*┋*underwater 
*┋*dragonfire 
*┋*bokeh 
*┋*snow 
*┋*sand3d 
*┋*pubg 
*┋*horror 
*┋*blood 
*┋*bulb 
*┋*graffiti 
*┋*thunder 
*┋*thunder1 
*┋*womensday 
*┋*Valentine 
*┋*graffiti2 
*┋*queencard 
*┋*galaxy 
*┋*pentakill 
*┋*birthdayflower 
*┋*zodiac 
*┋*water3D 
*┋*textlight 
*┋*wall 
*┋*gold 
*┋*glow 
*┋*team 
*┋*rotation 
*┋*paint 
*┋*avatar 
*┋*typography 
*┋*tattoo 
*┋*luxury 
*┋logo 
╭┈───────────────•*
┋🫡𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔🫡 
╰┈───────────────•* 
*╭━   *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁*    ❯━╮*
*┃*𝙰𝚃𝚃𝙿
*┃*ᴜʀʟ
*┃*𝙰𝚃𝚃𝙿3
*┃*𝙴𝙱𝙸𝙽𝙰𝚁𝚈
*┃*𝙳𝙱𝙸𝙽𝙰𝚁𝚈
*┃*𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
*┃*𝙼𝙿3
*╰━━━━━━━━━━━━━━━⪼*
*[ • DOWNLOADER-CMD  ‎• ]*
*╭┈───────────────•*
*┋*play
*┋*ɪɴꜱᴛᴀ
*┋*ᴠɪᴅᴇᴏ
*┋*ɢᴅʀɪᴠᴇ
*┋*ᴛᴡɪᴛᴛᴇʀ
*┋*𝚝𝚒𝚔𝚝𝚘𝚔
*┋*ᴍᴇᴅɪᴀғɪʀᴇ
*┋*ꜱᴏɴɢ
*┋*ᴠɪᴅᴇᴏ
*┋*ᴀᴘᴋ
*┋*𝚃𝚃𝙰𝚄𝙳𝙸𝙾*
*╰┈───────────────•*
  [ •  GROUP-CMD  ‎• ] 
*╭┈──────────────•* 
*┋*ᴅᴇʟ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs> 
*┋*ᴀᴅᴅ 
*┋*ᴋɪᴄᴋ 
*┋*ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚗 
*┋*ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚏𝚏 
*┋*ᴘʀᴏᴍᴏᴛᴇ 
*┋*ᴅᴇᴍᴏᴛᴇ 
*┋*ᴛᴀɢᴀʟʟ 
*┋*𝚑𝚒𝚍𝚎𝚝𝚊𝚐 
*┋*ɪɴᴠɪᴛᴇ 
*┋*ᴍᴜᴛᴇ 
*┋*ᴜɴᴍᴜᴛᴇ 
*┋*ɢʀᴏᴜᴘᴏᴘᴇɴ 
*┋*ɢʀᴏᴜᴘᴄʟᴏsᴇ 
*┋*ɢʀᴏᴜᴘɪɴғᴏ 
*┋*ᴅᴇʟ 
*┋*ᴍᴜᴛᴇ 
*┋*ᴜɴᴍᴜᴛᴇ 
*┋*ᴘᴏʟʟ 
*╰┈───────────────•*
 ╭───❍「 ᴏᴛʜᴇʀ ᴍᴇɴᴜ ] 
*│*𝙿𝚒𝚗𝚐 
*│*𝙰𝚋𝚘𝚞𝚝 
*│*𝚛𝚎𝚙𝚘 
*│*𝙰𝚕𝚒𝚟𝚎 
*│*𝚄𝚛𝚕 
*│*𝚂𝚎𝚗𝚍𝚖𝚎 
*╰───────────❍* 
[ • 𝙷𝙴𝚁𝙾𝙺𝚄 𝙲𝙻𝙸𝙴𝙽𝚃 ‎• ] 
*╭┈───────────────•* 
*┋*𝙼𝙾𝙳𝙴 <𝙿𝚄𝙱𝙻𝙸𝙲/𝙿𝚁𝙸𝚅𝙰𝚃𝙴> 
*┋*𝙿𝚁𝙴𝙵𝙸𝚇 <𝚂𝚈𝙼𝙱𝙾𝙻> 
*┋*𝙰𝚄𝚃𝙾𝚂𝚅𝙸𝙴𝚆 <𝙾𝙽/𝙾𝙵𝙵> 
*┋*𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙲𝚃 <𝙾𝙽/𝙾𝙵𝙵> 
*┋*𝙰𝙻𝚆𝙰𝚈𝚂𝙾𝙽𝙻𝙸𝙽𝙴 <𝙾𝙽/𝙾𝙵𝙵> 
*┋*𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 <𝙾𝙽/𝙾𝙵𝙵> 
*┋*𝙰𝚄𝚃𝙾𝚁𝙴𝙱𝙻𝙾𝙲𝙺 <𝙾𝙽/𝙾𝙵𝙵> 
*┋*𝙰𝚗𝚃𝙸𝙲𝙰𝙻𝙻 <𝙾𝙽/𝙾𝙵𝙵> 
*┋*𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵> 
*┋*𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵> 
*╰┈───────────────•*
*[ •  SEARCH CMD  ‎• ]*
*╭┈───────────────•*
*┋*YTS
*┋*GOOGLE
*┋*IMD
*┋*IMG
*┋*WEATHER
*┋*PLAYSTORE
*┋*NEWS
*╰┈───────────────•*
*[ •  AI CMD   ‎• ]*
*╭┈───────────────•*
*┋*BLACKBOXAI
*┋*GPT
*┋*VISIT
*┋*DEFINE
*╰┈───────────────•*
...
🌐 𝗠𝗢𝗥𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗖𝗢𝗠𝗜𝗡𝗚 𝗦𝗢𝗢𝗡! 🌐`;

    await m.React('✅'); // React with a success icon

    // Send the constructed menu message back to the chat
    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363315115438245@newsletter',
            newsletterName: "𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧",
            serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
            title: "✨ 𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧 ✨",
            body: "BERA TECH BOT MENU",
            thumbnailUrl: 'https://files.catbox.moe/ld9uw5.jpg',
            sourceUrl: 'https://files.catbox.moe/tdhhl5.mp3',
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default alive;
