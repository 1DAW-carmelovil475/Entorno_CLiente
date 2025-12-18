"use strict"

{

    let p = document.createElement("p");
    p.textContent = "Crea una página con 5 elementos <div> de colores distintos. Al pasar el ratón por encima, deben reducir su tamaño. Al salir el ratón, deben volver a su tamaño original. Al hacer doble clic, se eliminarán del DOM. Añade un botón “Restaurar” que vuelva a crear solo los elementos eliminados.";
    document.body.appendChild(p);

    let b1 = document.createElement("button");
    b1.textContent = "Restaurar";
    document.body.appendChild(b1);

    let div1 = document.createElement("div1");
    div1.textContent = "div1";
    div1.style.border = "2px solid black";
    document.body.appendChild(div1);

    let div2 = document.createElement("div2");
    div2.textContent = "div2";
    div2.style.border = "2px solid black";
    document.body.appendChild(div2);

    let div3 = document.createElement("div3");
    div3.textContent = "div3";
    div3.style.border = "2px solid black";
    document.body.appendChild(div3);

    let div4 = document.createElement("div4");
    div4.textContent = "div4";
    div4.style.border = "2px solid black";
    document.body.appendChild(div4);

    let div5 = document.createElement("div5");
    div5.textContent = "div5";
    div5.style.border = "2px solid black";
    document.body.appendChild(div5);

    div1.addEventListener("dblclick", function(){
        div1.style.display = "none";
    });

    div2.addEventListener("dblclick", function(){
        div2.style.display = "none";
    });

    div3.addEventListener("dblclick", function(){
        div3.style.display = "none";
    });

    div4.addEventListener("dblclick", function(){
        div4.style.display = "none";
    });

    div5.addEventListener("dblclick", function(){
        div5.style.display = "none";
    });

    div1.addEventListener("mouseenter", function(){
        div1.style.width = "400px";
        div1.style.height = "250px";
    });

    div2.addEventListener("mouseenter", function(){
        div2.style.width = "400px";
        div2.style.height = "250px";
    });

    div3.addEventListener("mouseenter", function(){
        div3.style.width = "400px";
        div3.style.height = "250px";
    });

    div4.addEventListener("mouseenter", function(){
        div4.style.width = "400px";
        div4.style.height = "250px";
    });

    div5.addEventListener("mouseenter", function(){
        div5.style.width = "400px";
        div5.style.height = "250px";
    });

    b1.addEventListener("click", function(){
        div1.style.width = "100%";
        div1.style.height = "100%";
        div2.style.width = "100%";
        div2.style.height = "100%";
        div3.style.width = "100%";
        div3.style.height = "100%";
        div4.style.width = "100%";
        div4.style.height = "100%";
        div5.style.width = "100%";
        div5.style.height = "100%";
        div1.style.display = "block";
        div2.style.display = "block";
        div3.style.display = "block";
        div4.style.display = "block";
        div5.style.display = "block";
    });

}