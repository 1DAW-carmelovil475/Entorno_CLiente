"use strict"

{

    let myString = "Hola, ¿qué tal¿";
    let myString2 = new String ("user:password:group:home:shell");

    console.log(myString.length);
    console.log(myString.toLowerCase());
    console.log(myString.toUpperCase());
    console.log(myString.concat(myString2));
    console.log(myString);
    console.log(myString.charAt(0));
    console.log(myString.charAt(myString.length-1));
    console.log(myString.indexOf("¿")); // 6
    console.log(myString.indexOf("¿", 10)); // 14
    console.log(myString.lastIndexOf ("¿", 10)); // 2º parámetro => 
    // posición desde la izquierda desde donde se empiza a buscar hacia atrás
    console.log(myString.replace("¿", "¡"));
    console.log(myString.replaceAll("¿", "¡"));
    let myArray = myString2.split(":");
    console.log(myArray, myArray.length);
    console.log(myString.substring(0, 10)); // desde donde, cuantos caracteres

    // console.log((myString2.substring(myString2.indexOf(":")+1)).myString2.substring.indexOf(":"));
    let myString3 = "Juan Pedro Pepe Márquez";
    console.log(myString3);
    console.log(myString3.split (" ") [2]);
    console.log(myString2.includes(":group")?"SI":"NO");
    console.log(myString2.repeat(3));
    let myString4 = "       HOLA   "
    console.log(myString4.trim()); // HOLA


}