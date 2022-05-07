
var indice = 0


    export function pintarTienda (){       
          
             //SE USA TRAVERSING PARA CREAR ETIQUETAS HTML DESDE JS 
             // creo la referencia al componente padre
             // creo una variable para almacenar la base
             //sobre las cual voy a pintar 
             fetch("json/libros.json")
            .then(  producto =>producto.json()) 
            .then(producto=>{

             let cards = document.getElementById("cards")
            //  console.log(cards)
             
             producto.libros.forEach(function (producto) {
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
                precio.textContent=producto.precio

                let descripcard = document.createElement("p")
                descripcard.classList.add("card-text","alturadescrip")
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
            
            )     
         }
               
            
       
               

    
     
   //recorriendo un arreglo con js 
   //buscar/seleccionar/esculcar

   // libros.forEach(function(producto){
   //     console.log('nacional es el mejor')
   // }
       
   // );

   //escuchando clic en el boton 

   // let boton = document.getElementById("botonsabado")
   
   //detectando el primer evento 

   // boton.addEventListener("click",cambiarFoto)

   //creando una function

   // function cambiarFoto(){
   //     console.log("oe hiciste clic")
   // 