var x, y, w, h;
var onesecond;
var cnt;
var sc;

function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    x = 0;
    y = 0;
    w = 400;
    h = 400;
    onesecond = TAU / 60;
    console.log(onesecond);
    console.log(cnt);
    angle = -HALF_PI;
}

function draw() {
    background(0);

    // time num
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    sc = second();
    cnt = onesecond * sc;
    text(sc, width / 2, height / 2);

    translate(width / 2, height / 2);
    rotate(angle);
    noFill();
    stroke(255);
    strokeWeight(10);
    arc(x, y, w, h, 0, cnt);
}

function keyTyped() {
    if (key === 's') {
        saveCanvas('mo-003', 'png');
    }
}
