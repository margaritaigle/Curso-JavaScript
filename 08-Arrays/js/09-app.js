const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500}, // Objetos dentro de array
    { nombre: 'Teclado', precio: 80},  // Producto
    { nombre: 'Mouse', precio: 20},
    { nombre: 'Lámpara', precio: 25},
    { nombre: 'Micrófono', precio: 150},
    { nombre: 'Cámara', precio: 600}
]



console.log(carrito);
console.table(carrito);






// for(let i=0; i < carrito.length; i++) {
//     console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}}`); 
//     }

// pepe.forEach (esta sintaxis lo convierte en un metodo) -- el punto y despues el nombre
    carrito.forEach( function(producto) {
        console.log(`${producto.nombre} - Precio: ${producto.precio}}`); 

    })   