const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
        peso: '1kg',
        medida: '1m'
        },
        fabricacion: {
        pais: 'China'
        }
    }
}

const { nombre, informacion: {fabricacion: { pais }, fabricacion,  medidas}, precio, informacion} = producto;

// si quiero que muestre fabricación (que tiene más propiedades dentro) lo debo poner aparte, como figura arriba

console.log(medidas);
console.log(precio);
console.log(informacion);
console.log(pais);
console.log(fabricacion);