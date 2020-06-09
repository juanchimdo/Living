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
    const cantidad = document.querySelectorAll('.' + claseActual).length        //CANTIDAD DE SILLAS OCULTAS O VISIBLES DEPENDIENDO EL PARAMETRO
    if (cantidad>0) {                                                           //ME ASEGURO QUE NO VOY A AGREGAR/QUITAR MAS DE LO POSIBLE
        const random = Math.floor((Math.random() * cantidad) + 1)-1             //GENERO UN NUMERO RANDOM ENTRE 1 Y LA CANTIDAD DE SILLAS ACTUALES (VISIBLE U OCULTA, DEPENDIENDO LA FUNCION QUE SE QUIERA). LE RESTO -1 PARA USARLO COMO INDICE
        const silla = document.querySelectorAll('.' + claseActual)[random]      //GUARDO EN LA VARIABLE 'SILLA' EL ELEMENTO EN LA POSICION 'RANDOM'
        silla.classList.remove(claseActual)                                     //LE QUITO LA CLASE ACTUAL
        silla.classList.add(clasePosterior)                                     //AGREGO LA NUEVA CLASE
    }
}