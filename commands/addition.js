module.exports = {
	name: 'addition',
	aliases: ['add'],
	description: 'Add two numbers!',
	cooldown: 5,
	guildOnly: true,
	args: true,
	usage: "[arg1] + [arg2]", 
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {

        if(args[1] !== '+') {
            return msg.reply('You must put plus sign!')
        }

        var a = parseInt(args[0])
        var b = parseInt(args[2])
        var result = a +b;
        msg.reply('The rusult is '+result);
	},
};