//check if the user is loged in before loading the page
if (localStorage.getItem("logedIn") === null) {
    window.location.href = "../html/login.html"
}

document.getElementById("logout-icon").addEventListener("click", logOut)

function logOut() {
    localStorage.removeItem("logedIn")
    window.location.href = "../html/login.html"
    return;
}