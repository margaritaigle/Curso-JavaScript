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

const producto3 = {
    nombre: "Teclado",
    precio: 20
}

let resultado;

resultado = [...carrito, producto, producto2]; //El orden aparece según cómo estén ordenados en el array
resultado = [producto3, ...resultado];

console.table(resultado);

// ESTA ES LA FORMA DECLARATIVA (NO SE CAMBIA EL VALOR DEL CARRITO) DE AGREGAR PRODUCTOS