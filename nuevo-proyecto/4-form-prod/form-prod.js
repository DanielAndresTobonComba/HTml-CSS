
function crearFactura (tarjeta , cantidad){
    let contenedor = document.querySelector(".facturaActual")
    //console.log(tarjeta)
    console.log(cantidad)


    
    let hijos = tarjeta.children
    let padre = hijos[0]
    let parrafo = padre.children
    let nombreProducto = parrafo[0].textContent

    console.log(nombreProducto)
    fetch("productos.json")
    .then(data => data.json())
    .then(json => {
        
        json.productos.forEach(producto=>{
            if(producto.nombre == nombreProducto){
                console.log(producto)
            }
        })

    })

}


function filtrar(contenido){
    console.log("entre a filtrar con : " + contenido )
    let contenedor = document.querySelector(".productos")
    contenedor.innerHTML = `
            `

    fetch("productos.json")
        .then(data => data.json())
        .then(json => {
            json.productos.forEach(producto =>{

                if(producto.nombre.includes(contenido)){
                    
                    let elemento = `

                    <div class="tarjeta" >

                        <div class="textoTarjeta">
                            
                            <p>${producto.nombre}</p>
                            
                        </div>

                    
                        <img src="${producto.imagen}" alt="">
                        

                        

                        <div class="detalleProducto">
                            
                            <button class="botonDetalles" onclick="mostrar(this)" >Detalles </button>

                            <section
                            
                                class="detalles" >
                                <p>Tamaño: ${producto.caracteristicas}</p>

                                <p>Precio: $ ${producto.precio}</p>

                                <p></p>

                            </section>
                        
                            
                        </div>
                        

                        <div class="seccionBotonOrdenar">

                            <button id="botonOrdenar" onclick="identificar(this)" >Ordenar</button>

            
                        </div>

                    </div>
                    `
                    contenedor.innerHTML += elemento
                    
                }else if (contenedor.innerHTML === ""){
                   contenedor.innerHTML = ` 
                   <h1>No hay productos con su preferencias de filtro</h1>`
                }
            })
        })

}

function datos(){
    let entrada = document.getElementById("busqueda")
    let datos = entrada.value
    if(datos != ""){
        filtrar(datos)
    }else{
        insertarProductos()
    }


    
}



function insertarProductos() {

    let contenedor = document.querySelector(".productos")
    contenedor.innerHTML = `` 
    fetch("productos.json")
        .then(data => data.json())
        .then(json => {

            json.productos.forEach(producto => {
                //console.log(producto)

                let elemento = `

                <div class="tarjeta" >

                    <div class="textoTarjeta">
                        
                        <p>${producto.nombre}</p>
                        
                    </div>

                   
                    <img src="${producto.imagen}" alt="">
                    

                    

                    <div class="detalleProducto">
                        
                        <button class="botonDetalles" onclick="mostrar(this)" >Detalles </button>

                        <section
                         
                            class="detalles" >
                            <p>Tamaño: ${producto.caracteristicas}</p>

                            <p>Precio: $ ${producto.precio}</p>

                            <p></p>

                        </section>
                       
                        
                    </div>
                    

                    <div class="seccionBotonOrdenar">

                        <button id="botonOrdenar" onclick="identificar(this)" >Ordenar</button>

        
                    </div>

                </div>
            `
            contenedor.innerHTML += elemento

            })
        })





}



function restar(boton) {
   

    
    let seccionBotonOrdenar = boton.parentElement.parentElement;
    let hijosSeccionBotonOrdenar = seccionBotonOrdenar.children
    let botonOrdenar = hijosSeccionBotonOrdenar[0]

    let padre = boton.parentElement;
    let hijos = padre.children;
    let parrafo = hijos[1];

    let numero = parseInt(parrafo.textContent, 10); // Asegúrase de convertir el texto a un número

    if (numero <= 0) {
        padre.remove(); 
        numero = 0
        botonOrdenar.style.display = "block"

    } else {
        parrafo.textContent = --numero;
    }
}


function sumar(boton) {
    let tarjeta = boton.parentElement.parentElement.parentElement;
    //console.log(tarjeta)
    //console.log(boton);
    let padre = boton.parentElement;
    //console.log(padre);

    let hijos = padre.children;
    let parrafo = hijos[1]
    let cantidad = parrafo.textContent = ++numero

    crearFactura(tarjeta , cantidad )
}


function identificar(boton) {
    //console.log(boton);
    let padre = boton.parentElement.parentElement;

    //console.log(padre);
    let padreCercano = boton.parentElement

    //console.log(padreCercano)

    if (padreCercano.children.length <= 1) {
        numero = 0
        boton.style.display = "none"
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



    } else {
        boton.style.display = "flex"
    }



}

insertarProductos()

