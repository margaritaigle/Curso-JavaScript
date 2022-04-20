// Evento que sucede con SUBMIT

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario) 
    // e.preventDefault(); // para prevenir la accion que realizaria por default

    // console.log(e);
    // console.log(e.target.method); // metodo por el que envia los datos del form (post)
    // console.log(e.target.action); // accion que hara o link al que nos mandara por default


function validarFormulario(e) {
    e.preventDefault();
    
    console.log('Buscando..');
    console.log(e);
}