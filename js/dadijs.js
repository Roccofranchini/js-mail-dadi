/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.

1- creare una variabile casuale per l'utente e una per il computer
2- confrontare le variabili
3- mostrare il messaggio corretto
*/

var userNumber = Math.floor(Math.random() * 6) + 1;
var pcNumber = Math.floor(Math.random() * 6) + 1;
var risultato = document.getElementById('risultato');

console.log('numero utente : ', userNumber)
console.log('numero computer : ', pcNumber)

if (userNumber > pcNumber) {
    risultato.innerHTML = 'bravo! hai vinto ' + userNumber + ' a ' + pcNumber + '!';
}

else if (userNumber = pcNumber) {
    risultato.innerHTML = 'oh no! hai pareggiato ' + userNumber + ' a ' + pcNumber + '!';
}

else {
    risultato.innerHTML = 'peccato! hai perso ' + userNumber + ' a ' + pcNumber + '!';
}