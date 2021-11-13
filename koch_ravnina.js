let deli = [];
let prva = [];
let druga = [];
let tretja = [];


function dodaj(t,l){
    for(let x of t){
        l.push(x);
    }
}

function setup(){
    createCanvas(windowWidth/1.5,windowHeight/2);

    let a = createVector(0,windowWidth/3);
    let b = createVector(windowHeight/1.48,windowWidth/3);
    
    let v = new del(a,b); 
    deli.push(v);
        
    for(let x = 0; x<4; x++){
        let naslednja = [];
        for(let y = 0; y<deli.length; y++){
        prva = deli[y].racunanje();
            dodaj(prva,naslednja); 
        }
        deli = naslednja;
    } 
    
}

function draw(){
    background(0);
    stroke(255);
    strokeWeight(6);

    for(let x of deli){
        x.risanje();
    }
}

