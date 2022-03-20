let svetilnost = 40;
let red = 0;
let green = 2; 
let blue = 15;
let stevecmax = 25;
let svetilnostStaro;
let redStaro;
let greenStaro;
let blueStaro;
function windowResized() {
    if(windowWidth>600){
        resizeCanvas(windowWidth/3,windowWidth/4);
    }
    else{
        resizeCanvas(windowWidth/1.2,windowWidth/1.6);
    }
    draw2();
}

function setup() {
    let canvas = createCanvas(windowWidth/3,windowWidth/4);
    if(windowWidth>600){
        resizeCanvas(windowWidth/3,windowWidth/4);
    }
    else{
        resizeCanvas(windowWidth/1.2,windowWidth/1.6);
    }
    canvas.parent('mandelcustomizable');  
    draw2();
    
}

function draw(){
    svetilnost = document.getElementById("svetilnost").value;
    red = document.getElementById("R").value;
    green = document.getElementById("G").value;
    blue = document.getElementById("B").value;
    
    if(redStaro != red || svetilnostStaro != svetilnost || greenStaro != green || blueStaro!= blue){
        draw2();
    }
    svetilnostStaro = svetilnost;
    redStaro = red;
    greenStaro = green;
    blueStaro = blue;
}


function draw2(){
    loadPixels();
    pixelDensity(1);

    console.log(svetilnost);
    console.log(red);
    console.log(green);
    console.log(blue);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            let a = map(x, 0, width, -2, 1.5);
            let b = map(y, 0, height, -1.5, 1.5);

            let stevec = 0;
            let ca = a;
            let cb = b;
            let b1 = 255;
            

            for(stevec; stevec<stevecmax; stevec++){
                let a2 = a*a - b*b;
                let b2 = 2*a*b;

                a = a2 + ca;
                b = b2 + cb;

                if(sqrt(a*a + b*b)>2){
                    break;
                }
            }
            let svetlost = (stevec*svetilnost)%255;

            if(stevec === 0){
                svetlost = svetilnost-10;
            }

            if(stevec === stevecmax){
                svetlost = 0;
            }

            r = (svetlost*red);
            g = (svetlost*green);
            b1 = (svetlost*blue);

            var index = (x + y * (int)(width)) * 4;
            pixels[index + 0] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b1;
            pixels[index + 3] = 255;              
        }
    }
    updatePixels();  

}