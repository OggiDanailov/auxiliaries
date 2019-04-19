/* Let's Build: With JavaScript - Web-Crunch.com
   Subscribe on YouTube - https://youtube.com/c/webcrunch
   
   Let's Build: HTML5 Video Player
   
   Overall Concept Credit: Wes Bos https://wesbos.com
*/

const player = document.querySelector('.player');
const video = player.querySelector('.player-video');
// const progress = player.querySelector('.progress');
// const progressFilled = player.querySelector('.filled-progress');
const toggle = document.getElementsByClassName("toggle-play")[0]
// const skippers = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player-slider');

// Logic
function togglePlay() {
  const playState = video.paused ? 'play' : 'pause';
  video[playState](); // Call play or paused method 
}

function updateButton() {
  const togglePlayBtn = toggle;
  
  if(this.paused) {
    togglePlayBtn.innerHTML = "play";  
  } else {
    togglePlayBtn.innerHTML = "pause";
  }
}

// function skip() {
//   video.currentTime += parseFloat(this.dataset.skip);
// }

// function rangeUpdate() {
//   video[this.name] = this.value;
// }

// function progressUpdate() {
//   const percent = (video.currentTime / video.duration) * 100;
//   progressFilled.style.flexBasis = `${percent}%`;
// }

// function scrub(e) {
//   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//   video.currentTime = scrubTime;
// }

// Event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// video.addEventListener('timeupdate', progressUpdate);

toggle.addEventListener('click', togglePlay);
// skippers.forEach(button => button.addEventListener('click', skip));
// ranges.forEach(range => range.addEventListener('change', rangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));

// let mousedown = false;
// progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);