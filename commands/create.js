module.exports = (fs,prefix,Discord,message) => {
	const rq 		= require('superagent');
	const args 		= message.content.slice(prefix.length).split(' ');
	const command 	= args.shift().toLowerCase();
	// remove command from arg list
	delete args[command];

	if ( !args.length || args.length !== 3) { return "You didn't provide requierd arguments"; }

	var password = require("crypto").createHash("sha256").update(args[1]).digest("hex");
		password = password.toUpperCase()

	// POST to server
	rq.post( process.env.SERVER_IP + '/register' )
	.set({ 'authorization' : process.env.SERVER_TOKEN })
	.query({ mail: args[2], username: args[0], password: password})
	.end((err, res) => {
		if (err) { return message.author.send( 'Could not establish connection to server' ) }
		var data = JSON.stringify( res.body )		
		// check response 
		if ( res.body.ok == true) {
			return message.author.send( 'Account created, your uid: ' + res.body.id )
		}else{
			return message.author.send( 'Could not create your account, try chaning `username` or `email`' )
		}
	});

}