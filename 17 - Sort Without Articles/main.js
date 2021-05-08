const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const band = [];
let temp = '';

console.table(bands);

for (let i = 0; i < bands.length; i++) {
    temp = bands[i].split(' ');
    if (temp[0] === 'The' || temp[0] === 'A' || temp[0] === 'An') {
        temp.splice(temp[0], 1);
    }
    band.push(temp.join(' '));
}

console.table(band.sort());
