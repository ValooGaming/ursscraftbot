module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission !**")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("**Veuillez mentionner un membre.**")
    if (!member.manageable) return message.channel.send("**Je ne peux pas mute ce membre.**")
    let muterole = message.guild.roles.cache.find((role) => role.name === "Muted");
    if (muterole) {
        member.roles.add(muterole);
        message.channel.send(`**${member}** a été mute par **${message.author}**`)
    } else {
        message.guild.roles.create({
            data: {
                name: "Muted", 
                permissions: 0
            }
        })
        .then((role) => {
            message.guild.channels.cache.filter((channel) => channel.type === "text")
            .forEach(function (channel) {
                channel.overwritePermissions([
                    {
                        id: role,
                        deny: ["SEND_MESSAGES"]
                    }
                ])
            })
            member.roles.add(role)
            message.channel.send(`**${member}** a été mute par **${message.author}**`)
        })
    }
}

module.exports.help = {
    name: "mute"
}