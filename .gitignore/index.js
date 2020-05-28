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

client.on('guildMemberAdd', member => {
    const welcomechanel = member.guild.channels.find((x) => x.id === '713383031800594523';
    let b_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`Bienvenu(e) a ${member.user.username} qui nous a rejoint`)
    return welcomechanel.send(b_embed)
})

client.on('guildMemberRemove', member => {
    const welcomechanel = member.guild.channels.find((x) => x.id === '713383031800594523';
    let a_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`${member.user.username} nous a quitte`)
    return welcomechanel.send(a_embed)
})

bot.login(process.env.TOKEN);
