"use strict";

{
    const b1 = document.createElement("button");
    b1.textContent = "Reaparecer";
    document.body.appendChild(b1);

    const nombres = ["Carmelo Villarreal", "Fco Javier Moreno", "Domingo Rodríguez"];

    const parrafos = [];

    for (let i = 0; i < nombres.length; i++) {
        const p = document.createElement("p");
        p.textContent = nombres[i];
        document.body.appendChild(p);

        parrafos.push(p);

        p.addEventListener("mouseleave", function() {
            p.setAttribute("hidden", true);
        });

        p.addEventListener("dblclick", function() {
            p.remove();
        });
    }

    // Botón para reaparecer los párrafos
    b1.addEventListener("click", function() {
        for (let i = 0; i < parrafos.length; i++) {
            parrafos[i].removeAttribute("hidden");
        }
    });
}
