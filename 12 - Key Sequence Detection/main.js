const pressed = [];
const secretCode = 'balou';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    // 1. Record the key stroke into an array
    pressed.push(e.key);
    
    //2. Trim down the array to match the length of secret code
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    // 3. Join the array into a string
    if (pressed.join('').includes(secretCode)) {
        console.log('Secret Code Found!!');
        cornify_add(); // Makes stickers appear on screen when secret code is found
    }
    console.log(pressed);
});
