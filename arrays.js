"use strict"

{

    // FORMAS DE DECLARAR UN ARRAY

    let myArray = [];
    myArray[0] = 10;
    myArray[1] = 20;
    myArray [2] = "Martínez";
    console.log(myArray);

    let myArray2 = new Array ();
    myArray2[0] = 30;
    myArray2[1] = "30";
    myArray2[2] = "El dos";

    let myArray3 = ["gamusino", "up", "globo"];
    console.log(myArray3.length);
    console.log(`El array tiene ${myArray3.length} elementos`);

    // CLONADO DE UN ARRAY
    let myArray4 = new Array ();
    myArray4 = [...myArray,...myArray2,...myArray3];
    console.log(myArray4);


    // ARRAY BIDIMENSIONAL
    // Forma 1:
    let myArrayBi1 = new Array();

    myArrayBi1[0] = [1,2,3,4,5];
    myArrayBi1[1] = [2,3,4,5,6];
    myArrayBi1[2] = [3,4,5,6,7];

    myArrayBi1[2][4] = "A";
    console.log(myArrayBi1);
    //console.log(myArrayBi1.length); // 3
    // Forma 2: 

    let numFilas = 2;
    let numColumnas = 3;
    let myArrayBi2 = new Array (numFilas);

    for (let i = 0; i<numFilas; i++){
        myArrayBi2[i] = new Array (numColumnas);
    }

    console.log(myArrayBi2);

    console.log("---------------------------------")
    for(let i = 0; i<numFilas; i++){
        for(let j = 0; j<numColumnas; j++){
            myArrayBi2[i][j]= 0;
        }
    }

    console.log(myArrayBi2);

    // Forma 3:

    let myArrayBi3 = Array.from(Array(2), () => new Array(3));
    console.log(myArrayBi3);
    console.log("---------------------------------")
     for(let i = 0; i<2; i++){
        for(let j = 0; j<3; j++){
            myArrayBi3[i][j]= 0;
        }
    }
    console.log(myArrayBi3);

    // Forma 4

    let myArrayBi4 = new Array (5).fill().map( () => new Array (4));
    
    console.log(myArrayBi4);
    // XXXX
    // XXXX
    // XXXX
    // XXXX
    // XXXX

    


    // OPERACIONES CON ARRAYS

    // join
    console.log("\tJOIN");
    const elements = ["fire", "air", "water"];
    let str = elements.join("-");
    console.log(str);
    console.log(elements);

    // split
    console.log("\n\tSPLIT:");
    const strNumbers = "1,2,3,4,5,6,7,8,9,10";
    const myArrayNumbers = strNumbers.split(",");
    console.log(myArrayNumbers);

    //push
    console.log("\n\tPUSH:");
    elements.push("earth");
    console.log(elements);

    //pop
    console.log("\n\tPOP:");
    let myElement = elements.pop();
    console.log(myElement);
    console.log(elements);

    //shift
    console.log("\n\tSHIFTH:");
    let firstElement = elements.shift();
    console.log(elements);

    //reverse --> modify the original array
    console.log("\n\tREVERSE:");
    const reverseElements = elements.reverse();
    console.log(reverseElements);
    console.log(elements); // si lo quiero conservar lo copiamos.

    //SORT

    console.log("\n\tSORT:");
    let myNumbers = [100,5,15,1,99];
    myNumbers.sort()
    console.log(myNumbers);//Alfabéticamente y se queda ordenado, hay que hacer copia

    myNumbers.sort(function (first, second){
         if (first > second){ // cambianndo > por < cambia el orden
             return 1;
         }else{ 
             return -1;
         }

    });
    console.log(myNumbers);

    myNumbers.sort( (a,b) => a>b?1:-1) // cambiando el signo cambia la forma de ordenar
    console.log(myNumbers);

    myNumbers.sort( (a,b) => a-b); // --> menor a mayor
    myNumbers.sort( (a,b) => b-a); // --> de mayor a menor
    
    // slice(inicio, [final]) --> desde el inicio hasta final -1
    console.log("--------------------------------");

    console.log("\nSLICE:");
    let nombres = ["Rita", "Manuel", "Miguel", "Ana", "Vanesa"];

    let nombresMasculinos = nombres.slice (1,3);
    console.log(nombresMasculinos);
    console.log(nombres.slice(-2));

    //filter: crea un nuevo array con los elementos filtrados:
    console.log("--------------------------------");

    console.log("\nFILTER:");
    let users = [
        { name: "John", age: 34 },
        { name: "Amy", age: 20 },
        { name: "Amador", age: 27 },
        { name: "Thomas", age: 10}
    ];

    let filterUsers = users.filter(function (user){
        return user.age >15;
    })

    console.log(filterUsers);

    let filterUsers2 = users.filter( (user)  => user.age > 15);
    console.log(filterUsers2);

    // find: devuelve el 1º elemento del array que cumple la condicion
    let user = users.find (function (user){
        return user.name.match(/A[a-z]*/);
    });

    console.log(user);
    let user2 = users.find ( (user) => user.name.match(/A[a-z]*/));
    console.log(user2);
    // probar con el flag g en la expresión regular.

    // some --> true/false. Comprueba si al menos 1 elemento cumple la condición.

    console.log("--------------------------------");

    console.log("\nSOME:");
    let hasUsers = users.some(function (user){
        return user.age === 10;
    });
    hasUsers?console.log("PO ZI"):console.log("PO NO");
    let hasUsers2 = users.some( (user) => user.age === 18);
    hasUsers2?console.log("PO ZI"):console.log("PO NO");


    // findIndex --> devuelve el índice del 1er elemento del array que cumpla la condición.
    console.log("--------------------------------");

    console.log("\nFINDINDEX:");
    let index = users.findIndex(function(user){
        return user.age === 27;
    });
    console.log(index);

    let index2 = users.findIndex((user) => user.age === 11);
    console.log(index2);


    // concat --> concatena cadenas, copiando x valores no x referencia.
    console.log("--------------------------------");

    console.log("\nCONCAT:");
    let array1 = ["a", "b", "c"];
    let array2 = ["d", "e", "f"];
    let array3 = array1.concat(array2);
    console.log(array3);
    array1[2] = "X";
    console.log(array3);
    let array4 = [... array1, ...array2];
    array1[2] = "Z";
    console.log(array4);

    // reduce (acumulador, valorActual)
    console.log("--------------------------------");
    console.log("\nREDUCE");
    let numbers = [1,2,3,4,5];

    let sumaTotal = numbers.reduce(function(acumulador, valorActual){
        acumulador = acumulador + valorActual;
        return acumulador;

    }, 0) // El 0 es el valor inicial de la variable  acumulador

    console.log(`La suma de los valores del array es ${sumaTotal}`);

    let sumaFlecha = numbers.reduce( (acumulador,valorActual) => {

        acumulador = acumulador + valorActual;
        return acumulador;
    }, 10 );
    console.log(`La suma de los valores del array es ${sumaFlecha}`);

    const miArrayNumeros = [[0, 1], [2,3], [4,5]]; // --> [0,1,2,3,4,5]
    let arrayCompleto = miArrayNumeros.reduce ( (acum, valorActual) => acum.concat(valorActual), []);

    console.log(arrayCompleto);

    // includes() --> true/false
    console.log("--------------------------------");
    console.log("\nINCLUDES");
    const motos = ["yamaha", "ducati", "kawasakiNinja"];
    console.log(motos.includes("vespa"));// false
    console.log(motos.includes("ducati"));// true
    
    /**
     * ITERAR SOBRE UN ARRAY
     * - for
     * - forEach
     * - map
     * - for of
     */

    //FOR
    console.log("--------------------------------");
    console.log("\nFOR");
    let vector = [1,2,"A", "F", -1, 2.4];
    for(let i = 0; i<vector.length;i++){
        console.log(vector[i]);
    }

    //FOREACH --> no devuelve nada
    console.log("--------------------------------");
    console.log("\nFOREACH");
    vector.forEach(function(elem){
        console.log(elem);
    });

    vector.forEach(elem => console.log(elem));

    vector.forEach(function (elem, index){
        console.log("En la posición " + index + " nos encontramos el elemento " + elem);
    });
    
    vector.forEach((elem,index ) => console.log("En la posición " + index + " nos encontramos el elemento " + elem));

    //MAP --> devuelve cada elemento y hay que guardarlo en un nuevo array si se quiere
    
    console.log("--------------------------------");
    console.log("\nMAP");
    let vector2 = vector.map(function(elem){
        console.log(elem);
        return elem;
    });
    console.log(vector2);

    let vector3 = vector.map (elem => elem*2);
    console.log(vector3);

    // let users = [
    //     { name: "John", age: 34 },
    //     { name: "Amy", age: 20 },
    //     { name: "Amador", age: 27 },
    //     { name: "Thomas", age: 10}
    // ];

    let arrayAge = users.map (user => user.age);
    let sumaEdades = arrayAge.reduce( (acumulador, valorActual) => acumulador += valorActual, 0);
    console.log(arrayAge);
    console.log(sumaEdades);

    let fullUsers = users.map ( user => {
        return {
            ...user,
            city: "Jalisco"
        };
    });

    

    console.log(fullUsers);

    let fullUsers2 = users.map ( user => {
        return {
            ...user,
            age: user.age*2
        };
    });

    console.log(fullUsers2);

    //FOR OF
    for(let user of users){
        console.log(user);
    }




}