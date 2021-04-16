/* -----------------  Create Canvas -----------------*/
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; // need a color when you draw a line
ctx.lineJoin = 'round'; // end of the line will be rounded around the corner
ctx.lineCap = 'round'; // end of the line will be rounded around the corner