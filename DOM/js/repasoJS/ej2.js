"use strict"

{

    let p = document.createElement("p");
    p.textContent = "Realiza un programa que cree dinámicamente una tabla de 20x20 con números del 1 al 400. Añade un botón “Resaltar múltiplos de 3 y 5” que cambie el color de fondo de las celdas que cumplan ambas condiciones."
    document.body.appendChild(p);


    let b1 = document.createElement("button");
    b1.textContent = "Resaltar múltiplos de 3 y 5";
    document.body.appendChild(b1);

    let tabla = document.createElement("table");
    document.body.appendChild(tabla);

    let contador = 1;

    for (let i = 0; i < 20; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < 20; j++) {
            let celda = document.createElement("td");
            celda.textContent = contador;
            fila.appendChild(celda);
            contador++;
        }
        tabla.appendChild(fila);
    }

    b1.addEventListener("click", function(){
        let celdas = document.querySelectorAll("td");

        for (let celda of celdas) {
            if(parseInt(celda.textContent) % 3 === 0 && parseInt(celda.textContent) % 5 === 0){
                celda.style.backgroundColor = "yellow";
            }
            
        }
    });

}