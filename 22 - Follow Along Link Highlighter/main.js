const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect(); // Will print all the info about where on the page the item is located
    console.log(linkCoords);
    const coords = {
        width = linkCoords.width,
        height = linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }
    // applying style to the element
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    // use the transform property to apply the style change
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));