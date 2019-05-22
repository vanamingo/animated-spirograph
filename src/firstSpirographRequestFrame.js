export default draw;

function draw() {
    // Get drawing context
    var canvas = document.getElementById('canvas');
    var lineContext = canvas.getContext('2d');
    const pointContext = document.getElementById('canvas2').getContext('2d');
    // Draw spirograph
    
    drawSpirograph(lineContext, pointContext, canvas.width / 2, canvas.height / 2, 200, 55, 5.3);

}


function drawSpirograph(lineContext, pointContext, cx, cy, radius1, radius2, ratio) {



    var x, y, theta;

    // Move to starting point (theta = 0)
    lineContext.beginPath();
    lineContext.lineWidth = 1;
    lineContext.lineJoin = lineContext.lineCap = 'round';
    lineContext.shadowBlur = 0.3;
    //context.shadowColor = 'rgb(0, 0, 0)';
    lineContext.moveTo(cx + radius1 + radius2, cy);
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
        if( theta > Math.PI * 20){
            return;
        }
        //context.beginPath();
        x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
        y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
        lineContext.lineJoin = lineContext.lineCap = 'round';
        lineContext.lineTo(x, y);
        lineContext.stroke();
       // context.closePath();

        theta += 0.01;

      //  radius1 += 0.02;
      //  radius2 -= 0.02;

        drawPointAndCircles(x,y);

        window.requestAnimationFrame(drawFrame);
    }


    function drawPointAndCircles(x, y){
        pointContext.clearRect(0, 0, 1000, 600);

        pointContext.strokeStyle = 'red';
        pointContext.beginPath();
        pointContext.arc(x, y, 5, 0, 2 * Math.PI);
        pointContext.stroke();

        drawCircles(x, y);
    }

    function drawCircles(x, y){
        pointContext.strokeStyle = 'gray';
        pointContext.beginPath();
        pointContext.arc(cx, cy, radius1-radius2, 0, 2 * Math.PI);
        pointContext.stroke();

        var x1 = cx + radius1 * Math.cos(theta);
        var y2 = cy + radius1 * Math.sin(theta);
        
        pointContext.beginPath();
        pointContext.arc(x1, y2, radius2, 0, 2 * Math.PI);
        pointContext.stroke();


        var x1 = cx + radius1 * Math.cos(theta);
        var y1 = cy + radius1 * Math.sin(theta);


        var x2 = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
        var y2 = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
        
        pointContext.beginPath();
        pointContext.strokeStyle = 'red';
        pointContext.moveTo(x1, y1);
        pointContext.lineTo(x2, y2);
        pointContext.stroke();

    }
    
}

