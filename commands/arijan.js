module.exports = {
	name: 'arijan',
	aliases: false,
	description: false,
	cooldown: 3,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
    var obim
    var povrsina
    var inputValue = parseInt(args[1])
    if(args[0] == "krug") {
        povrsina = Math.pow(inputValue,2)*Math.PI
        obim = 2 * inputValue*Math.PI
        msg.reply(`Povrsina je: ${povrsina}`)
        msg.reply(`Obim je: ${obim}`)
        
    } 
    else if(args[0] == "kvadrat"){
        
        povrsina = Math.pow(inputValue,2)
        obim = 4 * inputValue
        console.log(povrsina)
        console.log(obim)
        msg.reply(`Povrsina je: ${povrsina}`)
        msg.reply(`Obim je: ${obim}`)
    }  
    else if(args[0] == "trougao"){
        var a = inputValue
        var b = parseInt(args[2])
        var c = parseInt(args[3])
        if(!(a + b > c && b + c > a && a + c > b)){
            msg.reply("Nemoguce je formirati trougao od datih duzina")
        }
        obim = a + b + c
        var s = obim / 2
        povrsina = Math.sqrt(s * (s - a) * (s - b) * (s - c))
        msg.reply(`Povrsina je: ${povrsina}`)
        msg.reply(`Obim je: ${obim}`)
    }
    else if(args[0] == "pravougaonik"){
        povrsina = parseInt(args[1]) * parseInt(args[2])
        obim = 2 * (args[1] + args[2])
        msg.reply(`Povrsina je: ${povrsina}`)
        msg.reply(`Obim je: ${obim}`)
    }

    }
};