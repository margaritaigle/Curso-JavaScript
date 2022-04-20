const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// Tres formas de ver el texto en consola

// console.log(encabezado.innerText); // si en el CSS - visibility: hidden; NO lo va a encontrar
// console.log(encabezado.textContent); // si lo va a encontrar
// console.log(encabezado.innerHTML); // se trae el HTML


document.querySelector('.contenido-hero h1').textContent = 'Hola Mundo';

// Otra forma

// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';

