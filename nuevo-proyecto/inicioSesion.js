
function salirRegistro (boton){
    console.log(boton)
    let padre = boton.parentElement.parentElement
    padre.style.visibility = "hidden"

}

function registro (enlace){
    console.log(enlace)

    let padre = enlace.parentElement.parentElement
    padre.style.visibility = "hidden"

    let contenido = `

            <input placeholder="Nombre" type="text" name="nombre" id="nombre" >
            <br><br>

            
            <input placeholder="Apellidos" type="text" name="apellidos" id="apellidos">
            <br><br>

        
            <input placeholder="Correo" type="text" name="correo" id="correo">
            <br><br>

        
            <input placeholder="Dirección" type="text" name="direccion" id="direccion">
            <br><br>

            
            <input placeholder="Telefono" type="text" name="Telefono" id="Telefono">
            <br><br>

            <label for="comentarios">Escriba sus comentarios</label>
            <br>
            <textarea name="comentarios" id="" cols="20" rows="10"></textarea>

            <br><br>

            <section id="botonesRegistro">

                <button onclick="salirRegistro(this)">Cerrar</button>
                <button type="submit">Enviar</button>
               
                
            </section>`

    // <input onclick="salirRegistro(this)" value="Cerrar">
    // <input type="submit" value="Enviar">

    let contenedor = document.getElementById("seccionRegistro")
    contenedor.innerHTML =contenido

    contenedor.style.visibility = "visible"
}
 
function mostrarDatos (){

    let usuario = document.getElementById("usuario").value
    let contraseña = document.getElementById("contraseña").value

    

    if(usuario == "" || contraseña == ""){
        iniciarSesion()
    }else{
        let nombre = document.getElementById("nombre")
        let acceso = document.getElementById("acceso")

        nombre.innerHTML = usuario 
        acceso.innerHTML = contraseña

        let elemento = document.getElementById("seccionMostrarDatos")

        if (elemento.style.visibility == "visible") {
            elemento.style.visibility = "hidden"
        }else{
            elemento.style.visibility = "visible"
        }

    }


    


    

   



} 
 
function informacionUsuario(){


    let referencia = document.getElementsByTagName("header")[0]
    let hijos = referencia.children

    

    if(hijos.length < 4 ){
        iniciarSesion()
    }else{
        let usuario = document.getElementById("usuario").value
        let contraseña = document.getElementById("contraseña").value

        if(usuario == "" && contraseña == "" ){
            iniciarSesion()
        }else{
            mostrarDatos()
            let tarjeta = document.getElementById("tarjetaIniciarSesion")
            tarjeta.style.visibility = "hidden"
        }
        
    }
} 
  

function salir (boton){
   let tarjeta = boton.parentElement.parentElement
   tarjeta.style.visibility = "hidden"
   /* let parrafo = tarjeta.children[1]
   parrafo.style.visibility = "hidden" */

   
}

function iniciarSesion() {

    let contenido = ` 
        <h2 style="color: black;">Iniciar Sesion</h2>
        <section id="entradaDatos">
            <input id="usuario" type="text" placeholder="Nombre de usuario">
            <input id="contraseña" type="text" placeholder="Contraseña">
            <a id=enlaceRegistro onclick="registro(this)" >Registrarse</a>
        </section>
        
        <section id="botones">
            <button onclick ="salir(this)" id="botonSalir">Cerrar</button>
            <button onclick="mostrarDatos()" id="botonIngresar">Ingresar</button>
        </section> `
    
   
    let referencia = document.getElementsByTagName("header")[0]
    let elemento = document.createElement("div")
    let hijos = referencia.children

    if(hijos.length < 4 ){
      
        elemento.setAttribute("id" , "tarjetaIniciarSesion")
        elemento.innerHTML = contenido
        referencia.appendChild(elemento)

        
        
    }else{

        let usuario = document.getElementById("usuario").value
        let contraseña = document.getElementById("contraseña").value

        if(usuario == "" && contraseña == ""){
            let tarjeta = document.getElementById("tarjetaIniciarSesion")
            tarjeta.style.visibility = "visible"
            
            
           /*  let datosIncorrectos = tarjeta.children[1]
            datosIncorrectos.style.visibility = "visible" */

        }else{
            mostrarDatos()
        }

    }
}





    
    
