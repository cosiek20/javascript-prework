const buttonKamien = document.getElementById('button-rock'),
buttonNozyce = document.getElementById('button-scissors'),
buttonPapier = document.getElementById('button-paper');
let playerscore = document.getElementById('scoreplayer'),
computerscore = document.getElementById('scorecomputer'),
scoreComputer = 0,
scorePlayer = 0;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!'),
    scorePlayer = scorePlayer + 1;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!'),
    scorePlayer = scorePlayer + 1;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!'),
    scorePlayer = scorePlayer + 1;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :('),
    scoreComputer = scoreComputer + 1;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

const playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
playerscore.textContent = "Gracz: " + scorePlayer;
computerscore.textContent = "Komputer: " + scoreComputer;
}





buttonKamien.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonNozyce.addEventListener('click', function(){ buttonClicked('nożyce'); });
buttonPapier.addEventListener('click', function(){ buttonClicked('papier'); });


