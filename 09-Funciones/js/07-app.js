iniciarApp(); // NO marcara un error por la forma en que estamos declarando
// segundaFuncion();

// Para que segunda funcion se inicialice luego de la funcion iniciarApp
// se pone dentro del cuerpo de iniciarApp 

// En una funcion (iniciarApp) se ejecuta el codigo ya que estan una dentro de otra

function iniciarApp() {
    console.log('Iniciando app...');
    segundaFuncion();

}

function segundaFuncion() {
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Margarita');
}


function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}