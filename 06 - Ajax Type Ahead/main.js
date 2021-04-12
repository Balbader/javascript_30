const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        // Make sure that the city or state matches what was searched
        //1. Create a new Regular Expression and assign it to a variable
        const regex = new RegExp(wordToMatch, 'gi'); // 'gi' g means global 'i' means insensitive.
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() {
    console.log(this.value);
}

const searchInput = document.querySelector('.search');
