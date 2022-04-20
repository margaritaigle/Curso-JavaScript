const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
    
}

// const nombre = producto.nombre; // "extraemos" la propiedad nombre y la asignamos como variable
// console.log(nombre);


// DESTRUCTURING
// Hacerlo todo en un mismo paso extrae y crea la variable
const { nombre } = producto;


// Destructuring con ARREGLOS

const numeros = [10, 20, 30, 40, 50];

const [ primero, , tercero, ...cuarto] = numeros; // Se van asignando en el orden que está el arreglo
// ...cuarto (toma desde el valor que está en esa posición en adelante)
console.log(tercero);
console.log(cuarto);