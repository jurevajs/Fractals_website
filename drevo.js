function windowResized() {
    resizeCanvas(windowWidth/1.5,windowHeight/2)
}

function setup(){
    let canvas = createCanvas(windowWidth/1.5,windowHeight/2);
    canvas.parent('drevo');
}

function draw(){
    background(0, 96, 255);
    translate(windowWidth/3,windowHeight/2);
    stroke (255);
    strokeWeight(5);
    draw2(windowHeight/6);
}

function draw2(lenght){

    line(0,0,0,-lenght);
    translate(0,-lenght);
    if(lenght>9)
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