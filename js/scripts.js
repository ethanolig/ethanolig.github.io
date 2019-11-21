<script>
var music = document.getElementById("music");
music.volume = 0.4;
function toggleMusic() {
  if (music.muted == false) {
      music.muted = true;
  } else {      
      music.muted = false;
  }
}
</script> 
