export default draw;

function draw() {
    // Get drawing context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // Draw spirograph
    drawSpirograph(context, canvas.width / 2, canvas.height / 2, 200, 50, 10);


   const context2 = document.getElementById('canvas2').getContext('2d');
   context2.beginPath();
   context2.lineWidth = 15;
    context2.arc(400, 400, 150, 0, Math.PI);
    context2.lineJoin = context2.lineCap = 'round';
    context2.stroke();
    context2.closePath();
}


function drawSpirograph(context, cx, cy, radius1, radius2, ratio) {
    var x, y, theta;

    // Move to starting point (theta = 0)
    context.beginPath();
    context.lineWidth = 3;
    //context.lineJoin = context.lineCap = 'round';
    //context.shadowBlur = 1;
    //context.shadowColor = 'rgb(0, 0, 0)';
    context.moveTo(cx + radius1 + radius2, cy);
    //context.closePath();

     theta = 0;
    // Draw segments from theta = 0 to theta = 2PI
  /*  for (theta = 0; theta <= Math.PI * 2; theta += 0.01) {
        x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
        y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
        context.lineTo(x, y);
        context.stroke();
    }*/

    drawFrame();

    function drawFrame(){
        if( theta > Math.PI * 2){
            return;
        }
        //context.beginPath();
        x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
        y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
        context.lineJoin = context.lineCap = 'round';
        context.lineTo(x, y);
        context.stroke();
       // context.closePath();

        theta += 0.01;
        window.requestAnimationFrame(drawFrame);
    }
    
}

