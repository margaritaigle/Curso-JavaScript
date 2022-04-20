const producto = 'Monitor 20 Pulgadas';

// .replace Sustituír cierto string 

console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// .slice Slice --> cortar/extraer cierta cadena de texto
// lo que se encuetra dentro del paréntesis es lo que se muestra
// SIN INCLUIR EL ÚLTIMO NUMERO

console.log(producto.slice(0,7)); // Monitor
console.log(producto.slice(7,0)); // No muestra nada si el 1er núm es mayor

// .substring Alternativa a slice 

console.log(producto.substring(0,10)); // "Monitor 20"
console.log(producto.substring(2,0)); // lo toma de igual forma aunque
                                      // estén los números al revés

const usuario = 'Margarita';
console.log(usuario.substring(0,1));

// Para cortar una letra del string 
console.log(usuario.charAt(0));
