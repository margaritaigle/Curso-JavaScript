// spread operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Spread operator con ARREGLO DE INDICES
const meses2 = [...meses, 'Agosto']; // NO MODIFICA EL ARREGLO ORIGINAL
console.log(meses2);

// .push SI modifica el arreglo original 

// SPREAD OPERATOR CON ARREGLO DE OBJETOS

const producto = { nombre: 'Disco Duro', precio: 300 };

const carrito2 = [...carrito, producto]; // IMPORTA el orden

console.log(carrito2);