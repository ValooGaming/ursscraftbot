const Discord = require("discord.js")

module.exports.run = (client, message) => {
    let e = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("GREEN")
    .addField("L'ip du serveur est : ", `ursscraft.mine.fun`)
    .addField("La version du serveur est : ", `1.15.2`)
    message.channel.send(e)
}

module.exports.help = {
    name: "server"
}