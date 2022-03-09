// crear un arreglo de objetos 
let productos=[
    {
        nombre:"pentagrama",
        precio:450000,
        foto:"",
        descripcion:""
    },
]

// document.addEventListener('DOMContentLoaded', () =>{
//     fetchData()
//     sliderlibros()

// })

var indice = 0

//      function sliderlibros(data) {
       
   
      
//    //     console.log(data.libros[indice].pdf)
        
//         data.libros.forEach(  function(libro){

//             document.getElementById('imglib').src= libro.imagen
//             document.getElementById('imglib').srcset= libro.srcset
//             document.getElementById('pdfi').href=libro.pdf
//             document.getElementById('nomlib').textContent=libro.nombre
//            //  console.log(libro)
            
//         } );
//        }

         

           // document.getElementById('pdfi').href= data.libros[indice].pdf
             
           //   document.getElementById('nomlib').textContent=data.libros[indice].nombre
            // document.getElementById('descriplib').textContent=data[indice].descrip
           
          
           let libros=[
                {  nombre:"Sicología Revolucionaria",
              pdf:"https://drive.google.com/file/d/1czovYzJht6F47T9C5Q1u7ULTYbdMSWNM/view?usp=sharing",
               imagen:"https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_65.jpg?time=1644679434",
               srcset: "https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_65.jpg , https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_65-183x300.jpg ",
               descripcion:"acjn ñacrenvnañlefrvnalfnvñasfl"
              },
                 {  nombre:"Para los Pocos",
                  pdf:"https://drive.google.com/file/d/1q5lALhqKQNuJAca-MhPgGegQ8jiVvul8/view?usp=sharing",
                  imagen:"https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_68.jpg?time=1644679434",
                  srcset: "https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_68.jpg , https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_68-183x300.jpg  ",
                  descripcion:"acjn ñacrenvnañlefrvnalfnvñasfl"
                 }, 
                 {  nombre:"Sicología Revolucionaria",
                 pdf:"https://drive.google.com/file/d/1czovYzJht6F47T9C5Q1u7ULTYbdMSWNM/view?usp=sharing",
                  imagen:"https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_65.jpg?time=1644679434",
                  srcset: "https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_65.jpg , https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_65-183x300.jpg ",
                  descripcion:"acjn ñacrenvnañlefrvnalfnvñasfl"
                 },
                    {  nombre:"Para los Pocos",
                     pdf:"https://drive.google.com/file/d/1q5lALhqKQNuJAca-MhPgGegQ8jiVvul8/view?usp=sharing",
                     imagen:"https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_68.jpg?time=1644679434",
                     srcset: "https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_68.jpg , https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_68-183x300.jpg  ",
                     descripcion:"acjn ñacrenvnañlefrvnalfnvñasfl"
                    },
                    {  nombre:"Sicología Revolucionaria",
                    pdf:"https://drive.google.com/file/d/1czovYzJht6F47T9C5Q1u7ULTYbdMSWNM/view?usp=sharing",
                     imagen:"https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_65.jpg?time=1644679434",
                     srcset: "https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_65.jpg , https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_65-183x300.jpg ",
                     descripcion:"acjn ñacrenvnañlefrvnalfnvñasfl"
                    },
                       {  nombre:"Para los Pocos",
                        pdf:"https://drive.google.com/file/d/1q5lALhqKQNuJAca-MhPgGegQ8jiVvul8/view?usp=sharing",
                        imagen:"https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_68.jpg?time=1644679434",
                        srcset: "https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_68.jpg , https://secureservercdn.net/198.71.233.231/h8n.b10.myftpupload.com/wp-content/uploads/2020/04/aprende_gnosis_68-183x300.jpg  ",
                        descripcion:"acjn ñacrenvnañlefrvnalfnvñasfl"
                       }

             ]
             // creo la referencia al componente padre
             // creo una variable para almacenar la base
             //sobre las cual voy a pintar 
             let cards = document.getElementById("cards")
             let titulo = document.getElementById("titulo")
             console.log(cards)
             
             libros.forEach(function (producto) {
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

                let precio = document.createElement("p")
                precio.classList.add("card-text")
                precio.textContent= "$500000"

                let descripcard = document.createElement("p")
                descripcard.classList.add("card-text")
                descripcard.textContent = producto.descripcion
                

                

                //2. ordenar la estructura padres e hijo 
                  
                   tarjeta.appendChild(foto)
                   columna.appendChild(tarjeta)
                   cards.appendChild(columna)                
                   tarjeta.appendChild(cuerpotarjeta)                
                   cuerpotarjeta.appendChild(titulo)
                   cuerpotarjeta.appendChild(precio)
                   cuerpotarjeta.appendChild(descripcard)
                //   let 2= document.createElement("div")
                //   tarjeta2.classlist.add("card")
                //   tarjeta2.classlist.add("h-100")
                //  // creo la imagen 
                //  let foto = document.createElement("img")
                //     foto.classList.add("card-img-top")
                //     foto.src= producto.imagen
                //  //2. ordenar la estructura padres e hijo 
                //  tarjeta.appenchild(foto)
                //  columna.appendChild(tarjeta)
                //  cards.appendChild(columna)

             



             });      
            
       
               
           
    
     
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
   // }