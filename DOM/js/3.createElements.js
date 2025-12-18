"use strict"

{

    let a = document.createComment("Este es un comentario");
    // a.isConnected?console.log("Is connected"):console.log("Is not connected"); 

    document.body.append(a); // añade al final del documento
    // a.isConnected?console.log("Is connected"):console.log("Is not connected"); 

    let t = document.createTextNode("Este es un texto en un nodo de texto");
    // t.isConnected?console.log("Is connected"):console.log("Is not connected"); 
    document.body.append(t);

    let myP = document.querySelector("p");
    myP.textContent = t.textContent;

    let t2 = t.cloneNode(false); // true clona tambien los hijos
    t2.textContent = "Este es otro texto en un nodo de texto";
    
    document.body.append("br"); // asi no
    document.body.append(t2); // insertar
   

    let newDiv = document.createElement("div"); // crea un elemento HTML

    newDiv.textContent = "Hola";
    let newDiv2 = newDiv; // referencia al mismo objeto
    newDiv2.textContent = "adiós";
    console.log(newDiv);
    console.log(newDiv2);

    let newImg = document.createElement("img");
    let newH1 = document.createElement("h1");// h2, h3,..
    let newH2 = document.createElement("h2");
    let newTextH2 = document.createTextNode("Hola soy un h2");
    newH2.append(newTextH2); // añade el texto al h2
    document.body.append(newH2); // añade el h2 al body
    newH2.textContent = "New h2 con textContent"; // reemplaza el texto del h2
    let br = document.createElement("br");
    newH2.append(br); // añade un salto de linea al h2
    newH2.append("Me presento, soy: ");
    
    newH2.append(newH1);
    newH1.append("H1 TEXT");

    newH2.append(document.createTextNode("\nGeneral o Coronel GORDONNNNN ")); // añade mas texto al h2
    
    // newH2.appendChild(" del ejército de los estados unidos de tierra ") // error, appendChild solo acepta nodos
    
    let a1  = newH2.appendChild(newH1); // añade el texto al h2

    console.log(a1); // devuelve el nodo insertado




    /**
    * https://developer.mozilla.org/en-US/docs/Web/API/Element/append
    * append vs appendChild:
    * 1) append inserta un Node o un String (uno o varios a la vez, dados en un array)
    * 1) appendChild solo inserta Node (1 a la vez)
    * 2) append no devuelve nada
    * 2) y appendChild devuelve el Node insertado
    */
    

    /**
    * Node es la clase base para todos los objetos del documento, 
    * y HTMLElement hereda de Node para representar elementos HTML específicos. 
    * Esto significa que cada elemento HTML es un Node, pero no todos los Node 
    * son elementos HTML; un Node también puede ser un texto o un comentario. 
    * Esta relación permite que todos los elementos HTML hereden la funcionalidad 
    * de Node
    */


}