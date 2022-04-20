const producto = '      Monitor 20 Pulgadas     ';

console.log(producto);
console.log(producto.length);

// Cómo eliminar los espacios en blanco ya que se contabilizan

console.log( producto.trimStart() ); //Elimina el espacio del inicio
console.log( producto.trimEnd() ); //Elimina el espacio del final 

//Para que se ejecuten ambos a la vez

console.log( producto.trimStart().trimEnd() );

// También el que elimina en ambos sentidos es 

console.log( producto.trim() );