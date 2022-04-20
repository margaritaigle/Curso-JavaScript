const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
     // this. busca la propiedad dentro de este mismo objeto

    }
}
// Palabra this. se refiere a los valores que existen en un mismo objeto

const producto2 = {
    nombre: 'iPhone',
    precio: 1200,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);

    }
}

producto.mostrarInfo(); 
producto2.mostrarInfo(); 
