"use strict"

{

    let p = document.createElement("p");
    p.textContent = "8. Realiza un programa que cambie el fondo de la página: Al hacer clic simple, cambia a un color aleatorio. Al hacer doble clic, vuelve al color blanco. Al pulsar la tecla Escape, se cambia a negro.";
    document.body.appendChild(p);

    document.addEventListener("click", function(){
        document.body.style.backgroundColor = random();
        p.style.color = "white";
    });

    document.addEventListener("dblclick", function(){
        document.body.style.backgroundColor = "white";
        p.style.color = "black";
    });

    function random(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

