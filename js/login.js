
//! Consider change function name
const log_in = document.getElementById("enter");
log_in.addEventListener("click", checkUserExistence);
let userEntered = null;
//! Consider change function name

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
            // userEntered = name
             window.location.href = "../html/gamemenu.html"
             return;
        }
    }
    alert ("one field or more is wrong")
    FailedLogin++
}