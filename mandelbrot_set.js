let svetilnost = 40;
let red = 0;
let green = 2; 
let blue = 15;
let svetilnostStaro;
let redStaro;
let greenStaro;
let blueStaro;
let stevecmax = 25;

function windowResized() {
    if(windowWidth>600){
        resizeCanvas(windowWidth/3,windowWidth/4);
    }
    else{
        resizeCanvas(windowWidth/1.2,windowWidth/1.6);
    }
    generiranje();
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
    generiranje();
    
}

function draw(){
    svetilnost = document.getElementById("svetilnost").value;
    red = document.getElementById("R").value;
    green = document.getElementById("G").value;
    blue = document.getElementById("B").value;
    
    if(redStaro != red || svetilnostStaro != svetilnost || greenStaro != green || blueStaro!= blue){
        generiranje();
    }
    svetilnostStaro = svetilnost;
    redStaro = red;
    greenStaro = green;
    blueStaro = blue;
}


function generiranje(){
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
            let a_od_c = a;
            let b_od_c = b;
            
            for(stevec; stevec<stevecmax; stevec++){
                let a_na2 = a*a - b*b;
                let b_na2 = 2*a*b;

                a = a_na2 + a_od_c;
                b = b_na2 + b_od_c;

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

            rd= (svetlost*red);
            gr = (svetlost*green);
            bl = (svetlost*blue);

            var index = (x + y * (int)(width)) * 4;
            pixels[index + 0] = rd;
            pixels[index + 1] = gr;
            pixels[index + 2] = bl;
            pixels[index + 3] = 255;              
        }
    }
    updatePixels();  

}