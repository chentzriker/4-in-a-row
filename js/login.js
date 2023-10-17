document.getElementById("submit").addEventListener("click", checkUserExistence);
// localStorage.setItem("logedin","[]")
let userEntered = null;
let failedLogin = 0
function checkUserExistence() {
    const name = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    const usersStr = localStorage.getItem("users");
    const usersArr = JSON.parse(usersStr);
    for (element of usersArr) {
        if (element.username === name && element.password == password) {
            let logedinUsers = JSON.parse(localStorage.getItem('logedIn'));
            if (logedinUsers === null) {
                logedinUsers = []
            }
            logedinUsers.push(name)
            const loginginfinall = JSON.stringify(logedinUsers)
            localStorage.setItem("logedIn", loginginfinall)
            window.location.href = "../html/gamemenu.html"
            return;
        }
    }
    alert("one field or more is wrong")
    failedLogin++
    console.log('failedLogin: ', failedLogin);

    if (failedLogin === 3) {
        disableButtonTemporarily(document.getElementById("submit"));
        failedLogin = 0;
    }

}
function disableButtonTemporarily(buttonElement) {
    // Disable the button
    buttonElement.disabled = true;
    buttonElement.textContent='disable'
    // Enable the button after 10 seconds
    let counter = 10;
    const intervalId= setInterval(countdown, 1000)
    function countdown(){
        document.getElementById("timeout").textContent=`You can try again in ${counter}s`
        counter--;
        if (counter < 0) {
            clearInterval(intervalId)
            buttonElement.disabled = false;
            buttonElement.textContent='log in'
            document.getElementById("timeout").textContent=""
        }
    }
}