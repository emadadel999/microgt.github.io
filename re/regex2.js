window.onload = eventHandler;

function eventHandler() {
    document.getElementById("addbtn").onclick = addProduct;
}

function addProduct() {
    var dateBox = document.getElementById("txtDate");
    var datereg = new RegExp(/^([1-2][0-9][5-9][0-9]|20[0-4][0-9]|2050)[-](0?[1-9]|1[0-2])[-](0?[1-9]|[12][0-9]|3[01])$/);

    if(datereg.exec(dateBox.value)){
        alert("Success!")
    }else {
        alert("Please Enter a Valid Date")
    }
}