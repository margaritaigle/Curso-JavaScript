const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
    
}

// Agregar nuevas propuedades al objeto
producto.imagen = 'imagen.jpg'; // como está por fuera de las llaves del objeto va con =

// Eliminar propiedades del objeto

delete producto.disponible;


console.log(producto);