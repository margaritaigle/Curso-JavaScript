const autenticado = true;

// no es necesario escribir autenticado === true en el if, ya que lo da por entendido
if (autenticado) { 
    console.log('El usuario esta autenticado');
}


const puntaje = 350;

function revisarPuntaje() {
    

if(puntaje > 400) {
    console.log('Excelente!!');
    return; // para que no ejecute el resto del codigo, DEBE IR DENTRO DE UNA FUNCTION
}
else if (puntaje > 300) {
    console.log('Buen puntaje... felicidades');
    return;
}

}

revisarPuntaje();