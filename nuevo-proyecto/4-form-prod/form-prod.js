/* let botonLeche = document.getElementById("botonLeche")
botonLeche.addEventListener("click", agregarBtn1)

let botonActivia = document.getElementById("botonActivia")
botonActivia.addEventListener("click", agregarBtn2)

let botonYogurt = document.getElementById("botonYogurt")
botonYogurt.addEventListener("click", agregarBtn3)

let botonGelatina = document.getElementById("botonGelatina")
botonGelatina.addEventListener("click", agregarBtn4) */


let numero = 0

function restar(boton) {
    
    // console.log(boton);
    let padre = boton.parentElement;
    //console.log(padre);

    let hijos = padre.children;
    let parrafo = hijos[1];

    let numero = parseInt(parrafo.textContent, 10); // Asegúrate de convertir el texto a un número

    if (numero <= 0) {
        padre.remove(); // Utiliza el método remove para eliminar el elemento padre
    } else {
        parrafo.textContent = --numero;
    }
}


function sumar(boton) {
    
    //console.log(boton);
    let padre = boton.parentElement;
    //console.log(padre);

    let hijos = padre.children;
    let parrafo = hijos[1]
    parrafo.textContent = ++numero
}


function identificar(boton) {
    //console.log(boton);
    let padre = boton.parentElement.parentElement;
    //console.log(padre);
    let padreCercano = boton.parentElement
    //console.log(padreCercano)

    if(padreCercano.children.length  <= 1){

        let seccionBotones =
        `
            <button onclick="restar(this)" >Retirar</button>
            <p>0</p>
            <button onclick="sumar(this)" >Añadir</button>
        `;

    let div = document.createElement("div");
    
    div.setAttribute("class", "seccionBotones");
    div.innerHTML = seccionBotones; // Utiliza innerHTML para asignar el contenido HTML

    boton.parentElement.appendChild(div); // Usa parentElement para acceder al padre del botón

    // Alternativamente, si quieres agregar el div como el último hijo del padre, puedes usar:
    // padre.appendChild(div);

    }else{
        return
    }
    

   
}



