
/* function informacionUsuario() {

    let usuario = document.getElementById("nombreMD").textContent
    let contraseña = document.getElementById("contraseñaMD").textContent

    console.log("usuario: " + usuario)
    console.log("contraseña: " + contraseña)

    if (usuario != "" && contraseña != "") {
        
        let tarjeta = document.getElementById("tarjetaIniciarSesion")
        tarjeta.style.visibility = "hidden"

        let contenedor = document.getElementById("seccionMostrarDatos")
        contenedor.style.visibility = "visible"
        

    }

    } */



/* Seccion tarjeta incio sesion */

function iniciarSesion() {
    
    let tarjetaInicioSesion = document.getElementById("tarjetaIniciarSesion")

    console.log(localStorage.getItem("nombreIS"))
    console.log(localStorage.getItem("contraseñaIS"))

    if(localStorage.getItem("nombreIS") != null && localStorage.getItem("contraseñaIS") != null ){
        console.log("Existen los datos")
    }else{
        tarjetaInicioSesion.style.visibility = "visible"
    }


    
    
}


function cerrarInicioSesion() {
    let tarjetaInicioSesion = document.getElementById("tarjetaIniciarSesion")
    tarjetaInicioSesion.style.visibility = "hidden"


    document.getElementById("usuarioInicioSesion").value = ""
    document.getElementById("contraseñaInicioSesion").value = ""



} 


/* Seccion mostrarDatosIS */

function mostrarDatosIS() {

    /* tarjeta de mostrar los datos del usuario */
    let tarjetaMostrarDatos = document.getElementById("seccionMostrarDatos")


    /* obtengo los datos de inicioDeSesion */
    let usuarioIS = document.getElementById("usuarioInicioSesion").value
    let contraseñaIS = document.getElementById("contraseñaInicioSesion").value


    /* obtengo las span de la tarjeta mostrarDatos */
    let spanUsuario = document.getElementById("spanUsuario")
    let spanContraseña = document.getElementById("spanContraseña")

    

    console.log("usuarioIS: " + usuarioIS)
    console.log("contraseñaIS: " + contraseñaIS)
    


    if(usuarioIS != "" && contraseñaIS != ""){

        localStorage.setItem("nombre" , usuarioIS)
        localStorage.setItem("contraseña" , contraseñaIS)

        tarjetaMostrarDatos.style.visibility = "visible"
        spanUsuario.textContent = localStorage.getItem("nombre")
        spanContraseña.textContent = localStorage.getItem("contraseña")

        
        console.log("Datos de inicio de sesion Guardados")
         
        console.log(localStorage.getItem("nombre"))
        console.log(localStorage.getItem("contraseña"))

        

    }else{

        tarjetaMostrarDatos.style.visibility = "visible"
        spanUsuario.textContent = localStorage.getItem("nombre")
        spanContraseña.textContent = localStorage.getItem("contraseña")

        console.log("datos de registro guardados")

        console.log(localStorage.getItem("nombre"))
        console.log(localStorage.getItem("contraseña"))
    }

     

   /*let usuario = document.getElementById("usuarioIS").value;
    let contraseña = document.getElementById("contraseñaIS").value;

    console.log(usuario);
    console.log(contraseña);

    let tarjetaIniciarSesion = document.getElementById("tarjetaIniciarSesion");
    let nombre = document.getElementById("nombreMD");
    let acceso = document.getElementById("contraseñaMD");
    let elemento = document.getElementById("seccionMostrarDatos");

    tarjetaIniciarSesion.style.visibility = "hidden";

    if (usuario !== "" && contraseña !== "") {
        nombre.innerHTML = "Nombre: " + usuario;
        acceso.innerHTML = "Contraseña: " + contraseña;

        localStorage.setItem("nombre", usuario);
        localStorage.setItem("contraseña", contraseña);

        if (elemento.style.visibility === "visible") {
            elemento.style.visibility = "hidden";
        } else {
            elemento.style.visibility = "visible";
        }
    } else {
        alert("Por favor, ingrese tanto usuario como contraseña.");
    } */

    /* else if (dato1 != "" && dato2 != ""){
        let nombre = document.getElementById("nombre")
        let acceso = document.getElementById("acceso")

        nombre.innerHTML = dato1
        acceso.innerHTML = dato2

        localStorage.setItem("nombre" , dato1)
        localStorage.setItem("contraseña" , dato2)

        let elemento = document.getElementById("seccionMostrarDatos")

        if (elemento.style.visibility == "visible") {
            elemento.style.visibility = "hidden"
        } else {
            elemento.style.visibility = "visible"
        }
    } */
}


function cerrarDatos (){
    let padre = document.getElementById("seccionMostrarDatos")
    padre.style.visibility = "hidden"
} 







/* seccion registro persona */

function registro(enlace) {

    /* esconder tarjeta inicioSesion */
    let padre = enlace.parentElement.parentElement
    padre.style.visibility = "hidden"


    let contenido = `

            <h2>Registro</h2>

            <input placeholder="Nombre" type="text" name="nombreRegistro" id="nombreRegistro" >
            <br><br>

        
            <input placeholder="Correo" type="text" name="correo" id="correo">
            <br><br>

            
            <input placeholder="Telefono" type="text" name="Telefono" id="Telefono">
            <br><br>

            <input placeholder="Contraseña" type="text" name="contraseñaRegistro" id="contraseñaRegistro">
            <br><br>

            <section id="botonesRegistro">

                <button onclick="salirRegistro(this)">Cerrar</button>
                <button id="botonRegistro" onclick="tomarDatosRegistro()" type="">Enviar</button>
               
                
            </section>`

    let contenedor = document.getElementById("seccionRegistro")
    contenedor.innerHTML = contenido

    contenedor.style.visibility = "visible"
}




function tomarDatosRegistro (){

    let tarjetaRegistro = document.getElementById("seccionRegistro")

    let nombre = document.getElementById("nombreRegistro").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("Telefono").value;
    let contraseña = document.getElementById("contraseñaRegistro").value;

    

    if (nombre === "") {
        document.getElementById("nombreRegistro").value = "Dato Invalido";
        return;
    } else if (correo === "") {
        document.getElementById("correo").value = "Dato Invalido";
        return;
    } else if (telefono === "") {
        document.getElementById("Telefono").value = "Dato Invalido";
        return;
    } else if (contraseña === "") {
        document.getElementById("contraseñaRegistro").value = "Dato Invalido";
        return;
    } else {

        

        console.log("datos tomados");
        console.log(nombre + correo + telefono + contraseña)

        /* Escondo la tarjeta de registro */
        tarjetaRegistro.style.visibility = "hidden"

        /* Envio los datos */
        localStorage.setItem("nombre" , nombre)
        localStorage.setItem("contraseña" , contraseña);
    }
    
    
} 


function salirRegistro() {

    let tarjetaRegistro = document.getElementById("seccionRegistro")
    tarjetaRegistro.style.visibility = "hidden"

} 



/* Seccion cerrar Sesion */

function cerrarSesion (){

    localStorage.clear()
    console.log(localStorage.getItem("nombreIS"))
    console.log(localStorage.getItem("contraseñaIS"))
    console.log("Datos removidos")

    document.getElementById("usuarioInicioSesion").value = ""
    document.getElementById("contraseñaInicioSesion").value = ""
} 