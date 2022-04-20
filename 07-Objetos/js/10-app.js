const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
    
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}


console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas); // copia todas las propiedades 
//enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino. 

// Spread operator or Rest Operator

const resultado2 = { ...producto, ...medidas }; // Los tres puntos significan 'copiar' 

console.log(resultado);
console.log(resultado2);

 