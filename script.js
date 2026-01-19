window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});





const langEnElems = document.querySelectorAll('[data-en]');
const langHrElems = document.querySelectorAll('[data-hr]');

function setLanguage(lang) {
    langEnElems.forEach(el => {
        if(el.placeholder !== undefined) {
            el.placeholder = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-hr');
        } else {
            el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-hr');
        }
    });
}

// Default English
setLanguage('en');

// Event listeners for flags
document.querySelectorAll('#lang-en, #lang-en-mobile').forEach(btn => {
    btn.addEventListener('click', () => setLanguage('en'));
});
document.querySelectorAll('#lang-hr, #lang-hr-mobile').forEach(btn => {
    btn.addEventListener('click', () => setLanguage('hr'));
});
