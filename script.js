let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");


function updateVoices() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    

    voiceSelect.innerHTML = '';
    
    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });
}

document.querySelector("button").addEventListener("click", () => {
    const inputText = document.querySelector("textarea").value;
    const russianRegex = /[а-яА-Я]/; 

    if (russianRegex.test(inputText) && speech.voice.lang !== 'ru-RU') {
        alert("Incorrect language format...");
    } else {
        speech.text = inputText;
        window.speechSynthesis.speak(speech);
    }
});


window.speechSynthesis.addEventListener('voiceschanged', updateVoices);


updateVoices();

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

