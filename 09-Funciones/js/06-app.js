// Poner parametros por default 

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Margarita'); // Hola Margarita
saludar(); // Hola Desconocido
saludar('A', 'Iglesias'); // Hola A Iglesias