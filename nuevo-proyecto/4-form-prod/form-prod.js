let ids = []


function crearFactura(tarjeta, cantidad , accion) {
    console.log(accion)
    let contenedor = document.querySelector(".facturaActual");
    let tabla = document.querySelector("table");

    let hijos = tarjeta.children;
    let padre = hijos[0];
    let parrafo = padre.children;
    let nombreProducto = parrafo[0].textContent;
    let tbody = document.querySelector("tbody")

    fetch("productos.json")
        .then(data => data.json())
        .then(json => {

            if(accion === "sumar"){
                tbody.style.visibility = "visible"
                json.productos.forEach(producto => {

                if(producto.nombre == nombreProducto){

                    let id = producto.id 

                    if(ids.includes(id)==false){

                        let codigo = producto.id;
                        let nombre = producto.nombre;
                        let precio = producto.precio;
                        

                        let fila = tabla.insertRow();
                        let celdaCodigo = fila.insertCell(0);
                        let celdaNombre = fila.insertCell(1);
                        let celdaCantidad = fila.insertCell(2);
                        let celdaPrecio = fila.insertCell(3);
    
                        celdaCodigo.textContent = codigo;
                        celdaNombre.textContent = nombre;
                        celdaPrecio.textContent = precio * cantidad;
                        celdaCantidad.textContent = cantidad;
                        
                        
                        fila.setAttribute("id" , codigo)
                        contenedor.appendChild(tabla);
                        console.log("No esta en el arreglo")
                        ids.push(id)
                    }else{
                        let precio = producto.precio;
                        let fila = document.getElementById(id)
                        let casillaPrecio = fila.children[3]
                        let cant = fila.children[2]
                        
                        let nuevoPrecio = parseFloat(precio) * cantidad;
                        
                        casillaPrecio.textContent = nuevoPrecio;

                        cant.textContent = cantidad
                        
                        
                    }

                }
            
                
            })

        }else if (accion=="restar"){
            json.productos.forEach(producto => {
                let tbody = document.querySelector("tbody")
                if(producto.nombre == nombreProducto){

                    let id = producto.id 

                    
                    let precio = producto.precio;
                    let fila = document.getElementById(id)
                    let casillaPrecio = fila.children[3]
                    let cant = fila.children[2]
                    
                    let nuevoPrecio = parseFloat(precio) * (cantidad);
                    
                    casillaPrecio.textContent = nuevoPrecio;

                    cant.textContent = cantidad

                    if(cant.textContent == "0"){
                        fila.remove()
                        ids = ids.filter(item => item !== id);
                    }
                    
                        
                    

                }
            
                
            })
            

        }
            
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
   
    let tarjeta = boton.parentElement.parentElement.parentElement;
    
    let seccionBotonOrdenar = boton.parentElement.parentElement;
    let hijosSeccionBotonOrdenar = seccionBotonOrdenar.children
    let botonOrdenar = hijosSeccionBotonOrdenar[0]

    let padre = boton.parentElement;
    let hijos = padre.children;
    let parrafo = hijos[1];

    let numero = parseInt(parrafo.textContent, 10); // Asegúrase de convertir el texto a un número
    let accion = "restar"

    if (numero == 0) {
        padre.remove(); 
        numero = 0
        botonOrdenar.style.display = "block"

    } else {
        parrafo.textContent = --numero;
        crearFactura(tarjeta , numero , accion)
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
    let accion = "sumar"

    crearFactura(tarjeta , cantidad , accion)
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

