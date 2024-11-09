// aca el juego selecciona al azar el numero para que de adivines

let numeroAzar = Math.floor(Math.random())*100 + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

// esta accion se va a ejecutar cuando se toque el boton chequear
function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'por favor, introduce un numero valido entre 1 y 100'
        mensaje.style.color = 'black'
        return
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡FELICITACIONES! ¡Has adivinado el numero!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡MAS ALTO! El numero es mayor al que dijiste'
        mensaje.style.color = 'red'
    }else{
        mensaje.textContent = '¡MAS BAJO! El numero es menor al que dijiste'
        mensaje.style.color = 'red'
    }

}