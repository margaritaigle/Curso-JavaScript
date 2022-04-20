const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);
console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);

// Para ver todos los arreglos sin importar su longitud

console.log(meses.length); // Para saber lo  que mide el arreglo

// Para conocer todo el arreglo se utiliza un iterador --> for (loop)

for(let i=0; i < meses.length; i++) {
console.log(meses[i]); 
}

// El valor i irá cambiando, entonces va mostrando los distintos valores del arreglo

