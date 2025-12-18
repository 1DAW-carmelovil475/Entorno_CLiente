"use strict"
{

    let p = document.createElement("p");
    p.textContent = "Arrastra objetos a su contenedor correcto: papel, plástico, vidrio.";
    document.body.appendChild(p);

    let contenedor = document.createElement("div");
    contenedor.style.display = "flex";
    contenedor.style.flexDirection = "column";
    contenedor.style.gap = "40px";
    contenedor.style.alignItems = "center";
    document.body.appendChild(contenedor);

    let contPapeleras = document.createElement("div");
    contPapeleras.style.display = "flex";
    contPapeleras.style.gap = "30px";
    contPapeleras.style.justifyContent = "center";
    contenedor.appendChild(contPapeleras);

    let contObjetos = document.createElement("div");
    contObjetos.style.display = "flex";
    contObjetos.style.gap = "30px";
    contObjetos.style.justifyContent = "center";
    contenedor.appendChild(contObjetos);

    let papelera_azul = document.createElement("img");
    papelera_azul.src = "./img/contenedor_papel.jpg";
    papelera_azul.dataset.tipo = "papel";
    papelera_azul.width = 120;
    contPapeleras.appendChild(papelera_azul);

    let papelera_amarilla = document.createElement("img");
    papelera_amarilla.src = "./img/contenedor_plastico.jpg";
    papelera_amarilla.dataset.tipo = "plastico";
    papelera_amarilla.width = 120;
    contPapeleras.appendChild(papelera_amarilla);

    let papelera_verde = document.createElement("img");
    papelera_verde.src = "./img/contenedor_vidrio.jpg";
    papelera_verde.dataset.tipo = "vidrio";
    papelera_verde.width = 120;
    contPapeleras.appendChild(papelera_verde);

    let bola_papel = document.createElement("img");
    bola_papel.src = "./img/bola_papel.jpg";
    bola_papel.draggable = true;
    bola_papel.dataset.tipo = "papel";
    bola_papel.width = 80;
    contObjetos.appendChild(bola_papel);

    let botella_plastico = document.createElement("img");
    botella_plastico.src = "./img/botella_plastico.jpg";
    botella_plastico.draggable = true;
    botella_plastico.dataset.tipo = "plastico";
    botella_plastico.width = 80;
    contObjetos.appendChild(botella_plastico);

    let botella_vidrio = document.createElement("img");
    botella_vidrio.src = "./img/botella_vidrio.jpg";
    botella_vidrio.draggable = true;
    botella_vidrio.dataset.tipo = "vidrio";
    botella_vidrio.width = 80;
    contObjetos.appendChild(botella_vidrio);


    let objetos = [bola_papel, botella_plastico, botella_vidrio];
    let papeleras = [papelera_azul, papelera_amarilla, papelera_verde];


    for (let i = 0; i < objetos.length; i++) {
        objetos[i].addEventListener("dragstart", function(event){
            event.dataTransfer.setData("tipo", objetos[i].dataset.tipo);
        });
    }


    for (let i = 0; i < papeleras.length; i++) {
        papeleras[i].addEventListener("dragover", function(event){
            event.preventDefault(); 
        });

        papeleras[i].addEventListener("drop", function(event){
            event.preventDefault();
            let tipoObjeto = event.dataTransfer.getData("tipo");

            if (tipoObjeto === papeleras[i].dataset.tipo) {
                for (let j = 0; j < objetos.length; j++) {
                    if (objetos[j].dataset.tipo === tipoObjeto) {
                        papeleras[i].parentNode.appendChild(objetos[j]);
                        break;
                    }
                }
                papeleras[i].style.border = "3px solid green";
            } else {
                papeleras[i].style.border = "3px solid red";
            }
        });
    }
}
