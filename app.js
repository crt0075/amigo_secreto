// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSecreto;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    }

function agregarAmigo() {
    let amigoingresado = document.getElementById("amigo").value;
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

function sortearAmigo() {
}

