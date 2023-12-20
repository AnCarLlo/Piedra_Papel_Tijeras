// function eleccionMaquina(){
//     // Código que consideres necesario
// }


// function jugar(opcionUsuario){
//     let opcionMaquina = eleccionMaquina();
//     // Código que consideres necesario
// }

// function aleatoria (){
//     let numRamdom = getRamdomInt(3);
//     let valor ="";
//     if (numRamdom == 1){
//         valor = "piedra";
//     }
//     else if(numRamdom == 2){
//         valor = "papel";
//     }
//     else {
//         valor = "tijera";
//     }
// }


function eleccionMaquina() {
    var opciones = ["piedra", "papel", "tijeras"];
    var eleccion = Math.floor(Math.random() * 3);
    return opciones[eleccion];
}

function jugar(opcionUsuario) {
    let opcionMaquina = eleccionMaquina();
    let imagenMaquina = document.getElementById('imagenMaquina');
    if (opcionMaquina == "piedra") {
        imagenMaquina.src = "./Imagenes/piedra.png";

    }
    if (opcionMaquina == "papel") {
        imagenMaquina.src = "./Imagenes/papel.png";

    }
    if (opcionMaquina == "tijeras") {
        imagenMaquina.src = "./Imagenes/tijeras.png";

    }

    if (opcionUsuario == "piedra") {
        imagenUsuario.src = "./Imagenes/piedra.png";

    }
    if (opcionUsuario == "papel") {
        imagenUsuario.src = "./Imagenes/papel.png";

    }
    if (opcionUsuario == "tijeras") {
        imagenUsuario.src = "./Imagenes/tijeras.png";

    }




    var resultado = "";

    if (opcionUsuario === opcionMaquina) {
        resultado = "Empate";
    } else if (
        (opcionUsuario === "piedra" && opcionMaquina === "tijeras") ||
        (opcionUsuario === "tijeras" && opcionMaquina === "papel") ||
        (opcionUsuario === "papel" && opcionMaquina === "piedra")
    ) {
        resultado = "¡Ganaste!";
    } else {
        resultado = "La máquina gana";
    }

    mostrarResultado(resultado, opcionUsuario, opcionMaquina);
}

function mostrarResultado(resultado, eleccionJugador, eleccionMaquina) {
    var mensaje = "Has elegido " + eleccionJugador + ". La máquina eligió " + eleccionMaquina + ". " + resultado;
    alert(mensaje);
}
