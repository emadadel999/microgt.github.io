$(function () {
    $("#fetch").click(getUserInfo);
});
var user;
var posts;
function getUserInfo() {
    fetch("http://jsonplaceholder.typicode.com/users/" + $("#id").val())
        .then(response => response.json())
        .then(json => parseData(json));
}
function parseData(data) {
    user = JSON.parse(JSON.stringify(data));

    fetch("http://jsonplaceholder.typicode.com/posts?userId=" + $("#id").val())
        .then(response => response.json())
        .then(json => parsePosts(json));

    fillUserInfo();
}
function fillUserInfo() {
    $("#uid").empty();
    $("#uid").append($("#id").val());
    $("#name").empty();
    $("#name").append(user.name);
    $("#username").empty();
    $("#username").append(user.username);
    $("#email").empty();
    $("#email").append(user.email);
    $("#phone").empty();
    $("#phone").append(user.phone);
    $("#website").empty();
    $("#website").append(user.website);
}
function parsePosts(data) {
    posts = JSON.parse(JSON.stringify(data));
    let result = "<ul>";
    for(let i = 0; i < posts.length; i++){
        result += "<li>" + posts[i].title + "</li><li>" + posts[i].body + "</li> <input class='showComments' id='p-" + i + "' type='button' value='Comments'/> <p id='devider'>---------------------------------------------------------------------------------------------------------</p>";
    }
    result += "</ul>";
    $("#postBody").empty();
    $("#postBody").append(result);
    $(".showComments").click(parseComments);
}
function parseComments() {
    let postNumber = (this.id.split("-"))[1];
    let url = "http://jsonplaceholder.typicode.com/comments?postId=" + (parseInt(postNumber)+1);
    //alert(url);
    fetch(url)
        .then(response => response.json())
        .then(json => renderComments(json));
}
function renderComments(data) {
    let comments = JSON.parse(JSON.stringify(data));

    let result = "";
    for(let i = 0; i < comments.length; i++){
        result += "<ul><li>" + comments[i].name + "</li><li>" + comments[i].email + "</li><li>" + comments[i].body + "</li></ul><br>";
    }
    $("#commentBody").empty();
    $("#commentBody").append(result);
}