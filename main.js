window.onload = function () {
    const mas = document.querySelector('.mas')
    const menos = document.querySelector('.menos')
    function agregarSilla () {
        cambiarClase('oculto','visible')
    }
    function quitarSilla () {
        cambiarClase('visible','oculto')
    }
    mas.addEventListener('click', agregarSilla)
    menos.addEventListener('click', quitarSilla)
}



function cambiarClase (claseActual, clasePosterior) {
    const cantidad = document.querySelectorAll('.' + claseActual).length
    if (cantidad>0) {
        const random = Math.floor((Math.random() * cantidad) + 1)-1
        const silla = document.querySelectorAll('.' + claseActual)[random]
        silla.classList.remove(claseActual)
        silla.classList.add(clasePosterior)
    }
}