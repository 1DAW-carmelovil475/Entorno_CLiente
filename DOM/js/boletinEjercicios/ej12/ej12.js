"use strict"

{
    function esAnagrama(str1, str2) {
        
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        
        if (str1.length !== str2.length){
            return false;
        } 

        return str1.split('').sort().join('') ===  str2.split('').sort().join('');
    }

    const form = document.getElementById('anagramaForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const campo1 = document.getElementById('campo1').value;
        const campo2 = document.getElementById('campo2').value;

        if (esAnagrama(campo1, campo2)) {

            form.submit();
            mensaje.style.color = 'green';
            mensaje.textContent = "¡Son anagramas! Enviado correctamente";
            
        } else {
            
            mensaje.style.color = 'red';
            mensaje.textContent = "Los campos no son anagramas. No se puede enviar.";
        }
    });
}


