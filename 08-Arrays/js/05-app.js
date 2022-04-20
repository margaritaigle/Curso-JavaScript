const meses = ['Enero', 'Febrero', 'Marzo'];

// meses[3] = 'Abril';
console.table(meses);

// Agregar al final del arreglo sin conocer la extensión

meses.push('Abril');

const carrito = []; // Arreglo vacío para ir agregando compras al carrito

// Definir un producto

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Parlantes FanTech",
    precio: 80
}

carrito.push(producto);
carrito.push(producto2); // Aparecerán en el orden que esté el código

const producto3 = {
    nombre: "Teclado",
    precio: 20
}

carrito.unshift(producto3); //Ponerlo en el principio

console.table(carrito);

// FORMA IMPERATIVA 