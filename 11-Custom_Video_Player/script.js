const play = document.querySelector(".play");
const player = document.querySelector(".player");
const playRange = document.querySelector(".play-range");
const pause = document.querySelector(".pause");
const video = document.querySelector("video");
const playSkip = document.querySelectorAll("[data-skip]");
const range = document.querySelectorAll("input");

//Build out function
function togglePlay() {
  const method = video.paused ? video.play() : video.pause();
}

function changeIcon() {
  const icon = this.paused ? "►" : "❚❚";
  player.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function playerRate() {
  video[this.name] = this.value;
}

function hundleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  playRange.style.flexBasis = `${percent}%`;
}

function videoRange(e) {
  const vidplace = (e.offsetX / play.offsetWidth) * video.duration;
  video.currentTime = vidplace;
}

//

video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", hundleProgress);
playRange.addEventListener("click", hundleProgress);
video.addEventListener("play", changeIcon);
video.addEventListener("pause", changeIcon);
player.addEventListener("click", togglePlay);
playSkip.forEach((button) => button.addEventListener("click", skip));
range.forEach((ranges) => ranges.addEventListener("change", playerRate));
range.forEach((ranges) => ranges.addEventListener("mousemove", playerRate));

let mousedown = false;
play.addEventListener("click", videoRange);
play.addEventListener("mousemove", (e) => mousedown && videoRange(e));
play.addEventListener("mousedown", () => (mousedown = true));
play.addEventListener("mouseup", () => (mousedown = false));
