const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un .forEach

// Va iterando y sumando cada precio hasta dar el total
let total = 0;
carrito.forEach( producto => total += producto.precio );
console.log(total);

// Con un .reduce (no se crean variables extras)
// CUIDADO CON LA NOTACION PORQUE ES DISTINTA

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado)

// Total representa el monto acumulado (valor previo) y producto el valor actual
// itera y va sumando, al final pongo el valor con el que empieza el total