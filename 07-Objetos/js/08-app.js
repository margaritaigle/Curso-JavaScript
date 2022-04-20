 'use strict';

 // CÓMO CONGELAR UN OBJETO Y QUE SUS PROPIEDADES NO SEAN MODIFICADAS (Freeze)

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
    
}

Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';


console.log(producto);

console.log(Object.isFrozen(producto));
