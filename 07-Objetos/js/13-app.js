const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

console.log( Object.keys( producto) ); // Nos muestra si el objeto tiene contenido
// retorna las llaves: nombre, precio, disponible (izquierda)

console.log( Object.values( producto ) ); // retorna los valores: Monitor de 20 Pulgadas, 200 y true (derecha)

console.log(Object.entries(producto)); // Nos devuelve la combinación de keys y values, es decir, los valores que corresponden a cada llave