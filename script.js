document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  }, 1500);

  const toggle = document.getElementById("modeToggle");
  toggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
  };
});