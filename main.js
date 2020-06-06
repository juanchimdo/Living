window.onload = function () {
    const mas = document.querySelector('.mas')
    const menos = document.querySelector('.menos')


    function agregarSilla () {
        if (document.querySelectorAll('.visible').length<8) {
            const sillasActuales = document.querySelectorAll('.visible').length
            const ocultas = 8 - sillasActuales
            const random = Math.floor((Math.random() * ocultas) + 1)-1
            const silla = document.querySelectorAll('.oculto')[random]
            silla.classList.remove('oculto')
            silla.classList.add('visible')
        }
    }

    function quitarSilla () {
        if (document.querySelectorAll('.visible').length>0) {
            const sillasActuales = document.querySelectorAll('.visible').length
            const random = Math.floor((Math.random() * sillasActuales) + 1)-1
            const silla = document.querySelectorAll('.visible')[random]
            silla.classList.add('oculto')
            silla.classList.remove('visible')
        }
    }


    mas.addEventListener('click', agregarSilla)
    menos.addEventListener('click', quitarSilla)
}
