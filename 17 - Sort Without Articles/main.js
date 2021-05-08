const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
    sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log('Wes:');
console.table(sortedBands);


//===============================================================
const band = [];
let temp = '';


for (let i = 0; i < bands.length; i++) {
    temp = bands[i].split(' ');
    if (temp[0] === 'The' || temp[0] === 'A' || temp[0] === 'An') {
        temp.splice(temp[0], 1);
    }
    band.push(temp.join(' '));
}

console.log('Balou:');
console.table(band.sort());
