// ARROW FUNCTIONS EN FOREACH Y MAP

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500}, // Objetos dentro de array
    { nombre: 'Teclado', precio: 80},  // Producto
    { nombre: 'Mouse', precio: 20},
    { nombre: 'Lámpara', precio: 25},
    { nombre: 'Micrófono', precio: 150},
    { nombre: 'Cámara', precio: 600}
]

const nuevoArreglo = carrito.map( producto =>  `${producto.nombre} - Precio: ${producto.precio}`)   

// MAP CREA UN NUEVO ARRECLO



 carrito.forEach( producto => console.log( `${producto.nombre} - Precio: ${producto.precio}`) )   

console.log(nuevoArreglo); // Nos dara de resultado un nuevo arreglo
