let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;
let raio = diametro / 2;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;
let velocidadexOponente;

let colidiu = false;

//placar do jogo

let meusPotos = 0;
let pontosDoOponente = 0;

//sons do jogo

let raquetada;
let ponto;
let trilha;

//deixando o jogo possivel

let chanceDeErrar = 0;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinhha();
  movimentaBolinha();
  verificaColisao();
  movimentaRaqueteOponente();
  incluirPlacar();
  marcaPonto();
  colisaoMinhaRaquete(xRaquete, yRaquete);
  colisaoMinhaRaquete(xRaqueteOponente, yRaqueteOponente);
  
  
  
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
  
  
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  
 
  
  
}

function mostraBolinhha(){
   circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
   xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}


function verificaColisao(){
   if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1
  }
}

function movimentaRaqueteOponente(){
   velocidadeyOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 -30;
   yRaqueteOponente += velocidadeyOponente + chanceDeErrar
   calculaChanceDeErrar()
}

function colisaoMinhaRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPotos, 170,26);
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPotos += 1;
    ponto.play();
  }
  
  if(xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPotos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}







   
  
