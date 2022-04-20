const numero1 = '20';
const numero2 = '20.2';
const numero3 = 'Uno';
const numero4 = 20;

console.log(numero1);
console.log(Number.parseInt(numero1)); // para enteros
console.log(Number.parseFloat(numero2)); // para decimales
console.log(Number.parseInt(numero3)); // Not a number

// Revisar si un número entero

console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4));