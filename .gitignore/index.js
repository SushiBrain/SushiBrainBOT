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

// Delete a message
bot.on.message.delete()
  .then(msg => console.log(`=msg ${msg.author.username}`))
  .catch(console.error);

bot.login(process.env.TOKEN);
