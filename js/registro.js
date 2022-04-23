import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonr = document.getElementById('botonregistro')

botonr.addEventListener('click',function (event) {
    event.preventDefault()
    
    let correo = document.getElementById("correo").value 
    let password= document.getElementById("password").value
    
    const auth = getAuth();
createUserWithEmailAndPassword(auth, correo, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("exito en el registro")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("upps fallamos")
  });
})