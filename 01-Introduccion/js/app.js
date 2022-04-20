const nombre =  prompt('¿Cuál es tu nombre?'); // lo que se escriba en el pop up será el nombre que tome variable

// ▼▼▼Toma el nombre y lo muestra en pantalla ▼▼▼
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`; // seleccionar elementos del HTML
// lo que quiero hacer es mostrar mi nombre y eliminar este contenido