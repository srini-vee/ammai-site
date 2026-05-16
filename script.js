const birdSounds = [
  "sounds/birds1.wav",
  "sounds/birds2.wav",
  "sounds/birds3.wav"
];

const audio = document.getElementById("birdAudio");
const button = document.getElementById("soundButton");

button.addEventListener("click", () => {
  const randomSound = birdSounds[Math.floor(Math.random() * birdSounds.length)];

  audio.src = randomSound;
  audio.volume = 0.25;
  audio.play();

  button.textContent = "Birdsong playing";
  button.disabled = true;
});
