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
  },
  {
    name: "Brahminy Starling",
    note: "A bright social bird, moving through open trees with whistles, chatter, and soft calls.",
    sound: "./sounds/brahminy-starling.mp3",
    image: "./birds/brahminy-starling.webp"
  },
  {
    name: "Yellow-footed Green Pigeon",
    note: "Soft and mellow among trees, with a gentle sound that feels shaded and calm.",
    sound: "./sounds/yellow-footed-green-pigeon.mp3",
    image: "./birds/yellow-footed-green-pigeon.webp"
  },
  {
    name: "White-breasted Waterhen",
    note: "A strange laughing call from wet edges, gardens, lakes, and hidden green corners.",
    sound: "./sounds/white-breasted-waterhen.mp3",
    image: "./birds/white-breasted-waterhen.webp"
  },
  {
    name: "Black Drongo",
    note: "Sharp and watchful, often calling from open branches with metallic little notes.",
    sound: "./sounds/black-drongo.mp3",
    image: "./birds/black-drongo.webp"
  },
  {
    name: "Common Myna",
    note: "A familiar city voice, full of chatter, whistles, arguments, and everyday presence.",
    sound: "./sounds/common-myna.mp3",
    image: "./birds/common-myna.webp"
  },
  {
    name: "Rose-ringed Parakeet",
    note: "Green flashes across the sky, loud and lively over trees, terraces, and gardens.",
    sound: "./sounds/rose-ringed-parakeet.mp3",
    image: "./birds/rose-ringed-parakeet.webp"
  },
  {
    name: "Common Tailorbird",
    note: "A tiny garden bird with a sharp repeated call from shrubs, hedges, and leaves.",
    sound: "./sounds/common-tailorbird.mp3",
    image: "./birds/common-tailorbird.webp"
  },
  {
    name: "Indian Golden Oriole",
    note: "A golden visitor in leafy trees, carrying a clear, liquid sound through summer.",
    sound: "./sounds/indian-golden-oriole.mp3",
    image: "./birds/indian-golden-oriole.webp"
  },
  {
    name: "White-throated Kingfisher",
    note: "A bold ringing call near water, fields, and trees, bright against the morning.",
    sound: "./sounds/white-throated-kingfisher.mp3",
    image: "./birds/white-throated-kingfisher.webp"
  },
  {
    name: "Ashy Prinia",
    note: "A small restless voice from scrub and garden edges, quick, bright, and repeating.",
    sound: "./sounds/ashy-prinia.mp3",
    image: "./birds/ashy-prinia.webp"
  }
];

const birdButton = document.getElementById("birdButton");
const nextBirdButton = document.getElementById("nextBirdButton");
const birdCard = document.getElementById("birdCard");
const birdImage = document.getElementById("birdImage");
const birdName = document.getElementById("birdName");
const birdNote = document.getElementById("birdNote");

const birdOverlay = document.getElementById("birdOverlay");
const closeOverlayButton = document.getElementById("closeOverlayButton");
const largeBirdImage = document.getElementById("largeBirdImage");
const largeBirdName = document.getElementById("largeBirdName");
const largeBirdNote = document.getElementById("largeBirdNote");
const birdOverlayInner = document.querySelector(".bird-overlay-inner");

let currentAudio = null;
let currentBirdIndex = null;
let currentBird = null;
let isPlaying = false;
let playRequestId = 0;

birdCard.classList.remove("visible");
birdOverlay.classList.remove("visible");

function chooseRandomBirdIndex() {
  if (birds.length === 1) return 0;

  let nextIndex;

  do {
    nextIndex = Math.floor(Math.random() * birds.length);
  } while (nextIndex === currentBirdIndex);

  return nextIndex;
}

function showBirdCard(bird) {
  currentBird = bird;

  birdImage.src = bird.image;
  birdImage.alt = bird.name;
  birdName.textContent = bird.name;
  birdNote.textContent = bird.note;
  birdCard.classList.add("visible");
}

function hideBirdCard() {
  birdCard.classList.remove("visible");
}

function openBirdOverlay() {
  if (!currentBird) return;

  largeBirdImage.src = currentBird.image;
  largeBirdImage.alt = currentBird.name;
  largeBirdName.textContent = currentBird.name;
  largeBirdNote.textContent = currentBird.note;

  birdOverlay.classList.add("visible");
  birdOverlay.setAttribute("aria-hidden", "false");
}

function closeBirdOverlay() {
  birdOverlay.classList.remove("visible");
  birdOverlay.setAttribute("aria-hidden", "true");
}

function stopCurrentAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

function stopBirdsong() {
  playRequestId += 1;
  stopCurrentAudio();

  isPlaying = false;
  birdButton.textContent = "Listen";
  birdButton.setAttribute("aria-pressed", "false");
  hideBirdCard();
  closeBirdOverlay();
}

function playRandomBirdsong() {
  const thisRequestId = playRequestId + 1;
  playRequestId = thisRequestId;

  const nextIndex = chooseRandomBirdIndex();
  const bird = birds[nextIndex];

  stopCurrentAudio();
  closeBirdOverlay();

  currentAudio = new Audio(bird.sound);
  currentAudio.preload = "auto";

  currentBirdIndex = nextIndex;
  isPlaying = true;

  showBirdCard(bird);

  birdButton.textContent = "Stop";
  birdButton.setAttribute("aria-pressed", "true");

  currentAudio.addEventListener("ended", () => {
    if (thisRequestId !== playRequestId) return;

    isPlaying = false;
    birdButton.textContent = "Listen";
    birdButton.setAttribute("aria-pressed", "false");
    hideBirdCard();
    closeBirdOverlay();
  });

  currentAudio.addEventListener("error", () => {
    if (thisRequestId !== playRequestId) return;

    isPlaying = false;
    birdButton.textContent = "Listen";
    birdButton.setAttribute("aria-pressed", "false");

    alert("This birdsong file could not be loaded: " + bird.sound);
  });

  currentAudio.play().catch((error) => {
    if (thisRequestId !== playRequestId) return;

    const harmlessRapidClickError =
      error &&
      (
        error.name === "AbortError" ||
        error.name === "NotAllowedError" ||
        error.message.includes("interrupted")
      );

    if (harmlessRapidClickError) {
      return;
    }

    isPlaying = false;
    birdButton.textContent = "Listen";
    birdButton.setAttribute("aria-pressed", "false");

    alert("This birdsong could not play: " + bird.sound);
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

birdImage.addEventListener("click", (event) => {
  event.stopPropagation();
  openBirdOverlay();
});

closeOverlayButton.addEventListener("click", (event) => {
  event.stopPropagation();
  closeBirdOverlay();
});

birdOverlay.addEventListener("click", () => {
  closeBirdOverlay();
});

birdOverlayInner.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeBirdOverlay();
  }
});
