let rate = 250;

var timer = setInterval(growCircle, rate);

$(function(){
    $("#start").click(spawnCircle);
    timer = setInterval(growCircle, rate);
});

var amount = 10;
var width = 1;

function spawnCircle() {

    clearInterval(timer);

    $("#cirCont").empty();

    width = parseInt($("#width").val());
    amount = parseInt($("#growamount").val());
    rate = parseInt($("#growrate").val());
    let num = parseInt($("#num").val());

    for (let i = 0; i < num; i++){
        $("#cirCont").append($("<div>", {
            "id": "circle"
        }));
    }
    setInitialDimentions();
    timer = setInterval(growCircle, rate);
}

function setInitialDimentions() {
    $('*[id*=circle]:visible').each(function(){
        $(this).css("height", width).css("width", width).css("border-radius", (width)/2);
        $(this).css("background-color", getRandomColor());

        let rMargin = Math.random() * 1000;
        $(this).css("margin-left", rMargin + "1px");

        $(this).click(circleClicked);


        $(this).mouseover (function () {
            let alpha = $("#circle").css("opacity");
            $("#circle").css("opacity", alpha - 0.1);
        });
        $(this).mouseout (function () {
            $("#circle").css("opacity", 1);
        });
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function growCircle() {
    $('*[id*=circle]:visible').each(function(){
        let height = parseInt($(this).css("height"));
        let width = parseInt($(this).css("width"));
        $(this).css("height", height + amount).css("width", width + amount).css("border-radius", (height + amount)/2);
    });
}
function circleClicked (){
    $("#circle").remove();
}