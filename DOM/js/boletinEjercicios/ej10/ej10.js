"use strict"
{
    const dniInput = document.getElementById("dni");
    const mensaje = document.getElementById("mensaje");
    const form = document.getElementById("formDNI");

    function validarDNI(dni) {
      const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

      if (dni.length !== 9){
        return false;
      }

      const numero = parseInt(dni.substring(0, 8));
      const letra = dni.charAt(8).toUpperCase();

      return letras[numero % 23] === letra;
    }

    dniInput.addEventListener("blur", () => {
      if (!validarDNI(dniInput.value)) {
        mensaje.textContent = "DNI incorrecto";
      } else {
        mensaje.textContent = "";
      }
    });

    form.addEventListener("submit", (event) => {
      if (!validarDNI(dniInput.value)) {
        event.preventDefault(); 
        mensaje.textContent = "Formato de DNI no válido";
      }
    });
}