/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* Build our functions */
const togglePlay = () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    /*
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    */
}

const updateButton = () => {
    // 'this.paused' did not work
    const icon = video.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
