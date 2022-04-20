// a y b son parametros de la funcion
// a y b son representativos

function sumar(a, b) {
    console.log( a + b);
}

sumar(2, 5); // 2 y 5 argumentos (son los valores reales)

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Margarita', 'Iglesias');
saludar('Margarita'); // Hola Margarita undefined
saludar(); // Hola undefined undefined
