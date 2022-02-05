let alpha = 40;
let beta = -40;

function windowResized() {
    resizeCanvas(windowWidth/3,windowHeight/2)
}
function setup(){
    let canvas = createCanvas(windowWidth/3,windowHeight/2);
    canvas.parent('drevocustomizable');
}

function draw(){
    
    background(0, 96, 255);
    translate(windowWidth/6,windowHeight/2);
    stroke (255);
    strokeWeight(7);
    draw2(windowWidth/15);
}

function draw2(lenght){
    line(0,0,0,-lenght);
    translate(0,-lenght);
    if(lenght>10)
    {
        push();
        rotate(alpha/100);
        draw2(lenght * 0.66);
        pop();
        push();
        rotate(beta/100);
        draw2(lenght * 0.66);
        pop();
    }
}