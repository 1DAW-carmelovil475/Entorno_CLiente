"use strict"
{
    let myBtn5 = document.querySelector("#idButton5");
    let myP1 = document.querySelector("#idP1");
    let myP2 = document.querySelector("#idP2");



    // myBtn5.addEventListener('click', function(evento) {
    //     alert('greet 5');
    //     console.log(evento);
    //     console.log(evento.type); // tipo de evento
    //     console.log(evento.target); // elemento que genera el evento
    // });

    myBtn5.addEventListener('mousemove', function(evento) {//click
        // console.log(evento.button); // botón del ratón que se ha pulsado (0: izquierdo, 1: central, 2: derecho)
        // console.log(evento.x + ', ' + evento.y); // coordenadas del ratón en el momento del evento  
        // console.log(evento.clientX + ', ' + evento.clientY); // coordenadas del ratón respecto a la ventana del navegador
        // console.log(evento.offsetX + ', ' + evento.offsetY); // coordenadas del ratón respecto al elemento que genera el evento
        myP1.innerHTML = "X= " + evento.x + "; Y= " + evento.y;
        myP1.innerHTML += "<br>X= " + evento.offsetX + "; Y= " + evento.offsetY;
    });

    // https://devdocs.io/dom/mouseevent

    document.addEventListener('mousemove', function(evento) {//click
        myP2.innerHTML = "X= " + evento.x + "; Y= " + evento.y;
        myP2.innerHTML += "<br>X= " + evento.screenX + "; Y= " + evento.screenY;
    });

    function shownmessage(evento) {
        console.log('The event type is ' + evento.type);
        if(evento.type === 'keyup') {//keydown
            console.log('Key code: ' + evento.code);
            console.log('Key pressed: ' + evento.key);
        }else if(evento.type === 'click') {
            console.log(evento.detail + ' click(s)'); // número de clicks   
            console.log("¿Estaba pulsada la letra CTRL? " + evento.ctrlKey);
            console.log("¿Estaba pulsada la tecla ALT? " + evento.altKey);
            console.log("¿Estaba pulsada la tecla SHIFT? " + evento.shiftKey);
            console.log(evento.target);
            console.log(evento.target.id);
            console.log(evento.target.textContent);
        }else if(evento.type === 'dblclick') {
            console.log('Double click');
        }else if(evento.type === 'contextmenu') {
            console.log('Right click');
            evento.preventDefault(); // para que no salga el menú contextual
        }
    }

    myBtn5.addEventListener('keyup', shownmessage); //keydown
    myBtn5.addEventListener('click', shownmessage);
    myBtn5.addEventListener('dblclick', shownmessage);
    myBtn5.addEventListener('contextmenu', shownmessage);


    let myBtn6 = document.createElement('button');
    myBtn6.textContent = "Greet 6";
    // myBtn6.id = "idButton6";
    document.body.appendChild(myBtn6);
    myBtn6.addEventListener('dblclick', function (evento) {
        console.clear();
        this.textContent = "Button 6";
        // evento.target.textContent = "Button 6";
        // this.setAttribute('id', 'idButton6');
        evento.target.setAttribute('id', 'idButton6');
        console.log(this);
    });

    /**
     * elemento.addEventListener('eventoQueCapturo', funciónManejadora, {capture: true, once: true, passive: true});
     * 
     */

    let myBtn7 = document.createElement('button');
    myBtn7.textContent = "Greet 7";
    document.body.appendChild(myBtn7);
    myBtn7.addEventListener('click', function eventoClick(evento) {
        alert("Click en btn7");
    }, { once: true });

    let myBtn8 = document.createElement('button');
    myBtn8.textContent = "Greet 8";
    document.body.appendChild(myBtn8);

    myBtn8.addEventListener('click', function eventoClick(evento) {
        console.log("Click 1 en btn8");
    }, { once: true });
    myBtn8.addEventListener('click', function eventoClick(evento) {
        console.log("Click 2 en btn8");
    }, { once: true });
    myBtn8.addEventListener('click', function eventoClick(evento) {
        console.log("Click 3 en btn8");
    }, { capture: true });


    function f (evento) {
        // evento.preventDefault();
        console.log("Scroll");
    }

    window.addEventListener('scroll', f, { passive: true });

}