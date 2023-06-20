let xBolinha = 80;
let yBolinha = 50;
let diametro = 50;
let raio = diametro/2;

let velocidadexBolinha = 4;
let velocidadeyBolinha = 4;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo
let meusPontos = 0;
let podePontuar = true; 

function setup() {
    createCanvas(600, 600);
  }

function movimentoRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 5;
    }
    
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 5;
    }

}

function colisaoRaquete (){
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
        velocidadexBolinha *= -1 ;
        marcaPonto();
        // meusPontos+=1;
        // podePontuar = false;
    }
}

function incluirPlacar (){
    fill(255);
    text(meusPontos, 280, 30);
}

function marcaPonto() {
    meusPontos += 1;
    podePontuar = false;  
}

function tiraPonto() {
    if(!podePontuar){
        return  
    }

    if ((xBolinha - raio ) < raqueteComprimento) {
        meusPontos -= 1;
        podePontuar = false;
    } 
}


function draw(){
    background(0);
    ellipse(xBolinha, yBolinha, diametro);
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
    xBolinha += velocidadexBolinha; 
    yBolinha += velocidadeyBolinha; 
    if (xBolinha + raio > width || xBolinha - raio < 0){
            velocidadexBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
            velocidadeyBolinha *= -1;
    } 
    
    movimentoRaquete();
    colisaoRaquete();
    tiraPonto();
    incluirPlacar();
}





  
  