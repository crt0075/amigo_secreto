// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSecreto;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    }

function agregarAmigo() {
    let amigoingresado = document.getElementById("amigo").value.trim();
    if (amigoingresado === "") {
        alert("Debes ingresar un nombre");
        return;
    }
    amigos.push(amigoingresado);
    asignarTextoElemento("ul", amigos);
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function reiniciarListaAmigos() {
    amigos = [];
    asignarTextoElemento("ul", amigos);
}

function sortearAmigo() {
  //  let amigoSorteado = Math.floor(Math.random() * amigos.length) + 1;
      if (amigos.length === 0) {
        alert("La lista de amigos está vacía");
        return null;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    asignarTextoElemento("#resultado", `El amigo secreto es ${amigoSorteado}`);
    reiniciarListaAmigos();
    return amigoSorteado;
}

