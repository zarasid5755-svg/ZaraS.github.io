// =============================
// NAVIGATION ENTRE SECTIONS
// =============================

const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(button => {
    button.addEventListener("click", () => {

        const targetSection = button.dataset.section;

        // Cacher toutes les sections
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Retirer active des boutons
        navButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Afficher la bonne section
        document.getElementById(targetSection).classList.add("active");

        // Activer bouton
        button.classList.add("active");

        // Scroll top
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


// =============================
// CURSOR TRAIL EFFECT
// =============================

document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});


// =============================
// ANIMATION BARRES DE PROGRESSION
// =============================

const skillsSection = document.getElementById("competences");

if (skillsSection) {

    const progressObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const progressBars = entry.target.querySelectorAll(".progress-fill");

                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = "0";

                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });

            }

        });

    }, { threshold: 0.5 });

    progressObserver.observe(skillsSection);
}


// =============================
// ANIMATION FADE-IN AU SCROLL
// =============================

const fadeElements = document.querySelectorAll(".card, .skill-item, .timeline-item");

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, { threshold: 0.1 });

fadeElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease-out";
    fadeObserver.observe(element);
});


// =============================
// FORMULAIRE DE CONTACT
// =============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Message envoyé ! (Fonctionne avec un backend réel)");

        contactForm.reset();
    });
}