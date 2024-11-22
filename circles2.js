(function(win, doc) {
    win.onload = init;

    var points = [];

    function init() {
        // access the canvas element and its context
        var canvas = doc.getElementById("testCanvas");
        var context = canvas.getContext("2d");
        var ballSize = 30; //radius


         // mouse down event handler
        canvas.onmousedown = function(e) {
            // mouse x and y relative to canvas
            x = e.pageX - e.target.offsetLeft;
            y = e.pageY - e.target.offsetTop;

            // check the current points whether they should be hidden
            for (var i = 0; i < points.length; i++) {
                if (points[i].show) {
                    var dist = (points[i].x - x)*(points[i].x - x) + 
                               (points[i].y - y)*(points[i].y - y);
                    if (dist < 4*ballSize*ballSize)
                        points[i].show = false;
                }
            }

            // Clear the canvas and show the visible points
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < points.length; i++)
                if (points[i].show) {
                    context.fillStyle = points[i].color;
                    context.beginPath();
                    context.arc(points[i].x, points[i].y, ballSize, 0, Math.PI * 2);
                    context.fill();
                    context.closePath();
                }
            
            // Handle the current click
            var nextColor = randomColor();

            context.fillStyle = nextColor;
            context.beginPath();
            context.arc(x, y, ballSize, 0, Math.PI * 2);
            context.fill();
            context.closePath();

            points.push({x: x, y: y, show: true, color: nextColor});
            
        };

      }

})(window, document);









