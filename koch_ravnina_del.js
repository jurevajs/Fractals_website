class del{
    
    tocka_a;
    tocka_b;

    constructor(a, b){

        this.tocka_a = a.copy();
        this.tocka_b = b.copy();
    }

    racunanje(){

        let koordinate = [];
        angleMode(DEGREES);

        let dolzina = p5.Vector.sub(this.tocka_b,this.tocka_a);
        dolzina.div(3);

        let prvi_del = p5.Vector.add(this.tocka_a,dolzina);
        koordinate [0] = new del(this.tocka_a, prvi_del);

        let tretji_del = p5.Vector.sub(this.tocka_b,dolzina);
        koordinate [3] = new del(tretji_del, this.tocka_b);

        dolzina.rotate(-koch_kot);
        let drugi_del = p5.Vector.add(prvi_del, dolzina);

        koordinate [1] = new del(prvi_del, drugi_del);
        koordinate [2] = new del(drugi_del, tretji_del);
        
        return koordinate;
    }

    risanje(){

        stroke(255);
        line(this.tocka_a.x, this.tocka_a.y, this.tocka_b.x, this.tocka_b.y);

    }
}