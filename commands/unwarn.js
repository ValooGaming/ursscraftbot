const mongoose = require("mongoose");
const warns = require("../models/warns")
const { MessageEmbed } = require("discord.js")

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission !**");
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("**Veuillez mentionner un membre.**")
    let warnsList = await warns.find({id: member.id})
    if (warnsList.length) {
        warns.findOne({id: member.id})
        .then(doc => warns.updateOne({ _id: doc._id }, {
            $pop: { reason: 1 }
        }))
        message.channel.send(`Le dernier warn de **${member}** a été supprimé avec succès. Voici la nouvelle liste de warns de cet utilisateur : `)
        .then(async () => {
            let newWarnlist = await warns.find({id: member.id})
            if (newWarnlist.length && newWarnlist[0].reason.length !== 0) {
                let e = new MessageEmbed()
                .setAuthor(member.user.username, member.user.avatarURL())
                .addField("Liste des warns :", newWarnlist[0].reason)
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
        })
    } else {
        message.channel.send(`**${member.user.tag}** n'a aucun warn.`)
    }
}

module.exports.help = {
    name: "unwarn"
}