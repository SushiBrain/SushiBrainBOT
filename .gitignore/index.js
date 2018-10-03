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

bot.on('message', message => {
    const swearWords = ["Putain", "putain","Merde","merde"];
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Message supprimer pour : insulte ! Veuillez ne plus insulter sous peine de se faire ban ! Le STAFF');
      }
})

bot.on('message', message => {
  const swearWords = ["=help"];
  if( swearWords.some(word => message.content.includes(word)) ) {
      message.author.send('TEST');
    }
})

bot.login(process.env.TOKEN);
