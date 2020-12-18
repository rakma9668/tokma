module.exports = (Discord, message) => {
    return message.author.send('To register an account do `!create username password email` with your information')
   		.catch(() => message.reply("Can't send DM to you, please enable **Allow direct messages from server members.** found in **Privacy & Saftey**"));
}