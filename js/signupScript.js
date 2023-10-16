
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault()
    if (checkValidation()) {
        //if user created successfully moving to the manu page
        if (checkUser())
        window.location.href = "../html/gamemenu.html"
        return;
    }
});

//local storge users = [{username: '' , password: ''}, .....]

//! Try to search if you can do check validation in html 
function checkValidation() {
    //create var of the input
    const currUsername = document.getElementById("username").value;
    const curPassword = document.getElementById("password").value;
    const curAge = document.getElementById("age").value;

    //check validation of email
    let usernameRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (usernameRegex.exec(currUsername) === null) {
        alert("The email address is incorrect")
        return false
    }
    //check validation of password
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,}$/
    if (passwordRegex.exec(curPassword) === null) {
        alert("Password should contain: \n 1. at least one uppercase letter \n 2.at least one lowercase letter\n 3.at least one digit \n 4.should be more than 4 character")
        return false;
    }
    //check if password was confirmed
    const passwordConfirm = document.getElementById("confirm").value;
    if (passwordConfirm!==curPassword){
        alert("passwords do not match")
        return false;
    }
    if (curAge < 15 || curAge > 99) {
        alert("Our site is only available to people between the aged 16-99")
        return false;
    }
    return true;
}
//! Consider change function name
function checkUser() {
    const currUsername = document.getElementById("username").value;
    const curUsers = JSON.parse(localStorage.getItem('users'));
    //makes an empty array if local storge is empty
    //! Do not use == unless you have good reason, use === instead
    if (curUsers === null) {
        curUsers = []
    }
    //checks if the username is already exists
    for (let i = 0; i < curUsers.length; i++) {
        //! Do not use == unless you have good reason, use === instead
        if (curUsers[i].username === currUsername) {
            alert("this username already exists")
            return false
        }
    }
    //if the username is valid, adds the user to the local storge
    const newUser = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };
    curUsers.push(newUser)
    localStorage.setItem("users", JSON.stringify(curUsers))
    return true;
}

