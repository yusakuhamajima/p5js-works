function setup() {
    createCanvas(800, 600, P2D);
    colorMode(HSB, 360, 100, 100, 100);
    background(220, 60, 20, 100);

    for (let i = 0; i < 80; i++) {
        fill(random(360), 100, 100, random(100));
        stroke(220, 100, 100, 80);
        strokeWeight(0.5);
        rect(random(width), random(height), random(10, 70), random(10, 400));

    }

}

function keyPressed() {
    if (key == 's') {
        save("p5js-003-03.png");
    }
}