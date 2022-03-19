let key="AIzaSyD9kzE5Sl9Q52cOnHpgflDMTPU1zdAz674"
let idPlaylist="PLxpLeawlqJW-ENyQ2ASpDR5lCjQ6pEoK9"
let resPorPagina=25;
var url="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId="+idPlaylist+"&key="+key+"&order=date&maxResults="+resPorPagina
var indice =0
// const templateCard = document.getElementById('template-card').content
// const cards = document.getElementById('cards')

document.addEventListener('DOMContentLoaded',function() {
  
    aumentarindice()
})
       
        function aumentarindice(){
            fetch(url)
            .then(producto =>producto.json())
            .then(producto=>{
                
                let cards = document.getElementById("cards")
                
                producto.items.forEach(function (producto) {
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
    
                    let foto = document.createElement("iframe")
                    foto.classList.add("card-img-top")
                    foto.src="https://www.youtube.com/embed/"+producto.snippet.resourceId.videoId
                    let cuerpotarjeta = document.createElement("div")
                    cuerpotarjeta.classList.add("card-body")
                    
                    let titulo = document.createElement("h5")
                    titulo.classList.add("card-title")
                    titulo.textContent= producto.snippet.title

    
                    let descripcard = document.createElement("p")
                    descripcard.classList.add("card-text","alturadescrip")
                    descripcard.textContent = producto.descripcion
                   // Creando un boton 
                //    let boton = document.createElement("button")
                //    boton.classList.add("btn","btn-warning","mx-4","mb-4")
                //    boton.textContent="Ver"
    
                   // boton.setAttribute("data-bs-toggle","modal")
                   // boton.setAttribute("data-bs-target","#exampleModal")
    
                //    boton.setAttribute("type","button")       
                    //2. ordenar la estructura padres e hijo 
                      
                       tarjeta.appendChild(foto)
                       columna.appendChild(tarjeta)
                       cards.appendChild(columna)                
                       tarjeta.appendChild(cuerpotarjeta)                
                       cuerpotarjeta.appendChild(titulo)
                       cuerpotarjeta.appendChild(descripcard)
                    //    cuerpotarjeta.appendChild(boton)
                 });
    
                })
        }


        
