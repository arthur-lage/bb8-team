const registerButton = document.querySelector("#register-button")
const loginButton = document.querySelector("#login-button")

if(window.location.href.includes("/pages/register.html")){
    registerButton.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "/index.html"
    })
}

if(window.location.href.includes("/pages/login.html")){
    loginButton.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "/index.html"
    })
}