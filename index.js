
function writeCards(name, event) {
    const messages = [];
    for(let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        
    }   
    return messages;
}

 let num = 10
function countDown(num) {
    while (num >= 0) {
    console.log(num);
    num--;
    }
    
}

