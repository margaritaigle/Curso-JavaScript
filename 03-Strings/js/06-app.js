const producto = 'Monitor 20 Pulgadas';

// .repeat te va a repetir una cadena de texto

const texto = ' en Promoción'.repeat(3);
console.log(texto);
console.log(`${producto}${texto}!!!`);

// Split, dividir un string

const actividad = 'Estoy-rodeado-de policías';
console.log(actividad.split('-')); // se le señana el valor donde debe dividir
// da como resultado un array y el valor indicado no figura en la división

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender';
console.log(hobbies.split(', '));

const tweet = 'Aprendiendo JavaScript #JSModernoConJuan';
console.log(tweet.split('#'));