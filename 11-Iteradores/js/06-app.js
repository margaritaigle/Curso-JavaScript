// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendientes, index) => { // Arrow function, "para todos"

    console.log(`${index}: ${pendientes}`);

})

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500}, // Objetos dentro de array
    { nombre: 'Teclado', precio: 80},  // Producto
    { nombre: 'Mouse', precio: 20},
    { nombre: 'Lámpara', precio: 25},
    { nombre: 'Micrófono', precio: 150},
    { nombre: 'Cámara', precio: 600}
]

carrito.forEach( (producto) => console.log(producto.nombre)); // NO CREA ARREGLO
carrito.map( (producto) => console.log(producto.precio)); // CREA UN ARREGLO NUEVO

const array = carrito.map( (producto) => producto.precio);
const array2 = carrito.forEach( (producto) => producto.nombre); // NO CREA ARREGLO

console.log(array);
console.log(array2);