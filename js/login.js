// let arr = [{name:"chen", password:123}, {name:"efrat", password:1234}];
// let item = JSON.stringify(arr)
// localStorage.setItem("users",item)
const log_in = document.getElementById("enter");
log_in.addEventListener("click", checkUser);


function checkUser () {
    console.log("entered")
    let FailedLogin = 0
    if (FailedLogin>=3){

    }
    const name = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    console.log(name)
    let usersstr = localStorage.getItem("users");
    let usersarr = JSON.parse(usersstr);
    for (element of usersarr) {
        if (element.username === name && element.password == password){
             window.location.href = "../html/gamemenu.html"
             return;
        }
    }
    alert ("one field or more is wrong")
    FailedLogin++
}