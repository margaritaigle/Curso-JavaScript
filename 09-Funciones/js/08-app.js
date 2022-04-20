// Esto solo nos imprime un resultado pero no se asigna a una variable

// function sumar(a, b) {
//     console.log( a + b);
// }

// sumar()

// Para asignar valor a una variable utilizamos RETURN

function sumar(a, b) {
    return a + b ;
}

// SI LA FUNCION RETORNA ALGO, DEBE HABER UNA VARIABLE QUE TOME ESTE VALOR

const resultado = sumar(2, 5);

console.log(resultado);

// EJEMPLO MAS AVANZADO

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(100);
total = agregarCarrito(500);
total = agregarCarrito(50);

const totalPagar = calcularImpuesto(total);

console.log(total);

console.log(`El total a pagar es de ${parseInt(totalPagar)}`);
console.log(`El total a pagar es de ${totalPagar}`);
