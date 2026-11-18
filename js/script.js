export function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

export function somar(a, b) {
    return a + b;
}

console.log(somar(5, 10));
export function divisao(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }

    return a / b;
}

console.log(divisao(10, 2));
