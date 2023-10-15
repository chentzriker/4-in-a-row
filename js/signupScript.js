
document.getElementById("submit").addEventListener("click", checkUser);

let users = {}; //local storge
function checkUser() {
    console.log("jdnd")
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        birthday: document.getElementById("birthday").value
    };
    console.log(user);
    console.log(document.getElementById("username").value)
    
}
