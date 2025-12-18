"use strict"

{

    /**
    * getElementsByTagName
    * getElementsByClassName
    * getElementsByName
    * getElementById
    * querySelector
    * querySelectorAll 
    */


    let listaA =  document.getElementsByTagName("a");
    console.log(listaA);

    for (let a of listaA) {
        console.log(a.href);
        console.log(a.textContent);
    }

    let listaUls = document.getElementsByClassName("cListaVehiculos");
    console.log(listaUls.length);
    for (let ul of listaUls) {
        console.log(ul);
        console.log(ul.textContent);
    }

    listaUls = document.getElementsByName("nLista"); // NodeList   

    console.log(listaUls);
    listaUls.forEach(element => {
        console.log(element);
        // console.log(element.getAtribute("id")) // null;
        console.log(element.textContent);
    });

    let ul = document.getElementById("idAviones");
    console.log(ul);
    console.log(ul.textContent);    

    let myCar = document.querySelector("#idCoches");
    console.log(myCar);
    console.log(myCar.textContent);

    let mycharacters = document.querySelector(".cListaPersonajes");
    console.log(mycharacters);
    console.log(mycharacters.textContent);


    let myP = document.querySelector("p");
    console.log(myP);
    console.log(myP.textContent);   
    console.log(myP.innerText); // sin espacios ni saltos de línea

    let listaP = document.querySelectorAll("p");
    listaP.forEach(p => {
        console.log(p);
        console.log(p.textContent);
    });

    listaUls = document.querySelectorAll("ul");
    console.log(listaUls);
    console.log(listaUls[0].textContent);
    

    listaUls = document.querySelectorAll('[name = "nLista"]');
    console.log(listaUls);
    console.log(listaUls[0].textContent);

}
