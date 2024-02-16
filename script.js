let botonPiedra = document.querySelector('#botonPiedra');
let botonPapel = document.querySelector('#botonPapel');
let botonTijera = document.querySelector('#botonTijera');
let contenedor = document.querySelector('.contenedor');


const mensaje = document.querySelector('#mensaje');
const ganador = document.querySelector('#ganador');



const player_name = prompt("Cual es tu nombre?");

let player_w = 0;
let computer_w = 0;

const jugador = document.querySelector('#jugador');
const maquina = document.querySelector('#maquina');
jugador.textContent = player_w;
maquina.textContent = computer_w;

const choices = ["piedra", "papel", "tijera"];

function getComputerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}


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

function game(playerChoice){
    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice();
    mensaje.textContent = play_round(playerSelection, computerSelection);

    jugador.textContent = player_w;
    maquina.textContent = computer_w;

    if(player_w == 5 || computer_w == 5){
        resultado();
    }
}

function resultado(){
    const p = document.createElement('p');
    p.style.cssText = 'margin-top: 0; margin-bottom: 10px; padding: 10px 40px 10px 40px; border-radius: 4px;';
    
    if(player_w == 5){
        p.style.cssText += 'border: 5px solid transparent; border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%); border-image-slice: 1;'
        p.textContent = "GANADOR: "+ player_name + "!";
    }else{
        p.style.cssText += 'border: 5px solid black;';
        p.textContent = "GANADOR: La Computadora  >:)";
    }
    contenedor.appendChild(p);
}

botonPiedra.addEventListener('click', () => game("piedra"));

botonPapel.addEventListener('click', () => game("papel"));

botonTijera.addEventListener('click', () => game("tijera"));