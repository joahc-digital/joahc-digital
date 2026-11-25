
// JOAH C DIGITAL — Theme Switcher

const themeButton = document.getElementById("theme-toggle");

// Check for a previously selected theme
const savedTheme = localStorage.getItem("joah-theme");

// Apply the saved theme, or use dark mode by default
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Update the button label
function updateThemeButton() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "dark";

  themeButton.textContent =
    currentTheme === "dark" ? "Light Mode" : "Dark Mode";
}

// Switch between light and dark themes
themeButton.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "dark";

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);

  localStorage.setItem("joah-theme", newTheme);

  updateThemeButton();
});

// Set the correct button label when the page loads
updateThemeButton();
