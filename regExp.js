  "use strict"

{
    const r1 = /.a.o/gimuy; // banderas gimuy -> i (ignora mayus) -> g ('match')
    const r2 = new RegExp(".a.o", "i");
    const r3 = new RegExp(/.a.o/, "i");
    let r4 = new RegExp(/.a.o/i);

    console.log(r1.source); // .a.o
    console.log(r1.flags)
    r1.flags.includes("g")?console.log("yes g"):console.log("no g");
    r1.global?console.log("yes g"):console.log("no g");

    r1.flags.includes("i")?console.log("yes i"):console.log("no i");
    r1.ignoreCase?console.log("yes i"):console.log("no i");

    r1.flags.includes("m")?console.log("yes m"):console.log("no m");
    r1.multiline?console.log("yes m"):console.log("no m");

    r1.flags.includes("u")?console.log("yes u"):console.log("no u");
    r1.unicode?console.log("yes u"):console.log("no u");

    r1.flags.includes("y")?console.log("yes y"):console.log("no y");
    r1.sticky?console.log("yes y"):console.log("no y");


    /**
    * boolean regExp.test (string);
    * [] regExp.exec (string);
    * [] str.match (regExp);
    */
    r4 = new RegExp(/.a.o/, "i");
    r4.test("GATO");
    r4.test("pATo");
    r4.test("Perro");


    console.log("-------m-------");
    const regExp1 = new RegExp ("^football"); 
    const regExp2 = new RegExp ("^football", "m");  

    console.log(regExp1.test("rugby\nfootball"));
    console.log(regExp2.test("rugby\nfootball"));
    console.log(regExp2.test("rugby\nkkfootball")); //false
    console.log(regExp2.test("football\tennis"));


    console.log("-------u-------"); //no sirve
    r4 = /^.$/;
    console.log("-------------");
    console.log(r4.test("漢"));
    console.log(r4.test("字"));
    console.log("-------------");

    r4=/./;//un carácter
    console.log(r4.test("ab"));
    console.log(r4.test(""));
    console.log(r4.test(" "));
    

    console.log("-------y-------"); 
    const regExp3 = new RegExp ("a", "y");
    regExp3.lastIndex=0; //default
    console.log(regExp3.test("ba")); //false
    regExp3.lastIndex=1; 
    console.log(regExp3.test("ba"));

    const regExp4 = /foo/y;
    let myStr1 = "table footballfootbolin";
    regExp4.lastIndex = 6;
    console.log(regExp4.test(myStr1)); //true
    console.log(regExp4.lastIndex); // 9
    console.log(regExp4.test(myStr1));
    console.log(regExp4.lastIndex); // 0

    console.log("SPECIAL CHARACTERS");
    /**
    * . ->  CUALQUIER CARÁCTER
    * \ -> ESCAPA CARACTERES ESPECIALES
    * \n -> SALTO DE LÍNEA
    * \t -> TABULADOR
    * \r -> salto de carro
    * /f -> fin de formulario
    * \s -> espacio
    * [] -> CUALQUIER CARÁCTER EN EL INTERIOR
    * [^] -> no puede existir ningún carácter de dentro
    * | -> alternativa: o lo que está a la derecha o a la izquierda
    * [a-z] -> cualquier letra minúscula (no letras acentuadas ni ñ)
    * [0-9] \d -> números
    * [^0-9] \D -> no haya números
    * [a-zA-Z] -> una letra
    * [^a-zA-Z] -> no haya letra
    * [o-9a-zA-Z] -> haya letras o números
    * [^0-9a-zA-Z] -> no haya ni letras números
    * [ ] -> un espacio
    * [\t] -> un tabulador
    * [\r] -> retorno de carro
    * [\n] -> salto de línea
    * [\f] -> fin de formulario
    * [ \t\r\n\f] = \s
    * [^ \t\r\n\f] = \S
    */

    let regExp5 = /^.$/i;  
    let regExp6 = /^.$/i;
    console.log(regExp6.test("X"));

    let regExp7 = /^\s.\s$/i;
    console.log(regExp7.test(" X "));
    let regExp8 = /^[aeiou]/i;
    console.log(regExp8.test("aB"));
    let regExp9 = /^[^aeiou]$/i;
    console.log(regExp9.test("h"));
    let regExp10 = /^casa$|^cama$/i;
    console.log(regExp10.test("casa"));
    console.log(regExp10.test("casae"));
    regExp10 = /casa|cama/i;
    console.log(regExp10.test("casae"));
    let regExp11 = /[^ca|ma]/i;
    console.log(regExp11.test("ca"));
    console.log(regExp11.test("ma"));
    console.log(regExp11.test("fam")); 
    let regExp12 = /[a-z]/i;
    console.log(regExp12.test("ñ")); // false
    console.log(regExp12.test("l")); // true
    let regExp13 = /^[0-9]$/i;
    console.log(regExp13.test("47")); // false
    console.log(regExp13.test("4"));  // true
    let regExp14 = /\d/i;
    console.log(regExp14.test("4"));
    let regExp15 = /\D/i;
    console.log(regExp15.test("4")); // false


    console.log("----------\\b-----------")
    /**
    * \b -> un texto con espacios o símbolos de puntuación o al principìo o al final
    * \B -> lo contrario
    */

    let regExp16 = /fo\b/;
    console.log(regExp16.test("Esto es un párrafo de texto.")) // true
    console.log(regExp16.test("Esto es un párrafo")) // true
    console.log(regExp16.test("Esto es una forma")) // false
    
    let regExp17 = /\bfo/;
    console.log(regExp17.test("Esto es un párrafo de texto.")) // false
    console.log(regExp17.test("Esto es un párrafo")) // false
    console.log(regExp17.test("Esto es una forma")) // true
    
    let regExp18 = /\Bfo/;  
    console.log(regExp18.test("Esto es un párrafo de texto.")) // false
    console.log(regExp18.test("Esto es un párrafo")) // false
    console.log(regExp18.test("Esto es una forma")) // true


    /** 
    * i -> ignora mayus y minus
    * m -> busca en todas las líneas(multiline)
    * y -> (sticky)
    */

    console.log("-------------*-------------");
    // * -> un carácter que apareece 0 o más veces
    let regExp19 = /a*/;
    console.log(regExp19.test("")); // true
    

    console.log("-------------+-------------");
    // + -> el caracter anterior aparece 1 o más veces
    let regExp20 = /a+/;
    console.log(regExp20.test("")); // false
    console.log(regExp20.test("a"));
    console.log(regExp20.test("bb")); // false
    console.log(regExp20.test("bba")); // false


    console.log("-------------?-------------");
    // ? -> el carácter anterior puede aparecer o no
    let regExp21 = /disparos?/;
    console.log(regExp21.test("Escuche disparos en la habitación."));
    console.log(regExp21.test("Efectuó un disparo al sujeto."));
    console.log(regExp21.test("La pistola era de agua."));

    let regExp22 = /(disparos)/;
    console.log(regExp22.test("La pistola de disparos era de agua.")); // true


    
    console.log("-------------{n,m}-------------");
    // {n} -> el carátycer anterior aparece n veces
    // {n,} -> el carácter anterior aparece n o más veces
    // {n,m} -> el caracter anterior aparece entre n y m veces

    let regExp23 = /x{3}/;
    console.log(regExp23.test("holaxx x")); // false
    let regExp24 = /x{3,}/;
    console.log(regExp24.test("holaxxxxxxxxxxx xx")); // true
    let regExp25 = /^x{3,5}$/;
    console.log(regExp25.test("xxxx")); 
 
    let regExp26 = /^[0-9]{2}$/
    console.log(regExp26.test(22));

    let regExp27 = /^[0-9]{2,}$/
    console.log(regExp27.test(2552));

    let regExp28 = /^[0-9]{2,4}$/
    console.log(regExp28.test(25552)); // false
    console.log(regExp28.test(552)); // true




}

