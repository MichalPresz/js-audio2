console.log("music");

const nature = document.getElementById("nature-walk-124997");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const skipBack = document.getElementById("skipBack");
const skipFor = document.getElementById("skipFor");

playBtn.addEventListener("click", function () {
  nature.play();
});

pauseBtn.addEventListener("click", function () {
  nature.pause();
});

stopBtn.addEventListener("click", function () {
  nature.pause();
  nature.currentTime = 0;
});

skipBack.addEventListener("click", function () {
  nature.currentTime = nature.currentTime - 10;
});

skipFor.addEventListener("click", function () {
  nature.currentTime = nature.currentTime + 10;
});
