//needs to check if there are loged in user and if not go to log in page
// i think it still has the problem that it reloads endlessly
if (localStorage.getItem("logedIn")===null){
    window.location.href = "../html/login.html"
}