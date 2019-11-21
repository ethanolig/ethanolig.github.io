//file: scripts.js
var music = document.getElementById("bg-music");
var mute = document.getElementById("mute-button");
music.volume = 0.25;

window.onload = function() {   
  music.muted = false;
  music.play();
}
  
function toggleMusic() {
  if (music.muted == false) {
      music.muted = true;
      mute.innerHTML = "Unmute";
  } else {      
      music.muted = false;  
      mute.innerHTML = "Mute";
  }
}
