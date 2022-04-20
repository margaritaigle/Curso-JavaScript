const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

console.log(numeros);
console.table(numeros);

// Acceder al arreglo según su posición

console.log(numeros[0]);
console.log(numeros[20]); //Undefined 
console.log(numeros[5][1]); //Acceder al sub arreglo