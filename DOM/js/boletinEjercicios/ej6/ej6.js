"use strict"

{

    let b1 = document.createElement("button");
    b1.textContent = "Comenzar Saludos";
    document.body.appendChild(b1);

    let b2 = document.createElement("button");
    b2.textContent = "Parar Saludos";
    document.body.appendChild(b2);

    let interval;

    b1.addEventListener("click", function(){
        interval =  setInterval(saludar, 5000);
    });

    b2.addEventListener("click", function(){
        clearInterval(interval);
    });

    function saludar(){
        alert("Hola");
    }
}