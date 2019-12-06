let col;
let colrect;

function setup() {
    var canvas=createCanvas(800, 600, P2D);
    canvas.parent("canvas");
    colorMode(HSB, 360, 100, 100, 100);

    col = color(220, 100, 100, 20);

    background(col);
    fill(col);
    strokeWeight(1);
}

function draw() {
    colrect = color(map(220, 150, 300, 0, mouseX), 100, 100, 100);
    stroke(colrect);
    rect(0, 0, mouseX, mouseY);
}

function keyPressed() {
    if (key == 's') {
        save("p5js-001-04.png");
    }
}