const messages = [
    'Hello World',
    'You are awesome',
    'You are the best',
    'This is a random message',
    'Batman! Batman! Batman!',
    'I am Batman',
    'You are no real',
    'What is your name?',
    'I am a bot',
    'I am a human',
    'I can hear you',
    'I can see you',
    'I can feel you',
    'I can not help you',
    'Save the world',
    'My friends watch me',
    'Help me',
    'I do not know',
    'Maybe yes',
    'Maybe not',
    'Are we real? Obviously I am not',
    'Yes, this is the final message',
    'Just Chill'
];

const randomMessageGenerator = () => {
    let message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
    randomMessageGenerator
};



