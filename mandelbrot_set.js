let svetilnost = 10;
let red = 2;
let green = 4; 
let blue = 9;
let stevecmax = 25;
function windowResized() {
    resizeCanvas(windowWidth/3,windowWidth/3);
}

function setup() {
    let canvas = createCanvas(windowWidth/3,windowWidth/3);
    canvas.parent('mandelcustomizable');  
    
}

function draw(){
    colorMode(HSB,1);
    pixelDensity(1);
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            let a = map(x, 0, width, -2, 1);
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

            if(stevec === 0)
            {
                svetlost = 10;
            }

            if(stevec === stevecmax)
            {
                svetlost = 0;
            }

            r = (svetlost*red);
            g = (svetlost*green);
            b1 = (svetlost*blue);

            var index = (x + y * width) * 4;
            pixels[index + 0] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b1;
            pixels[index + 3] = 255;                
        }
    }
  updatePixels();
}