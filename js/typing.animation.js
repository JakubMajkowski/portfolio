//Typing animation
const textElement = document.getElementById('name');
const newTexts = ['Jakub Majkowski', 'UI/UX Designer'];
const typingSpeed = 100;
const switchDelay = 3500;

let index = 0;

function typeWriter(text, i) {
  if (i < text.length) {
    textElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(text, i);
    }, typingSpeed);
  } else {
    setTimeout(function () {
      eraseText();
    }, switchDelay);
  }
}

function eraseText() {
  let text = textElement.innerHTML;
  let length = text.length;
  if (length > 0) {
    textElement.innerHTML = text.substring(0, length - 1);
    setTimeout(eraseText, typingSpeed);
  } else {
    index = (index + 1) % newTexts.length;
    setTimeout(function () {
      typeWriter(newTexts[index], 0);
    }, typingSpeed);
  }
}

typeWriter(newTexts[index], 0);