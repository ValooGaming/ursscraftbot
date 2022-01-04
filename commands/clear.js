module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission !**");
    let msgs = parseInt(args[0], 10)
    message.channel.bulkDelete(msgs)
    .then(() => {
        message.channel.send(`**${msgs} messages ont été supprimés !**`)
    })
}

module.exports.help = {
    name: "clear"
}