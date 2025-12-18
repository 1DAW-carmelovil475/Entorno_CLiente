"use strict"

/**
 * - Clase HTMLElement: contiene objetos que son elementos de html: body, párrafo, div, ...
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
 * 
 * - HTMLCollection: es una interfaz que se implementa mediante una clase que es un "array" que contiene elementos html en orden de aparición.
 * En resumen: un casi un array de HTMLElements ,pero no tienen: forEach, map ni reduce.
 * Un HTMLCollection se actualiza de forma automática en cuanto se crea o se elimina un nuevo elemento html en la página.
 * 
 * - Clase Node: es algo más genérico que Element ya que también puede ser un texto o un comentario.
 * https://developer.mozilla.org/en-US/docs/Web/API/Node
 * - NodeList: es casi un array de Node. Trae forEach.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
 * https://lasfi.to/blog/diferencias-entre-node-y-element/
 * 
 */


{

    console.log(window.document); // ambas son iguales
    console.log(document); // objeto document

    console.log(document.documentElement); // elemento raiz <html>
    
    console.log(document.head); //  elemento <head>
    console.log(document.body); // elemento <body>
    console.log(document.doctype);  // <!DOCTYPE html>
    console.log(document.characterSet); // UTF-8
    console.log(document.title); // título: INDEX-DOM

    console.log(document.links); // coleccion de enlaces
    console.log(document.images); // coleccion de imagenes
    console.log(document.forms); // coleccion de formularios
    console.log(document.styleSheets); // coleccion de hojas de estilo
    console.log(document.scripts); // coleccion de scripts
    
    let a = document.links;
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }

}