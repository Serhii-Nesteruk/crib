document.addEventListener("DOMContentLoaded", function() {
    const mediaElements = document.querySelectorAll('.media');

    mediaElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
        el.style.animationName = 'fadeIn';
    });
});
