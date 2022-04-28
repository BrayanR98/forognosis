import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonr = document.getElementById('botonregistro')
let formulario= document.getElementById("Registro-user")
botonr.addEventListener('click',function (event) {
    event.preventDefault()
    
    let correo = document.getElementById("correo").value 
    let password= document.getElementById("password").value
    let modalinformativo = new bootstrap.Modal(document.getElementById("modalinformativo"))
    
    const auth = getAuth();
createUserWithEmailAndPassword(auth, correo, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    let textoinformativo = document.getElementById("informaciongeneral")
    
    formulario.reset()
    textoinformativo.textContent= "Exito registrandote"
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

const formulariolog = document.getElementById("login-user");
const vistafl = document.getElementById("vistafl");
const vistafr = document.getElementById("vistafr");
vistafl.addEventListener("click",function () {
  
  formulariolog.classList.remove("invisible");
  formulario.classList.add("invisible");
});


vistafr.addEventListener("click",function () {
  
  formulario.classList.remove("invisible");
  formulariolog.classList.add("invisible");


});
