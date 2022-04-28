import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

const botonl = document.getElementById("botonl");
let bienvenidauser = document.getElementById("bienvenidauser");
const auth = getAuth();

botonl.addEventListener("click",function () {
    

    let lcorreo = document.getElementById("lcorreo").value;
    let lpasswd = document.getElementById("lpasswd").value;
    const formulariolog = document.getElementById("login-user");
    let modalinformativo = new bootstrap.Modal(document.getElementById("modalinformativo"))
   
    signInWithEmailAndPassword(auth, lcorreo, lpasswd)
    .then((userCredential) => {
        // Signed in
        
        let textoinformativo = document.getElementById("informaciongeneral")
        

        bienvenidauser.innerHTML =`
        
          <a class="nav-link dropdown-toggle ml-auto" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <h4 id="bienvenidauser" class="nav-link ml-auto ">
                Bienvenido : ${lcorreo}
            </h4>
          </a>          
          <ul class="dropdown-menu ml-auto" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item " id="cerrarsesion" href="#">CERRAR SESION</a></li>            
          </ul>`
        formulariolog.reset()
        textoinformativo.textContent= "Exito logueandote"
        modalinformativo.show()
        setTimeout(function () {
          modalinformativo.hide()
        },2000)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        let textoinformativo = document.getElementById("informaciongeneral")
        textoinformativo.textContent= "Falla:"+ errorMessage

    
      });

})

const cerrarsesion = document.getElementById("cerrarsesion");
cerrarsesion.addEventListener("click", e => {
  // e.preventDefault();
  // auth.signOut().then(()=>{
    console.log('salio');
  
 
})
