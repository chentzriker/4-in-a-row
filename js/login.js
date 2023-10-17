document.getElementById("submit").addEventListener("click", checkUserExistence);
// localStorage.setItem("logedin","[]")
let userEntered = null;
function checkUserExistence () {
    let FailedLogin = 0
    if (FailedLogin>=3){

    }
    const name = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    const usersstr = localStorage.getItem("users");
    const usersarr = JSON.parse(usersstr);
    for (element of usersarr) {
        if (element.username === name && element.password == password){
            let logedinUsers = JSON.parse(localStorage.getItem('logedIn'));
            if (logedinUsers === null) {
                logedinUsers = []
            }
            logedinUsers.push(name)
            const loginginfinall = JSON.stringify(logedinUsers)
            localStorage.setItem("logedIn",loginginfinall)
             window.location.href = "../html/gamemenu.html"
             return;
        }
    }
    alert ("one field or more is wrong")
    FailedLogin++
}