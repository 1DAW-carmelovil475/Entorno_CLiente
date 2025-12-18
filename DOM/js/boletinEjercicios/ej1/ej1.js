"use strict"

{

    let b1 = document.createElement("button");
    b1.textContent = "Añadir número";
    document.body.appendChild(b1);
    let b2 = document.createElement("button");
    b2.textContent = "Borrar número";
    document.body.appendChild(b2);

    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    b1.addEventListener("click", function(){
        let li = document.createElement("li");
        let random = Math.floor(Math.random () * (100 - 1) + 1);
        li.textContent = random;
        ul.appendChild(li);
    });

    b2.addEventListener("click", function(){
        let ultimoNumero = ul.lastElementChild;
        if(ultimoNumero){
            ultimoNumero.remove();
        }
    });

    



}