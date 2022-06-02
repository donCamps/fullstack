let video = document.getElementsByClassName("vid")[0];

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function dec() {
  video.playbackRate -= 0.1;
}

function inc() {
  video.playbackRate += 0.1;
}

function retroceder() {
  video.currentTime -= 10;
}

function avancar() {
  video.currentTime += 10;
}
