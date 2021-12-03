function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB,1);
    pixelDensity(1);
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            let a = map(x, 0, width, -2, 2);
            let b = map(y, 0, height, -2, 2);

            let stevec = 0;
            let ca = a;
            let cb = b;

            for(stevec; stevec<100; stevec++){
                let a2 = a*a - b*b;
                let b2 = 2*a*b;

                a = a2 + ca;
                b = b2 + cb;

                if(sqrt(a*a + b*b)>2){
                    break;
                }
            }
            let svetlost = (stevec * 8);

            if(svetlost === 0)
            {
                svetlost = 6;
            }

            let r = svetlost * 1;
            let g = svetlost * 2;
            let b1 = svetlost * 3;

            var index = (x + y * width) * 4;
            pixels[index + 0] = svetlost;
            pixels[index + 1] = svetlost;
            pixels[index + 2] = (r,g,b1);
            pixels[index + 3] = 255;               
        }
    }
  updatePixels();
}