// Mobile navbar toggle
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

// Service search data
const services = [
    "Veb İnkişaf",
    "Kiber Təhlükəsizlik",
    "Bulud Hesablamaları",
    "Şəbəkə Həlləri",
    "UI/UX Dizayn"
];

const searchInput = document.getElementById("site-search-input");
const siteSearchForm = document.querySelector(".site-search");
const serviceCards = document.querySelectorAll(".service-card");
const searchMessage = document.getElementById("search-message");

function searchServices() {
    let searchText = searchInput.value.toLowerCase();
    let foundCount = 0;

    for (let i = 0; i < serviceCards.length; i++) {
        let card = serviceCards[i];
        let cardText = card.textContent.toLowerCase();
        let isMatch = cardText.includes(searchText);

        if (searchText === "" || isMatch) {
            card.classList.remove("hide-card");
            foundCount++;
        } else {
            card.classList.add("hide-card");
        }
    }

    if (searchText === "") {
        searchMessage.textContent = "Axtarış üçün nümunələr: " + services.join(", ");
    } else if (foundCount > 0) {
        searchMessage.textContent = foundCount + " xidmət tapıldı.";
    } else {
        searchMessage.textContent = "Uyğun xidmət tapılmadı.";
    }
}

searchInput.addEventListener("input", searchServices);
siteSearchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    searchServices();
});
searchServices();

// Contact form validation
const contactForm = document.querySelector(".contact-form");

function validateContactForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Ad boş ola bilməz.");
    } else if (email === "") {
        alert("E-poçt boş ola bilməz.");
    } else if (message === "") {
        alert("Mesaj boş ola bilməz.");
    } else {
        alert("Mesaj uğurla göndərildi!");
        contactForm.reset();
    }
}

contactForm.addEventListener("submit", validateContactForm);

// Back to top button
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Dark and light mode toggle
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light";
    } else {
        themeToggle.textContent = "Dark";
    }
});

// Team card hover effect with JavaScript
const teamCards = document.querySelectorAll(".team-card");

for (let i = 0; i < teamCards.length; i++) {
    teamCards[i].addEventListener("mouseenter", function () {
        teamCards[i].classList.add("team-hover");
        teamCards[i].style.cursor = "pointer";
    });

    teamCards[i].addEventListener("mouseleave", function () {
        teamCards[i].classList.remove("team-hover");
    });
}
