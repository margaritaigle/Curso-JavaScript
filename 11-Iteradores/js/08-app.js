const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// FOR IN ITERA SOBRE LOS VALORES DE LOS OBJETOS 
for(let pendiente in pendientes) {
    console.log(pendiente); // De esta forma nos imprime los indices
}

const automovil = {
    modelo: 'Onix',
    year: 2017,
    motor: '1.6'
}

for (let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`); // imprime Onix, 2017, 1.6
    // console.log(propiedad); // Imprime modelo, year y motor
}

for(let [llave, valor] of Object.entries(automovil)) {
    console.log(valor); // Onix, 2017, 1.6
    console.log(llave); // modelo, year y motor
}