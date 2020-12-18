module.exports = message => {
    const rndNBR = Math.floor(Math.random()*(100-1+1)+1);
    return message.reply('🎲' + rndNBR);
}