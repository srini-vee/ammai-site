
const birds = [
  {
    name: "Asian Koel",
    note: "A familiar, haunting call often heard in Indian cities and gardens.",
    sound: "sounds/asian-koel.mp3",
    image: "birds/asian-koel.webp"
  },
  {
    name: "Coppersmith Barbet",
    note: "Known for its repetitive, temple-bell-like call.",
    sound: "sounds/coppersmith-barbet.mp3",
    image: "birds/coppersmith-barbet.webp"
  },
  {
    name: "Indian Robin",
    note: "A small, expressive bird with a sharp, bright song.",
    sound: "sounds/indian-robin.mp3",
    image: "birds/indian-robin.webp"
  },
  {
    name: "Purple Sunbird",
    note: "Often seen around flowers, with a delicate, quick call.",
    sound: "sounds/purple-sunbird.mp3",
    image: "birds/purple-sunbird.webp"
  },
  {
    name: "Red-vented Bulbul",
    note: "Common around homes, parks, and flowering trees.",
    sound: "sounds/red-vented-bulbul.mp3",
    image: "birds/red-vented-bulbul.webp"
  }
];
birdCard.classList.remove("visible");
const birdButton = document.getElementById("birdButton");
const birdCard = document.getElementById("birdCard");
const birdImage = document.getElementById("birdImage");
const birdName = document.getElementById("birdName");
const birdNote = document.getElementById("birdNote");

let currentAudio = null;
let currentBirdIndex = null;
let isPlaying = false;

function chooseRandomBirdIndex() {
  if (birds.length === 1) return 0;

  let nextIndex;

  do {
    nextIndex = Math.floor(Math.random() * birds.length);
  } while (nextIndex === currentBirdIndex);

  return nextIndex;
}

function showBirdCard(bird) {
  birdImage.src = bird.image;
  birdImage.alt = bird.name;
  birdName.textContent = bird.name;
  birdNote.textContent = bird.note;
  birdCard.classList.add("visible");
}

function hideBirdCard() {
  birdCard.classList.remove("visible");
}

function stopBirdsong() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  isPlaying = false;
  birdButton.textContent = "Hear birdsong";
  birdButton.setAttribute("aria-pressed", "false");
  hideBirdCard();
}

function playRandomBirdsong() {
  const nextIndex = chooseRandomBirdIndex();
  const bird = birds[nextIndex];

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(bird.sound);
  currentBirdIndex = nextIndex;
  isPlaying = true;

  showBirdCard(bird);

  birdButton.textContent = "Stop birdsong";
  birdButton.setAttribute("aria-pressed", "true");

  currentAudio.play().catch(() => {
    stopBirdsong();
    alert("The birdsong could not play. Please check that the sound file path and filename are correct.");
  });

  currentAudio.addEventListener("ended", () => {
    isPlaying = false;
    birdButton.textContent = "Hear birdsong";
    birdButton.setAttribute("aria-pressed", "false");
    hideBirdCard();
  });
}

birdButton.addEventListener("click", () => {
  if (isPlaying) {
    stopBirdsong();
  } else {
    playRandomBirdsong();
  }
});
