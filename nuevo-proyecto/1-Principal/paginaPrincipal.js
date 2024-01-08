let botonIngresar = document.getElementById("botonIngresar")
botonIngresar.addEventListener("click" , agregar)
 
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


    let usuario = document.getElementById("usuario").value
    let contraseña = document.getElementById("contraseña").value

    if(usuario == "" || contraseña == ""){
        iniciarSesion()
    }else{
        mostrarDatos(usuario , contraseña)
    }
} 

function iniciarSesion() {

    let elemento = document.getElementById("tarjetaIniciarSesion")
    let usuario = document.getElementById("usuario").value
    let contraseña = document.getElementById("contraseña").value

    if(usuario != "" && contraseña !="" || elemento.style.visibility == "visible" ){
        mostrarDatos()
        elemento.style.visibility = "hidden"

    } else if (elemento.style.visibility == "visible"){
        elemento.style.visibility = "hidden"
    }else{
        elemento.style.visibility = "visible"
    }
    
    

    
}




/* function agregar (){
    let elemento = document.getElementById("tarjetaIniciarSesion")
    let usuario = document.getElementById("usuario").value
    let contraseña = document.getElementById("contraseña").value
    alert("entre")

    mostrarDatos(usuario , contraseña)
} */



/* 
function iniciarSesion() {
    var tarjetaIniciarSesion = document.getElementById('tarjetaIniciarSesion');
    tarjetaIniciarSesion.style.display = 'block';
    tarjetaIniciarSesion.style.position = 'fixed';
    tarjetaIniciarSesion.style.top = '50%';
    tarjetaIniciarSesion.style.left = '50%';
    tarjetaIniciarSesion.style.transform = 'translate(-50%, -50%)';
} */
    
    
