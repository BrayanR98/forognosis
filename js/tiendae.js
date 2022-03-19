
function pintartiendae(){

let tiendae=[
    {
    imagen:"img/pentagramaazul.jpg",
    nombre:"Pentagrama",
    precio:"70000",
    descripcion:"sello de proteccion"
    },
    {
        imagen:"img/Tarot_egipcio.jpg",
        nombre:"Tarot egipcio",
        precio:"80000",
        descripcion:"juego de cartas de tarot egipcio"
    },    
    {
        imagen:"img/anillopebtagrama.jfif",
        nombre:"Anillo pentagrama 7 metales",
        precio:"90000",
        descripcion:"anillo de proteccion pentagrama esoterico"
    },
    {
        imagen:"img/cuencos.jfif",
        nombre:"cuencos tibetanos ",
        precio:"40000",
        descripcion:"cuencos tibetanos de musicoterapia"
    },
    {
        imagen:"img/incienso.jfif",
        nombre:"incienso",
        precio:"50000",
        descripcion:"incienso para aromatizar y llamar maestros ascendidos"
    },



]




   tiendae.forEach(function (producto) {
    // console.log(producto.nombre)
     // reseta para pintar con js 

     //1. comience a crear la estructura que necesite
     // creo la columna
     let columna = document.createElement("div")
     columna.classList.add("col")
     // creo la tarjeta 
     let tarjeta = document.createElement("div")
     tarjeta.classList.add("card")
     tarjeta.classList.add("h-100")

    let foto = document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src= producto.imagen
    let cuerpotarjeta = document.createElement("div")
    cuerpotarjeta.classList.add("card-body")
    
    let titulo = document.createElement("h5")
    titulo.classList.add("card-title")
    titulo.textContent= producto.nombre

    let precio = document.createElement("h4")
    precio.classList.add("card-text")
    precio.textContent= "$500000"

    let descripcard = document.createElement("p")
    descripcard.classList.add("card-text")
    descripcard.textContent = producto.descripcion
   // Creando un boton 
   let boton = document.createElement("button")
   boton.classList.add("btn","btn-warning","mx-4","mb-4")
   boton.textContent="Ver"

   // boton.setAttribute("data-bs-toggle","modal")
   // boton.setAttribute("data-bs-target","#exampleModal")

   boton.setAttribute("type","button")       
    //2. ordenar la estructura padres e hijo 
      
       tarjeta.appendChild(foto)
       columna.appendChild(tarjeta)
       cards.appendChild(columna)                
       tarjeta.appendChild(cuerpotarjeta)                
       cuerpotarjeta.appendChild(titulo)
       cuerpotarjeta.appendChild(precio)
       cuerpotarjeta.appendChild(descripcard)
       cuerpotarjeta.appendChild(boton)
 });
}

pintartiendae();

let contendorTienda = document.getElementById("cards")

contendorTienda.addEventListener("click",function(event){
    if(event.target.classList.contains("btn")){
        // console.log("Estoy haciendo clic en el boton")
        let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
        ampliarInformacion(event)
        modalinfoproducto.show()
    }
   

})

function ampliarInformacion (event){

    let producto = {}
    if(event.target.classList.contains("btn")){
        
        producto={

            foto:event.target.parentElement.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h5").textContent,
            precio:event.target.parentElement.querySelector("h4").textContent,
            descripcion:event.target.parentElement.querySelector("p").textContent
        }
        //asociando los valores respectivos al modal 
        let foto = document.getElementById("fotoinfo")
        foto.src=producto.foto
        let nombre = document.getElementById("nombreinfo")
        nombre.textContent=producto.nombre
        let precio = document.getElementById("precioinfo")
        precio.textContent=producto.precio
        let descripcion = document.getElementById("descripinfo")
        descripcion.textContent = producto.descripcion
    }
}