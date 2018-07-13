const Discord = require("discord.js");
var google = require('google');
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
   if (message.author.bot) return;
   google.resultsPerPage = 3
   var nextCounter = 0
    
   google(args.join(" "), function (err, res){
     if (err) console.error(err)
       var link1 = res.links[0];
       message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `Googled ${link1.title}`,
        url: link1.link,
        fields: [{
            name: link1.title,
            value: link1.description,
        }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: `${message.author.username}#${message.author.discriminator}`
        }
      }       
    });

   })
  }

module.exports.help = {
    name: "google"
}