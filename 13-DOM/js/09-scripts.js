// ELIMINAR ELEMENTOS DEL DOM

// const primerEnlace = document.querySelector('a');
// console.log(primerEnlace);
// primerEnlace.remove(); // Se borra 'Vender'

// Eliminar desde el padre

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild((navegacion.children[2])); // Borra 'registro'