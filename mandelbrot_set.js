function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB,1);
    pixelDensity(1);
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            let a = map(x, 0, width, -0.54, -0.6);
            let b = map(y, 0, height, -0.54, -0.6);

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
            let svetlost = (stevec * 10000)%255 -40;

            if(stevec === 0)
            {
                svetlost = (10*47)%255;
            }

            if(stevec === 100)
            {

                let r = 255;
                let g = 255;
                let b1 = 255;
                svetlost = 255;

            }

            r = (svetlost * 3)%255;
            g = (svetlost*2)%255;
            b1 = (svetlost * 4)%255;

            var index = (x + y * width) * 4;
            pixels[index + 0] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b1;
            pixels[index + 3] = 255;               
        }
    }
  updatePixels();
}