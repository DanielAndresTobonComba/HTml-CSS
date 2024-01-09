function cerrarSesion(){
    
}
 
function mostrarDatos (){

    let usuario = document.getElementById("usuario").value
    let contraseña = document.getElementById("contraseña").value

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
        }
        
    }
} 
  

function salir (boton){
   let tarjeta = boton.parentElement.parentElement
   tarjeta.style.visibility = "hidden"
}

function iniciarSesion() {

    let contenido = ` 
        <h2 style="color: black;">Iniciar Sesion</h2>
        <section id="entradaDatos">
            <input id="usuario" type="text" placeholder="Nombre de usuario">
            <input id="contraseña" type="text" placeholder="Contraseña"> 
        </section>
        
        <section id="botones">
            <button onclick ="salir(this)" id="botonSalir">Cerrar</button>
            <button onclick="mostrarDatos() , salir(this)" id="botonIngresar">Ingresar</button>
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
        }else{
            mostrarDatos()
        }

    }
}





    
    
