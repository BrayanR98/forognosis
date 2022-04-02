export function pintarCarrito (suma) {
    let numeros = document.getElementById("capsula")
    numeros.textContent=suma
    numeros.classList.remove("invisible")
}