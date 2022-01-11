module.exports = async(client, data) => {
    console.log("bot lancé")
    client.user.setActivity("ursscraft.mine.fun")
    client.channels.cache.get(process.env.STATUS_CHANNEL_ID).send("🟢 Bot allumé !")
}