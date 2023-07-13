const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $('.player');
const video = $('.player__video');
const progress = $('.player__progress');
const progressBar = $('.player__progress__filled');

const toggle = $('.toggle');
const skipButtons = $$('[data-skip]');
const volume = $('.player__volume input');
const time = $('.player__time');

function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.innerHTML = "<i class='fa fa-pause'></i>";
  } else {
    video.pause();
    toggle.innerHTML = "<i class='fa fa-play'></i>";
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;

  time.innerHTML = `${formatTime(video.currentTime)}/ ${formatTime(video.duration)}`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach((button) =>
  button.addEventListener('click', function () {
    video.currentTime += +this.dataset.skip;
  })
);

volume.addEventListener('change', function () {
  video.volume = this.value;
});

progress.addEventListener('click', scrub);

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  let minuteValue, secondValue;

  minuteValue = minutes < 10 ? '0' + minutes : minutes;
  secondValue = seconds < 10 ? '0' + seconds : seconds;

  let mediaTime = minuteValue + ':' + secondValue;
  return mediaTime;
}