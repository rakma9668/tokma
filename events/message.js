const kick      = require('../commands/kick')
const ban       = require('../commands/ban')
const roll      = require('../commands/roll')
const dl        = require('../commands/download')
const commands  = require('../commands/commands')
const tavern    = require('../commands/tavern')
const register  = require('../commands/register')
const status    = require('../commands/status')
const create    = require('../commands/create')

var disableReg = false;
const prefix    = process.env.PREFIXE;

module.exports = (fs,client,Discord, message) => {

    if ( message.content.startsWith(prefix + 'kick') )
        return kick(message)

    if ( message.content.startsWith(prefix + 'ban') )
        return ban(message)

    if ( message.content === prefix + 'roll' )
        return roll(message)

    if ( message.content === prefix + 'download' )
        return dl(Discord,message)

    if ( message.content === prefix + 'commands' )
        return commands(Discord,message)
    
    if ( message.content.startsWith(prefix + 'tavern') ) 
        tavern(fs,prefix,Discord,message)

    if ( message.content === prefix + 'status' )
        return status(fs,Discord,message)

    if ( message.content === prefix + 'fortune' ) {
        var fortune = require('fortune-teller')
        var fortune = fortune.fortune();
        return message.reply(fortune);
    }

    /*
    if ( message.content === prefix + 'disreg' && message.member.hasPermission("BAN_MEMBERS") ){
        disableReg = true;
        return message.reply( 'Registration closed')
    }


    if ( message.content === prefix + 'enreg' && message.member.hasPermission("BAN_MEMBERS") ){
        disableReg = false;
        return message.reply( 'Registration open')
    }
    

    if ( message.content === prefix + 'register' ) {
        
        if ( !disableReg ) {
            return message.author.send('To register an account use command `!create username password email`')
                .catch(() => message.reply("Can't send DM to you, please enable **Allow direct messages from server members.**"));
        }
        
        return message.reply( 'This command is disabled!')
    }

    
    if( message.content.startsWith(prefix + 'create') && message.channel.type === "dm" ){
        
        if ( !disableReg ) {
            return create(fs,prefix,Discord,message)
        }
        
        return message.reply( 'This command is disabled!')
    }
    */

}