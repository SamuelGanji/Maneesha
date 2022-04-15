function validate(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if (username == "maneesha" && password == "2304"){
        window.location.href="man.html";
        return false;
    }
    else{
        alert("Login Failed");
        exit();
    }
}