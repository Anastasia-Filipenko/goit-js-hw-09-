
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let timerId = null;

function onStart() {
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
    startBtn.disabled = true;
    stopBtn.disabled = false;
    }, 1000);
    
};

function onStop() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
   
  



console.log(body);