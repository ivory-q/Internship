const linksMenu = document.getElementById("navigation__links");
const toggleElem = document.getElementById("navigation__toggle");

linksMenu.addEventListener("click", () => {
    toggleElem.checked = false;
});
