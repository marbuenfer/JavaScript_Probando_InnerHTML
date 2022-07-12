window.onload = inicio;

function inicio() {
  document.querySelectorAll(".boton")[0].onclick = accion1;
  document.querySelectorAll(".boton")[1].onclick = accion2;
  document.querySelectorAll(".boton")[2].onclick = accion3;
  document.querySelectorAll(".boton")[3].onclick = accion4;
}
function accion1() {
  borrar();
  document.querySelector(".caja").innerHTML = "Hola Mundo";
}
function accion2() {
  //borra lo anterior y añade una imagen
  borrar();
  document.querySelector(".caja").innerHTML =
    "<img src='./images/niña-rubia.jpg'>";
}
function accion3() {
  //añade un botón nuevo cada vez que se pulsa el botón 3
  //document.querySelector(".caja").innerHTML += "<button>Nuevo botón</button>";
  //Es mejor usar insertAdjacentHTML porque después de añadir cualquier elemento lo optimiza: beforegegin, afterbegin, beforeend,afterend
  document
    .querySelector(".caja")
    .insertAdjacentHTML("afterend", "<button>Nuevo botón</button>");
}
function accion4() {
  borrar();
}
function borrar() {
  document.querySelector(".caja").innerHTML = "";
}
