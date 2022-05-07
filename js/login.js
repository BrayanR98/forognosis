import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

const botonl = document.getElementById("botonl");
let bienvenidauser = document.getElementById("bienvenidauser");
let libienvenidauser = document.getElementById("libienvenidauser");
let btnr= document.getElementById("btnr");
const auth = getAuth();

botonl.addEventListener("click",function (e) {
   e.preventDefault();
    
    let lcorreo = document.getElementById("lcorreo").value;
    let lpasswd = document.getElementById("lpasswd").value;
    const formulariolog = document.getElementById("login-user");
    let modalinformativo = new bootstrap.Modal(document.getElementById("modalinformativo"))
   
    signInWithEmailAndPassword(auth, lcorreo, lpasswd)
    .then((userCredential) => {
        // Signed in
        
        let textoinformativo = document.getElementById("informaciongeneral")
        btnr.classList.add("invisible")
        libienvenidauser.classList.remove("invisible")
        bienvenidauser.innerHTML =`Bienvenido : ${lcorreo} <i class="bi bi-person-circle"></i> `
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
    e.preventDefault();
     auth.signOut().then(()=>{

      btnr.classList.remove("invisible")
      bienvenidauser.innerHTML ="";
      libienvenidauser.classList.add("invisible")

     })
     console.log('salio');
     
 
 })
