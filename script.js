document.addEventListener("DOMContentLoaded", function() {
    const changeTextButton = document.getElementById("changeTextButton");
    const dynamicText = document.getElementById("dynamicText");

    changeTextButton.addEventListener("click", function() {
        dynamicText.textContent = "The text has been changed!";
    });
});
