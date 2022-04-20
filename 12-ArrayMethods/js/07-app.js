// concat (UNIR ARREGLOS)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
const resultado = meses.concat(meses2, meses3, 'Otro mes');

console.log(resultado);

// SPREAD OPERATOR
const resultado2 = [...meses2, ...meses, ...meses3, 'Otro mes'];

console.log(resultado2);

// EN AMBOS ES IMPORTANTE EL ORDEN