import getRadians from './tools/getRadians.js'

export default init;

let startDate;
let ctx; 

function init() {
    startDate = new Date();

    let canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    let colors = Array(100).fill().map(x => getRndColor());
    drawAll(colors);
}

function drawAll(colors){
    ctx.clearRect(0, 0, 1000, 600);

    for(let i = 1; i <= 20; i++){
        draw(i, colors[i]);
    }
    
    window.requestAnimationFrame(() => drawAll(colors));
}

function draw(num, color) {

    let counterclockwise = num % 2 === 0;

    let tSpan = getTimeDiff() * 0.0001 * num;

    let x = 500;
    let y = 300;
    
    ctx.lineWidth = num;
    ctx.strokeStyle = color;

    ctx.beginPath();

    let startAngle = getRadians(45) * tSpan;
    let endAngle = startAngle + getRadians(90);

    ctx.arc(x, y, 50 + 20 * num, startAngle, endAngle);
    ctx.stroke();
}

function getTimeDiff(){
    return (new Date() - startDate); 

}

function getRndColor() {
    var r = 255 * Math.random() | 0,
        g = 255 * Math.random() | 0,
        b = 255 * Math.random() | 0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}