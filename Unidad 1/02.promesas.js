console.log("Hola 馃憢");

function miCallBack() {
  console.log("Mi callback se ha ejecutado");
}

let time = 2000;

// setTimeout(miCallBack, time);

console.log("Creando la promesa");
let objPromesa = new Promise(
  // funci贸n I/O
  function (resolve, reject) {
    console.log("Iniciando.");
    // Una petci贸n web trae datos:
    //  Si una petici贸n resuelve datos, se invoca resolve()
    //  Si una petici贸n NO resuelve datos, se invoca reject()
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
// 1. Una funci贸n de tipo entrda/salida, es decir que se demora en tiempo en ejecutarse.
// 2. Un conjuto de callbacks para ejecutrase seg煤n el resultado de la funci贸n de entrada salida.
