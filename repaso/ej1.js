"use strict"

{

    let p = document.createElement("p");
    p.textContent = "Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”, añada un elemento con un número aleatorio a una lista desordenada (elemento UL)."
    document.body.appendChild(p);
    

    let b1 = document.createElement("button");
    b1.textContent = "Añadir número";
    document.body.appendChild(b1);

    let b2 = document.createElement("button");
    b2.textContent = "ELiminar número";
    document.body.appendChild(b2);

    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    b1.addEventListener("click", function(){
        let li = document.createElement("li");
        li.textContent = random();
        ul.appendChild(li);
    });

    b2.addEventListener("click", function(){
        let ultimo = ul.lastElementChild;
        if(ultimo){
            ultimo.remove();
        }
    });

    function random(){
        let numeros = Math.floor(Math.random() * (100-0) + 0);
        return numeros;
    }
}