const { MessageEmbed, DiscordAPIError } = require("discord.js");
const warns = require("../models/warns");
const mongoose = require("mongoose")

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission !**");
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("**Veuillez mentionner un membre.**");
    let lastWarns = await warns.find({id: member.id})
    if (lastWarns.length && lastWarns[0].reason.length !== 0) {
        let lengthDate = lastWarns[0].date.length
        let date;
        let arrayDate = new Array()
        for (let i = 0; i < lengthDate; i++) {
            let dateIndex = lastWarns[0].date[i]
            date = new Date(parseInt(dateIndex, 10)).toLocaleString()
            arrayDate.push(date)
        }
        let e = new MessageEmbed()
        .setAuthor(member.user.username, member.user.avatarURL())
        .addField("Liste des warns :", lastWarns[0].reason)
        .addField("Date des warns : ", arrayDate)
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