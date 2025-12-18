"use strict"

{

    document.body.style.height = "100dvh";

    let p = document.createElement("p");
    p.textContent = "Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”, añada un elemento con un número aleatorio a una lista desordenada (elemento UL)."
    document.body.appendChild(p);

    document.body.addEventListener("dblclick", function(){
        document.body.style.color = "black";
        document.body.style.backgroundColor = color();
    });

    function color(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return "rgb( " + r + ", " + g + ", " + b + ")"; 
    }

}