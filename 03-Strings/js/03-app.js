const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD ';

console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

// Otra forma de concatenar

console.log( producto + 'con un precio de: ' + precio );

// En vez del + se pueden utilizar comas ,
console.log('El producto ' + producto + 'tiene un precio de: ' + precio );

// Concatenar sin el signo + VARIABLES ENTRE ${}

console.log(`El producto ${producto} tiene un precio de ${precio}`);