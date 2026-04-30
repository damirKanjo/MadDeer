document.addEventListener("DOMContentLoaded", () => {

    // ---------------------------
    // LANGUAGE SYSTEM
    // ---------------------------

    let currentLang = "en";

    function setLanguage(lang) {
        currentLang = lang;

        document.querySelectorAll('[data-en], [data-hr]').forEach(el => {

            const en = el.getAttribute('data-en');
            const hr = el.getAttribute('data-hr');

            if (!en && !hr) return;

            // input / textarea
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = (lang === "en") ? en : hr;
            } else {
                el.innerHTML = (lang === "en") ? en : hr;
            }
        });
    }

    // ---------------------------
    // NAVBAR LOAD (FETCH)
    // ---------------------------

    fetch("navbar.html")
        .then(res => res.text())
        .then(html => {

            document.getElementById("navbar-placeholder").innerHTML = html;

            // LANGUAGE CLICK (delegation)
            document.addEventListener("click", (e) => {
                const btn = e.target.closest(".lang-btn");
                if (!btn) return;

                const lang = btn.dataset.lang;
                if (!lang) return;

                // active class UI
                document.querySelectorAll(".lang-btn").forEach(el => el.classList.remove("active"));
                btn.classList.add("active");

                setLanguage(lang);
            });

            // default language
            setLanguage(currentLang);
        })
        .catch(err => console.error("Navbar error:", err));


    // ---------------------------
    // IMAGE ZOOM (SAFE)
    // ---------------------------

    const img = document.getElementById("modalImage");

    if (img) {
        img.addEventListener("mousemove", function (e) {

            const rect = img.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            img.style.transformOrigin = xPercent + "% " + yPercent + "%";
            img.style.transform = "scale(2)";
        });

        img.addEventListener("mouseleave", function () {
            img.style.transform = "scale(1)";
        });
    }

});