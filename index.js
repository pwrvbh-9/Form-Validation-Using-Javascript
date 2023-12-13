
function validate() {
    var username = document.getElementById('uname');
    var password = document.getElementById('pass');
    var phoneNumber = document.getElementById('phone');

    if (username.value.trim() == "" ||  password.value.trim() == "") {
        alert("No blank values allowed");
        return false;
    } else if(password.value.trim().length<5) {
        alert("Password too short");
        // pass.style.border = "solid 3px red";
        return false;
    } else if (phoneNumber.value.length<10 || phoneNumber.value.length>10) {
        alert("Invalid Phone Number")
        return false;
    } else {
        true;
    }
}