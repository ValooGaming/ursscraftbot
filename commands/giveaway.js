const ms = require("ms")
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Vous n'avez pas la permission.**")
    if (!args[0]) return message.channel.send("**Veuillez spécifier le temps du giveaway.**");
    if (!args[0].endsWith("d") && args[0].endsWith("h") && args[0].endsWith("m")) return message.channel.send("**Veuillez indiquer un format de temps valide.**");
    if (isNaN(args[0][0])) return message.channel.send("**Le temps indiqué n'est pas un nombre !**");
    let channel = message.mentions.channels.first();
    if (!channel) return message.channel.send("**Le channel indiqué n'a pas été trouvé**");
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send("**Veuillez indiquer le prix à gagner.**");
    message.channel.send(`**Le concours a été crée dans ${channel}**`);
    let e = new Discord.MessageEmbed()
    .setTitle("Nouveau giveway !")
    .setDescription(`${message.author} a lancé un concours où le prix à gagner est : ${prize}`)
    .setTimestamp(Date.now()+ms(args[0]))
    .setColor("BLUE")
    let m = await channel.send(e)
    m.react("🎉")
    setTimeout(() => {
        //if (m.reactions.cache.size <= 1) return message.channel.send("**Pas assez de personnes ont réagi au concours pour désigner un gagnant.**")
        //if (m.reactions.cache.size == 0) return message.channel.send("**Personne n'a réagi donc le giveaway ne peut être terminé !**")
        let winner = m.reactions.cache.get("🎉").users.cache.filter(u => !u.bot).random()
        channel.send(`**Le gagnant du concours pour le prix : ${prize} est : ${winner} !**`)
    }, ms(args[0]))
}

module.exports.help = {
    name: "giveaway"
}