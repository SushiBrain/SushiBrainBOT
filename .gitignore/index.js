const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("SushiBrain le meilleur");
})

client.on('message', message => {
  
  if (message.content === '=avatar') {
    
    message.reply(message.author.avatarURL);
  }
});

bot.login(process.env.TOKEN);
