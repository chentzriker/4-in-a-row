document.getElementById("submit").addEventListener("click", checkUserExistence);
//! Remove
let userEntered = null;
let failedLogin = 0
function checkUserExistence() {
    const name = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    const usersStr = localStorage.getItem("users");
    const usersArr = JSON.parse(usersStr);
    for (element of usersArr) {
        //! Use === instead of ==
        if (element.username === name && element.password === password) {
            //! Each word should start in capital letter
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

    if (failedLogin === 3) {
        //! Why do you need to sent the element? why wont get it inside the function
        disableButtonTemporarily(document.getElementById("submit"));
        failedLogin = 0;
    }

}
function disableButtonTemporarily(buttonElement) {
    // Disable the button
    buttonElement.disabled = true;
    //! Though if you really want it to show disable? Is it not fine if it just act like disable? Your choose 
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