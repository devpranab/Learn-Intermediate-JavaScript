//secret message

function secretMessage(name){
    return name !== "Mistu" ? "Hello, " + name + "!" : "Hello, my love!";
}

console.log(secretMessage("Pranav"));//Hello, Pranav!
console.log(secretMessage("Mistu"));//Hello, my love!