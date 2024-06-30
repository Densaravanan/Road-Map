var myGameWindow = openWindow('https://cssbattle.dev/battles');

if windowOpen(myGameWindow) {
    console.log("still playing")
}else {
    console.log("game over")
}

closeWindow(myGameWindow);

function openNewWindow(url) {
var url = document.getElementById("urlinput").ariaValue;
if (url) {
    openWindow = window.open(urlinput,"_blank")
} else {
    alert("please enter a url")
}
})
function closeWindow(myGameWindow)