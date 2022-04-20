//  for(let i = 0; i < 10; i++) {
//      console.log(`Numero: ${i}`);
//  }


for(let i = 0; i<=6; i++) {
    if(i % 2 === 0) {
        console.log(`El numero ${i} es par`);
    }
    else {
        console.log(`El numero ${i} es impar`);
    }
}

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500}, // Objetos dentro de array
    { nombre: 'Teclado', precio: 80},  // Producto
    { nombre: 'Mouse', precio: 20},
    { nombre: 'Lámpara', precio: 25},
    { nombre: 'Micrófono', precio: 150},
    { nombre: 'Cámara', precio: 600}
]

console.log( carrito.length );

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}