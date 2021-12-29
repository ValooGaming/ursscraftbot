const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
        return message.channel.send("**Vous n'avez pas la permission !**") 
    };
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        return message.channel.send("**Le bot n'a pas la permission !") 
    };
    if (message.mentions.users.size === 0) {
        return message.channel.send("**Vous devez mentionner un utilisateur !**");
    }

    let banMember = message.guild.member(message.mentions.users.first());
    if (!banMember) {
        return message.channel.send("**Je n'ai pas trouvé l'utilisateur !**");
    }
    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send("**Veuillez indiquer une raison à votre ban.**")

    message.mentions.users.first().send(`Vous êtes banni du serveur **${message.guild.name}** par **${message.author.username}** pour la raison suivante : **${reason}**`)
    .then(() => {
        banMember.ban()
        .then((member) => {
            message.channel.send(`**${member.user.username}** est **banni** par **${message.author.username}** pour la raison : **${reason}**`)
        })
        .catch((err) => {
            if (err) return console.error(err)
        });
    })
    .catch((err) => {
        if (err) console.error(err);
        banMember.ban()
        .then((member) => {
            message.channel.send(`**${member.user.username}** est **banni** par **${message.author.username}** pour la raison : **${reason}**`);
        })
        .catch((err) => {
            if (err) return console.error(err);
        })
    })
}

module.exports.help = {
    name: "ban"
}
