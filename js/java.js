// Slide-Show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1
	} 
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
}

// Video
function playPause() {
	var myVideo=document.getElementById("video1");
	if (myVideo.paused)
		myVideo.play();
	else
		myVideo.pause();
}
				
function makeBig() {
	var myVideo=document.getElementById("video1");
	myVideo.width=760;
}
					
function makeSmall() {
	var myVideo=document.getElementById("video1");
	myVideo.width=320;
}
					
function makeNormal() {
	var myVideo=document.getElementById("video1");
	myVideo.width=540;
}

function makeBig_old() {
	var myVideo=document.getElementById("video1");
	myVideo.width=930;
}
					
function makeSmall_old() {
	var myVideo=document.getElementById("video1");
	myVideo.width=320;
}
					
function makeNormal_old() {
	var myVideo=document.getElementById("video1");
	myVideo.width=630;
}

function SetVolumeVideo(val) {
    var player = document.getElementById('video1');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}

function SetVolumeAudio(val) {
    var player = document.getElementById('audio1');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}

// Drag & Drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}