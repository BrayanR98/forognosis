

// var url="."
var indice =0

// const templateCard = document.getElementById('template-card').content
// const cards = document.getElementById('cards')

// document.addEventListener('DOMContentLoaded',function() {
  
    // var indice = 0
    
       
        function aumentarindice(){
            fetch("json/libros.json")
            .then(  data =>data.json()) 
            .then(data=>{
               
                //console.log(data)
            
                document.getElementById('imglib').src= data.libros[indice].imagen
                document.getElementById('imglib').srcset= data.libros[indice].srcset
                document.getElementById('pdfi').href= data.libros[indice].pdf
                document.getElementById('nomlib').textContent= data.libros[indice].nombre
            
             if (indice <data.libros.length) {
                 indice++
                
             } 
             else { indice = 0
                
             }
                    
                     console.log(indice)
                 
                             
       
            })
             
           }  
           setInterval(aumentarindice,2000)
        //  pintarcards()
            

