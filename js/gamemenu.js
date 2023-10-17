document.getElementById("logout-icon").addEventListener("click", logOut)
const unavailableGames= document.getElementsByClassName("unavailable")
for (let i = 0; i < unavailableGames.length; i++) {
    unavailableGames[i].addEventListener("mouseover", unavailablePic)
}


function unavailablePic(){
    //unavailableGames[i].src
}

function logOut(){
    // console.log('userEntered: ', userEntered);
    // userEntered = null;
    // console.log(userEntered);
    window.location.href = "../html/login.html"
    return;
}