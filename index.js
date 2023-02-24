// Code your solutions in this file

const name = ["Charlie", "Samip", "Ali"];
const event = "birthday"

function writeCards(name, event) {
    const message = [];
    for (let i = 0; i < name.length; i++) { 
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        debugger;
    }

    return message;
}

writeCards(name, event);

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }

    return number;
}

