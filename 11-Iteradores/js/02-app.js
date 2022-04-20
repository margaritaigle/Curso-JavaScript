for( let i = 0; i <= 10; i++) {

    if( i === 5) {
        console.log('CINCO');
        
        continue;
    }
    
    console.log(`Numero: ${i}`);
    
}

// BREAK ---> rompe COMPLETAMENTE el loop aunque se siga cumpliendo la condicion
// CONTINUE ---> rompe el ciclo en el que esta y no va a ejecutar la siguiente linea, 
// pero luego continua
// AMBOS VAN DENTRO DEL IF O ELSE 


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500}, // Objetos dentro de array
    { nombre: 'Teclado', precio: 80},  // Producto
    { nombre: 'Mouse', precio: 20},
    { nombre: 'Lámpara', precio: 25},
    { nombre: 'Micrófono', precio: 150},
    { nombre: 'Cámara', precio: 600, descuento: true}
]

for( let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }

    console.log(carrito[i].nombre);
}