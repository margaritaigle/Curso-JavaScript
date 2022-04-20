// QUERY SELECTOR ALL ---> PARA QUE DEVUELVA TODOS LOS ELEMENTOS DE ESA CLASE/ID

const card = document.querySelectorAll('.card');
console.log(card); // a las lineas se las conoce como nodos (parrafos)

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// SI un elemento NO existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); // retorna un arreglo vacio