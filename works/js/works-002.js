let NUM = 600;
let moveE = new Array(NUM);
let loc, vel, col, diameter, sw;

function setup() {
    createCanvas(800, 600, P2D);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    frameRate(60);

    for (let i = 0; i < NUM; i++) {
        moveE[i] = new Mover();
    }
}

function draw() {
    background(220, 100, 100, 100);

    for (let i = 0; i < NUM; i++) {
        moveE[i].moveEllipse();
    }
}

class Mover {
    constructor() {
        this.loc = createVector(random(width), random(height));
        this.vel = createVector(random(0, 3), random(0, 3));
        this.col = color(random(360), 100, 100, random(20, 50));
        this.diameter = random(10, 60);
        this.sw = random(0.5, 2);
    }

    moveEllipse() {
        ellipse(this.loc.x, this.loc.y, this.diameter, this.diameter);
        this.loc.add(this.vel);
        fill(this.col);
        // noFill();
        stroke(this.col);
        strokeWeight(this.sw);

        if (this.loc.x < 0 || this.loc.x > width) {
            // this.vel.x = this.vel.x * -1;
            this.loc.x = 0;
        }
        if (this.loc.y < 0 || this.loc.y > height) {
            // this.vel.y = this.vel.y * -1;
            this.loc.y = 0;
        }
    }
}
