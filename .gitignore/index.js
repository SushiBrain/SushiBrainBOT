const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("SushiBrain le meilleur");
})

bot.login(process.env.TOKEN);
