<script>
  var music = document.getElementById("bg-music");
  var mute = document.getElementById("mute-button");

  music.volume = 0.1;
  music.muted = false;

  mute.onclick = function toggleMusic() {
    if (music.muted == false) {
        music.muted = true;
    } else {      
        music.muted = false;
    }
  }
</script> 
