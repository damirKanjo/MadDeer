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









function openImage(img){

let modalImg = document.getElementById("modalImage");

modalImg.src = img.src;

}




const img = document.getElementById("modalImage");

img.addEventListener("mousemove", function(e){

const rect = img.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const xPercent = (x / rect.width) * 100;
const yPercent = (y / rect.height) * 100;

img.style.transformOrigin = xPercent + "% " + yPercent + "%";
img.style.transform = "scale(2)";

});

img.addEventListener("mouseleave", function(){

img.style.transform = "scale(1)";

});
