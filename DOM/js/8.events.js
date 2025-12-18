"use strict"

{
    let myBtn4 =  document.querySelector("#idButton4");
    myBtn4.onclick = function() {
        alert('hello 4');
    };
    myBtn4.onclick = function() {
        alert('hello 4-1');
    }
    let myBtn5 =  document.querySelector("#idButton5");
    myBtn5.addEventListener('click', function() {
        alert('greet 5');
    });

    myBtn5.addEventListener('click', function() {
        alert('greet 5-1');
    });

    let v = function () {
        alert('greet 5-2');
    };

    myBtn5.addEventListener('click', v);

    // Evento DOMContentLoaded se ejecuta sin esperar a que se cargue ni el css ni las imágenes

    document.addEventListener('DOMContentLoaded', function() {
        console.log('HTML cargado');
    });

    // Evento load se ejecuta cuando se ha cargado todo: html, css, imágenes, scripts...

    window.addEventListener('load', function() {
        console.log('HTML con css e imágenes cargados');
    });

    /**
     * LISTA DE EVENTOS:
     *  onfocus: al obtener un foco. 
        onblur: al salir del foco de un elemento.
        onchange: al hacer un cambio en un elemento.
        onclick: al hacer un click en el elemento.
        ondblclick: al hacer doble click en un elemento.
        onkeydown: al pulsar una tecla (sin soltarla).
        onkeyup: al soltar una tecla pulsada.
        onkeypress: al pulsar una tecla.
        onload: al cargarse una página.
        onunload: al descargarse una página (salir de ella).
        onmousedown: al hacer clic de ratón (sin soltarlo).
        onmouseup: al soltar el botón del ratón previamente pulsado.
        onmouseover: al entrar encima de un elemento con el ratón.
        onmouseout: al salir de encima de un elemento con el ratón.
        onsubmit: al enviar los datos de un formulario.
        onreset: al resetear los datos de un formulario.
        onselect: al seleccionar un texto.
        onresize: al modificar el tamaño de la página del navegador. 
     */
}

function greet3() {
    alert('hello 3');
}