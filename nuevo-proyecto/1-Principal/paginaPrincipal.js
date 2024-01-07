
function iniciarSesion() {

    let elemento = document.getElementById("tarjetaIniciarSesion")


    if (elemento.style.visibility == "visible") {
        elemento.style.visibility = "hidden"
        elemento.style.height = "0px"
        elemento.style.width = "0px"
    }else{
        elemento.style.visibility = "visible"
        elemento.style.height = "200px"
        elemento.style.width = "300px"
        elemento.style.position = "fixed"
    } 
}



/* 
function iniciarSesion() {
    var tarjetaIniciarSesion = document.getElementById('tarjetaIniciarSesion');
    tarjetaIniciarSesion.style.display = 'block';
    tarjetaIniciarSesion.style.position = 'fixed';
    tarjetaIniciarSesion.style.top = '50%';
    tarjetaIniciarSesion.style.left = '50%';
    tarjetaIniciarSesion.style.transform = 'translate(-50%, -50%)';
} */
    
    
