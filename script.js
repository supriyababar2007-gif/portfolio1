const words = [
"Software Developer",
"Full Stack Developer",
"AWS Cloud Engineer",
"Azure Administrator",
"Networking Trainer",
"Cyber Security Trainer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

currentWord = words[i];

if (isDeleting) {

document.getElementById("typing").textContent =
currentWord.substring(0, j--);

} else {

document.getElementById("typing").textContent =
currentWord.substring(0, j++);

}

if (!isDeleting && j === currentWord.length + 1) {

isDeleting = true;

setTimeout(type, 1000);

}

else if (isDeleting && j === 0) {

isDeleting = false;

i++;

if (i === words.length)
i = 0;

}

setTimeout(type, isDeleting ? 50 : 150);

}

type();