var botones = document.querySelectorAll('.btn-danger');

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', eliminarFila);
}

function eliminarFila(e) {
  e.target.parentElement.remove();
}

// window.onload = "alCargar()";

// function alCargar() {
//   console.log('test');
//   var value = prompt('Valor');
//   document.write(value);
// }


// Eventos
//
// var boton = document.querySelector('.btn');
//
// boton.addEventListener('click', changeTitle);
//
// function changeTitle() {
//   var titleInput = document.querySelector('#title').value;
//   document.querySelector('h1').innerText = titleInput;
// }

// Listado de eventos: https://www.w3schools.com/jsref/dom_obj_event.asp

// boton.addEventListener('mouseover', test);
//
// function test(evento) {
//   // debugger;
//   document.querySelector('h1').style.color = 'red';
//   document.querySelector('h1').innerText = evento.target.id;
//
// }
// function alDarClick(e) {
//   // debugger;
//   document.querySelector('h1').innerText = 'Cambio de Titulo';
// }
