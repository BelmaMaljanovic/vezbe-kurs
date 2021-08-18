var players = {}
module.exports = {
	name: 'play',
	aliases: [],
	description: 'Test if it works',
	cooldown: 2,
	guildOnly: true,
	args: false,
	usage:"<number>",
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
		var inputValue = args[0]
		var userId = msg.author.id

		if(inputValue === 'start'){
			players[userId] =  Math.floor(Math.random() * 10) + 1
			return msg.reply("New game started\n The number has been created!")
		} 

		if(players[userId]){
			if(players[userId] !== parseInt(inputValue)){
				return msg.reply('You didn\'t guess right!')
			}
			
			delete players[userId]
			return msg.reply('Thats the number!')
		}

		msg.reply('Use command \`!play start\` to play the game!')
	},
};