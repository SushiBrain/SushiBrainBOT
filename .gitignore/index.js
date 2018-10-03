const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("être codé par SushiBrain");
})

bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '=avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

bot.login(process.env.TOKEN);
