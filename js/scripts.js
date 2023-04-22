/*Video*/
var video = document.getElementById("peaches__song");
video
function mute() {
    if (video.muted === false) {
        video.muted = true;
    }
    else {
        video.muted = false;
    }
}
document
    .getElementById("sound__button")
    .addEventListener("click", mute);

