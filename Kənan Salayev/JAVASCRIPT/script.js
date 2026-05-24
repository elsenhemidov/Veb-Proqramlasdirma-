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

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light";
    } else {
        themeToggle.textContent = "Dark";
    }
});

