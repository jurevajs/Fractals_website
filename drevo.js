function windowResized() {
    resizeCanvas(windowWidth/1.5,windowHeight/2)
}

function setup(){
    createCanvas(windowWidth/1.5,windowHeight/2);
}

function draw(){
    background(14, 1, 102);
    translate(windowWidth/3,windowHeight/2);
    stroke (255);
    strokeWeight(7);
    draw2(windowHeight/6);
}

function draw2(lenght){

    
    line(0,0,0,-lenght);
    translate(0,-lenght);
    if(lenght>10)
    {
        push();
        rotate((mouseX/10)/(TWO_PI*8));
        draw2(lenght * 0.66);
        pop();
        push();
        rotate(-(mouseX/10*0.3)/(TWO_PI*8));
        draw2(lenght * 0.66);
        pop();
    }
    
}