module.exports = (client, message) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    return message.reply(`Sorry you are not eligible`)
  }

  return message
    .react('😢')
    .then(msg => client.destroy())
    .catch(error => message.reply(`Sorry, an error occured.`))
}