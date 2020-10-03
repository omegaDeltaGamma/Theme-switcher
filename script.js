var switcher = document.querySelector("input");

function themeSwitch() {
    currentTheme = document.documentElement.getAttribute("data-theme");

    if(switcher.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light")
    }
}

switcher.addEventListener("click", themeSwitch, false);
