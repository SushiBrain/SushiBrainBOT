const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("SushiBrain le meilleur");
})

if (message.content.startsWith('!ban')) {
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
        
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          
          message.reply('I was unable to ban the member');
          
          console.error(err);
        });
      } else {
        
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});

bot.login(process.env.TOKEN);
