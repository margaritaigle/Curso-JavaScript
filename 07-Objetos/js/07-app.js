const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
    
}

// Cuando creamos un objeto sus propiedades se pueden reasignar 

producto.disponible = false;

delete producto.precio;

console.log(producto);
console.log(producto.disponible);
