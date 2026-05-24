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
        let cardService = card.dataset.service.toLowerCase();
        let isMatch = cardText.includes(searchText) || cardService.includes(searchText);

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
