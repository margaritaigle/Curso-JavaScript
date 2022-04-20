const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
    
}

// const nombre = producto.nombre; // "extraemos" la propiedad nombre y la asignamos como variable
// console.log(nombre);


// DESTRUCTURING
// Hacerlo todo en un mismo paso extrae y crea la variable
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);