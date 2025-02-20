
function animatedText(callback) {
  // Aquí va el código para animar el texto
  function animatedText () {

    let text1 = document.getElementById('texto1');
    let text2 = document.getElementById('texto2');
    
    text1.addEventListener('animationend', function() {
     text1.style.display = 'none';
     text2.style.display = 'block';
    });
    }
  // Cuando la animación haya finalizado, ejecutar la función de devolución de llamada
  callback();
 }
 
 let iterationCount = 0;
 
 function loop() {
  animatedText(() => {
     // Cambiar el texto del elemento text2
     // ...
 
     // Incrementar el contador de iteraciones
     iterationCount++;
 
     // Detener el bucle cuando se alcance un cierto número de iteraciones
     if (iterationCount >= 10) {
       clearInterval(intervalId);
     }
  });
 }
 
 // Ejecutar la función loop() cada 2000 milisegundos (2 segundos)
 let intervalId = setInterval(loop, 10000);