// Eventos que suceden en el TECLADO

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (evt) => {
    console.log(evt.target.value);
}) 

// keydown --> cuando apreto una tecla
// blur --> entrar al input y apretar fuera para que se ejecute
// keyup --> cuando soltas la tecla
// copy --> cuando copias el texto/ letra
// paste
// cut
// input --> cuando se realiza cualquier evento mencionado salvo el blur


// console.log(evt.type); // para ver si es input, keyup, etc
// console.log(evt.target) // indica en que input especifico estamos trabajando
// console.log(evt.target.value); // NOS MUESTRA EL TEXTO



  