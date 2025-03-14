const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

Hitung Mundur Idul Fitri 🌙 
${mundur}

*STATISTICS*
 • Upload : ${upload}
 • Downloads : ${download}

*BOT INFO*
 • Creator : ${ownerName}
 • Bot Name : ${botName}
 • Time : ${jam}
 • Date : ${tanggal(new Date())}
 • Runtime : ${runtime(process.uptime())}

*USER INFO*
 • Name : ${pushname !== undefined ? pushname : '-'}
 • Status : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 • Limit : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 • Limit Game : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
 • Balance : ${getBalance(sender, balance)}
 • Role : ${role}
 
 
*MAIN MENU*${petik}
 • ${prefix}menu
 • ${prefix}infobot
 • ${prefix}donate
 • ${prefix}dashboard
 • ${prefix}owner
 • ${prefix}cekdrive
 • ${prefix}cekbandwidth
 • ${prefix}cekpremium
 • ${prefix}listpremium
 • ${prefix}listsewa
 • ${prefix}speed
 • ${prefix}runtime
 • ${prefix}listbahasa${petik}

*CONVERTER/TOOLS*${petik} 
 • ${prefix}sticker
 • ${prefix}qc
 • ${prefix}xquote
 • ${prefix}stickerwm
 • ${prefix}smeme
 • ${prefix}toimg
 • ${prefix}tomp3
 • ${prefix}ttp
 • ${prefix}attp
 • ${prefix}emojimix
 • ${prefix}ai
 • ${prefix}aiimg
 • ${prefix}aidraw
 • ${prefix}chatgpt
 • ${prefix}nuliskiri
 • ${prefix}nuliskanan
 • ${prefix}foliokiri
 • ${prefix}foliokanan
 • ${prefix}say
 • ${prefix}translate${petik}

*ANONYMOUS CHATS*${petik}
 • ${prefix}menfess
 • ${prefix}confess
 • ${prefix}balasmenfess
 • ${prefix}tolakmenfess
 • ${prefix}stopmenfess
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}next
 • ${prefix}stop
 • ${prefix}sendprofile${petik}

*DOWNLOADS MENU*${petik}
 • ${prefix}play
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}instagram
 • ${prefix}igphoto
 • ${prefix}igvideo
 • ${prefix}igreels
 • ${prefix}tiktok
 • ${prefix}tiktoknowm
 • ${prefix}tiktokaudio
 • ${prefix}mediafire
 • ${prefix}gitclone${petik}

*GAME MENU*${petik}
 • ${prefix}tebakgambar
 • ${prefix}tebakkata
 • ${prefix}tebakbendera
 • ${prefix}tebakkalimat
 • ${prefix}tebaksiapa
 • ${prefix}tebakkimia
 • ${prefix}tebaklirik
 • ${prefix}tebaktebakan
 • ${prefix}tekateki
 • ${prefix}susunkata
 • ${prefix}tictactoe
 • ${prefix}delttt
 • ${prefix}casino
 • ${prefix}delcasino${petik}

*SEARCH MENU*${petik}
 • ${prefix}lirik
 • ${prefix}grupwa
 • ${prefix}pinterest
 • ${prefix}ytsearch${petik}

*STORAGE*${petik}
 • ${prefix}addstik
 • ${prefix}addvn
 • ${prefix}addimg
 • ${prefix}addvid
 • ${prefix}liststik
 • ${prefix}listvn
 • ${prefix}listimg
 • ${prefix}listvid${petik}
 
*BAILEYS*${petik}
 • ${prefix}fitnah
 • ${prefix}nowa
 • ${prefix}getquoted
 • ${prefix}fakehidetag
 • ${prefix}react
 • ${prefix}setcmd
 • ${prefix}delcmd${petik}

`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `Untuk List Sewa ubah sendiri di folder command, file help.js 👌 baris ke 521`