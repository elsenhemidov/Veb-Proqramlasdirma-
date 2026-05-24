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