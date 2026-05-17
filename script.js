const birds = [
  {
    name: "Asian Koel",
    note: "A familiar, haunting call often heard in Indian cities and gardens.",
    sound: "sounds/birds1.wav",
    image: "birds/asian-koel.jpg"
  },
  {
    name: "Indian Robin",
    note: "A small garden bird with a gentle, bright presence.",
    sound: "sounds/birds2.wav",
    image: "birds/indian-robin.jpg"
  },
  {
    name: "Red-vented Bulbul",
    note: "Common around homes, trees, and flowering plants.",
    sound: "sounds/birds3.wav",
    image: "birds/red-vented-bulbul.jpg"
  },
  {
    name: "Coppersmith Barbet",
    note: "Known for its steady tuk-tuk-tuk call from leafy trees.",
    sound: "sounds/birds4.wav",
    image: "birds/coppersmith-barbet.jpg"
  },
  {
    name: "Purple Sunbird",
    note: "A tiny nectar-loving bird often seen around flowers.",
    sound: "sounds/birds5.wav",
    image: "birds/purple-sunbird.jpg"
  }
];

const birdButton = document.getElementById("birdButton");
const buttonText = document.getElementById("buttonText");
const buttonIcon = document.getElementById("buttonIcon");
const birdAudio = document.getElementById("birdAudio");
const birdCard = document.getElementById("birdCard");
const birdImage = document.getElementById("birdImage");
const birdName = document.getElementById("birdName");
const birdNote = document.getElementById("birdNote");

let isPlaying = false;
let lastBirdIndex = -1;

function getRandomBird() {
  if (birds.length === 1) return birds[0];

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * birds.length);
  } while (nextIndex === lastBirdIndex);

  lastBirdIndex = nextIndex;
  return birds[nextIndex];
}

function showBirdCard(bird) {
  birdImage.src = bird.image;
  birdImage.alt = bird.name;
  birdName.textContent = bird.name;
  birdNote.textContent = bird.note;
  birdCard.classList.remove("hidden");
}

function setButtonPlaying() {
  isPlaying = true;
  birdButton.classList.add("is-playing");
  birdButton.setAttribute("aria-pressed", "true");
  buttonIcon.textContent = "■";
  buttonText.textContent = "Stop birdsong";
}

function setButtonStopped() {
  isPlaying = false;
  birdButton.classList.remove("is-playing");
  birdButton.setAttribute("aria-pressed", "false");
  buttonIcon.textContent = "♪";
  buttonText.textContent = "Play birdsong";
}

function stopBirdsong() {
  birdAudio.pause();
  birdAudio.currentTime = 0;
  setButtonStopped();
}

function playRandomBirdsong() {
  const bird = getRandomBird();

  birdAudio.pause();
  birdAudio.currentTime = 0;
  birdAudio.src = bird.sound;

  showBirdCard(bird);
  setButtonPlaying();

  birdAudio.play().catch(() => {
    setButtonStopped();
    buttonText.textContent = "Tap again to play";
  });
}

birdButton.addEventListener("click", () => {
  if (isPlaying) {
    stopBirdsong();
  } else {
    playRandomBirdsong();
  }
});

birdAudio.addEventListener("ended", () => {
  setButtonStopped();
});
