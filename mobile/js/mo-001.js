var x, y, z, d;
var moveellipse;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, P2D);
    canvas.parent("canvas");
    moveellipse = new MoveEllipse();

}
function draw() {
    background(0);
    moveellipse.draw();
}

class MoveEllipse {
    constructor() {
        this.x = 100;
        this.y = height / 2;
        this.w = 30;
        this.d = -1;
    }
    draw() {
        ellipse(this.x, this.y, this.w, this.w);
        this.x = this.x + 10 * this.d;
        if (this.x < 0 || this.x > width) {
            this.d = this.d * -1;
        }
    }
}
function keyPressed() {
    if (key === 's') {
        console.log('key-s');
        saveCanvas('mo-001_01', 'png');
    }
}