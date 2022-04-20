
const puntaje = 1001; // = ES ASIGNACION
// == es COMPARACION

// DIFERENTE !=
if (puntaje != 1000) {
    console.log('Si! Es diferente...');
}

// IGUAL == (no distingue entre tipos) no es estricto
const diasSemana = '7';
if (diasSemana == 7) {
    console.log('Los dias de la semana son 7');
}


// ESTRICTAMENTE IGUAL === o ESTRICTAMENTE DIFERENTE !===
const puntaje1 = 1000;
if (puntaje1 === '1000') {
    console.log('Es estrictamente igual, coincide con TIPO')
}
else {
    console.log('No es estrictamente igual');
}

console.log(typeof diasSemana);
console.log(typeof puntaje);