function mostrarEstado(imagen, textoBoton, posX, posY, tamañoTexto, mensaje) {
  image(imagen, 0, 0);
  fill(0);
  rect(posX, posY, 180, 30);
  textSize(tamañoTexto);
  fill(255);
  textAlign(CENTER, CENTER);
  if (mensaje) {
    text(mensaje, posX, posY - 30); // Mensaje un poco arriba del botón
  }
  text(textoBoton, posX, posY);
}
