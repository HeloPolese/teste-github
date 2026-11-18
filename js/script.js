export function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

export function somar(a, b) {
    return a + b;
}

console.log(somar(5, 10));