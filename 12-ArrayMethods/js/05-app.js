const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// con .forEach

let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet') {
        resultado = carrito[index];
    }
}); // Crea un nuevo OBJETO CON ESAS CONDICIONES

console.log(resultado);

// con .find
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet'); 
// .find SOLO RETORNA EL PRIMER VALOR QUE ENCUENTRA
console.log(resultado2);
