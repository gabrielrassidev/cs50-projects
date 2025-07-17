// Toggle dark mode
const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save preference in localStorage
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
});

// Load preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const darkModePref = localStorage.getItem("darkMode");
  if (darkModePref === "enabled") {
    document.body.classList.add("dark");
  }
});

// Filter birthdays table by name
const searchInput = document.getElementById("search");
const tableBody = document.getElementById("birthday-table");

searchInput?.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const rows = tableBody.querySelectorAll("tr");

  rows.forEach((row) => {
    const nameCell = row.querySelector("td");
    const name = nameCell?.textContent.toLowerCase() || "";

    if (name.includes(query)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
