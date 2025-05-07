// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('img');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const volumeImage = document.querySelector('#volume-controls img');
  const volume = document.getElementById('volume');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function () {
    const select = hornSelect.value;
    
    if (select === 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    }
    if (select === 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    }
    if (select === 'party-horn') {  
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  volume.addEventListener('input', () => {
    const volumeValue = volume.value;
    audio.volume = volumeValue / 100;

    if (volumeValue == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } 
    else if (volumeValue < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } 
    else if (volumeValue < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } 
    else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}