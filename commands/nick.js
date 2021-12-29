module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Vous n\'avez pas la permission !'); }
    if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Le bot n\'a pas la permission !'); }
    let nickMember = message.mentions.users.first();
    if (!nickMember) return message.channel.send("**Merci de mentionner un membre.**")
    let nickname = args.slice(1).join(" ");
    message.mentions.members.first().setNickname(nickname)
    .then(() => {
        if (nickname) {
            message.channel.send("**Pseudo changé en : **"+nickname)
        } else {
            message.channel.send("**Pseudo rénitialisé**")
        }
    })
    .catch((err) => console.error(err))
}

module.exports.help = {
    name: "nick"
}