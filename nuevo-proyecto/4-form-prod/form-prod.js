let ids = []
let valorTotal = 0

console.log("Nombre: " + localStorage.getItem("nombre"))
console.log("Contraseña: " + localStorage.getItem("contraseña"))

let nombreUsuario = localStorage.getItem("nombre")
let contraseñaUsuario = localStorage.getItem("contraseña")

let aviso = document.getElementById("aviso")

if(nombreUsuario == null || contraseñaUsuario == null){
    
    aviso.style.visibility = "visible"

}else {

    aviso.style.visibility = "hidden"
}

function mostrarFactura (){
    let factura = document.querySelector(".facturaActual")
    let contenedorFactura = document.querySelector("tbody")
    let botonCompra = document.getElementById("botonConfirmarCompra")

    if(contenedorFactura.style.visibility == "visible"){
        contenedorFactura.style.visibility = "hidden"
        botonCompra.style.visibility = "hidden"
        factura.style.visibility = "hidden"
    }else {
        contenedorFactura.style.visibility = "visible"
        botonCompra.style.visibility = "visible"
        factura.style.visibility = "visible"
    }
}

function generarFactura(){


   
    console.log("entre a generar factura")

    let contenedor = document.querySelector("tbody")
    let hijos = contenedor.children

    

    
    
    console.log("Usuario: " + localStorage.getItem("nombre"))
    console.log("Contraseña: " + localStorage.getItem("contraseña"))

    for(let i = 1 ; i <= hijos.length ; i++){

        let fila = hijos[i].children

        let nombre = fila[0].textContent
        let cantidad = fila[1].textContent
        let precio = fila[2].textContent

        console.log("Nombre: " + nombre)
        console.log("Cantidad: "+ cantidad)
        console.log("Precio: " + precio)

        

        
        fetch("../usuarios.json")

            .then(data => data.json())
            .then(json => {

              
                json.usuarios.forEach(usuario => {
                    if(usuario.nombre === nombreUsuario){

                        let tamaño = json.facturas.length 

                        fetch(`http://localhost:3000/facturas/`, {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            },
                            body: JSON.stringify({
                                
                                id : tamaño,
                                comprador: usuario.nombre,
                                idComprador: usuario.id,
                                nombreProducto: nombre,
                                cantidadProducto: cantidad,
                                pricioTotal: precio
                            })
                        })
                            .then(response => response.json())
                            .then(json => console.log(json))
                            .catch(error => console.error("Error !!!" + error));
                        
                    }

                })
            })
        
    }



    

   
}

function crearFactura(tarjeta, cantidad , accion) {

    console.log(accion)
    let contenedor = document.querySelector(".facturaActual");
    let tabla = document.querySelector("table");

    let hijos = tarjeta.children;
    let padre = hijos[0];
    let parrafo = padre.children;
    let nombreProducto = parrafo[0].textContent;
    let tbody = document.querySelector("tbody")

    let casillaValorTotal = document.getElementById("valorTotalCasilla")

    fetch("productos.json")
        .then(data => data.json())
        .then(json => {

            if(accion === "sumar"){
                //tbody.style.visibility = "visible"
                json.productos.forEach(producto => {

                if(producto.nombre == nombreProducto){

                    let id = producto.id 

                    if(ids.includes(id)==false){

                        let codigo = producto.id;
                        let nombre = producto.nombre;
                        let precio = producto.precio;
                        

                        let fila = tabla.insertRow();
                        
                        let celdaNombre = fila.insertCell(0);
                        let celdaCantidad = fila.insertCell(1);
                        let celdaPrecio = fila.insertCell(2);
    
                      
                        celdaNombre.textContent = nombre;
                        celdaPrecio.textContent = precio * cantidad;
                        celdaCantidad.textContent = cantidad;
                        
                        valorTotal += precio
                        casillaValorTotal.textContent = valorTotal

                        fila.setAttribute("id" , codigo)
                        contenedor.prepend(tabla);
                        console.log("No esta en el arreglo")
                        ids.push(id)

                    }else{
                        let precio = producto.precio;
                        let fila = document.getElementById(id)
                        let casillaPrecio = fila.children[2]
                        let cant = fila.children[1]
                        
                        let nuevoPrecio = precio * cantidad;
                        
                        casillaPrecio.textContent = nuevoPrecio;

                        cant.textContent =  cantidad

                        valorTotal += precio
                        casillaValorTotal.textContent = valorTotal
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
                    let casillaPrecio = fila.children[2]
                    let cant = fila.children[1]
                    
                    let nuevoPrecio = parseFloat(precio) * (cantidad);
                    
                    casillaPrecio.textContent = nuevoPrecio;

                    cant.textContent = cantidad

                    valorTotal -= precio
                    casillaValorTotal.textContent = valorTotal

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
