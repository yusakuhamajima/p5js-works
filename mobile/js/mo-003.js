function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, P2D);
    canvas.parent('canvas');
}
function draw() {
    background(0);
    rect(100, 100, 100, 100);
}
function keyPressed() {
    if (key === 's') {
        console.log('key-s');
        saveCanvas('mo-003_01', 'png');
    }
}