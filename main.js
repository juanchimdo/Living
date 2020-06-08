window.onload = function () {
    const mas = document.querySelector('.mas')
    const menos = document.querySelector('.menos')

    function agregarSilla () {
        const ocultas = document.querySelectorAll('.oculto').length
        if (ocultas>0) {
            const random = Math.floor((Math.random() * ocultas) + 1)-1
            const silla = document.querySelectorAll('.oculto')[random]
            silla.classList.remove('oculto')
            silla.classList.add('visible')
        }
    }

    function quitarSilla () {
        const visibles = document.querySelectorAll('.visible').length
        if (visibles>0) {
            const random = Math.floor((Math.random() * visibles) + 1)-1
            const silla = document.querySelectorAll('.visible')[random]
            silla.classList.add('oculto')
            silla.classList.remove('visible')
        }
    }

    mas.addEventListener('click', agregarSilla)
    menos.addEventListener('click', quitarSilla)
}
