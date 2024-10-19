let estados = [];
let estadoActual = 0; // Índice del estado actual

function preload() {
  estados.push( {
  imagen:
    loadImage("data/menu.png"),
    textoBoton:
    "COMENZAR",
  }
  );
  estados.push( {
  imagen:
    loadImage("data/Pantalla1.png"),
    textoBoton:
    "SIGUIENTE",
    relato:
    "En el cuarto de los chicos: Gumball y Darwin ven videos"
  }
  );
  estados.push( {
  imagen:
    loadImage("data/Pantalla2.jpeg"),
    textoBoton:
    "SIGUIENTE",
    relato:
    "La computadora se apaga de repente, y Darwin desaparece."
  }
  );
  estados.push( {
  imagen:
    loadImage("data/Pantalla3.jpg"),
    textoBoton:
    "SIGUIENTE",
    relato:
    "La computadora se reinicia y muestra un mensaje de ElmorePlus"
  }
  );
  estados.push( {
  imagen:
    loadImage("data/Pantalla4.jpg"),
    relato:
    "¿Qué responderá Gumball?"
  }
  );
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  rectMode(CENTER);
  let estado = estados[estadoActual];
  mostrarEstado(estado.imagen, estado.textoBoton, width / 2, height * (estadoActual === 0 ? 0.8 : 0.9), estadoActual === 0 ? 30 : 22, estado.relato);
  //estadoActual === 0 ? 0.8 : 0.9) significa que hay una verificación, si estadoActual es igual a 0, entonces height se calcula como height*0.8, de lo contrario,
  //si estadoActual es diferente a 0, height se calcula como height*0.9).
}

function mousePressed() {
  if (mouseEnBoton(width / 2, height * (estadoActual === 0 ? 0.8 : 0.9))) {
    if (estadoActual === 0) {
      estadoActual = 1; // Cambia de menú a Pantalla 1
    } else if (estadoActual === 1) {
      estadoActual = 2; // Cambia de Pantalla 1 a Pantalla 2
    } else if (estadoActual===2) {
      estadoActual=3;
    } else if (estadoActual===3) {
      estadoActual=4;
    }
    // Agrega más lógica para los siguientes estados
  }
}
