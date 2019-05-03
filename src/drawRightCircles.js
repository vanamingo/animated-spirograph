import getRadian from './tools/getRadians.js'

export default draw;

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
       var ctx = canvas.getContext('2d');
  
       render(1);
  
       function render(i){
           console.log("Render", i)
          let increment = i * 20;
  
          ctx.beginPath();
          ctx.arc(150 + 40 * i*0.1, 250, 125, getRadian(increment), getRadian(increment + 90), false); // Outer circle
          ctx.stroke(); 
          
          setTimeout(() => {render(++i)}, 50);
       }
  
    }
  }
  
 