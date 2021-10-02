const registerButton = document.querySelector("#register-button")
const loginButton = document.querySelector("#login-button")

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const verifyRegister = () => {
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const confirmPassword = document.querySelector("#confirm-password")
    const acceptTerms = document.querySelector("#accept-terms-of-use")

    if(name.length > 0){
        if(validateEmail(email.value)){
            if(password.value.length > 3){
                if(confirmPassword.value === password.value){
                    if(acceptTerms.checked){
                        window.location.href = "/index.html" 
                    } else {
                        alert("You need to accept the terms of use")
                    }
                } else {
                    alert("Passwords should match")
                }
            } else {
                alert("Your password needs at least 4 characters")
            }
        } else {
            alert("Invalid credentials")
        }
    } else {
        alert("Invalid credentials")
    }
}

const verifyLogin = () => {
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")

    if(validateEmail(email.value)){
        if(password.value.length > 3){
            window.location.href = "/index.html"
        } else {
            alert("Your password needs at least 4 characters")
        }
    } else {
        alert("Invalid credentials")
    }
}

console.log(window.location.href)

if(window.location.href.includes("/pages/register.html")){
    registerButton.addEventListener("click", (e) => {
        window.location.href = "/index.html"
    })
}

if(window.location.href.includes("/pages/login.html")){
    loginButton.addEventListener("click", (e) => {
        window.location.href = "/index.html"
    })
}