let imagen0;
let imagen1;
let EstadoMenu=true;
let EstadoP1=false;
let EstadoP2=false;

function preload() {
  imagen0=loadImage("data/menu.png");
  imagen1=loadImage("data/Pantalla1.png");
}
function setup() {
  createCanvas(640, 480);
}


function draw() {
  if (EstadoMenu===true) {
    image(imagen0, 0, 0);
    fill(0);
    rect(220, 335, 180, 30);
    textAlign(CENTER, BOTTOM)
      textSize(30);
    fill(255);
    text("COMENZAR", 310, 370);
  } else if (EstadoP1===true) {
    image(imagen1,0,0);
    fill(0);
    textSize(22);
    text("En el cuarto de los chicos: Gumball y Darwin viendo videos",width/2,460);
  }
}

function mousePressed () {
  if (mouseX>=220 && mouseX<=400 && mouseY>=335 && mouseY<=365) {
    EstadoP1 = true;
    EstadoMenu = false;
  }
}
