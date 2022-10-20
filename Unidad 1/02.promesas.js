console.log("Hola 👋");

function miCallBack() {
  console.log("Mi callback se ha ejecutado");
}

let time = 2000;

// setTimeout(miCallBack, time);

console.log("Creando la promesa");
let objPromesa = new Promise(
  // función I/O
  function (resolve, reject) {
    console.log("Iniciando.");
    // Una petción web trae datos:
    //  Si una petición resuelve datos, se invoca resolve()
    //  Si una petición NO resuelve datos, se invoca reject()
    setTimeout(function () {
      let ran = Math.random();
      console.log("ran: " + ran);
      if (ran >= 0.5) {
        console.log("Se resuleve.");
        resolve();
      } else {
        console.log("Se rechaza.");
        reject();
      }
    }, time);
  }
);
objPromesa
  .then(function () {
    console.log("Callback 1 de resolve.");
  })
  .then(function () {
    console.log("Callback 2 de resolve.");
  })
  .catch(function () {
    console.log("Callback 1 de reject.");
  })
  .finally(function () {
    console.log("Callback del Fanally");
  });
console.log("He terminado.");
// Las promesas son objetos con principalmente 2 elementos:
// 1. Una función de tipo entrda/salida, es decir que se demora en tiempo en ejecutarse.
// 2. Un conjuto de callbacks para ejecutrase según el resultado de la función de entrada salida.
