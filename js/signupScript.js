
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault()
    if (checkValidation()) {
        checkUser()
    }
});

//local storge users = [{username: '' , password: ''}, .....]

function checkValidation() {
    //create var of the input
    let currUsername = document.getElementById("username").value;
    let curPassword = document.getElementById("password").value;
    let curAge = document.getElementById("age").value;
    //check validation of email
    let usernameRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (usernameRegex.exec(currUsername) == null) {
        alert("The email address is incorrect")
        return false
    }
    //check validation of password
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,}$/
    if (passwordRegex.exec(curPassword) == null) {
        alert("Password should contain: \n 1. at least one uppercase letter \n 2.at least one lowercase letter\n 3.at least one digit \n 4.should be more than 4 character")
        return false;
    }
    if (curAge < 15 || curAge > 99) {
        alert("Our site is only available to people aged 16-99")
        return false;
    }
    return true;
}
function checkUser() {
    let currUsername = document.getElementById("username").value;
    let curUsers = JSON.parse(localStorage.getItem('users'));
    //makes an empty array if local storge is empty
    if (curUsers == null) {
        curUsers = []
    }
    //checks if the username is already exists
    for (let i = 0; i < curUsers.length; i++) {
        if (curUsers[i].username == currUsername) {
            alert("this username already exists")
            return
        }
    }
    //if the username is valid, adds the user to the local storge
    const newUser = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };
    curUsers.push(newUser)
    localStorage.setItem("users", JSON.stringify(curUsers))

    console.log(curUsers);
}

