const mongoose = require("mongoose")
const Warns = require("../models/warns");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission.**")
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("**Veuillez mentionner un membre.**");
    Warns.findOneAndDelete({id: member.id})
    .then(() => {
        message.channel.send(`Les warns de ${member} ont bien été supprimés !`)
    })
    .catch((e) => {
        console.error(e)
    })
}

module.exports.help = {
    name: "clearwarns"
}