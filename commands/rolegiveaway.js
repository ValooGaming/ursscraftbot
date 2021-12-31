const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Vous n'avez pas la permission.**")
    if (!args[0]) return message.channel.send("**Veuillez spécifier le temps du giveaway.**");
    if (!args[0].endsWith("d") && args[0].endsWith("h") && args[0].endsWith("m")) return message.channel.send("**Veuillez indiquer un format de temps valide.**");
    if (isNaN(args[0][0])) return message.channel.send("**Le temps indiqué n'est pas un nombre !**");
    let channel = message.mentions.channels.first();
    if (!channel) return message.channel.send("**Le channel indiqué n'a pas été trouvé**");
    let role = message.mentions.roles.first();
    if(!role) return message.channel.send('**Merci de mentionner un rôle.**');
    let arr = new Array();
    role.members.forEach(user => {
	    arr.push(`${user.user.username}`);
    })
    if (arr.length == 0) {
        message.channel.send("**Aucun membre ne possède ce rôle.**")
    } 
    let prize = args.slice(3).join(" ");
    if (!prize) return message.channel.send("**Veuillez indiquer le prix à gagner.**");
    message.channel.send(`**Le concours a été crée dans ${channel}**`);
    let e = new Discord.MessageEmbed()
    .setTitle("Nouveau giveaway !")
    .setDescription(`${message.author} a lancé un concours où le prix à gagner est : ${prize}`)
    .addField("La liste des participants est : ", `${arr.join("\n")}`)
    .setTimestamp(Date.now()+ms(args[0]))
    .setColor("RED")
    channel.send(e)
    console.log(arr[Math.floor(Math.random() * arr.length)])
    setTimeout(() => {
        let winner = arr[Math.floor(Math.random() * arr.length)]
        channel.send(`**Le gagnant du concours pour le prix : ${prize} est : ${winner} !**`)
    }, ms(args[0]))
}

module.exports.help = {
    name: "rg"
}