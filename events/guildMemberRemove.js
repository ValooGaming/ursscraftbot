module.exports = (client, member) => {
    member.guild.channels.cache.get('901159530199666750').send(':cry: **Aurevoir **' + "<@"+member.user+">" + ' :cry: ** Nous sommes **' + member.guild.memberCount);
}