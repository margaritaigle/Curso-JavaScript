// Declaracion de funcion (Function Declaration)

sumar()

function sumar() {
    console.log( 2 + 2);
}


// EXPRESION DE FUNCION (Function Expression)
sumar2();

const sumar2 = function() {
    console.log( 3 + 3);
}



/* La diferencia es que en la declaracion de funcion, JS hace un "Escaneo" y crea las
variables y funciones y LUEGO (en una segunda vuelta) ejecuta los codigos (en la primera
vuelta los ignora)

En la expresion de la funcion lo toma como una variable que no tiene valor "sumar2;" y como 
lo "llamamos" antes de que se lea la funcion (en la segunda vuelta) nos da ERROR */