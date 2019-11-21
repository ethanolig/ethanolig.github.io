//file: scripts.js!!!!!!!!
var music = document.getElementById("bg-music");
var mute = document.getElementById("mute-button");
music.volume = 0.25;

window.onload = function() {   
  music.muted = false;
  music.play();
}
  
function isPlaying(music) { return !music.paused; }

function toggleMusic() {
  if (isPlaying(music)) {
      music.pause();
      mute.innerHTML = "Unmute";
  } else {      
      music.play();
      mute.innerHTML = "Mute";
  }
}
