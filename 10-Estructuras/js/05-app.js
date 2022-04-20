// Switch case (para no usar muchos else if ?)

// Se pueden poner funciones y agregar cuantos cases sean necesarios
// luego de cada case se finaliza la ejecucion con break, asi no ejecuta el resto de los cases

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        break; 
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
        default:
            console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
            break;
}


function pagar() {
    console.log('Pagando...');
}