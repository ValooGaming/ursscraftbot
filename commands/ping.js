module.exports.run = (client, message, args) => {
    let debut = Date.now();
    message.channel.send('Calcul du ping...')
    .then((m) => m.edit(`Ping : **${Date.now() - debut}** ms`));
}

module.exports.help = {
    name: "ping"
}