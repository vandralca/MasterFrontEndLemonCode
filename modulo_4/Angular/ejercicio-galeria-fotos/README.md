# Galería de fotos y directiva Rotate

## Resumen de la galería de fotos

Ejemplo modelo: https://carherco.es/curso-angular/#/galeria

Galería de fotos constará de 3 partes:

- Imagen seleccionada: Una parte con la lista de todas las imágenes (en pequeño) de la galería.

- Listado de imágenes: Una parte en la que se muestre en grande una de las fotos

- Botonera: Una parte con una botonera con 6 botones: anterior, siguiente, aumentar, disminuir, play, stop.

- Estructura HTML para mostrar esas 3 partes/bloques en la pantalla

- Al empezar, se mostrará una de las imágenes en la parte de Imagen seleccionada.

- Al hacer click en una imagen de la lista, la imagen correspondiente se mostrará en la parte de imagen seleccionada.

- Al hacer click en el botón siguiente, se cambiará la imagen seleccionada por la siguiente de la lista.

- Se pondrá “disabled” el botón siguiente cuando la imagen seleccionada sea la última de la lista.

- Al hacer click en el botón anterior, se cambiará la imagen seleccionada por la anterior de la lista.

- Se pondrá “disabled” el botón anterior cuando la imagen seleccionada sea la primera de la lista.

- Al hacer click en el botón Aumentar, se agrandará el tamaño de la imagen seleccionada.

- Al hacer click en el botón Disminuir, se reducirá el tamaño de la imagen seleccionada.

- Al hacer click en el botón Play, se “pondrá en marcha el reproductor”, es decir, la imagen seleccionada empezará a cambiar cada 2 segundos. Cuando el reproductor llegue a la última imagen volverá a empezar por la primera.

- Al hacer click en el botón Stop, se detendrá el reproductor, es decir, la imagen seleccionada dejará de cambiar cada 2 segundos.

- El botón de Stop solamente se mostrará cuando esté en marcha el reproductor.

- El botón de Play solamente se mostrará cuando el reproductor esté detenido.

RETOS incluidos en la implementación:

- Remarcar con estilos css la imagen de la lista que corresponda con la imagen actualmente seleccionada

- Paginar el listado de imágenes. En vez de mostrar todas las imágenes de golpe, mostrarlas de 3 en 3. Añadir un botón Anterior y otro siguiente para avanzar o retroceder de “página” en el listado.

## Resumen de la directiva Rotate

Ejemplo modelo: https://carherco.es/curso-angular/#/rotate

- Al hacer click en una imagen que tenga el atributo rotate, la imagen deberá rotar los grados indicados en el atributo step.

- Por defecto rotará en pasos de 10 grados

- Se le podrá indicar una rotación inicial en el propio atributo rotate

- Si se hace click en la imagen con la tecla mayúsculas pulsada, la imagen rotará hacia el lado contrario

RETOS incluidos en la implementación:

- Modifica el selector de la directiva para que solamente afecte a elementos img

- Modifica el método login() del servicio del primer ejercicio para que devuelva la respuesta de forma asíncrona en un observable

- Simula un delay en la respesta del login

- Indicador de loading en el formulario de login que se muestre al darle al botón de submit y desaparezca cuando el método de login haya emitido su respuesta.

## Revisión

