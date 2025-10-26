import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pajaro'];

  let action = ['se comio', 'orino', 'choco', 'rompio'];

  let what = ['mi tarea', 'mi telefono', 'el carro'];

  let when = ['antes de clase', 'mientras dormia', 'minetras hacia ejercicio', 'durante el almuezo', 'Mientras estaba orando'];

  let whoAleatorio = seleccionarAleatorio(who);
  let actionAleatorio = seleccionarAleatorio(action);
  let whatAleatorio = seleccionarAleatorio(what);
  let whenAleatorio = seleccionarAleatorio(when);
  let excuseElement = this.document.querySelector("#excusas");
  excuseElement.innerHTML = `${whoAleatorio} ${actionAleatorio} ${whatAleatorio} ${whenAleatorio}`;
};
function seleccionarAleatorio(lista){

  let elementoAleatorio = Math.floor(Math.random() * lista.length);
  return lista[elementoAleatorio]
}
console.log