const log_in = document.getElementById("enter");
log_in.addEventListener("click", checkUser);

function checkUser () {
    const name = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    if (!localStorage.getItem(name)) {
        alert("משתמש לא קיים");
        return;
    }
    let userDetails = localStorage.getItem(name);
    let check = JSON.parse(userDetails);
    if (check.password !== password ) {
        alert("password is wrong")
        return;
    }
    if (check.name !== name) {
        alert("username is wrong")
    }
    window.location.href = "../html/gamemenu.html"
    return;
};
//  const moving = document.getElementById("move");
//  moving.addEventListener("click",movePage);

//  function movePage (){
//     window.location.href = "../html/gamemenu.html"
//  } 