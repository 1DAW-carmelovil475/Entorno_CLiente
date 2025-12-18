"use strict"

{
    let p = document.createElement("p");
   

    document.addEventListener ("mousemove", (event) => {
        p.innerHTML = "X: " + event.screenX + "<br> Y: " + event.screenY;
    });

    document.body.appendChild(p);

}