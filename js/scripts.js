document.getElementById("bg-music").volume = 0.1;
document.getElementById("bg-music").muted = false;

document.getElementById("mute-button").onclick = function toggleMusic() {
  if (document.getElementById("bg-music").muted == false) {
      document.getElementById("bg-music").muted = true;
  } else {      
      document.getElementById("bg-music").muted = false;
  }
}
/*update*/
