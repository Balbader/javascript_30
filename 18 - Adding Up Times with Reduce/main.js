// The goal is to pull each video time from the DOM,
// add them all up, figure out the total amount of hrs, min, seconds
// and console.log the result

// turn the node-list into an array of node strings
const timeNodes = Array.from(document.querySelectorAll('[data-time'));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':');
        console.log(mins, secs);
    })
