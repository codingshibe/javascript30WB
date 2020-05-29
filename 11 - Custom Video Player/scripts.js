// Grab all player elements
const player = document.querySelector('.player');
const display = player.querySelector('.viewer');
const controls = player.querySelector('.player__controls');
const progressBar = player.querySelector('.progress');
const progress = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');

// Create handlers
function togglePlay() {
  const method = display.paused ? 'play' : 'pause';
  display[method]();
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(){
  console.log('Skipping');
}

// Hook up handler functions with listeners
display.addEventListener('click', togglePlay);
display.addEventListener('play', updateButton);
display.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
