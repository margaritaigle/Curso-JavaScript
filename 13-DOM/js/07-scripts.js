// Cambiar color

// const encabezado = document.querySelector('h1');

// encabezado.style.backgroundColor = 'pink';
// encabezado.style.fontFamily = 'Century gothic';
// encabezado.style.textTransform = 'uppercase' // Pone en mayusculas

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);