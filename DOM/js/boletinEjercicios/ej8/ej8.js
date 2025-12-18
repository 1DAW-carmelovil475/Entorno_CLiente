"use strict"
{
    
    document.body.addEventListener("dblclick", () => {
        document.body.style.color === "black";
        document.body.style.background = generarColor();
    });

    function generarColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return "rgb( " + r + ", " + g + ", " + b + ")";
    }
    
}