// FILTER (CREA NUEVO ARREGLO)

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

resultado = carrito.filter( producto => producto.precio > 400);
console.log(resultado); // CREA NUEVO ARREGLO CON LA CONDICION

resultado = carrito.filter( producto => producto.precio < 600);
console.log(resultado);

// Para ver todos los productos MENOS 'Audifonos' por ej

resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');
console.log(resultado);

// Para que muestre ese producto en especifico
resultado = carrito.filter(producto => producto.nombre === 'Audifonos');
console.log(resultado);