function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');
const checkSlide = (e) => {
    sliderImages.forEach(slideImage => {
        // figure out how far is the page scroll down
        //
        // 1/2 way through the image
        const slideInAt = (window.screenY + window.innerHeight) - slideImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + slideImage.height;
    });
}
window.addEventListener('scroll', debounce(checkSlide)); // Always debounce scroll functions
