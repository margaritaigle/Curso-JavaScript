
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el ID ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando cancion con id ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    // SET ES UNA FORMA DE AGREGAR VALORES
    set nuevaCancion(cancion) {
        this.cancion = cancion;   // this. es para que se busque dentro del objeto y no por fuera
        console.log(`Añadiendo ${cancion}`);
    }, 
// FORMA DE OBTENER DEVUELTA ESOS VALORES (GET)
    get obtenerCancion() {
        console.log(this.cancion);
    }
}

reproductor.nuevaCancion = 'Tainted love'; // no es necesario parentesis 
reproductor.obtenerCancion; // no es necesario parentesis para get

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(23);
reproductor.crearPlaylist('Rock n\' Roll');
reproductor.crearPlaylist('Oldies');
reproductor.reproducirPlaylist('Oldies');