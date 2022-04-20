const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo'); // this. es lo mismo que poner btnFlotante
    } 
    else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    

    console.log(footer.classList);
}