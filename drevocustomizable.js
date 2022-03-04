let alpha = 28;
let beta = -28;

function windowResized() {
    resizeCanvas(windowWidth/3,windowHeight/2)
}
function setup(){
    let canvas = createCanvas(windowWidth/3,windowHeight/2);
    canvas.parent('drevocustomizable');
    angleMode(DEGREES);
}

function draw(){
    alpha = document.getElementById("kotalfa").value;
    console.log(alpha);
    beta = document.getElementById("kotbeta").value;
    console.log(beta);
    background(0, 96, 255);
    translate(windowWidth/6,windowHeight/2);
    stroke (255);
    strokeWeight(4);
    draw2(windowWidth/15);
}

function draw2(lenght){
    line(0,0,0,-lenght);
    translate(0,-lenght);
    if(lenght>4)
    {
        push();
        rotate(alpha);
        draw2(lenght * 0.66);
        pop();
        push();
        rotate(beta);
        draw2(lenght * 0.66);
        pop();
    }
}