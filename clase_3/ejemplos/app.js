var list = document.querySelector('ul');
var listItems = document.querySelector('li');
var test;


// Obtener elementos children(HIJOS)
test = list.children;
// test[1].innerText = 'Segundo Elemento';
for (var i = 0; i < test.length; i++) {
  test[i].innerText = `${test[i].innerText} ${i+1}`;
}

// El primer elemento hijo de ul
test = list.firstElementChild;
test.style.color = "blue";

// EL ultimo elemento hijo de ul
test = list.lastElementChild;
test.style.color = "red";

// Contar elementos de ul
test = list.childElementCount;

// Padres de un elemento
test = listItems.parentElement.parentElement;
test.style.padding = "30px";






console.log(test);


// var impar = document.querySelectorAll('li:nth-child(odd)');
//
// for (var i = 0; i < impar.length; i++) {
//   // Concatenar usando BACKTICKS
//   // variables van dentro de ${}
//   // Para escribir backtick es ATLGR+}
//   impar[i].innerHTML = `Elemento Impar <b>${i+1}</b>`
// }
//
// var listado = document.querySelectorAll('li:nth-child(odd)');
//
// console.log(listado);
//
// for (var i = 0; i < listado.length; i++) {
//   listado[i].style.padding = "5px";
//   listado[i].innerText = "ELemento Impar";
// }

// obtener el primer elemento impar
// document.querySelector('li:nth-child(odd)')
// obtener el primer elemento par
// document.querySelector('li:nth-child(even)')


// document.querySelector('.container').style.padding = "20px";
//
// document.querySelector('#titulo').innerText = "Ejemplo";
//
// document.querySelector('.listado').style.color = "blue";
//
// document.querySelector('li:last-child').innerHTML = "<b>Test</b> Code";
//
// test = document.querySelector('li:nth-child(8)')
//
// console.log(test);
//
// test.innerText = "Prueba con una variable";
// test.style.color = 'red';
