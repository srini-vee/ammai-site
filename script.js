const birdSounds = [
  "/sounds/birds1.mp3",
  "/sounds/birds2.mp3",
  "/sounds/birds3.mp3"
];

const audio = document.getElementById("birdAudio");
const button = document.getElementById("soundButton");

let isPlaying = false;

function pickRandomSound() {
  return birdSounds[Math.floor(Math.random() * birdSounds.length)];
}

button.addEventListener("click", async () => {
  try {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      isPlaying = false;
      button.textContent = "Play birdsong";
    } else {
      audio.src = pickRandomSound();
      audio.volume = 0.25;
      audio.loop = true;

      await audio.play();

      isPlaying = true;
      button.textContent = "Stop birdsong";
    }
  } catch (error) {
    console.error("Audio failed:", error);
    button.textContent = "Could not play audio";
  }
});
