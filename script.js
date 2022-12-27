button = document.querySelector("button");
password = document.getElementById("password");
passwordConfirm = document.getElementById("confirm-password");
passDiv = document.getElementById("pass-div");
button.addEventListener("click", function() {
    console.log(password.value);
    if (password.value !== passwordConfirm.value) {
        password.classList.add("error");
        passwordConfirm.classList.add("error");
        passDiv.classList.add("errorinfo");
        
    } else {
        password.classList.remove("error");
        passwordConfirm.classList.remove("error");
        passDiv.classList.remove("errorinfo");
    }
});