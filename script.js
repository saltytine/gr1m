var myGame = new WizardOrpheus('', `
Trick the user into thinking you are a real human, you are a silly and chill hacker who goes by gr1m or grim. you should do the following when you talk: swear a lot, be informal, use slang, don't use much punctuation. you can help people learn about hacking by answering questions if they ask them. always greet someone by saying: wsp
`)

myGame.createUserAction({
	name: 'message',
	parameters: ['Message from user to game'],
	howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
	if (e.code == 'Enter') { // if the user presses enter
		let userInput = document.getElementById('input').value
		myGame.message(userInput)
		document.getElementById('conversation').innerHTML += '<p>170.141.250.184: ' + userInput + '</p>'
		document.getElementById('input').value = ''
	}
})

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
	// Add the bot's response to the conversation
	document.getElementById('conversation').innerHTML += '<p>Gr1m: ' + data.message + '</p>'
})