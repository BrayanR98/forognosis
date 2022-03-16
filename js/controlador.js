// comentario de linea 
//variables
let nombreUsuario = "Brayan"
let estatutraUsuario = 1.62
let edadUsuario = 32
let telefonoUsuario = '3225962363'
let esPaisa = true  // (banderas)
const APELLIDOS_USUARIO="Gallego Mesa"

//UNIR LOS MENSAJES CON VARIABLES (CONCATENAR)
// console.log('Buenas tardes '+ nombreUsuario +' su edad es: '+edadUsuario)

// console.log(`Buenas tardes  ${nombreUsuario}  su edad es: ${edadUsuario} con templates`)



// if (true) {
//     let nombreUsuario = "james"  
//    //console.log(nombreUsuario);
// }
//UTILIZANDO EL DOM 
let nav = document.getElementById("nav")

let etiquetaTitulo= document.getElementById("titulo")


let etiquetaFotoCambio = document.getElementById("fotocambio")
// etiquetaFotoCambio.src="img/FOTO3.jpg"

// importando modulos 
import { pintarTienda } from "./llenadoTienda.js";
import{ampliarInformacion} from "./ampliarinfo.js"
// Llamando modulo de pintar 
pintarTienda()
//Llamando al modulo ampliar info 

let contendorTienda = document.getElementById("cards")

contendorTienda.addEventListener("click",function(event){
    if(event.target.classList.contains("btn")){
        // console.log("Estoy haciendo clic en el boton")
        let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
        ampliarInformacion(event)
        modalinfoproducto.show()
    }
   

})
