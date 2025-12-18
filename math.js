"use strict"

{
    console.log("Math.PI:", Math.PI);
    console.log("Math.E:", Math.E);
    console.log("Math.LN2:", Math.LN2);
    console.log("Math.LN10:", Math.LN10);
 
    let f = 37.6;
    Math.floor(f); // 37
    Math.ceil(f); // 38
    Math.round(f); // 38
    

    let a = -37.6;
    Math.floor(a); // -38
    Math.ceil(a); // -37
    Math.round(a); // -38
    
    console.log(Maths.abs(a)); // 37.6
    console.log(Math.min(10, 20, 30, 7)); // 7
    console.log(Math.max(10, 20)); // 20     

    console.log(Math.pow(2,4)); // 16
    console.log(Math.sqrt(81)); // 9
    console.log(Math.random()); // número aleatorio entre 0 y < 1 
    console.log(Math.random().toFixed(2)); // número aleatorio entre 0 y < 1 con 2 decimales    
    console.log(Math.random() * 10); // número aleatorio entre 0 y < 10

    Math.round(Math.random() * 10); // número aleatorio entre 0 y 10 redondeado
    Math.floor(Math.random() * 10); // número aleatorio entre 0 y 9 redondeado hacia abajo
    Math.ceil(Math.random() * 10); // número aleatorio entre 1 y 10 redondeado hacia arriba 

    Math.random() * (100 - 10) + 10; // número aleatorio entre 10 <= X <= 100
    Math.round(Math.random() * (100 - 10) + 10); // número aleatorio entre 10 y 100 redondeado




} 