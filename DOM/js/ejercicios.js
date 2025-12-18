"use stritct"

{

    //EXERCISE 1: Using prompt, ask a number N to an user and create in DOM N paragraphs with a random number between 0 and 10 each one.


    // function ej1 () {  

    //     let n = parseInt(prompt("Introduce el número de párrafos a crear:"));

    //     for (let i = 0; i < n; i++) {

    //         let p = document.createElement("p");
    //         let randomNum = Math.floor(Math.random() * 11);
    //         p.textContent = randomNum;
    //         document.body.appendChild(p);

    //     }

    // }

    // ej1();


    //EXERCISE 2: Using prompt, ask a number N to an user and create in DOM N H2 elements writing 
    // inside a paragraph your name in bold and italic + a random number between 1 and 10.

    // function ej2 () {  

    //     let n = parseInt(prompt("Introduce el número de H2 a crear:")); 
    //     for (let i = 0; i < n; i++) {
    //         let h2 = document.createElement("h2");
    //         let randomNum = Math.floor(Math.random() * (10-1) + 1);
    //         h2.innerHTML = "<p><b><i>Carmelo</i></b> " + randomNum + "</p>";
    //         document.body.appendChild(h2);
    //     }   
    // }
    // ej2();

    
    // EXERCISE 3: Using prompt, ask a number N to an user and create in DOM an 
    // unordered list with N random numbers between 1 and 15 for each element in bold.

    function ej3 () {  

        let n = parseInt(prompt("Introduce el número de elementos de la lista:")); 
        let ul = document.createElement("ul");      

        for (let i = 0; i < n; i++) {
            let li = document.createElement("li");
            let randomNum = Math.floor(Math.random() * (15-1) + 1);
            li.innerHTML = "<b>" + randomNum + "</b>";
            ul.appendChild(li);
        }

        document.body.appendChild(ul);

    } 

    ej3();

    
    
    
}