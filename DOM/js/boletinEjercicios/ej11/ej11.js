"use strict"
{
    
    const listaServidores = ["terra.es","google.com","marca.es","yahoo.es"];

    let enviarEmail = document.getElementById("formEmail");

    enviarEmail.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje");

        let RegExp = new RegExp(/[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]{2,}/);

        if (!RegExp.test(email)) {
            mensaje.textContent = "Formato de email inválido. Debe ser texto@servidor.loquesea";
            mensaje.style.color = "red";
            return;
        }

        const servidor = email.split("@")[1];

        if (!listaServidores.includes(servidor)) {
            mensaje.textContent = "Servidor no admitido.";
            mensaje.style.color = "red";
            return;
        }
        
        mensaje.textContent = "Email válido y servidor admitido. Formulario enviado correctamente.";
        mensaje.style.color = "green";
    });

}