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

let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
let modalincompra = new bootstrap.Modal(document.getElementById('modalincompra'))
let producto={}
// Llamando modulo de pintar 
pintarTienda()
//Llamando al modulo ampliar info 

let contendorTienda = document.getElementById("cards")

contendorTienda.addEventListener("click",function(event){
    if(event.target.classList.contains("btn")){
        // console.log("Estoy haciendo clic en el boton")
  //      let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
       producto=ampliarInformacion(event)
       let cantidad = document.getElementById("cantidadProducto").value=1;
        modalinfoproducto.show()
    }
   

})
let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(evento){
     


     //1 capturar la cantidad del producto
     let cantidad = document.getElementById("cantidadProducto").value
     
     
     
      //2 Agrego la cantidad al objeto producto
      producto.cantidad=cantidad
     

     // //3 Agregar el producto al carrito

      carrito.push(producto)
     
     // //4 Calculo la sumatoria de cantidades
      let suma =0
     
      carrito.forEach(function(producto){
           suma = suma+Number(producto.cantidad)
          pintarCarrito(suma) 
      })
     //  let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
      modalinfoproducto.hide()
     
     
    })
    //traemos los elementos que muestran los totales
    let cajatotal = document.getElementById("totalt")
    let usd = document.getElementById('usd'); 
    //declramos el modal del carrito 
    let modalventa = new bootstrap.Modal(document.getElementById('resumenCarrito'))
    //elemento boton de compra 
    let btncompra= document.getElementById('btncompra');
    //botones para vaciar el carrito
    let botonRemove = document.getElementById("limpiar");
    //elemento boton conversor
    let btnusd= document.getElementById('btnusd');
    //contador capsula carrito
    let numeros = document.getElementById("capsula")
    botonRemove.addEventListener("click",function(evento){
         
         let numeros = document.getElementById("capsula")
         numeros.textContent = 0
         numeros.classList.add("invisible")
         modalinfoproducto.hide()
         modalventa.hide()
         carrito=[]
         total = 0
         btncompra.classList.add('invisible');
         botonRemove.classList.add('invisible');
         btnusd.classList.add('invisible');
         cajatotal.textContent="";
         usd.textContent="";

    })
    //calcular total 
    let tusd = 0;
    let total = 0;

    //4.ver resumen de venta 
    let botoncarrito = document.getElementById("botoncarrito")
    botoncarrito.addEventListener("click",function (event) {
     
     let contenedor =document.getElementById("contenedorventa")
     
     contenedor.innerHTML=""
          if (carrito.length>0) {
               btncompra.classList.remove('invisible');
               botonRemove.classList.remove('invisible');
               btnusd.classList.remove('invisible');

               // borrar contenido html de una seccion 
               
               
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
                    
                    let nomproducto = document.createElement("h2")
                    nomproducto.textContent=producto.nombre 
     
                    let descripcion = document.createElement("p")
                    descripcion.textContent=producto.descripcion 
     
                    let precio = document.createElement("h3")
                    precio.textContent= "$"+producto.precio 
     
                    let cantidad = document.createElement("h5")
                    cantidad.textContent=producto.cantidad
                    let cant= producto.cantidad
                    let pre= producto.precio
                    
                    let subtotal = document.createElement("h5")
                    subtotal.textContent ="$"+cant*pre  
                    
                    total= total + cant*pre 
     
                    
                 //   producto.total=total
                    // let cajatotal = document.getElementById("total")
                    // cajatotal.textContent=total
                   
                    // suma = suma+Number(producto.total)
                    
                    //padres e hijos
                    columna1.appendChild(foto)
                    columna2.appendChild(nomproducto)
                    columna2.appendChild(descripcion)
                    columna2.appendChild(precio)
                    columna2.appendChild(cantidad)
                    columna2.appendChild(subtotal)
     
                    fila.appendChild(columna1)
                    fila.appendChild(columna2)
                   
     
                    contenedor.appendChild(fila)
                    
     
               })
               
                  
                 cajatotal.textContent="Valor en COP $:"+ total
                // let vusd= calcularusd(total)
            //    calcularusd(total); 
          }else{
               
               let fila = document.createElement("div")
               fila.classList.add("row")

               let foto= document.createElement("img")
                    foto.classList.add("img-fluid","w-100","pimg")
                    foto.src="img/carritovacio.jfif";
                    
               if (cajatotal.textContent=="") {
                    fila.appendChild(foto)
                    contenedor.appendChild(fila)
                    cajatotal.textContent="El carrito esta vacio..."
               }
              
               
                 

          }         
          //console.log(carrito)15
          modalventa.show()
    })
    

btnusd.addEventListener('click',function calcularusd() {
     console.log(total)
     fetch('https://api.exchangerate-api.com/v4/latest/COP')
     .then(res => res.json())
     .then(data => {
           const taza = data.rates['USD'];
           tusd = (total * taza).toFixed(2);
          usd.textContent= 'Valor en USD $: '+tusd; 
          
     })
})
let avisov = document.getElementById('avisov');

btncompra.addEventListener('click',function () {
     let numeros = document.getElementById("capsula");
     numeros.textContent = 0;
     numeros.classList.add("invisible");
     avisov.textContent="¡EXITO EN LA VENTA!";
     modalventa.hide();
     carrito=[];
     total = 0;
     btncompra.classList.add('invisible');
     botonRemove.classList.add('invisible');
     btnusd.classList.add('invisible');
     cajatotal.textContent="";
     usd.textContent="";
     modalincompra.show()
     setTimeout(()=>{modalincompra.hide()}, 2000);
})
