// Traversing the DOM

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children);

// console.log(navegacion.children[1].nodeName); // Etiqueta
// console.log(navegacion.children[2].nodeType); // Elemento (hay una lista en internet)

// const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';
// console.log(card.children[1].children[1].textContent);


// card.children[0].src = 'img/hacer4.jpg';
// console.log(card.children[0]);

// TRAVERSING DEL HIJO AL PADRE

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement);

// console.log(card.nextElementSibling); // Va al siguiente elemento de class que es igual

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);





// '.card' (accede a la clase)
// '#formulario' (accede al ID)
// 'heading' (accede al elemento)