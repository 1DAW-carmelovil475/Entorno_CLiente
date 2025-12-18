"use strict"

{

    let newH1 = document.createElement("h1");
    let newH4 = document.createElement("h4");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("style", "background-color: cyan");
    let newP1  = document.createElement("p");
    let newP2  = document.createElement("p");

    newP1.textContent = "Paragraph 1";
    newP2.textContent = "Paragraph 2";

    newH1.textContent = "H1";
    newH4.textContent = "H4";


    let newImg = document.createElement("img");
    newImg.setAttribute("src", "https://i.pinimg.com/originals/89/8f/2c/898f2c794d73ade4794598dd1dbbbee1.gif");

    document.body.appendChild(newH1);
    newH1.appendChild(newH4);
    newH4.appendChild(newDiv);
    newDiv.appendChild(newP1);
    newDiv.appendChild(newP2);
    newDiv.appendChild(newImg);

    let myH1 = newH1.cloneNode(true);
    document.body.appendChild(myH1);
    
}