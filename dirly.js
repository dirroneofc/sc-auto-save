// SUBSCRIBE MY YOUTUBE DIRRONE OFC
require('./dirlysetting')

const {
	format,
	getBuffer,
	getGroupAdmins,
	jsonformat,
	parseMention,
	runtime,
	sleep,
	smsg
} = require('./dirlyfun/function')

module.exports = dirly = async (dirly, m, chatUpdate, store) => { try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botId = await dirly.decodeJid(dirly.user.id)
const botNumber = botId.split('@')[0]
const ownId = ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
const ownNumber = ownNumb.replace(/[^0-9]/g, '')
const dtext = args.join(" ")
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted: m
const groupMetadata = m.isGroup ? await dirly.groupMetadata(m.chat).catch(e => {}): ''
const groupName = m.isGroup ? groupMetadata.subject: ''
const participants = m.isGroup ? await groupMetadata.participants: ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants): ''
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender): false
const isBotGroupAdmins = m.isGroup ? groupAdmins.includes(botId): false
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const sender = m.key.fromMe ? (dirly.user.id.split(':')[0]+'@s.whatsapp.net' || dirly.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
var isAuthor = autOwn.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0])
var isOwner = ownId.includes(m.sender)
var isMe = botId.includes(m.sender)
var isCreator = isOwner || isAuthor || isMe

const reply = (text) => {
	dirly.sendMessage(m.chat, {text: text.toString()}, {quoted: m})
}

if (command) {
	dirly.readMessages([m.key])
	console.log()
	console.log(`${m.isGroup ? '\x1b[0;32mGC\x1b[1;32m-CMD' : '\x1b[1;32mPC-CMD'} \x1b[0m[ \x1b[1;37m${command} \x1b[0m] at \x1b[0;32m${calender}\x1b[0m\n› ${m.chat}\n› from; \x1b[0;37m${m.sender.split('@')[0]}\x1b[0m${m.pushName ? ', '+m.pushName : ''}\n› in; \x1b[0;32m${m.isGroup ? groupName : 'Personal Chat'}\x1b[0m`)
}


