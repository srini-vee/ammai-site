const birdSounds = [
  "sounds/birds1.mp3",
  "sounds/birds2.mp3",
  "sounds/birds3.mp3"
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
