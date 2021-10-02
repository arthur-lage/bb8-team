function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.querySelector("#theme-icon").src = "../assets/sun.svg"
} else {
    document.body.classList.add("dark");
    document.querySelector("#theme-icon").src = "../assets/moon.svg"
  }
}
