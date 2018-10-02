const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("SushiBrain le meilleur");
})

client.on('message', message => {
    if (message.content === '=avatar') {
      var member= message.mentions.members.first();
      let embed = new Discord.RichEmbed()
    .setImage(message.member.avatarURL)
    .setColor('#275BF0')
      message.channel.send(embed)
    }
  });

bot.login(process.env.TOKEN);
