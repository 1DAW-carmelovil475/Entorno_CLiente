"use strict"

{

    let p = document.createElement("p");
    p.textContent = "5. Realiza un programa que muestre en tiempo real: La posición del ratón (clientX, clientY). El botón del ratón pulsado (izquierdo, derecho o ninguno). La información se mostrará dentro de un <p> que se actualice dinámicamente.";
    document.body.appendChild(p);

    document.addEventListener("mousemove", function(event) {
        let x = event.clientX;
        let y = event.clientY;

        p.textContent = `Posición del ratón: X=${x}, Y=${y}`;
    });


}