const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("b!");

bot.on('ready', () =>  {
    console.log("Je suis connecté !")
  });

bot.login('NDgyMzQxNDMwMTI4NDEwNjQ0.DmDfIg.A8NNGbMdG65_9Do5XPVEJlNX7qc')

bot.on('message', message => {
    if(message.content.startsWith(prefix + "cc")) {
        message.channel.send("**Salut !**")
    }
})
