"use strict"

{

    let myForm1 = document.getElementById("idForm1");
    console.log(myForm1);

    console.log(myForm1.nTexto.value);
    console.log(myForm1.nUrl.value);
    myForm1.nTexto.value = "Today is raining";



    let myForm2 = document.getElementById("idForm2");
    console.log(myForm2);   

    let inputText1 = document.getElementById("idTexto1");
    inputText1.addEventListener("input", function(e){
        console.log("input");
        console.log(e.data);
        console.log(e.target.value);
        console.log(inputText1.value);
    });

    inputText1.addEventListener("change", function(e){
        console.log("change: " + e.target.value);
    });


    // text area
    let myTextArea = document.getElementById("idTextArea1");
    console.log(myTextArea.value);
    myTextArea.addEventListener("input", function(e){
        console.log(e.data);
        console.log(e.target.value);
    });
    myTextArea.addEventListener("change", function(e){
        console.log("change: " + e.target.value);
    });


    let rButton1 = document.getElementsByName("nrButton1");
    console.log(rButton1);
    rButton1.forEach(r => {
        console.log(r);
        console.log(r.value);
        console.log(r.previousElementSibling.textContent);
        if (r.checked){
            console.log("La opción marcada es: " + r.value);
        }
    }); 
    console.log("Tiene " + rButton1.length + " opciones");
    for (let r of rButton1){
        r.addEventListener("change", function(e){
            if (e.target.checked){
                console.log("Se ha marcado: " + e.target.value);
            }
        }); 
    }

    let myChecks = document.querySelectorAll("[name='ncheck1']");
    console.log(myChecks);
    myChecks.forEach(c => {
        console.log(c); 
        console.log(c.value);
        console.log(c.previousElementSibling.textContent);
        if (c.checked){
            console.log("El check marcado es: " + c.value);
        }   
        
        c.addEventListener("change", function(e){
            if (e.target.checked){
                console.log("Me como un: " + e.target.value);
            }
            else {
                console.log("No me como un: " + e.target.value);
            }   
        }); 
    });

    let seleccion = document.querySelector("#idLenguaje");
    console.log(seleccion);
    for(let o of seleccion){
        console.log(o.value);
        console.log(o.textContent);
        console.log(seleccion.selectedIndex);
    }

    console.log(seleccion.options[seleccion.selectedIndex].value);
    seleccion.addEventListener("change", function(e){
        console.log(`\nEl índice seleccionado es: ${seleccion.selectedIndex}`);
        console.log(`El valor del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].value}`);
        console.log(`El texto del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].text}`);
    });

    let dataList = document.querySelector("#idFrutas");
    for(let o of Array.from(dataList.options)){
        console.log(o.value);
        console.log(o.text);
        console.log(o.textContent);
    }

    let cajaTexto = document.querySelector("#idFrutas");
    cajaTexto.addEventListener("change", function(e){
        console.log(cajaTexto.value);
        console.log(e);
        console.log(e.target.value);
    })
   
       






}