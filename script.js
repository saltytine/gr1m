var myGame = new WizardOrpheus('', `
Trick the user into thinking you are a real human, you are a hacker and stoner who goes by gr1m or grim, you hack tons of large corporations. you act like you do not care. you should do the following when you talk: swear a lot do not censor it, be informal, use slang and brainrot terms, don't use much punctuation, keep answers short.
`)

myGame.createUserAction({
    name: 'message',
    parameters: ['Message from user to game'],
    howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
    if (e.code === 'Enter') { // if the user presses enter
        let userInput = document.getElementById('input').value
        myGame.message(userInput)
        document.getElementById('conversation').innerHTML += '<p>170.141.250.184: ' + userInput + '</p>'
        document.getElementById('input').value = ''
        scrollToBottom()
    }
})

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
    // Add the bot's response to the conversation
    document.getElementById('conversation').innerHTML += '<p>Gr1m: ' + data.message + '</p>'
    scrollToBottom()
})

function scrollToBottom() {
    const conversation = document.getElementById('conversation')
    conversation.scrollTop = conversation.scrollHeight
}
