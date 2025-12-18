"use strict"

{
    //TEMPORIZADORES
    
    
    // const max = 10000;
    // for (let i = 0; i < max; i++) { 
    //     console.log(i); 
    // }


    // // prompt("Dime tu nombre: ", "Peter");
    setTimeout( function() {
        let d = new Date ().toLocaleDateString();
        console.log("3 segundos después:", d);
    }, 3000);
    
  
    let intervalo = setInterval( function() {
        let h = new Date ().toLocaleTimeString();
        console.log("Cada 2 segundos:", h);
    }, 2000);


    // Detener el intervalo después de 10 segundos
    setTimeout( function() {
        clearInterval(intervalo);
        console.log("Intervalo detenido");
    }, 10000);  
}