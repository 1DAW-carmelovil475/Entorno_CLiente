"use strict"

{
    //SET

    let mySet1 = new Set();
    mySet1.add(1);
    mySet1.add(2);
    mySet1.add(2);// No se añade porque ya existe
    mySet1.add("Hola");
    mySet1.add({});
    mySet1.add({});
    mySet1.add("hola");

    console.log(mySet1);

    for (let item of mySet1) {
        console.log(item);
    }
    

    mySet1.forEach( (item) => console.log(item));
   
    console.log("Tamaño del Set:", mySet1.size);

    //Transformar un Set a un Array
    let myArray1 = Array.from(mySet1);
    console.log(myArray1);

    //Crear un Set a partir de un Array
    let myArray2 = [1,2,2,3,4,4,5,"Hola","Hola"];
    let mySet2 = new Set(myArray2);
    console.log(mySet2);

    console.log(mySet2.has(3)); // true
    console.log(mySet2.has(6)); // false
    console.log(mySet2.delete(2)); // true
    console.log(mySet2.delete(2)); // false
    mySet2.clear();

    /**
     * Map : coleccion de datos identificados por una clave y un valor
     */

    let myMap1 = new Map();
    myMap1.set("nombre", "Peter");
    myMap1.set("edad", 30);
    myMap1.set("lastname", "lopez");
    console.log(myMap1);
    console.log("Tamaño del Map:", myMap1.size);
    console.log(myMap1.has("email")); // false
    console.log(myMap1.has("nombre")); // true
    console.log(myMap1.get("edad")); // 30
    myMap1.set("edad", 31); // Modifica el valor de la clave edad
    console.log(myMap1);
    myMap1.set({}, 10);
    myMap1.set(false, "valor false");
    console.log(myMap1);
    myMap1.get({}); // undefined porque es otro objeto distinto al que se añadió

    // Recorrer un Map
    myMap1.forEach(elem => console.log(elem));
    myMap1.forEach( function(value, key) {
         console.log(key + " : " + value)
        });

    for (let [key, value] of myMap1) {
        console.log(key + " = " + value);
    }

    let map2 = new Map( 
        [["nombre", "Donald"], 
        ["lastname", "Trump"], 
        ["age", 79] ] 
    );
    console.log(map2);
    let map2Keys = [...map2.keys()];
    let map2Values = [...map2.values()];
    console.log(map2Keys);
    console.log(map2Values);    
    

}