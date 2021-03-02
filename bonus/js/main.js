//  PER I COMMENTI ALLA LOGICA DELL'ESERCIZIO FAI RIFERIMENTO ALL'ALTRO FILE JS
//  QUI IDENTIFICO IN PIÙ 3 VARIABILI difficolta  CHE MI SERVE A IMPOSTARE IL LIVELLO DELL'ESERCIZIO, numMax CHE USO COME VARIABILE CHE
//  FA VARIARE IL RANGE MASSIMO A DISPOSIZIONE E livelloGioco CHE È LA DOMANDA CHE APPARE ALL'UNTENTE A SECONDA DEL CASO CHE SCEGLIE 
var minaAntiuomo = [];
var numeriUtente = [];
var punteggio = 0;
var numeroUtente;
var boom = false;
var difficolta;
var numMax;
var livelloGioco;

// NEL BONUS COME PRIMA COSA DEVO IMPOSTARE UN LIVELLO DI DIFFICOLTÀ, QUINDI DATO CHE POSSONO ESSERCI SOLTANTO
// 3 DIFFICOLTÀ UTILIZZERÒ UNO SWITCH ANZICHÈ UN IF ALL'INTERNO DI UN CICLO WHILE CHE MI IMPEDISCE DI SCRIVERE ALTRE PAROLE
// AL DI FUORI DEI TRE CASI CONSENTITI

difficolta = prompt('Selezione il livello di difficoltà: facile, intermedio, difficile');
while (difficolta != 'facile' && difficolta != 'intermedio' && difficolta != 'difficile') {
  difficolta = prompt('In caso non avessi capito devi scrivere: facile, intermedio o difficile');
}

switch (difficolta) {
  case 'facile':
    numMax = 100;
    livelloGioco = 'Inserisci un numero da 1 a 100';
    break;
  case 'intermedio':
    numMax = 80;
    livelloGioco = 'Inserisci un numero da 1 a 80';
    break;
  case 'difficile':
    numMax = 50;
    livelloGioco = 'Inserisci un numero da 1 a 50';
    break;
}

// DA ADESSO LA LOGICA DELL'ESERCIZIO RIMANE IMMUTATA TRANNE CHE VI L'AGGIUNTA DEL VALORE numMax QUANDO SERVE/

while (minaAntiuomo.length < 16) {

  var numeroCasuale = mathRandomMaker(1, numMax);
  var search = insideOfArray(minaAntiuomo, numeroCasuale);

  if (search == false) {
    minaAntiuomo.push(numeroCasuale);
  }
}


console.log(minaAntiuomo);

document.getElementById('bombe').innerHTML = minaAntiuomo;


while (boom == false) {


  numeroUtente = parseInt(prompt(livelloGioco));
  controlloNumeroInserito();


  if (insideOfArray(numeriUtente, numeroUtente) == false) {
    numeriUtente.push(numeroUtente);

    if (insideOfArray(minaAntiuomo, numeroUtente) == true) {
      document.getElementById('messaggio').innerHTML = 'Unlucky, you get the bomb!';
      boom = true;
    } else { 
      punteggio++;
    }
  }
}




console.log('HAI FATTO BOOM!');
console.log('SCORE' + punteggio);


document.getElementById('score').innerHTML = 'Your final Score is ' + punteggio;
document.getElementById('wish').innerHTML = 'Don\'t give up! Hope you\'ll do better next time!';


 

function mathRandomMaker(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function checkNumbers(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}


function insideOfArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}

function   controlloNumeroInserito() {
  while (checkNumbers(1, numMax, numeroUtente) == false) {
    numeroUtente = parseInt(prompt('Nice Try. Ora però inserisci un vero numero da 1 a ' + numMax));
  }
}

