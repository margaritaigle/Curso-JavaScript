// Evento que sucede con SCROLL

// si llamamos a window en la consola, nos muestra info a la ventana GLOBAL

window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);
    // console.log('scrolling');

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion); // con esto podemos ver en que "coordenada" se encuentra el elemento
    // y pasar esa coordenada para que "avise" cuando este visible

    if (ubicacion.top < 784 ) {
        console.log('El elemento ya esta visible');
    }
    else {
        console.log('Aun no, da mas');
    }
})