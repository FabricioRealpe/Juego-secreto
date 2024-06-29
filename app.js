let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntentos() {

    let numeroDeUsuario = document.getElementById('valorUsuario').value;

    console.log(numeroSecreto);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p',`Acertastes el número secreto en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secretos es menor');
        } else {
        asignarTextoElemento('p','El número secretos es mayor');
        }
        intentos++;
        limpiarCaja();
     }
  return;
}

function condicionesIniciales () {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

     if (listaNumerosSorteados.length == numeroMaximo) {
         asignarTextoElemento('p', 'Ya se sortearón todos los números posibles');
     } else{


         //si el número generado esta en la lista hacemos
         if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
     
         } else {
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
         }
     }
}
function reiniciarJuego() {
    limpiarCaja();
    //limpiar la caja }
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();