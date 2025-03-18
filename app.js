// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let listaAmigos = [];
let inputAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");
let amigoSecreto = document.getElementById("resultado");

//Función para agregar un amigo a la lista
function agregarAmigo() {
    let amigoingresado = inputAmigo.value.trim();
    if (amigoingresado === "") {
        alert("Debes ingresar un nombre");
        return;
    }
    if (listaAmigos.includes(amigoingresado)) {
        alert(`${amigoingresado} ya está en la lista, por favor ingresa otro nombre`);
        limpiarCaja();
        return;
    }
    listaAmigos.push(amigoingresado);
    ulListaAmigos.innerHTML += `<li>${amigoingresado}</li>`;
    limpiarCaja();
}

//función para sortear un amigo secreto aleatorio
function sortearAmigo() {
      if (listaAmigos.length === 0) {
        alert("La lista de amigos está vacía");
        return null;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    amigoSecreto.innerHTML = `El amigo secreto es ${amigoSorteado}`;
    reiniciarListaAmigos();
    return amigoSorteado;
}

//Función para limpiar la caja de texto
function limpiarCaja() {
    inputAmigo.value = ''; //Limpiar la caja de texto
    inputAmigo.focus(); //Ubicar el cursor en la caja de texto
}

//Función para reiniciar la lista de amigos
function reiniciarListaAmigos() {
    listaAmigos = [];
    ulListaAmigos.innerHTML = '';
}