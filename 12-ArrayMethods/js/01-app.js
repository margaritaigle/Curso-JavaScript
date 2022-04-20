const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// Comprobar si un valor existe en un arreglo 

meses.forEach((mes) => {
    if(mes === 'Enero') {
        console.log('Enero si existe');
    }
});

// Para valores basados en indices (primer arreglo)
const resultado = meses.includes('Enero');
console.log(resultado); // true o false(nos devuelve un boolean)


// Revisar si un valor existe en un arreglo de OBJETOS .some
const existe = carrito.some( (producto) => {
    return producto.nombre === 'Monitor Curvo'
}) // Sacando las llaves de la arrow function se da por entendido el Return

console.log(existe);

// En un arreglo tradicional con .some
const existe2 = meses.some( mes => mes === 'Febrero');
console.log(existe2);

// .some SIRVE PARA AMBOS ARRAYS .includes solo para el primer array