switch (command) {

case 'menu': case 'help':
reply(`HALO KAK
〝 ╔╗
  ╔╝╬╦╦╦╗╔╦╗
  ║╬║║╔╣╚╬╗║
  ╚═╩╩╝╚═╩═╝
╾┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╼ 
*MENU*
›› .runtime
›› .owner
›› .script
›› .payment
›› .listgrup
›› .push *khusus gc*
›› .push2 *khusus idgc*
›› .public
›› .self
›› .savekontak *auto sv*

*〆YouTube : s.id/dirroneofc*
╾┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╼ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏*
*GROUP SAYYA*
https://chat.whatsapp.com/ILg7FNEViK89NKMpO25RiS`)
break // (?); daftar menu
case "bayar": {
if (!dtext) return reply(`Ketik !pay`)
}
break
case "list": case "listpanel": {
dirlylist = `⫹⫺乂 𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗣𝗔𝗡𝗘𝗟 𝗗𝗜𝗥𝗟𝗬乂⫹⫺

📮RAM 1GB CPU 30% 3K/BULAN
📮RAM 2GB CPU 50% 5K/BULAN
📮RAM 3GB CPU 70% 8K/BULAN
📮RAM 4GB CPU 90% 10K/BULAN
📮RAM 5GB CPU 110% 12K/BULAN
📮RAM - CPU UNLIMITED 15K/BULAN

🍁– FRESH
🍁– ANTI DELAY
🍁– GA BOROS KUOTA
🍁– GA MENUHIN MEMORI
🍁– BISA BUAT RUN BOT NO RIBET
🍁– WEBSITE CLOSE BOT TETAP ON

「 BUY PANEL BOT 」
›› wa.me/6282155772229

ketik .orderpanel kalau ingin order
ketik .menustore jika ingin melihat menu store
\n*_© ∙ DirrphaBotz-Mdོ || ᭄DirroneOfcོ_*`
reply(dirlylist)
}
break // UBAH LIST AE BANG
case 'runtime': case 'ping':
reply(runtime(process.uptime()))
break // (?); runtime bot
case "public": {
if (!isCreator) return reply('khusus elite dirly yang dermawan 😗🤟')
dirly.public = true
reply(`*Sukses Public ✅*`)
}
break
case "self": {
if (!isCreator) return reply('khusus elite dirly yang dermawan 😗🤟')
dirly.public = false
reply(`*Sukses Self ✅*`)
}
break
case 'owner': case 'dirly':
let ownContact = {
	displayName: "Contact", contacts: [{displayName: ownName, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownName+";;;\nFN:"+ownName+"\nitem1.TEL;waid="+ownNumber+":"+ownNumber+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); kontak owner
let soContact = await dirly.sendMessage(m.chat, {contacts: ownContact}, {quoted: m})
setTimeout(() => {dirly.sendMessage(m.chat, {delete: soContact.key})}, 20000)
break
case 'script': case 'sc': // hargai penerbit!
let soScript = await dirly.sendMessage(m.chat, {text: 'Cek Telegram\nhttps://t.me/dirroneofc1', contextInfo: {forwardingScore: 2, isForwarded: true}}, {quoted: m})
setTimeout(() => {dirly.sendMessage(m.chat, {delete: soScript.key})}, 10000)
break // (?); bot script

case 'savekontak': case 'svkontak':
if (!m.isGroup) return reply('KHUSUS GROUP YA KHUSUS GROUP BODOH')
if (!isCreator) return reply('khusus elite dirly yang dermawan 😗🤟')
let cmiggc = await dirly.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:JB" DIR [${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*᭄DirroneOfcོ Proses*')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
dirly.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'DirlyGuanteng🙂🙏.vcf', caption: 'Group: *'+cmiggc.subject+'*\nTotal Kontak: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
break

case 'grouplist': case 'listgrup': case 'listgc': case 'idgrup':
if (!isCreator) return reply('F , sapa lu bebek khusus dirly yang dermawan 😗')
let getGroups = await dirly.groupFetchAllParticipating()
let gclish = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let gclist = gclish.map(v => v.id)
let gctext = `Daftar Chat grup; (total: ${gclist.length})`
for (let a of gclist) {
	let mdata = await dirly.groupMetadata(a)
	gctext += `\n\nSubject: *${mdata.subject}*\nTotal peserta: ${mdata.participants.length}\niD: ${mdata.id}\nCreator : *᭄DirroneOfcོ*`
} // (?); daftar chat grup
reply(gctext.toString())
break

case 'push': case 'pushkontak':
if (!isCreator) return reply('F , sapa lu bebek khusus dirly yang dermawan 😗')
if (!m.isGroup) return reply('KHUSUS GROUP YA KHUSUS GROUP BODOH')
if (!dtext) return reply('Ex: !salah bodoh , #push teks mu')
	let pkDetect = await dirly.groupMetadata(m.chat)
	if (pkDetect.participants.length > 1025) return reply('member maksimal; 900 download sc selanjutnya , Cek Yt dirlyeyy_ atau ketik *sosmed*')
	reply('Mengirim pesan ke '+pkDetect.participants.length+' kontak..')
	for (let a of pkDetect.participants) {
	dirly.sendMessage(a.id, {text: dtext})
	await sleep(500)
} // (?); kirim pesan ke semua peserta grup
reply('Group: *'+pkDetect.subject+'*\nTotal peserta; '+pkDetect.participants.length+'\n\nText;\n'+dtext+'\n\ndelay: 500ms\nmsg_success')
break
// DIRLY REAL 

case "vektor": {
if (!isCreator) return reply('Order dlu hhe 😗')
logo1 = `*VEKTOR*
_https://tinyurl.com/linkvektor_

ketik *orderlogo* jika ingin membeli
ketik *contohjadi* jika ingin melihat contoh`
reply(logo1)
}
break
case "maskot": case "mascot": {
if (!isCreator) return reply('Order dlu hhe 😗')
logo2 = `*MASCOT*
_https://tinyurl.com/linkmaskot_

ketik *orderlogo* jika ingin membeli
ketik *contohjadi* jika ingin melihat contoh`
reply(logo2)
}
break
case "chibi": case "cibi": {
if (!isCreator) return reply('Order dlu hhe 😗')
logo3 = `*CHIBI*
_https://tinyurl.com/linkchibi_

ketik *orderlogo* jika ingin membeli
ketik *contohjadi* jika ingin melihat contoh`
reply(logo3)
}
break

case "face": case "facevektor": {
if (!isCreator) return reply('Order dlu hhe 😗')
logo4 = `FACE VEKTOR
........

ketik *orderlogo* jika ingin membeli
ketik *contohjadi* jika ingin melihat contoh`
reply(logo4)
}
break

case "semua": case "allogo": {
if (!isCreator) return reply('Order dlu hhe 😗')
logo5 = `*VEKTOR*
_https://tinyurl.com/linkvektor_
*CHIBI*
_https://tinyurl.com/linkchibi_
*MASCOT*
_https://tinyurl.com/linkmaskot_
*CONTOH JADI*
_http://Instagram.com/drlysengtor__
*_folow gua mek_*`
reply(logo5)
}
break

case "pay": case "payment": {
if (!isCreator) return reply('Lahh 🗿 , Emang Mau tf')
paydir = `*PAYMENT DIRLY SULTRA*
›› *DANA* ${dana} *${andana}*
›› *GOPAY* ${gopay} *${angopay}*
›› *OVO* ${ovo} *${anovo}*
›› *QRIS* ${setpay} *NAMA TERTERA DI QR*`
reply (paydir)
}
break

// DIRLY REAL
case 'push2': case 'pushkontak2':
if (!isCreator) return reply('F , sapa lu bebek khusus dirly yang dermawan 😗')
	let phkid = dtext.split('|')[0]
	let phktxt = dtext.split('|')[1]
if (!phkid) return reply('Ex: !salah bodoh , push id group|text mu')
if (!phktxt) return reply('Ex: !salah bodoh , push id group|text mu')
	let pk2Detect = await dirly.groupMetadata(phkid)
	if (pk2Detect.participants.length > 1025) return reply('member maksimal; 900 download sc selanjutnya , Cek Yt dirlyeyy_ atau ketik *sosmed*')
	reply('Mengirim pesan ke '+pk2Detect.participants.length+' kontak..')
	for (let a of pk2Detect.participants) {
	dirly.sendMessage(a.id, {text: phktxt})
	await sleep(500)
} // (?); kirim pesan ke semua peserta grup (id)
reply('Group: *'+pk2Detect.subject+'*\nTotal peserta; '+pk2Detect.participants.length+'\n\nText;\n'+phktxt+'\n\ndelay: 500ms\nmsg_success')
break


default:

if (budy.startsWith('>')) {
    if (!isCreator) return
    try {
        let evaled = await eval(budy.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await reply(evaled)
    } catch (err) {
        await reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isOwner) return
    require("child_process").exec(budy.slice(2), (err, stdout) => {
        if (err) return reply(`${err}`)
        if (stdout) return reply(stdout)
    })
}

}
	} catch (err) {
		const errId = isOwner ? m.chat : ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		dirly.sendMessage(errId, {text: require('util').format(err)}, {quoted: m})
		console.log('\x1b[1;31m'+err+'\x1b[0m')
	}
}


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mDirrphaBotz-Mdོ-updated!\x1b[0m')
	delete require.cache[file]
	require(file)
})