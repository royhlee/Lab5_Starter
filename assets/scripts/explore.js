// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const voiceSelect = document.getElementById("voice-select");
const text = document.getElementById("text-to-speak");
const button = document.querySelector("button");
const image = document.querySelector("img");
let selectedVoice = null;
const openImage = 'assets/images/smiling-open.png'
const closedImage = 'assets/images/smiling.png'
let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = voiceSelect.options.length - 1; i > 0; i--) {
    voiceSelect.remove(i);
  }

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
}

function init() {
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
  }
}

voiceSelect.addEventListener('change', (event) => {
  const selectedOption = event.target.selectedOptions[0];
  const voiceName = selectedOption.dataset.name;
  selectedVoice = voices.find((voice) => voice.name === voiceName);
});

button.addEventListener('click', () => {
  const utterThis = new SpeechSynthesisUtterance(text.value);

  if (selectedVoice) {
    utterThis.voice = selectedVoice;
  }

  utterThis.onstart = () => {
    image.src = openImage;
  };

  utterThis.onend = () => {
    image.src = closedImage;
  };

  synth.speak(utterThis);
});