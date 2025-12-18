"use strict"

{
    function f (param1, param2, param3=0){
        console.log(param1);
        console.log(param2);
        console.log(param3);
        //return "x";
    }

    // llamada

    f(10, 20, 30);
    f(10, 20);

    function f2 (param1, param2, ...param3){
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }

    f2(10, 20, 30);
    f2(10, 20);
    f2(10, 20, 30, 40, 50, 60, 70, 80);

    const f3 = function (param1, param2, param3 = 0){
        console.log("Esto es bastante raro");
        return 10+30;
    }

    // console.log(f3);

    let x = f3(10,20);
    console.log(x);

    // funciones anónimas

    (function (){
        console.log("Función anónima")
    })();

    (function (param1, param2, param3=30){
        console.log("Función anónima")
        console.log(param1);
        console.log(param2);
        console.log(param3);
    })(10, 20, 40);

    const v = (function(param1, param2, param3){
        console.log("función anónima2");
        // return 0;
        return parseInt(param1) + parseInt(param2);
    })(prompt("Introduce param1", 10), prompt("Introduce param2", 20));

    console.log(v);

}