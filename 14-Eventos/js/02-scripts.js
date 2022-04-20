// Eventos que suceden con el MOUSE

const nav = document.querySelector('.navegacion');

// Registrar un evento

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');

    nav.style.backgroundColor = ('transparent');
})

nav.addEventListener('mouseenter', () => {
    console.log('Entrando en la navegacion');

    nav.style.backgroundColor = ('white');
})

// Events: mouseenter (cuando ponemos el mouse arriba de ese enlace), mouseout (cuando lo sacamos)
// mouseup --> cuando suelto el mousse !click
// dblclick --> doble click
// mousedown --> Similar al click