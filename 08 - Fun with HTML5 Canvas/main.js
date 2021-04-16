/* -----------------  Create Canvas -----------------*/
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; // need a color when you draw a line
ctx.lineJoin = 'round'; // end of the line will be rounded around the corner
ctx.lineCap = 'round'; // end of the line will be rounded around the corner

let isDrawing = false; // when click on canvas, draw then let go.. the mouse will not draw anymore
let lastX = 0; // where you start the line from
let lastY = 0; // where you end the lind

function draw(e) {
    if (!isDrawing)
        return; // stop the function from running when they are not moused down
    console.log(e);
}

/* ----------- action to trigger the drawing ----------------- */
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);