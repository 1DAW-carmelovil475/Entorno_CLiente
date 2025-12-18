"use strict"

{
    let p = document.createElement("p");
    p.textContent = " Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario debería validar si la letra es correcta al: a) Perder el foco del campo de texto donde se introduce el DNI. b) Enviar el formulario, cancelando el envío si el formato no es correcto. ";
    document.body.appendChild(p);

    let form = document.createElement("form");
    document.body.appendChild(form);
    form.method = "post";
    form.action = "https://formsubmit.co/cvilpiz939@g.educaand.es";

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Introduce tu DNI";
    form.appendChild(input);

    let submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Enviar";
    form.appendChild(submit);

    let mensaje =document.createElement("p");
    document.body.appendChild(mensaje);

    input.addEventListener("blur", function(){
        if(!validarDNI()){
            mensaje.textContent = "El DNI no es correcto";
            mensaje.style.color = "red";
        }
    });

    form.addEventListener("submit", function(event){
        if(!validarDNI()){
            event.preventDefault();
            mensaje.textContent = "El formato del DNI no es correcto";
            mensaje.style.color = "red";
        }
    });

    function validarDNI(){
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

        let dni = input.value;
        let numeros = dni.substring(0,8);
        let letra = dni.charAt(8).toUpperCase();

        if(dni.length != 9){
            return false;
        }

        return letras[numeros % 23] == letra;

    }



}