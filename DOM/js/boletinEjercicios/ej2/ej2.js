"use strict"

{

    let b1 = document.createElement("button");
    b1.textContent = "Calcular número primo";
    document.body.appendChild(b1);

    let b2 = document.createElement("button");
    b2.textContent = "Restablecer celdas";
    document.body.appendChild(b2);
    
    let tabla = document.createElement("table");
    let tbody = document.createElement("tbody");
    let contador = 1;

   
    for(let i = 1; i<=10; i++){
        let fila = document.createElement("tr");
        for (let j = 1; j <= 10; j++){
            let celda = document.createElement("td");
            celda.textContent = contador;
            fila.appendChild(celda);
            contador++;                
        }
        tbody.appendChild(fila);

    }
    
    tabla.appendChild(tbody);
    tabla.setAttribute("style", "border: 4px red solid");
    document.body.appendChild(tabla);

    b1.addEventListener("click", function(){
        let celdas = document.getElementsByTagName("td");
        for(let i = 0; i < celdas.length; i++){
            if(calcularPrimo(celdas[i].textContent)){
                celdas[i].classList.add("primos");
            }
        }
        
    });


    b2.addEventListener("click", function(){
        let celdas = document.getElementsByTagName("td");
        for(let i = 0; i < celdas.length; i++){
            celdas[i].classList.remove("primos");
        }
  
    })

    function calcularPrimo(numero) {
        if (numero <= 1) {
            return false;
        }
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }


}