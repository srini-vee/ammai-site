const birds = [
  {
    name: "Asian Koel",
    note: "A familiar summer call heard around Indian homes, gardens, and warm afternoons.",
    sound: "./sounds/asian-koel.mp3",
    image: "./birds/asian-koel.webp"
  },
  {
    name: "Coppersmith Barbet",
    note: "A small bell-like call from leafy trees, steady, bright, and easy to remember.",
    sound: "./sounds/coppersmith-barbet.mp3",
    image: "./birds/coppersmith-barbet.webp"
  },
  {
    name: "Indian Robin",
    note: "A small watchful bird with a clear presence around gardens, walls, and open ground.",
    sound: "./sounds/indian-robin.mp3",
    image: "./birds/indian-robin.webp"
  },
  {
    name: "Purple Sunbird",
    note: "Small, quick, and drawn to flowers, carrying a delicate sound through the garden.",
    sound: "./sounds/purple-sunbird.mp3",
    image: "./birds/purple-sunbird.webp"
  },
  {
    name: "Red-vented Bulbul",
    note: "Restless and familiar, often close to people, trees, courtyards, and flowering plants.",
    sound: "./sounds/red-vented-bulbul.mp3",
    image: "./birds/red-vented-bulbul.webp"
  },
  {
    name: "Indian Pitta",
    note: "A bright forest visitor, often heard at dawn and dusk after the first warm rains.",
    sound: "./sounds/indian-pitta.mp3",
    image: "./birds/indian-pitta.webp"
  },
  {
    name: "Common Hawk-Cuckoo",
    note: "A rising summer call, restless and insistent, carrying through heat before the rains.",
    sound: "./sounds/common-hawk-cuckoo.mp3",
    image: "./birds/common-hawk-cuckoo.webp"
  },
  {
    name: "Greater Coucal",
    note: "A deep old-sounding call from gardens, thickets, trees, and quiet morning shade.",
    sound: "./sounds/greater-coucal.mp3",
    image: "./birds/greater-coucal.webp"
  },
  {
    name: "Rufous Treepie",
    note: "Lively and musical, moving through trees with a long tail and an alert presence.",
    sound: "./sounds/rufous-treepie.mp3",
    image: "./birds/rufous-treepie.webp"
  },
  {
    name: "White-cheeked Barbet",
    note: "A repeated green note from wooded hills, old trees, gardens, and monsoon edges.",
    sound: "./sounds/white-cheeked-barbet.mp3",
    image: "./birds/white-cheeked-barbet.webp"
  }
];

const birdButton = document.getElementById("birdButton");
const nextBirdButton = document.getElementById("nextBirdButton");
const birdCard = document.getElementById("birdCard");
const birdImage = document.getElementById("birdImage");
const birdName = document.getElementById("birdName");
const birdNote = document.getElementById("birdNote");

let currentAudio = null;
let currentBirdIndex = null;
let isPlaying = false;

birdCard.classList.remove("visible");

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
  birdButton.textContent = "Listen";
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

  birdButton.textContent = "Stop";
  birdButton.setAttribute("aria-pressed", "true");

  currentAudio.play().catch(() => {
    stopBirdsong();
    alert("The birdsong could not play. Please check that the sound file path and filename are correct.");
  });

  currentAudio.addEventListener("ended", () => {
    isPlaying = false;
    birdButton.textContent = "Listen";
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

nextBirdButton.addEventListener("click", (event) => {
  event.stopPropagation();
  playRandomBirdsong();
});
