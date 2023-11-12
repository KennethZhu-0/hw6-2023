var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


var videoElement = document.querySelector(".video");
window.addEventListener("load",function(){
	videoElement.autoplay = false;
	videoElement.loop = false;
	console.log("diyi")
});

var playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
	videoElement.play();
	updateVolumeInfo();
});

function updateVolumeInfo() {
	var volumeInfo = document.getElementById("volume");
	var currentVolume = videoElement.volume * 100;
	volumeInfo.textContent = currentVolume + "%";
}

var pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function() {
	videoElement.pause();
});

var slowerButton = document.getElementById("slower");
slowerButton.addEventListener("click", function() {
	videoElement.playbackRate *= 0.90;
	console.log(videoElement.playbackRate);
});

var fasterButton = document.getElementById("faster");
fasterButton.addEventListener("click", function() {
	videoElement.playbackRate /= 0.90;
	console.log(videoElement.playbackRate);
});

var skipButton = document.getElementById("skip");
skipButton.addEventListener("click", function() {
	videoElement.currentTime += 10;
	if (videoElement.currentTime >= videoElement.duration) {
		videoElement.currentTime = 0;
	}
	console.log(videoElement.currentTime);
});

var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function() {
	if (videoElement.muted == false) {
		videoElement.muted = true;
		muteButton.textContent = "Unmute";
	} else {
		videoElement.muted = false;
		muteButton.textContent = "Mute";
	}
});

var volumeSlider = document.getElementById("slider");
volumeSlider.addEventListener("change", function() {
	videoElement.volume = volumeSlider.value / 100;
	updateVolumeInfo();
});

var oldSchoolButton = document.getElementById("vintage");
oldSchoolButton.addEventListener("click", function(){
	videoElement.classList.toggle("oldSchool");
});

var originalButton = document.getElementById("orig");
originalButton.addEventListener("click", function(){
	videoElement.classList.remove("oldSchool");
});

  
  