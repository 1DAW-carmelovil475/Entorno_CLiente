"use strict"
{
    let persona = {
        nombre: "Pepe",
        edad: 30,
        cuidad: "Cádiz"
    };

    console.log(persona);
    console.log(persona.nombre);
    console.log(persona["nombre"]);
    persona.edad=33;
    console.log(persona.edad);

    let animal = {
        tipo: "gato",
        patas: 4,
        tieneBigotes: true, 
        dimensiones: {
            alto: 60, 
            ancho: 30, 
            largo: 80
        },
        dieta: ["pescado", "pienso", "sobras"]
    }

    let personaCompleta = {
        nombre: "Hugo",
        dni: "23423424N", 
        edad: 19,
        ciudad: "Sevilla", 
        pasatiempos: ["jugar", "futbol"],
        contacto: {
            email: "hugo@gmail.com",
            telefono: 60000000
        },
        saludar () {
            console.log("hola");
        },
        saludarCompleto () {
            console.log("Hola, me llamo " + this.nombre + " y tengo" + this.edad + " años.")
        },
        decirEmail () {
            return this.contacto.email;
        }
    }

    personaCompleta.saludarCompleto();
    let e = personaCompleta.decirEmail();
    console.log(e);

    //DESESTRUCTURACIÓN DE UN OBJETO LITERAL
    //const {nombre:n} = personaCompleta;
    //const {dni:id} = personaCompleta;

    const{nombre:n, dni:id, contacto: c} = personaCompleta;
    const {email, telefono: tfno, instagram:ig} = c;

    /**
     * UNIR OBJETOS LITERALES
     */

    let producto = {
        nombreProducto: "Lejía",
        precio: 2.95,
        marca: "don limpio"
    }

    let colores = {
        colorLiquido: "amarillo",
        colorRecipiente: "blanco",
        colorTapon: "azul"
    }

    let productoColor1 = {producto, colores};
    console.log(productoColor1);
    producto.nombreProducto = "suavizante";

}