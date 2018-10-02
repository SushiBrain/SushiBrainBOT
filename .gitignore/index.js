const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("SushiBrain le meilleur");
})

clientInformation.on('message', message => {
    if (message.content === "=Admin") {
    message.reply("Les meilleurs Administrateurs du monde !");
    }
})

bot.login(process.env.TOKEN);
