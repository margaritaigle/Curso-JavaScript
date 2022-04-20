const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// ITERA SOBRE LOS VALORES DE UN ARREGLO

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500}, // Objetos dentro de array
    { nombre: 'Teclado', precio: 80},  // Producto
    { nombre: 'Mouse', precio: 20},
    { nombre: 'Lámpara', precio: 25},
    { nombre: 'Micrófono', precio: 150},
    { nombre: 'Cámara', precio: 600}
]

for( let pendiente of pendientes ) {
    console.log(pendiente);
} // Recorre arreglos (como forEach) pero es mas compacto para iterar

for( let producto of carrito ) {

    console.log(producto.nombre);
}