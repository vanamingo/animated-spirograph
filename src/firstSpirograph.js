export default draw;

function draw() {
    // Get drawing context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // Draw spirograph
    drawSpirograph(context, canvas.width / 2, canvas.height / 2, 100, 110, 10);

}


function drawSpirograph(context, cx, cy, radius1, radius2, ratio) {
    var x, y, theta;

    // Move to starting point (theta = 0)
    context.beginPath();
    context.moveTo(cx + radius1 + radius2, cy);

    // Draw segments from theta = 0 to theta = 2PI
    for (theta = 0; theta <= Math.PI * 2; theta += 0.01) {
        x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
        y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
        context.lineTo(x, y);
    }

    // Apply stroke
    context.stroke();
}

