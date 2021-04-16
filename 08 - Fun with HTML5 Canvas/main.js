/* -----------------  Create Canvas -----------------*/
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; // need a color when you draw a line
ctx.lineJoin = 'round'; // end of the line will be rounded around the corner
ctx.lineCap = 'round'; // end of the line will be rounded around the corner
ctx.lineWidth = 50; // width of the line drawn

let isDrawing = false; // when click on canvas, draw then let go.. the mouse will not draw anymore
let lastX = 0; // where you start the line from
let lastY = 0; // where you end the lind
let hue = 0; // variable to change the color of the line
let direction = true;

const draw = (e) => {
    if (!isDrawing)
        return; // stop the function from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // setting up the color change for the line. It starts red.

    /* ------ The drawing part ------ */
    ctx.beginPath();
    // start from 
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY); // fetch the values of the actual event happening on the canvas
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++; // increment value of color to go through the entire spectrum
    if (hue >= 360) {
        hue = 0;
    }; // reset color to starting point: red

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    };
    
    // flip the direction of the line size once it reaches to 100
    if (direction)
        ctx.lineWidth++;
    else
        ctx.lineWidth--;
}

/* ----------- action to trigger the drawing ----------------- */
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false); // make sure to tell that the mouse is not drawing anymore