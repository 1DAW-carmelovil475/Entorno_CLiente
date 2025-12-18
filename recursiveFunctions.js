"use strict" 

{
    // caso base

    // caso recursivo

    // n = 10 => 10 9 8 7 6 5 4 3 2 1 

    function countDown1 (n) {

        if(n === 1){ //caso base
            console.log(1);
        }else{  // caso recursivo
            console.log(n);
            countDown1(n-1)
        }
    }

    // countDown1(1);
    // countDown1(5);

    // n = 10

    function countUp (min, max){
        if(min === max){
            console.log (min);
        }else{
            console.log(min);
            countUp(min+1, max);

        }
    }

    // countUp(1,10);

    let countDown2 = function (n) {
        if (n === 1){
            console.log(1);
        }else{
            console.log(n);
            countDown2(n-1);
        }
    }

    // countDown2 (10);

    const countDown3 = (n) => {
        if(n === 1){
            console.log(n)
        }else{
            console.log(n);
            countDown3(n-1);
        }
    }

    // countDown3(10);

    function parImpar1 (n){
        if(n === 0){
            return "PAR";
        }else if ( n === 1){
            return "IMPAR";
        }else{
            return parImpar1(n-2);
        }
    }

    let x = parImpar1(10);
    console.log(x); //PAR
    let y = parImpar1(11);
    console.log(y); //IMPAR

    const parImpar2 = (n) => {
        if(n === 0){
            return "PAR";
        }else if ( n === 1){
            return "IMPAR";
        }else{
            return parImpar2(n-2);
        }
    }

    let xx = parImpar2(10);
    console.log(xx); //PAR
    let yy = parImpar2(11);
    console.log(yy); //IMPAR

    

}