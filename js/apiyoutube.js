let key="AIzaSyD9kzE5Sl9Q52cOnHpgflDMTPU1zdAz674"
let idPlaylist="PLxpLeawlqJW-ENyQ2ASpDR5lCjQ6pEoK9"
let resPorPagina=25;
var url="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId="+idPlaylist+"&key="+key+"&order=date&maxResults="+resPorPagina
var indice =0
// const templateCard = document.getElementById('template-card').content
// const cards = document.getElementById('cards')

document.addEventListener('DOMContentLoaded',function() {
  
    // var indice = 0
    
       
        function aumentarindice(){
            fetch(url)
            .then(data =>data.json())
            .then(data=>{
               
                
            
             document.getElementById('videoi').src="https://www.youtube.com/embed/"+data.items[indice].snippet.resourceId.videoId
             document.getElementById('titulov').textContent=data.items[indice].snippet.title
             document.getElementById('descripv').textContent=data.items[indice].snippet.description
            
            if (indice <data.items.length) {
                indice++
                
            } 
            else { indice = 0
                
            }
                    
                    console.log(indice)
                })
                   
            }
            setInterval(aumentarindice,5000)  
        //  function pintarcards() {
        //     fetch(url)
        //     .then(data =>data.json())
        //     .then(data=>{ 
        //     data.items.forEach(video => {
        //         templateCard.querySelector('iframe').src="https://www.youtube.com/embed/"+video.snippet.resourceId.videoId
        //         templateCard.querySelector('h5').textContent=video.snippet.title
        //         templateCard.querySelector('p').textContent =video.snippet.description
        //         const clone = templateCard.cloneNode(true)
        //         fragment.appendChild(clone)
        //     });
        //         cards.appendChild(fragment)
        //     })
             
        //  }  
        //  pintarcards()
            
})


