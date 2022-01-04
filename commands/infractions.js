const { MessageEmbed, DiscordAPIError } = require("discord.js");
const warns = require("../models/warns");
const mongoose = require("mongoose")

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission !**");
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("**Veuillez mentionner un membre.**");
    let lastWarns = await warns.find({id: member.id})
    if (lastWarns.length) {
        let e = new MessageEmbed()
        .setAuthor(member.user.username, member.user.avatarURL())
        .addField("Liste des warns :", lastWarns[0].reason)
        .setTimestamp()
        .setColor("GREEN")
        message.channel.send(e)
    } else {
        let e = new MessageEmbed()
        .setAuthor(member.user.username, member.user.avatarURL())
        .addField("Liste des warns :", `Aucun warn trouvé pour ce membre.`)
        .setTimestamp()
        .setColor("RED")
        message.channel.send(e)
    }
}

module.exports.help = {
    name: "infractions"
}