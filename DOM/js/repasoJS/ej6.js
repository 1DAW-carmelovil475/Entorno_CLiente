"use strict"

{

    let p = document.createElement("p");
    p.textContent = "6. Realiza un programa con tres botones: Iniciar contador, Pausar contador, Reiniciar contador. El contador aumentará cada segundo usando setInterval y se mostrará en pantalla.";
    document.body.appendChild(p);

    let inputNumero = document.createElement("input");
    inputNumero.type = "number";
    inputNumero.value = 5;
    inputNumero.min = 0;
    inputNumero.style.width = "100%";
    document.body.appendChild(inputNumero);

    let botonIniciar = document.createElement("button");
    botonIniciar.textContent = "Iniciar contador";
    document.body.appendChild(botonIniciar);

    let botonReiniciar = document.createElement("button");
    botonReiniciar.textContent = "Reiniciar contador";
    document.body.appendChild(botonReiniciar);

    let contador;
    let intervalo;

    let mensaje = document.createElement("p");
    document.body.appendChild(mensaje);

    botonIniciar.addEventListener("click", function(){
        if(!intervalo){
            contador = parseInt(inputNumero.value);
            
            intervalo = setInterval(function(){
                contador--;
                inputNumero.value = contador;
                
                if(contador <= 0){
                    clearInterval(intervalo);
                    intervalo = null;
                    mensaje.textContent = "Ha finalizado el contador";
                    mensaje.style.color = "green";
                }

            }, 1000);
        }
    });


    botonReiniciar.addEventListener("click", function(){
        clearInterval(intervalo);
        intervalo = null;
        contador = parseInt(inputNumero.value) || 5;
        inputNumero.value = 5;
        mensaje.textContent = "";
    });


}

