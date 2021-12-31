module.exports = (client, member) => {
    member.guild.channels.cache.get('901159530199666750').send(':smile: **Bienvenue **' + member.user + " :partying_face: ** Nous sommes **" + member.guild.memberCount);
    member.roles.add('901160471053357128')
}
