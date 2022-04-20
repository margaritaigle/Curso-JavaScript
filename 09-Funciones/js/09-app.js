
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el ID ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    
    borrar: function(id) {
    console.log(`Borrando cancion con id ${id}`);
},
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist ${nombre}`);
},
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(23);
reproductor.crearPlaylist('Rock n\' Roll');
reproductor.crearPlaylist('Oldies');
reproductor.reproducirPlaylist('Oldies');


// Una forma de agregar la propiedad Borrar

// reproductor.borrar = function(id) {
//     console.log(`Borrando cancion con id ${id}`);
// }