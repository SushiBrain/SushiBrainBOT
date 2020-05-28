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

client.on('message', async msg => {
        if (msg.author.bot) return;
        if (!msg.content.startsWith('!')) return
        const args = msg.content.split(' ')
        let command = msg.content.toLowerCase().split(' ')[0]
        command = command.slice(PREFIX.length)
 
        if (command === 'play') {
                const voiceChannel = msg.member.voiceChannel;
                if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
                voiceChannel.join()
                        .then(connection => {
                                const dispatcher = connection.playStream(ytdl(args[1]))
                                console.log(dispatcher.time)
                        })
                        .catch(console.log)
        }
});

bot.login(process.env.TOKEN);
