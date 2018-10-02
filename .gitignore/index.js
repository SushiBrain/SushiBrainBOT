const Discord = require("discord.js");

var bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on("ready", function(){
    bot.user.setGame("SushiBrain Le meilleur");
    consol.log("Bot bien connecté");
})
