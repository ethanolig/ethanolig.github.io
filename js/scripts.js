var music = document.getElementById("bg-music");
var mute = document.getElementById("mute-button");

music.volume = 0.25;
music.muted = false;

//mute.onclick =   
function toggleMusic() {
  if (document.getElementById("bg-music").muted == false) {
      document.getElementById("bg-music").muted = true;
  } else {      
      document.getElementById("bg-music").muted = false;
  }
}
