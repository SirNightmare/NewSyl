const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
let client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
  if(message.author.bot) return;
  message.reply(`Check you DM's :inbox_tray:`)
var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Fun!")
.addField(`?asciify (Text)`, `Asciify's the given text!`)
.addField(`?gif (gif name)`, `Searches and sends the gif!`)
.addField(`?npm (NPM package)`, `Sends infomation on the NPM package!`)
.addField(`?meme`, "Sends you a random meme.")
.addField(`?pat (@user)`, "Pats the user you mentions.")
.addField(`?say (Text)`, "Sylveon repeates the text you gave.")
.addField(`?shorten (URL) (Shorten URL text)`, "Shortens the URL.")
.addField(`?google (What To Google)`, "Searches google for a result.")
.setColor(0xff7cff)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setColor(0xffadff)
.setTitle("Music!")
.addField(`?add (Video name)`, `Adds a song to queue!`)
.addField(`?search (Video name)`, `Adds a song to queue higher accuracy on getting right video!`)
.addField(`?play`, `Plays the songs you added to the queue!`)
.addField(`?skip`, `Skips a song`)
.addField(`?pause`, `Pauses playing song!`)
.addField(`?resume`, `Resumes the playing song!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("NSFW!")
.setColor(0xff00ff)
.addField(`?4k`, `Sends a 4k NSFW Photo!`)
.addField(`?lewd`, `Sends a lewd NSFW Photo!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("MrNightmare_'s commands!")
.setColor(0xffbffa)
.addField(`?eval`, `Evaluates JavaScript Code`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Utility")
.setColor(0xed84ca)
.addField(`?weather (location)`, `Sends weather infomation on the location!`)
.addField(`?translate (language) (word/phrase/sentence)`, `Translates the thext to the selected language!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Pokemon!")
.setColor(0xf75da5)
.addField(`?dex (pokemon)`, `Sends Pokedex info about the selected Pokemon!`)
.addField(`?ability (Pokemon Ability)`, `Sends you info about the selected pokemon ability!`)
.addField(`?type (Pokemon Type)`, `Sends you info on the given type!`)
.addField(`?move (Pokemon Move)`, `Sends you info on the given move!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Moderation")
.setColor(0xff89f1)
.addField(`?ban (@mention) (Reason)`, `Manage Members permission needed also an incidents channel!`)
.addField(`?mute (@mention || User ID)`, `Mute Members permission needed!`)
.addField(`?unmute (@mention)`, `Mute Members permission needed!`)
.addField(`?kick (@mention) (Reason)`, `Manage Members permission needed!`)
message.author.send(embed)
  }

module.exports.help = {
    name: "help"
}