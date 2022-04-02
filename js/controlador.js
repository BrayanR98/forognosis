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
import {pintarCarrito} from "./pintarCarrito.js"

let producto={}
// Llamando modulo de pintar 
pintarTienda()
//Llamando al modulo ampliar info 

let contendorTienda = document.getElementById("cards")

contendorTienda.addEventListener("click",function(event){
    if(event.target.classList.contains("btn")){
        // console.log("Estoy haciendo clic en el boton")
        let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
       producto=ampliarInformacion(event)
        modalinfoproducto.show()
    }
   

})
let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(evento){
     

     //1 capturar la cantidad del producto
     let cantidad = document.getElementById("cantidadProducto").value
      console.log(cantidad)

     //2 Agrego la cantidad al objeto producto
      producto.cantidad=cantidad

     //3 Agregar el producto al carrito

     carrito.push(producto)
     
     //4 Calculo la sumatoria de cantidades
     let suma =0
     
     carrito.forEach(function(producto){
          suma = suma+Number(producto.cantidad)
         pintarCarrito(suma) 
     })

    
     
     
    })

    let botonRemove = document.getElementById("limpiar")
    botonRemove.addEventListener("click",function(evento){
         carrito=[]
         let numeros = document.getElementById("capsula")
         numeros.textContent = 0
         numeros.classList.add("invisible")
    })

    //4.ver resumen de venta 
    let botoncarrito = document.getElementById("botoncarrito")
    botoncarrito.addEventListener("click",function (event) {

          let contenedor =document.getElementById("contenedorventa")

          let modalventa = new bootstrap.Modal(document.getElementById('resumenCarrito'))
          // borrar contenido html de una seccion 
          contenedor.innerHTML=""
          //recorrer el carrito para pintar los productos en la factura
          carrito.forEach(function(producto){
               
               // traversing
               let fila = document.createElement("div")
               fila.classList.add("row")

               let columna1 = document.createElement("div")
               columna1.classList.add("col-12","col-md-4")

               let columna2 = document.createElement("div")
               columna2.classList.add("col-12","col-md-8")

               let foto= document.createElement("img")
               foto.classList.add("img-fluid","w-100")
               foto.src=producto.foto
               
               //padres e hijos
               columna1.appendChild(foto)

               fila.appendChild(columna1)
               fila.appendChild(columna2)

               contenedor.appendChild(fila)

          })
          modalventa.show()
    })