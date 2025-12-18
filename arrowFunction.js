"use strict"

{
    function sumar (n1, n2){
        return n1+n2;
    }

    // (parametros de entrada) => hace la implementacion de este lado con los parámetros

    () => console.log("arrow function");


    const s = (n1, n2) => n1+n2;

    console.log(s(10,20));

    const s2 = (param1, param2, param3=0) => {
        console.log(param1);
        console.log(param2);
        console.log(param3);
        return param1 + param2 + param3;
    };

    console.log(s2(10,20,30));
    
    function fParaTransformarAFlecha () {
        return prompt("How old are you?", 8);
    }

    console.log(fParaTransformarAFlecha);

    const s3 = () => prompt("How old are you?", 8);
    console.log(s3());

    const f = function (param1, param2){
        console.log(param1);
        console.log(param2);
        return "XXX";
    }

    const f1 = (param1, param2) => {
        console.log(param1);
        console.log(param2);
        return "XXX";
    };
    
    console.log(f1(10, 20));
    let x = f1(10, 20);
    console.log(x);
    

  
}