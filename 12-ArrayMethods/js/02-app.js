const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i) => {
    // console.log(i);
    // console.log(mes)

    if(mes === 'Abril') {
       console.log(`Encontrado en el indice ${i}`);
    }
    
} )

// Encontrar el indice de Abril
const indice = meses.findIndex( mes => mes === 'Abril');
const indice2 = meses.findIndex( mes => mes === 'Diciembre');
console.log(indice); // MUESTRA LA POSICION DEL VALOR EN EL ARREGLO
console.log(indice2); // SI NO EXISTE, DEVUELVE -1

// Encontrar un indice en un arreglo de objetos
const index = carrito.findIndex( producto => producto.precio === 100); // Toma el indice del 
// primer elemento que encuentra, por mas de que haya 2 con el mismo precio muestra SOLO el primero
console.log(index);