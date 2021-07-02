/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.


1- crea ls lista delle email con un array
2- chiedi con un prompt l'email dell'utente
3- verifica che questa sia allinterno della lista

*/

var listEmail = ['laura@gmail.com', 'luigi@hotmail.it', 'peppino@libero.eu', 'lucacapo@gmail.it'];
var userEmail = prompt('inserisci la tua email');
var esito = document.getElementById('esito');


if (listEmail.includes(userEmail)) {
    esito.innerHTML = 'welcome ' + userEmail;
}

else {
    esito.innerHTML = 'im sorry but you are not allowed to see this page'
}
