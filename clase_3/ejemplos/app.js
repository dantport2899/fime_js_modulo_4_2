

// Eliminar los elementos.
var ul = document.querySelector('ul');
ul.remove();


// Remplazar elementos
// elemento a reemplazar
var li = document.querySelector('li:nth-child(3)');
// padre del elemento a reemplazar
var ul = document.querySelector('ul');
// nuevo elemento
var newElement = document.createElement('img');
newElement.src = 'https://picsum.photos/100/100';
// reemplazando elemento
ul.replaceChild(newElement, li)


// Reemplazando multiples elementos
// var li = document.querySelectorAll('.listData');
// var ul = document.querySelector('ul');
//
// for (var i = 0; i < li.length; i++) {
//   var newElement = document.createElement('img');
//   newElement.src = 'https://picsum.photos/100/100';
//   ul.replaceChild(newElement, li[i])
// }





// elemento nuevo
var parrafo = document.createElement('p');
parrafo.innerHTML = '<b>REMPLAZAR</b> Elemento';

// elemento a remplazar
var titulo2 = document.getElementById('titulo2');
// padre del elemento a remplazar
var padre = document.querySelector('body');

// remplazando elementos
padre.replaceChild(parrafo, titulo2);

// Para comentar líneas de código usear ctrl+shift+/  /(7)
// // Crear imagen
// var img = document.createElement('img');
// // Para usar imagenes de prueba utilizar https://picsum.photos/
// // dentro de la página esta la url que pueden utilizar como ejemplo
// img.src = 'https://picsum.photos/500/300';
// console.log(img);
// document.querySelector('body').appendChild(img);
//
// // Crear elemento
// var link = document.createElement('a');
// link.className = 'link';
// link.innerText = 'Go to goole';
// link.href = 'https://www.google.com';
//
// document.querySelector('body').prepend(link);
//
//
// // Create Elements
// var item = document.createElement('li');
// item.className = 'item text-center';
// item.id = 'new-item';
// item.innerText = 'Elemento Nuevo';
//
// document.querySelector('ul').appendChild(item);
//
//
// // Crear elemento
// var titulo = document.createElement('h3');
// titulo.className = 'titulo';
// titulo.id = 'titulo4';
// titulo.innerHTML = "<span style='color:red;'>Hola</span> Mundo";
// // insertar al final
// document.querySelector('.container').appendChild(titulo);
// // insertar al principio
// document.querySelector('.container').prepend(titulo);
//
// Movernos en el DOM hermanos
// var contenedor = document.querySelector('div');
//
// contenedor.nextElementSibling.style['border-style'] = "solid";
// contenedor.nextElementSibling.style['padding'] = "10px";
// contenedor.nextElementSibling.style['margin'] = "10px";
//
//
// var contenedor = document.querySelector('div');
//
//
// contenedor.previousElementSibling.style['border-style'] = "dotted";
// contenedor.previousElementSibling.style['padding'] = "10px";
// contenedor.previousElementSibling.style['margin'] = "10px";



// var list = document.querySelector('ul');
// var listItems = document.querySelector('li');
// var test;
//
//
// // Obtener elementos children(HIJOS)
// test = list.children;
// // test[1].innerText = 'Segundo Elemento';
// for (var i = 0; i < test.length; i++) {
//   test[i].innerText = `${test[i].innerText} ${i+1}`;
// }
//
// // El primer elemento hijo de ul
// test = list.firstElementChild;
// test.style.color = "blue";
//
// // EL ultimo elemento hijo de ul
// test = list.lastElementChild;
// test.style.color = "red";
//
// // Contar elementos de ul
// test = list.childElementCount;
//
// // Padres de un elemento
// test = listItems.parentElement.parentElement;
// test.style.padding = "30px";
// console.log(test);


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
