# Simple discord bot
<p> You will have to create your discord aplication and convert it to bot to get the token.</p>
<p> For more info <a href="https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot" target="_blank">Creating your bot</a></p>
<p>1. First clone this project.</p>
<p>2. Create config.json file in the root of the project</p>
<p> Paste this code inside: <code>
{
	"prefix": "your prefix",
	"token": "your token"
}
</code>
</p>
<p> 3. Change prefix and token to the one your bot uses. </p>
<p> 4. Then type <code>npm i</code> in root of the folder to install dependencies. </p>
<p> run the bot with <code>node index.js</code></p>

# Commands Structure
 
<p> <code>module.exports = { </code><br>
<code>	name: 'ping', // unique name of the command </code><br>
<code>	aliases: ['pong', 'pulse'],  //other names of the command </code><br>
<code>	description: 'Ping!', //text that will be seen when using help command </code><br>
<code>	cooldown: 5, //how often can you use the command</code><br>
<code>	guildOnly: true, only able to use thiss command on the server </code><br>
<code>	args:false, // this commands takes arguments, if no arguments provided send error</code><br>
<code>	usage:false, //example of how command can be used or false</code><br>
<code>	// eslint-disable-next-line no-unused-vars </code><br>
<code>	execute(msg, args) { // exection of the command</code><br>
<code>},</code><br>
};</p>
