# LIVING v1.0

https://juanchimdo.github.io/Living-v1.0/

Trabajo práctico del DOM para agregar y quitar sillas de la mesa

Cómo funciona:

   Incorporé la mesa y las sillas dentro del HTML con 2 clases para las sillas:
   
    - 'silla' : para darle estilo en css
    - 'oculto' : solo para darle el atributo
    'visibility = hidden' y permanezcan ocultas
    
    - 'izquierda' y 'derecha' son sólo para 
    girar las imágenes
   
  El funcionamiento es sencillo. Al apretar los botones cambiará la clase de una de 
  las sillas de 'oculto' a 'visible' (esta clase no hace nada a priori, solo servirá 
  para diferenciar en el futuro las sillas visibles de las ocultas).
  
  Lo especial de la función es que agregará y quitará sillas aleatoriamente.
  Además sólo utiliza una función a la cual se le asignan 2 parámetros.
