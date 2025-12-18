"use strict"

{

    /**
     * PARA NAVEGAR POR ELEMENTOS
     * children : devuelve un array de HTMLCollection con los elementos hijo del elemento en cuestión
     * parentElement : devuelve el elemento padre o null si no tiene 
     * firstElementChild = children[0] = primer hijo
     * lastElementChild = children[ultimo]  = children[children.length-1] = último hijo
     * previousElementSibling : devuelve el elemento hermano previo (null si no tiene)
     * nextElementSibling : devuelve el siguiente elemento hermano (null si no tiene)
     *  
     */

    console.log(document.body.children); // hijos directos del body
    console.log(document.body.children.length); // número de hijos directos del body

    // for(let element of document.body.children){
    //     console.log(element);
    // }


    console.log(document.body.parentElement);// padre del body (html)

    let listaAviones =document.querySelector("#idAviones");
    let padreAviones = listaAviones.parentElement;
    console.log(padreAviones); // padre de la lista de aviones (div idApp)

    console.log(document.body.firstElementChild);
    console.log(document.body.firstElementChild.textContent);
    console.log(document.body.firstElementChild.firstElementChild);// no es un elemento, es un texto
    console.log(document.body.firstElementChild.firstChild); // primer hijo (nodo texto)

    console.log(document.body.children[0]); // primer hijo (elemento)

    // console.log(document.body.lastElementChild); // último hijo (elemento)
    console.log(document.body.children[document.body.children.length-1]); // último hijo (elemento)

    console.log(document.body.previousElementSibling); // head
    console.log(document.body.nextElementSibling); // null


    /**
     * PARA NAVEGAR POR LOS NODOS
     * childNodes : devuelve un array de NodeList con los nodos hijos del elemento en cuestión
     * parentElement : devuelve el nodo padre o null si no tiene 
     * firstChild : devuelve el primer nodo hijo
     * lastChild : devuelve el último nodo hijo
     * previousSibling : devuelve el anterior nodo hermano
     * nextSibling : devuelve el siguiente nodo hermano
     */


    console.log("--------------NODOS-------------------");


    console.log(document.body.childNodes); // nodos hijos del body
    console.log(document.body.childNodes.length); // número de nodos hijos del body

    // document.body.childNodes.forEach(function(node){
    //     console.log(node);
    // }); // Lista de los nodos hijos del body

    console.log(document.body.parentNode);// padre del body (html)
    let listaCiclomotores = document.querySelector("#idCiclomotores");
    console.log(listaCiclomotores.parentNode); // padre de la lista de ciclomotores (div idApp) --> BODY

    console.log(document.body.childNodes[1]); // primer nodo hijo (texto)
    console.log(document.body.lastChild); // último nodo hijo (texto)

    console.log(document.body.childNodes[document.body.childNodes.length-1]); // último nodo hijo (texto)

    console.log(document.body.childNodes[5].firstChild);// = textContent del nodo
    console.log(document.body.childNodes[5].lastChild);

    let app = document.querySelector("#idApp");
    let p = app.querySelector("p");
    console.log(p.previousSibling); // nodo hermano previo (texto)
    console.log(p.nextSibling); // nodo hermano siguiente (texto)
    console.log(p.nextElementSibling); // nodo hermano siguiente (a)
    console.log(p.previousElementSibling); // nodo hermano previo (hermano anterior)
    

    

}