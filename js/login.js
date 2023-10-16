// let arr = [{name:"chen", password:123}, {name:"efrat", password:1234}];
// let item = JSON.stringify(arr)
// localStorage.setItem("users",item)
document.getElementById("submit").addEventListener("click", checkUserExistence);

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
             window.location.href = "../html/gamemenu.html"
             return;
        }
    }
    alert ("one field or more is wrong")
    FailedLogin++
}