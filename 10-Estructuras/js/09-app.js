// OPERADOR TERNARIO

const autenticado = true;
const puedePagar = true;
// verifica si autenticado es true, si lo es imprime el mensaje "Si esta autenticado"
// si es false "No no esta autenticado"
console.log( autenticado && puedePagar  ? 'Si puede pagar' : 'No puede pagar o no esta autenticado');

// Un IF anidado con operador ternario

console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado, no puede pagar' : 'No, no esta autenticado');

// LO DE ARRIBA ES LO MISMO QUE LOS IF ANIDADOS DE DEBAJO

if (autenticado) {
    if (puedePagar) {
        console.log('Si esta autenticado y puede pagar');
    }
    else { console.log('Si esta autenticado, no puede pagar'); }
}

else {
    console.log('No, no esta autenticado');
}