export default draw;

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');


        for (var i = 14; i < 15; i++) {
            getArc(ctx, 300 /*+ i * 15*/, 300, i * 10, true, 100 / i);
        }

    }
}

function getArc(ctx, x, y, radius, isClockWise, t) {
    var arc = {
        render: render
    }
    var color = getRndColor();
    arc.render(radius);
    return arc;
    function render(value) {
        //console.log(value);
        clear();
        ctx.strokeStyle = color;
        ctx.lineWidth = radius / 50;
        ctx.beginPath();
        var startAngle = isClockWise ? value * Math.PI / 180 : -value * Math.PI / 180;
        var endAngle = isClockWise ? startAngle + 3 * Math.PI / 2 : startAngle - 3 * Math.PI / 2;
        ctx.arc(x, y, radius, startAngle, endAngle, isClockWise); //   
        ctx.stroke();
        console.log('Start', startAngle, 'End', endAngle);
        setTimeout(function () { render(value + 3, ctx) }, t);
    }

    function clear() {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = ctx.lineWidth + 3;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, true); //   
        ctx.stroke();
    }

    function getRndColor() {
        var r = 255 * Math.random() | 0,
            g = 255 * Math.random() | 0,
            b = 255 * Math.random() | 0;
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
}
