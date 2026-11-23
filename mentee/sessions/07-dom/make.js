// Session 07 — what you build in class, and the exercise.

console.log("make.js running");

// DOM Challenge — My Song List 🎵

// The goal

// Turn an array of JavaScript objects into a dynamic webpage that displays a list of songs, highlights favourite songs, and shows a summary.

// Your HTML should not contain any hardcoded songs. JavaScript should generate them using the data provided.

// 1.  HTML — Build the structure
// 2. CSS — Style your favourites
// 3. JavaScript — Bring your page to life

//Starter Data

const songs = [
  { title: "Blue", plays: 12, isFavourite: true },
  { title: "Rush", plays: 40, isFavourite: false },
  { title: "Home", plays: 3, isFavourite: false },
];

const list = document.querySelector("#song-list");
const summary = document.querySelector("#summary");

songs.forEach((song) => {
  const item = document.createElement("li");

  item.textContent = `${song.title} — ${song.plays} plays`;

  if (song.isFavourite) {
    item.classList.add("favourite");
  }

  list.appendChild(item);
});

const totalSongs = songs.length;
const totalPlays = songs.reduce((total, song) => total + song.plays, 0);
const favourites = songs.filter((song) => song.isFavourite).length;

summary.textContent =
  `${totalSongs} songs | ${totalPlays} total plays | ${favourites} favourite(s)`;