"use strict"

{

    let p =  document.createElement("p");
    p.textContent = "Realiza un programa que cree 50 checkboxes con números del 1 al 50. Incluye: Un botón “Invertir selección” Un botón “Contar seleccionados” que muestre cuántos hay marcados."
    document.body.appendChild(p);

    let b1 = document.createElement("button");
    b1.textContent = "Invertir Selección";
    document.body.appendChild(b1);

    let b2 = document.createElement("button");
    b2.textContent = "Contar seleccionados";
    document.body.appendChild(b2);

    let contenedor = document.createElement("div");
    document.body.appendChild(contenedor);


    for (let i = 1; i <= 50; i++) {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = i;

        let texto = document.createTextNode(" " + i);

        contenedor.appendChild(checkbox);
        contenedor.appendChild(texto);
        contenedor.appendChild(document.createElement("br"));
    }

    b1.addEventListener("click", function(){
        let checkboxes = document.querySelectorAll("input[type='checkbox']");

        for (let checkbox of checkboxes){
            checkbox.checked = !checkbox.checked;
        }
    });

    let resultado = document.createElement("p");
    document.body.appendChild(resultado);

    b2.addEventListener("click", function(){
        let checkboxes = document.querySelectorAll("input[type='checkbox']");

        let contador = 0;

        for (let checkbox of checkboxes){
            if(checkbox.checked){
                contador++;
            }
        }

        resultado.textContent = `Hay ${contador} checkbox seleccionados`;
        resultado.style.color = "blue";

    });

}