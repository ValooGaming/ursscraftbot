const { MessageEmbed }= require("discord.js")

module.exports.run = (client, message, args) => {
    let answers = ["Oui :white_check_mark:", "Non :x:", "Je sais pas :thinking:", "T'es gay en fait", "Ptdr t ki :joy:"]
    let question = args.slice(0).join(" ") 
    if (!question) return message.channel.send("**Veuillez entrer une question !**");
    let e = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.tag, message.author.avatarURL())
    .addField("Question : ", question)
    .setTimestamp(Date.now())
    .addField("Réponse : ", answers[Math.floor(Math.random() * answers.length)])
    message.channel.send(e)
}

module.exports.help = {
    name: "8ball"
}