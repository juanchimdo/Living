window.onload = function () {

    const wrap = document.querySelector('.wrap')



    const arriba = document.querySelector('.arriba')
    const centro = document.querySelector('.centro')
    const abajo = document.querySelector('.abajo')
    const izquierda = document.querySelector('.izquierda')
    const derecha = document.querySelector('.derecha')


    const mas = document.querySelector('.mas')
    const menos = document.querySelector('.menos')

    function agregarSilla () {
        contador = document.querySelectorAll('.silla').length
        if (contador < 3) {
            const silla = document.createElement ('img')
            silla.src = "silla.png"
            silla.classList.add('silla')
            arriba.append(silla)
        }else if (contador < 4) {
            const silla = document.createElement ('img')
            silla.src = "silla.png"
            silla.classList.add('silla', 'izquierda')
            izquierda.append(silla)
        }else if (contador < 5) {
            const silla = document.createElement ('img')
            silla.src = "silla.png"
            silla.classList.add('silla', 'derecha')
            derecha.append(silla)
        }else if (contador < 8) {
            const silla = document.createElement ('img')
            silla.src = "silla.png"
            silla.classList.add('silla')
            abajo.append(silla)
        }
        console.log(contador)
    }

    function quitarSilla () {
        const imagenes = document.querySelectorAll('.silla')
        imagenes[imagenes.length-1].remove()
        console.log(contador)
    }


    mas.addEventListener('click', agregarSilla)
    menos.addEventListener('click', quitarSilla)
}