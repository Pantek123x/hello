import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner HENDRA LUBECKð®ð©;Bot;;Md\nFN:Saya Owner HENDRA LUBECKð®ð© Bot WhatsApp, Md\nNICKNAME:ð Owner HENDRA LUBECKð®ð© Bot\nORG:Wudy\nTITLE:soft\nitem1.TEL;waid=6285380166282:+62 853-8016-6282\nitem1.X-ABLabel:ð Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:ð¬ More\nitem3.EMAIL;type=INTERNET:hendralubeck86@mail.com\nitem3.X-ABLabel:ð Mail Owner HENDRA LUBECKð®ð©\nitem4.ADR:;;ð®ð© Indonesia;;;;\nitem4.X-ABADR:ð¬ More\nitem4.X-ABLabel:ð Lokasi Saya\nBDAY;value=date:ð 13 January 2001\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `ð Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['ð Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'pengembang') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6285380166282:+62 853-8016-6282\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
if (command == 'creator') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `ð Developer Bot `, `ð« Don't call me ð¥º`, `hendralubeck86@gmail.com`, `ð®ð© Indonesia`, `ð https://chat.whatsapp.com/Fj5z7EXvGLVARaZ0cJF8rd.io/`, `ð¤ Gada pawang nih senggol dong ð`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `ð¥ Bot WhatsApp ð£`, `ðµ Don't spam/call me ð¢`, `Nothing`, `ð®ð© Indonesia`, `ð https://s.id/Cerdasin62/`, `ð¤ Hanya bot biasa yang kadang suka eror âº`]
  ], fakes)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya kað`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kakð`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
