"use strict"

{

    let p = document.createElement("p");
    p.textContent = "Realiza un programa que tenga un botón “Añadir nombre”. Cada vez que se pulse, se añadirá un nombre aleatorio (de un array) a una lista ordenada (<ol>). Debe evitarse añadir nombres duplicados."
    document.body.appendChild(p);

    let nombres = ['Carmelo', 'Juan', 'Domingo', 'Javier'];

    function random(){
        let random = Math.floor(Math.random() * nombres.length);
        return random;
    }

    let b1 = document.createElement("button");
    b1.textContent = "Añadir nombre";
    document.body.appendChild(b1);

    let ol = document.createElement("ol");
    document.body.appendChild(ol);

    b1.addEventListener("click", function(){
        let lista = document.createElement("li");
        lista.textContent = nombres[random()];
        ol.appendChild(lista);
    });
    
}