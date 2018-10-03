const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("SushiBrain le meilleur");
})

bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '=avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

  channel.sendMessage('=admin')
 .then(message => console.log(`Sent message: ${message.content}`))
 .catch(console.error);

bot.login(process.env.TOKEN);
