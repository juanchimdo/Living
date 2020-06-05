window.onload = function () {
    const arriba = document.querySelector('.arriba')
    const abajo = document.querySelector('.abajo')
    const izquierda = document.querySelector('.izquierda')
    const derecha = document.querySelector('.derecha')
    const mas = document.querySelector('.mas')
    const menos = document.querySelector('.menos')

    let aleatorio = Math.floor((Math.random() * 8) + 1)

    function agregarSilla () {
        const sillasActuales = document.querySelectorAll('.silla').length
        let aleatorio = Math.floor((Math.random() * 8) + sillasActuales)
        if (contador < 3) { 
            nuevaSilla(arriba)
        }else if (contador < 4) {
            nuevaSilla(izquierda, 'izquierda')
        }else if (contador < 5) {
            nuevaSilla(derecha, 'derecha')
        }else if (contador < 8) {
            nuevaSilla(abajo)
        }
    }
    function quitarSilla () {
        const imagenes = document.querySelectorAll('.silla')
        imagenes[imagenes.length-1].remove()
    }
    mas.addEventListener('click', agregarSilla)
    menos.addEventListener('click', quitarSilla)
}






function nuevaSilla (lugar, clase) {
    const silla = document.createElement ('img')
    silla.src = "silla.png"
    silla.classList.add('silla', clase)
    lugar.append(silla)
}


// 1=arriba
// 2=derecha
// 3=izquierda
// 4=abajo