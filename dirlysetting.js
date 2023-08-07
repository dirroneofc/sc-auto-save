//SUBSCRIBE MY YOUTUBE DIRRONE OFC
global.d = new Date()
global.calender = d.toLocaleDateString('id')

global.prefix = "." // Command prefix
global.ownNumb = "+62 857-1593-2276" // Nomor owner
global.owned = "628571593227" // Ganti no mu
global.ownName = "᭄DirroneOfcོ" // Nama owner

/* PAYMENT */
global.dana = "085715932276" // ganti kalau mau
global.gopay = "085715932276" // ganti kalau mau
global.ovo = "DirrXzBotz" //ganti kalau mau
global.setpay = "https://telegra.ph/Weiss-07-15" //link all pay mu

/* ATAS NAMA PAY */
global.andana = "D****" // ganti 
global.angopay = "D****" // gant
global.anovo = "DirrXzBotz" // kalau ada ganti

/* ∙ 𝓭𝓲𝓻𝓵𝔂𝓑𝓸𝓽𝔃 ㊛
nomer owner satu aja, jangan d kasih duoble.
prefix nya single, ga multi.
prefix default "." (titik) kalo mau ganti ganti aja.
version; 1.0 */

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = "req(62-8S57547ms11).287p"
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mDirrphaBotz-Mdོ-updated!\x1b[0m')
	delete require.cache[file]
	require(file)
})