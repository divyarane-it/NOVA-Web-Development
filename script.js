// ================= EXPLORE BUTTON =================

const exploreButton =
    document.getElementById("exploreButton");

exploreButton.addEventListener("click", function () {

    alert(
        "Welcome to NOVA! 🚀\n\nLet's explore beyond limits."
    );

});


// ================= LIGHT / DARK MODE =================

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains("light-mode")
    ) {

        themeButton.textContent = "🌙";

    } else {

        themeButton.textContent = "☀";

    }

});


// ================= IMAGE INTERACTION =================

const aboutImage =
    document.querySelector(".about-image");

aboutImage.addEventListener("click", function () {

    this.classList.toggle("image-active");

});