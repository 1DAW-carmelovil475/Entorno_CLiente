"use strict";

{

    let formulario = document.createElement("form");

    let labelProvincia = document.createElement("label");
    labelProvincia.textContent = "Provincia:";

    let selectProvincia = document.createElement("select");

    let opcionProvincia0 = document.createElement("option");
    opcionProvincia0.value = "";
    opcionProvincia0.textContent = "No seleccionado";

    let opcionAlicante = document.createElement("option");
    opcionAlicante.value = "Alicante";
    opcionAlicante.textContent = "Alicante";

    let opcionCastellon = document.createElement("option");
    opcionCastellon.value = "Castellón";
    opcionCastellon.textContent = "Castellón";

    let opcionValencia = document.createElement("option");
    opcionValencia.value = "Valencia";
    opcionValencia.textContent = "Valencia";

    selectProvincia.appendChild(opcionProvincia0);
    selectProvincia.appendChild(opcionAlicante);
    selectProvincia.appendChild(opcionCastellon);
    selectProvincia.appendChild(opcionValencia);

    let labelCiudad = document.createElement("label");
    labelCiudad.textContent = "Ciudad:";

    let selectCiudad = document.createElement("select");

    let opcionCiudad0 = document.createElement("option");
    opcionCiudad0.value = "";
    opcionCiudad0.textContent = "No seleccionado";

    selectCiudad.appendChild(opcionCiudad0);

    let boton = document.createElement("button");
    boton.type = "submit";
    boton.textContent = "Enviar";

    formulario.appendChild(labelProvincia);
    formulario.appendChild(selectProvincia);
    formulario.appendChild(labelCiudad);
    formulario.appendChild(selectCiudad);
    formulario.appendChild(boton);

    document.body.appendChild(formulario);

    selectProvincia.addEventListener("change", function () {

        selectCiudad.innerHTML = "";

        let opcionVacia = document.createElement("option");
        opcionVacia.value = "";
        opcionVacia.textContent = "No seleccionado";
        selectCiudad.appendChild(opcionVacia);

        if (selectProvincia.value === "Alicante") {

            let c1 = document.createElement("option");
            c1.value = "Alicante Capital";
            c1.textContent = "Alicante Capital";

            let c2 = document.createElement("option");
            c2.value = "Elche";
            c2.textContent = "Elche";

            let c3 = document.createElement("option");
            c3.value = "Orihuela";
            c3.textContent = "Orihuela";

            selectCiudad.appendChild(c1);
            selectCiudad.appendChild(c2);
            selectCiudad.appendChild(c3);
        }

        if (selectProvincia.value === "Castellón") {

            let c1 = document.createElement("option");
            c1.value = "Castellón Capital";
            c1.textContent = "Castellón Capital";

            let c2 = document.createElement("option");
            c2.value = "Oropesa";
            c2.textContent = "Oropesa";

            let c3 = document.createElement("option");
            c3.value = "Vinaroz";
            c3.textContent = "Vinaroz";

            selectCiudad.appendChild(c1);
            selectCiudad.appendChild(c2);
            selectCiudad.appendChild(c3);
        }

        if (selectProvincia.value === "Valencia") {

            let c1 = document.createElement("option");
            c1.value = "Valencia Capital";
            c1.textContent = "Valencia Capital";

            let c2 = document.createElement("option");
            c2.value = "Torrent";
            c2.textContent = "Torrent";

            let c3 = document.createElement("option");
            c3.value = "Mislata";
            c3.textContent = "Mislata";

            selectCiudad.appendChild(c1);
            selectCiudad.appendChild(c2);
            selectCiudad.appendChild(c3);

            selectCiudad.value = "Mislata";
        }
    });

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        if (selectProvincia.value === "" || selectCiudad.value === "") {
            alert("Debes seleccionar una provincia y una ciudad");
        } else {
            alert(
                "Has seleccionado: " +
                selectProvincia.value +
                " - " +
                selectCiudad.value
            );
        }
    });
}
