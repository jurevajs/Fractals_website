let deli = [];
let prva = [];
let druga = [];
let tretja = [];
let koch_kot = 60;
let stgeneracij = 2;
let stgeneracijStaro;

function windowResized() {
    if(windowWidth>600){
        resizeCanvas(windowWidth/3,windowWidth/4);
    }else{
        resizeCanvas(windowWidth/1.5,windowWidth/2);
    }
}

function dodaj(t,l){
    for(let x of t){
        l.push(x);
    }
}

function setup(){
    let canvas = createCanvas(windowWidth/3,windowWidth/4);
    if(windowWidth>600){
        resizeCanvas(windowWidth/3,windowWidth/4);
    }else{
        resizeCanvas(windowWidth/1.5,windowWidth/2);
    }
    canvas.parent('kochcustomizable');   
    
    
}

function draw(){
    let a = createVector(0,height/1.5);
    let b = createVector(width,height/1.5);

    koch_kot = document.getElementById("kotobracanja").value;
    console.log(koch_kot);
    stgeneracij = document.getElementById("stgeneracij").value;
    console.log(stgeneracij);

    if(stgeneracij > 5){
        stgeneracij = stgeneracijStaro;
        document.getElementById("stgeneracij").value = stgeneracijStaro;
        window.alert('Izbrali ste število izven mej!')
    }
    
    let v = new del(a,b); 
    deli.push(v);
        
    for(let x = 0; x<stgeneracij; x++){
        let naslednja = [];
        for(let y = 0; y<deli.length; y++){
        prva = deli[y].racunanje();
            dodaj(prva,naslednja); 
        }
        deli = naslednja;
    } 
    background(0, 96, 255);
    stroke(255);
    strokeWeight(4);

    for(let x of deli){
        x.risanje();
    }
    deli = [];
    stgeneracijStaro = stgeneracij;
}


