//file: scripts.js
var music = document.getElementById("bg-music");
music.volume = 0.25;

function toggleMusic() {
  if (music.muted == false) {
      music.muted = true;
      music.innerHTML = "Unmute";
  } else {      
      music.muted = false;  
      music.innerHTML = "Mute";
  }
}
