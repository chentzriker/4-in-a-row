//needs to check if there are loged in user and if not go to log in page
// i think it still has the problem that it reloads endlessly
// ! Check if the comment above is still relevant
if (localStorage.getItem("logedIn") === null) {
    window.location.href = "../html/login.html"
}

document.getElementById("logout-icon").addEventListener("click", logOut)

function logOut() {
    localStorage.removeItem("logedIn")
    window.location.href = "../html/login.html"
    return;
}