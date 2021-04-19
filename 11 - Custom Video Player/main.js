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
    // what the code above actually means
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
    toggle.textContent = icon;
    console.log(icon);
}

const skip = () => {
    console.log('skipping');
    console.log(this.dataset.skip);
    //video.currentTime += parseFloat(this.dataset.skip);
}

const handleRangeUpdate = () => {
    video[this.name] = this.value;
    console.log(this.value);
}
/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));





















