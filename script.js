window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});






const translations = {
    sr: {
        hero_title: "KOVAČNICA<br>NOŽEVA",
        nav_home: "Početna",
        nav_services: "Usluge",
        nav_about: "O nama",
        nav_contact: "Kontakt",
        newsletter_title: "Prijavite se na Newsletter",
        newsletter_text: "Budite prvi koji će saznati za nove modele i ponude."
    },
    en: {
        hero_title: "KNIFE<br>FORGE",
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        newsletter_title: "Subscribe to our Newsletter",
        newsletter_text: "Be the first to know about new knives and offers."
    }
};

const languageSelect = document.getElementById("languageSelect");

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem("lang", lang);
}

languageSelect.addEventListener("change", e => {
    setLanguage(e.target.value);
});

// Učitaj zapamćen jezik
const savedLang = localStorage.getItem("lang") || "sr";
languageSelect.value = savedLang;
setLanguage(savedLang);
