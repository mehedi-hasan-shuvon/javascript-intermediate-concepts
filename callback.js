function welcomeMessage(name, greetHandler) {
    console.log(greetHandler);
    greetHandler(name);
}

function greetMorning(name) {
    console.log(name, 'good morning');
}
function greetAfternoon(name) {
    console.log(name, 'good afternoon');
}
welcomeMessage("tom", greetMorning);
welcomeMessage("tom", greetAfternoon);
