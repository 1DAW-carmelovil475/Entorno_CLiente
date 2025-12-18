"use strict"
{
    
        let a = 4;
        //var no se uesa para variables
        const c = 6;
        //wrong
        //c=2

        test1();

        function test1 (){
            let b = 5;
            console.log(b);
            b = b + 10;
            console.log(b)
        }

        //console.log(b);

        const miArray = [1,2,3];
        console.log(miArray[0]);
        miArray[0] = 4;
        console.log(miArray[0]);
        //miArray = []; //wrong

        const number = 10;
        printNumber();
        function printNumber() {
            console.log(number);
        }

        function app () {
            const number = 5;
            printNumber();
        }
        app();

        /**
         * number
         * boolean
         * string
         */

        let v = 10.7;
        let b = true;
        let s = "my string";

        //concatenate
        console.log("the string is " + s);
        console.log('the string is ' + s);    
        
        let edad = 23, nuevaEdad, incremento = 4;
        const name = "Domingo";
        console.log(typeof incremento == "number");
        
        nuevaEdad = edad+incremento;
        console.log(typeof(nuevaEdad));
        console.log(name + " " + nuevaEdad);

        console.log("2" + edad);
        console.log(number + '2');

        let str1 = "hello";
        let str2 = str1; //it did a copy, by value
        str1 = "goodbye";
        console.log(str1);
        console.log(str2);

        let v1 = ["hello"];
        let v2 = v1; //copy by reference, bc array is not primitive
        v1.push("goodbye");
        console.log(v1);
        console.log(v2);

        v2 = [...v1]; //
        v1.push ("its too late");
        console.log(v1);
        console.log(v2);

        let numero = 5;
        console.log(numero);
        console.log(numero.toString());

        let x = "2", y = 5;
        console.log(typeof x + " "+ typeof y );
        console.log( x + y);

        let arr = ["1", "10", "100", "1000"];
        for (let i = 0; i < arr.length && arr [i] < 500; i++){
            console.log(i);
        }// 0 1 2

        console.log("😎😎")

        let aa = 10; 
        let bb = "9";
        console.log(aa<bb);//false

        let num = "100";
        let num2 = "100.13";
        let num3 = 11;

        let n = parseInt(num);
        let n2 = parseFloat (num);
        let n3 = parseFloat (num2);
        let n4 = num3.toString();

        console.log(n);
        console.log(n2);
        console.log(n3);
        console.log(n4);

        // E/S

        // alert("Mensaje");
        console.log("Mensaje");
        console.table("Mensaje");
        console.log(v1);
        console.table(v1);

    /*    let answer = confirm ("Wouild you like to cancel the subcription?")
        alert (answer);

        answer = prompt("Introduce a province", "Huelva");
        CANCELAR ==> NULL
        ACEPTAR ==> valor introducido en el prompt
        alert(answer);
        s
    */

        let aaa = "2";
        let bbb = 4;
        let ccc = aaa + bbb;
        console.log(ccc);

        if (aaa === bbb){
            console.log("son iguales");
        }

        if (aaa !== bbb){
            console.log("son distintos");
        }

        // esto mira si es igual en valor y en tipo con 2 = 
        // si solo hay 1 solo mira la igualdad en valor

        // Luego están los if else, if y else if.

        const metodoPago = "cheque";
        switch (metodoPago){
            case "tarjeta":
                console.log("has pagado con tarjeta");
                break;
            case "cheque":
                console.log("has pagado con un cheque");
                break;
            default:
                console.log("has pagado de otra forma o no lo has echo");
                break;
        }
        
    // OPERADOR TERNARIO

        let esSocio = true;
        esSocio ? console.log("La cuota son 10$") 
        : console.log("La cuota son 20$");

    // BUCLES

        // for (let i = 2; i <= 30; i += 2) {
        //     if(i%10 !== 0){
        //         console.log(i);
        //     }
            
        // }

        // 2 4 6 8 12 14 16  18 22 24 26 28

        let i = 2;
        while (i<=30){
            console.log(i);
            i+=2;
        }


        //BREAK & CONTINUE

        let auxclave = true;
        let numveces = 0;
        while(auxclave !== "anonimo" && auxclave){
            auxclave = prompt("Introduce la clave ", "");
            numveces++;
            if (numveces === 3){
                break;
            }
        }

        if(auxclave == "SuperClave"){
            console.log("La clave es correcta");
        }else{
            console.log("La clave no es correcta")
        }


        




   
}