// Abrir ventana de foto
document.getElementById("photo1").onclick = function openPhoto() {
    document.getElementById("clicked-image").style.visibility = "visible";
}

// Cerrar ventana de foto
document.getElementById("close-button").onclick = function closePhoto() {
    document.getElementById("clicked-image").style.visibility = "hidden";
}

//Enrollar/desenrollar información
let rolledUp = false 

document.getElementById("open-close-info").onclick = function rollUnroll() {
    rolledUp = !rolledUp
    console.log(rolledUp)
    if (rolledUp) {

        //ocultar información
        document.getElementById("personal-info-body").removeAttribute("class")
        document.getElementById("personal-info-body").className= "hidden"
        document.getElementById("aside").style.backgroundColor = "var(--tertiary-color)"

        //girar botón
        document.getElementById("open-close-info").removeAttribute("class")
        document.getElementById("open-close-info").className = "open-close-info button-down"

    } else {

        //mostrar información
        document.getElementById("personal-info-body").removeAttribute("class")
        document.getElementById("personal-info-body").className= "visible"
        document.getElementById("personal-info-body").className= "personal-info-body"
        document.getElementById("aside").removeAttribute("style")

        //girar-botón 
        document.getElementById("open-close-info").removeAttribute("class")
        document.getElementById("open-close-info").className = "open-close-info button-up"

    }
}
