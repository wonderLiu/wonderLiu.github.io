var head = document.querySelector('h1');
head.textContent = "hello world";

// document.querySelector('html').onclick = function() {
// 	alert('alert');
// }

var myImage = document.querySelector('img');
myImage.onclick = function() {
	var imgSrc = myImage.getAttribute('src');
	if (imgSrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src','images/firefox-08.png');
	} else {
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');
myButton.onclick = function() {
	setUserName();
}
function setUserName() {
	var myName = prompt('please enter your name.');
	localStorage.setItem('name',myName);
	head.textContent = 'Mozilla is cool,' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	head.textContent = 'Mozilla is cool,' + storedName;
}


























