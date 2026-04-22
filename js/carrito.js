let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// FUNCIÓN PARA AGREGAR PRODUCTOS
function agregarAlCarrito(nombre, precio, imagen){
carrito.push({nombre, precio, imagen});


// Guardar en localStorage
localStorage.setItem("carrito", JSON.stringify(carrito));

alert("🌸 Producto agregado al carrito");

actualizarContador();


}

// ACTUALIZAR CONTADOR DEL CARRITO
function actualizarContador(){
let contador = document.getElementById("contador");
if(contador){
contador.textContent = carrito.length;
}
}

// CUANDO CARGA LA PÁGINA
document.addEventListener("DOMContentLoaded", actualizarContador);
