window.onload = eventHandler;

function eventHandler() {
    document.getElementById("btn").onclick = submit;
}

function submit() {
    var pwd = document.getElementById("passwordinput");
    var website = document.getElementById("siteinput");
    var regx = new RegExp(("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})"));
    var regx2 = new RegExp("(^http://|https://)");

    if(regx.exec(pwd.value) && regx2.exec(website.value)) {
        alert("Success!");
    }else {
        alert("Incorrect Information Entered");
    }
}