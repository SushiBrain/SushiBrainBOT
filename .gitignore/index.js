const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("=help");
})

bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '=avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

bot.on('message', message => {
  const swearWords = ["=help"];
  if( swearWords.some(word => message.content.includes(word)) ) {
      message.author.send('=avatar : pour voir ton avatar,')
      message.author.send('=help : pour voir les commandes');
    }
})

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **Tu dois préciser le nombre de messages à supprimer .**");
  if(!args[0]) return message.channel.send(":x: **Tu dois préciser le nombre de messages à supprimer .**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`:pencil2: ${args[0]} messages on été supprimer.`).then(msg => msg.delete(2000));
});

}

bot.on('message', message => {
  const swearWords = ["=Antoine"];
  if( swearWords.some(word => message.content.includes(word)) ) {
      message.author.send('Quel beau gosse ! :smirk: :drooling_face:,')
    }
})

bot.on('message', message => {
  const swearWords = ["=antoine"];
  if( swearWords.some(word => message.content.includes(word)) ) {
      message.author.send('Quel beau gosse ! :smirk: :drooling_face:,')
    }
})

bot.on('message', message => {
  const swearWords = ["=Tristan"];
  if( swearWords.some(word => message.content.includes(word)) ) {
      message.author.send('Le meilleur pédopanda ! :panda_face:')
    }
})

bot.on('message', message => {
  const swearWords = ["=tristan"];
  if( swearWords.some(word => message.content.includes(word)) ) {
      message.author.send('Le meilleur pédopanda ! :panda_face:')
    }
})
    
bot.on('message', (message) => {
    
    if(message.content == 'Bonjour !') {
        message.reply('Salut !');
    }

});

bot.on('message', (message) => {
    
    if(message.content == 'bonjour !') {
        message.reply('Salut !');
    }

});

bot.on('message', (message) => {
    
    if(message.content == 'Bonjour') {
        message.reply('Salut !');
    }

});

bot.on('message', (message) => {
    
    if(message.content == 'bonjour') {
        message.reply('Salut !');
    }

});


bot.login(process.env.TOKEN);
