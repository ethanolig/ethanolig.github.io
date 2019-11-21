//file: scripts.js
var music = document.getElementById("bg-music");

music.volume = 0.25;
music.muted = false;

function toggleMusic() {
  if (document.getElementById("bg-music").muted == false) {
      document.getElementById("bg-music").muted = true;
  } else {      
      document.getElementById("bg-music").muted = false;
  }
}
