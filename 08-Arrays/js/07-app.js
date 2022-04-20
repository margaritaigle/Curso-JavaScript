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

const producto4 = {
    nombre: "Mouse",
    precio: 10
}
carrito.push(producto4);

carrito.unshift(producto3); //Ponerlo en el principio

console.table(carrito);


// // Eliminar el ÚLTIMO elemento del >>> arreglo <<

// carrito.pop();
// console.table(carrito);

// // Eliminar del INICIO del arreglo

// carrito.shift();
// console.table(carrito);

carrito.splice(1,1); //El 1er número es la POSICIÓN y el 2do, la CANTIDAD de elementos que quiero eliminar
console.table(carrito);