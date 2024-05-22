// Change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#191df0';
    } else {
        header.style.backgroundColor = '#111';
    }
});
