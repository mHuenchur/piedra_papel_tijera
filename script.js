function getComputerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function getPlayerChoice(){
    let p_choice;
    p_choice = prompt("Elije: piedra, papel o tijera");
    return p_choice.toLowerCase();
}

const choices = ["piedra", "papel", "tijera"];

function play_round(playerSelection, computerSelection){
    var mensaje;
    if(playerSelection == computerSelection){
        mensaje = "Empate!";
    }else{
        if(playerSelection == "tijera"){
            if(computerSelection == "piedra"){
                mensaje = "Perdiste, piedra gana a tijera.";
                computer_w++;
            }else{
                if(computerSelection == "papel"){
                    mensaje = "Ganaste, tijera gana a papel";
                    player_w++;
                }
            }
        }else{
            if(playerSelection == "piedra"){
                if(computerSelection == "tijera"){
                    mensaje = "Ganaste, piedra gana a tijera.";
                    player_w++;
                }else{
                    if(computerSelection == "papel"){
                        mensaje = "Perdiste, papel gana a piedra";
                        computer_w++;
                    }
                }
            }else{
                if(playerSelection == "papel"){
                    if(computerSelection == "piedra"){
                        mensaje = "Ganaste, papel gana a piedra.";
                        player_w++;
                    }else{
                        if(computerSelection == "tijera"){
                            mensaje = "Perdiste, tijera gana a papel";
                            computer_w++;
                        }
                    }
                }
            }
        }
    }
    
    return mensaje;
}

function game(){
    player_w = 0;
    computer_w = 0;

    console.log("Gana el mejor de 5. A JUGAR!!");
    console.log("----------");

    for(let intento = 0; intento < 5; intento++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("Jugador: " + playerSelection);
        console.log("Computadora: " + computerSelection);
        console.log(play_round(playerSelection, computerSelection));
        console.log("----------");
    }
    console.log("RESULTADOS:");
    console.log("Victorias de " + player_name + ": "+ player_w);
    console.log("Victorias de la computadora: "+ computer_w);
    console.log("----------");
    if(player_w > computer_w){
        console.log("GANADOR: "+ player_name + "!");
    }else{
        if(player_w < computer_w){
            console.log("GANADOR: La Computadora :)");
        }else{
            console.log("¡¡EMPATE!!");
        }
    }
}

const player_name = prompt("¿Cual es tu nombre?");
let player_w;
let computer_w;
game();