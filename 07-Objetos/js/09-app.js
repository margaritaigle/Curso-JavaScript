'use strict';

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
    
}


// .seal NO se pueden agregar ni eliminar las propiedades pero SI se pueden modificar las existentes
Object.seal(producto);

producto.disponible = false;
// producto.imagen = 'imagen.jpg';
// delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));