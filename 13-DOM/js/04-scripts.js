// QUERY SELECTOR (DEVUELVE 1 SOLO VALOR)

const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores especificos como en CSS

const info = document.querySelector('.premium .info'); // Va un espacio pq info es 'hijo' de premium
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar el formulario (por ID) selecciona solo el 1ero
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos HTML (ETIQUETA HTML)
const navegacion = document.querySelector('nav');
console.log(navegacion);