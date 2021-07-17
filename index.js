const colors = ['#FFFFFF','#2196F3','#4CAF50','#FF9800','#009688','#795548',];

const buttonRef = document.querySelectorAll('button');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const bodyRef = document.querySelector('body');

const startButton = buttonRef[0].addEventListener('click', () => {
    buttonRef[0].setAttribute('disabled', 'true')
    const intervalId = setInterval(() => {

      const a = randomIntegerFromInterval(1, 6);
      bodyRef.style.backgroundColor = colors[a-1];
      buttonRef[1].addEventListener('click', () => {

        buttonRef[0].removeAttribute('disabled')
        clearInterval(intervalId)});
      }, 1000)
    });
 
    




