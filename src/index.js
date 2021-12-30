const messages = [
    'Jef',
    'Alvar',
    'Karina',
    'Oscar',
    'David',
    'Lucy',
    'Jorge',
    'Mauricio'
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);
}

module.exports = { randomMsg }