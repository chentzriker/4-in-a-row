
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault()
    checkUser()
});

//local storge users = [{username: '' , password: ''}, .....]
// birthday: document.getElementById("birthday").value
function checkUser() {
    let currUsername = document.getElementById("username").value;
    let curUsers = JSON.parse(localStorage.getItem('users'));
    if (curUsers == null) {
        curUsers = []
    }
    for (let i = 0; i < curUsers.length; i++) {
        if (curUsers[i].username == currUsername) {
            alert("this username already exists")
            return
        }
    }
    const newUser = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };
    curUsers.push(newUser)
    localStorage.setItem("users",JSON.stringify(curUsers))

    console.log(curUsers);
}

