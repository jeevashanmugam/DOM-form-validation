
let userForm = document.getElementById("form");
let userName = document.getElementById("userName")
let userEmail = document.getElementById("userEmail")
let userPsw = document.getElementById("userPsw")
let error = document.getElementsByClassName("error")
let errorMsg = document.getElementsByClassName("errorMsg")
let successMsg = document.getElementsByClassName("successMsg")

userForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(errorMsg);
    //console.log(userForm,userForm,userEmail,userPsw,error,error,errorMsg,successMsg);
    sendValue(userName, 0, "Invalid user name");
    sendValue(userEmail, 1, "Invalid user email");
    sendValue(userPsw, 2, "Invalid user passward");

})
function sendValue(id, serial, message) {

    if (id.value.trim() === "") {
        // alert("fail")
        error[serial].innerHTML = message;
        id.style.border = "2px solid red";

        errorMsg[serial].style.opacity = "1";
        successMsg[serial].style.opacity = "0";
    }
    else {
        error[serial].innerHTML = "";
        id.style.border = "2px solid green";
        errorMsg[serial].style.opacity = "0";
        successMsg[serial].style.opacity = "1";

    }

}












