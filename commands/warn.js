const { MessageEmbed } = require("discord.js");
const Warns = require("../models/warns");
const mongoose = require("mongoose");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission !**");
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("**Veuillez mentionner un membre à warn.**")
    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send("**Veuillez indiquer une raison à votre warn.**");
    let response = await Warns.find({id: member.id})
    if (!response.length) {
        let newWarn = await Warns.create({
            id: member.id,
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        let savedWarn = await newWarn.save()   
        .then(() => {
            message.channel.send(`**${member}** a été warn par **${message.author}** pour la raison : **${reason}**`)
        }) 
        .catch((err) => {
            message.channel.send("Une erreur est survenue");
            console.error(err)
        })
    } else {
        Warns.findOne({id: member.id})
        .then(doc => Warns.updateOne({ _id: doc._id }, {
            $push: {
                reason: reason,
                date: Date.now()
            }
        }))

        message.channel.send(`**${member}** a été warn par **${message.author}** pour la raison : **${reason}**`)
    }
}

module.exports.help = {
    name: "warn"
}