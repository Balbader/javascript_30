const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect(); // Will print all the info about where on the page the item is located
    console.log(linkCoords);
    // applying style to the element
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));