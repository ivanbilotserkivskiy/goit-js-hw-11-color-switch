const colors = ['#FFFFFF','#2196F3','#4CAF50','#FF9800','#009688','#795548',];

const buttonRef = document.querySelectorAll('button');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const bodyRef = document.querySelector('body');
const handler = () => {
  const a = randomIntegerFromInterval(1, 6);
  bodyRef.style.backgroundColor = colors[a-1];
};



buttonRef[0].addEventListener('click', () => {
    const intervalId = setInterval(handler, 1000);
    buttonRef[0].setAttribute('disabled', 'true')
    if(buttonRef[0].hasAttribute('disabled')=== false){
        clearInterval(intervalId);
    }

});
buttonRef[1].addEventListener('click', () => {
    buttonRef[0].removeAttribute('disabled')
});


