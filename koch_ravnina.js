let ravnina = [];
let odsek = [];
let koch_kot = 60;
let stgeneracij = 2;
let stgeneracijStaro;

function windowResized() {
    if(windowWidth>600){
        resizeCanvas(windowWidth/3,windowWidth/4);
    }
    else{
        resizeCanvas(windowWidth/1.2,windowWidth/1.6);
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
    }
    else{
        resizeCanvas(windowWidth/1.2,windowWidth/1.6);
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
    ravnina.push(v);
        
    for(let x = 0; x<stgeneracij; x++){
        let generacija = [];
        for(let y = 0; y<ravnina.length; y++){
        odsek = ravnina[y].racunanje();
            dodaj(odsek,generacija); 
        }
        ravnina = generacija;
    } 
    background(0, 96, 255);
    stroke(255);
    strokeWeight(4);

    for(let x of ravnina){
        x.risanje();
    }
    ravnina = [];
    stgeneracijStaro = stgeneracij;
}


