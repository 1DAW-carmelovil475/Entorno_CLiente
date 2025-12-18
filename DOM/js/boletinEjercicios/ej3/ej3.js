"use strict"

{

    let b1 = document.createElement("button");
    b1.textContent = "Marcar todos";
    document.body.appendChild(b1);

    let b2 = document.createElement("button");
    b2.textContent = "Desmarcar todos";
    document.body.appendChild(b2);

    let b3 = document.createElement("button");
    b3.textContent = "Ampliar tamaño pares";
    document.body.appendChild(b3);
    
    let b4 = document.createElement("button");
    b4.textContent = "Restaurar todos";
    document.body.appendChild(b4);

    let contenedor = document.createElement("div");
    let checkbox = document.getElementsByTagName("input");

    for (let i = 0; i < 100; i++) {
        let num = Math.floor(Math.random() * (200 - 100) + 100);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = num;
        checkbox.id = "idCheckbox";

        let label = document.createElement("label");
        label.textContent = i;
        label.htmlFor = checkbox.id;

        contenedor.appendChild(checkbox);
        contenedor.appendChild(label);
        contenedor.appendChild(document.createElement("br"));
    }

    document.body.appendChild(contenedor);


    b1.addEventListener("click", function(){
        
        
        for (let check of checkbox){
            if(check.type === "checkbox"){
                check.checked = true;
            }
        }

    });

    b2.addEventListener("click", function(){
        
        
        for (let check of checkbox){
            if(check.type === "checkbox"){
                check.checked = false;
            }
        }
    });

    b3.addEventListener("click", function(){
        
        
        for (let check of checkbox){
            if(check.type === "checkbox" && check.value % 2 === 0){
                check.style.width = "100px";  
                check.style.height = "100px";     
            }
        }
    });

    b4.addEventListener("click", function(){
        
        
        for (let check of checkbox){
            if(check.type === "checkbox" && check.value % 2 === 0){
                check.style.width = "0%";   
                check.style.height = "0%";     
            }
        }
    });

    for(let check of checkbox){
        check.addEventListener("change", () => {
            if(check.type === "checkbox"){
                if(check.checked === true){
                    console.log("check" + check.value + " marcado");
                }else{
                    console.log("check" + check.value + " desmarcado");
                }
            }
        });
    }

    
    
   






}