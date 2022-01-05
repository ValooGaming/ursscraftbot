module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission !**")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("**Veuillez mentionner un membre.**")
    if (!member.manageable) return message.channel.send("**Je ne peux pas unmute ce membre.**")
    let muterole = message.guild.roles.cache.find((role) => role.name === "Muted");
    if (muterole && member.roles.cache.has(muterole.id)) member.roles.remove(muterole)
    message.channel.send(`**${member}** a été **unmute** !`)
}

module.exports.help = {
    name: "unmute"
}