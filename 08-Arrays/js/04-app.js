// Agregar un valor al arreglo, sin modificarlo directamente

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

meses[0] = 'Nuevo Mes'; // Cambia el valor del arreglo en la posición 0
meses[10] = 'Último mes'; // Salta del 6 al 10 
console.table(meses);