let alpha = 28;
let beta = -28;

function windowResized() {
    if(windowWidth>600){
        resizeCanvas(windowWidth/3,windowWidth/4);
    }
    else{
        resizeCanvas(windowWidth/1.2,windowWidth/1.6);
    }
}
function setup(){
    let canvas = createCanvas(windowWidth/3,windowWidth/4);
    if(windowWidth>600){
        resizeCanvas(windowWidth/3,windowWidth/4);
    }
    else{
        resizeCanvas(windowWidth/1.2,windowWidth/1.6);
    }
    canvas.parent('drevocustomizable');
    angleMode(DEGREES);
}

function draw(){
    alpha = document.getElementById("kotalfa").value;
    console.log(alpha);
    beta = document.getElementById("kotbeta").value;
    console.log(beta);
    background(0, 96, 255); 
    if(windowWidth>600){
        translate(windowWidth/6,windowWidth/4);
        stroke (255);
        strokeWeight(4);
        draw2(windowWidth/15);
    }
    else{
        translate(windowWidth/2.4,windowWidth/1.6);
        stroke (255);
        strokeWeight(4);
        draw2(windowWidth/5);
    }      
    
}

function draw2(lenght){
    line(0,0,0,-lenght);
    translate(0,-lenght);
    if(lenght>9)
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