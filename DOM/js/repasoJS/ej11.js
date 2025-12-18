"use strict"

{

    let p = document.createElement("p");
    p.textContent = "Realiza un formulario que pida una dirección de email y la valide antes de enviarla: a) Debe validar si el email sigue el formato texto@servidor.loquesea b) Además de validar el formato anterior, debe comprobar que servidor.loquesea este como servidor admitido en un array de servidores llamado “listaServidores”. Dicho array debe ser definido a mano en el código.";
    document.body.appendChild(p);

    let listaServidores=["terra.es","google.com","marca.es","yahoo.es"];

    let form = document.createElement("form");
    document.body.appendChild(form);
    form.method = "post";
    form.action = "https://formsubmit.co/cvilpiz939@g.educaand.es";

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Introduce tu email";
    form.appendChild(input);

    let submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Enviar";
    form.appendChild(submit);

    let mensaje = document.createElement("p");
    document.body.appendChild(mensaje);
    

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let regExp = new RegExp(/[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[A-Za-z]{2,}/);

        let email = input.value;

        if(!regExp.test(input.value)){
            mensaje.textContent = "Formato de email inválido";
            mensaje.style.color = "red";
            return false;
        }

        let servidor = email.split('@')[1];

        if(!listaServidores.includes(servidor)){
            mensaje.textContent = `Servidor no admitido, solo se admite ${listaServidores}`;
            mensaje.style.color = "red";
            return false;
        }

        mensaje.textContent = "Email válido y servidor admitido. Formulario enviado correctamente.";
        mensaje.style.color = "green";
        form.submit();

    });

}