
const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("joah-theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

function updateButton() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "dark";

  toggle.textContent =
    currentTheme === "dark" ? "Light Mode" : "Dark Mode";
}

if (toggle) {
  updateButton();

  toggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "dark";

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("joah-theme", newTheme);

    updateButton();
  });
}
