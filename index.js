const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const startRef = document.querySelectorAll('button');
function getRamdomInt(min, max) {
    return Math.floor(Math.random()* (max-min+1))+min

}
let key = getRamdomInt(0, colors.length-1);
console.log(key)
function random(colors) {
    return colors [getRamdomInt(0, colors.length-1)];
    
}
// function random(color){
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };}
const bodyRef = document.querySelector('body');
function handler(randomIntegerFromInterval, colors) {
//   bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(colors[0],colors[5])];

};
// const bodyColor = bodyRef.style.backgroundColor = 'red';
startRef[0].addEventListener('click', setInterval);
const timerId = setInterval(handler, 1000);
console.log(randomIntegerFromInterval(colors))