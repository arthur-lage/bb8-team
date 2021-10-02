function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.querySelector("#theme-icon").src = "../assets/sun.svg"
    document.querySelector("#trusts-us-1").src = "../assets/trusts-us-1.svg"
    document.querySelector("#trusts-us-2").src = "../assets/trusts-us-2.svg"
    document.querySelector("#trusts-us-3").src = "../assets/trusts-us-3.svg"
    document.querySelector("#trusts-us-4").src = "../assets/trusts-us-4.svg"
    document.querySelector("#trusts-us-5").src = "../assets/trusts-us-5.svg"
} else {
    document.body.classList.add("dark");
    document.querySelector("#theme-icon").src = "../assets/moon.svg"
    document.querySelector("#trusts-us-1").src = "../assets/trusts-us-1-dark.svg"
    document.querySelector("#trusts-us-2").src = "../assets/trusts-us-2-dark.svg"
    document.querySelector("#trusts-us-3").src = "../assets/trusts-us-3-dark.svg"
    document.querySelector("#trusts-us-4").src = "../assets/trusts-us-4-dark.svg"
    document.querySelector("#trusts-us-5").src = "../assets/trusts-us-5-dark.svg"
  }
}  