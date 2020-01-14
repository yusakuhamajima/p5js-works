var x1, y1;
var angle, radius;
var step;

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight, P2D);
    colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
    // put drawing code here
    background(270, 70, 100, 100);
    radius = 0.1;
    step = 5;
    stroke(90, 90, 100, 100);
    strokeWeight(3);

    for (let angle = 0; angle < 5000; angle += step) {
        x1 = width / 2 + cos(radians(angle)) * radius * angle;
        y1 = height / 2 + sin(radians(angle)) * radius * angle;
        // line(x1, y1, x2, y2);
        point(x1, y1);
    }
}

function keyTyped() {
    if (key === 's') {
        saveCanvas('mo-004', 'png');
    }
}
