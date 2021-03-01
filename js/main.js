// INIZIO COL DEFINIRMI ALCUNE VARIABILI FONDAMENTALI CHE SARANNO IMPORTANTI PER LO SVOLGIMENTO 
//  DEFINISCO DUE ARRAY VUOTI (minaAntiuomo, numeriUtente) CHE SERIVIRANNO RISPETTIVAMENTE PER POPOLARE I 16 NUMERI, 
// CHE MI FANNO FINIRE IL GIOCO,  E I NUMERI CORRETTAMENTE VALIDI INSERITI DALL'UTENTE, CHE SFRUTTERÒ PER FAR AUMENTARE
// IL PUNTEGGIO DEL MIO UTENTE CHE DEFINISCO ORA COME VAR (punteggio). INSERISCO DUE VARIABILI CHE MI SERVIRANNO ALL'INTERNO
//  DEI CICLI, MA CHE DEFINISCO  DA ORA COSÌ DA DARE AI CICLI UN VALORE GENERALE. boom, SE TRUE,  RAPPRESENTA L'ESLPOSIONE QUINDI
//  SETTO COME DEFAULT A FALSE. numeroUtente CHE UTILIZZO PER L'INSERIMENTO DEI NUMERI DA PARTE DEL MIO UTENTE.

var minaAntiuomo = [];
var numeriUtente = [];
var punteggio = 0;
var numeroUtente;
var boom = false;

// IL MIO ESERCIZIO INIZIA CON IL GENERARE DEI NUMERI RANDOM CHE ANDRANNO A POPOLARE IL MIO ARRAY DEFINITO COME minaAntiuomo QUINDI UTILIZZO 
// UN CICLO WHILE A CUI DO UNA GRANDEZZA MASSIMA DI ELEMENTI NELL'ARRAY DI 16
while (minaAntiuomo.length < 16) {
    // RICHIAMO QUINDI DENTRO LA FUNZIONE mathRandomMaker SOTTO DEFINITO
  var numeroCasuale = mathRandomMaker(1, 100);
  // VADO A INSERIRE IL NUMERO DENTRO L'ARRAY SOLO SE NON È GIÀ PRESENTE, QUINDI VADO A DEFINIRMI UNA ULTERIORE VARIABILE SEARCH
    // CHE PONGO UGUALE ALLA FUNZIONE insideOfArray (QUESTA MI CONFRONTA L'ELEMENTO GENERATO RANDOMICAMENTE CON L'ARRAY minaAntiuomo)
  var search = insideOfArray(minaAntiuomo, numeroCasuale);
    // A SEARCH PONGO LA CONDIZIONE CHE SE NON È PRESENTE GIÀ IN minaAntiuomo DI AGGIUNGERLO 
  if (search == false) {
    minaAntiuomo.push(numeroCasuale);
  }
}


console.log(minaAntiuomo);

document.getElementById('bombe').innerHTML = minaAntiuomo;

// INIZIA IL MIO GIOCO QUINDI L'UTENTE INIZIA A INSERIRE NUMERI DA 1 A 100,DEVO CHE VENGANO INSERITI DEI NUMERI CORRETTI E CHE VENGA BLOCCATO 
// DA UN MESSAGGIO DI ERRORE SE SBAGLIA RANGE. MA PRIMA DI TUTTO QUESTO DEVO INSERIRE UN CICLO WHILE  CHE MI SI RIPETA OGNI QUALVOTA
// CHE LA MIA CONDIZIONE boom RIMANE false, PERCHÈ CON boom = true AVVIENE L'ESPLOSIONE E IL MIO GIOCO TERMINA.

while (boom == false) {
    // INSERISCO ORA LA MIA VARIABILE numeroUtente CHE SARÀ UN PROMPT DI UN NUMERO DA 1 A 100 RICHIAMO UNA NUOVA FUNZIONE CHE IDENTIFICO
    //  CON controlloNumeroInserito CHE MI SERVE A BLOCCARE L'UTENTE QUALORA NON INSERISCA CORRETTAMENTE IL NUMERO

  numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
  controlloNumeroInserito();

    //  A QUESTO PUNTO INSERISCO NEL MIO CICLO LA CONDIZIONE CHE SE L'UTENTE NON HA ANCORA INSERITO QUESTO NUMERO ALLORA POSSO AGGIUNGERLO
    //  ALL'ARRAY DEL MIO UTENTE,(USERÒ QUINDI DI NUOVO insideOfArray, MA APPLICANDOLO AD ALTRI ARGOMENTI). COSÌ VERRÀ PRESO SOLTANTO UNA VOLTA 
    // E SCARTATA LA RIPETIZIONE DI UN EVENTUALE NUMERO DA PARTE DEL MIO UTENTE SENZA CREARE QUALCHE PARTICOLARE CODICE DI ERRORE
  if (insideOfArray(numeriUtente, numeroUtente) == false) {
    numeriUtente.push(numeroUtente);
        // AGGIUNGO UN'ULTERIORE CONDIZIONE CHE PONE FINE ALLA PARTITA SE IL MIO UTENTE INSERISCE UN NUMERO CONTENUTO NEL MIO ARRAY RANDOMICO
        //  minaAntiuomo. QUINDI RICHIAMO DI NUOVO LA MIA FUNZIONE GENERALE insideOfArray, MA LA APPLICO AL MIO ARRAY DI RIFERIMENTO, minaAntiuomo, 
        // E IL NUMERO INSERITO DAL MIO UTENTE
    if (insideOfArray(minaAntiuomo, numeroUtente) == true) {
      document.getElementById('messaggio').innerHTML = 'Unlucky, you get the bomb!';
      boom = true;
    } else {
        // COSA DEVE SUCCEDERE PERÒ SE LA MIA CONDIZIONE NON SI APPLICA? IL MIO UTENTE AUMENTA IL SUO PUNTEGGIO PERCHÈ NON HA INDIVIDUATO 
        // UN NUMERO CHE TERMINA LA PARTITA E QUINDI LA MIA VARIABILE punteggio INCREMENTA DI UNO 
      punteggio++;
    }
  }
}

// UNA VOLTA CHIUSO IL MIO CICLO WHILE SIGNIFICA CHE LA MIA VIARIABILE BOOLEANA boom HA CAMBIATO STATO IN TRUE E CHE QUINDI LA PARTITA TERMINA. 
// FACCIO QUINDI APPARIRE DEI console.log()  E DEI RIFERIMENTI AL MIO HTML, CHE SERVONO RISPETTIVAMENTE A ME E ALL'UTENTE A VISUALIZZARE L'ESITO
// DEL GIOCO.


console.log('HAI FATTO BOOM!');
console.log('SCORE' + punteggio);


document.getElementById('score').innerHTML = 'Your final Score is ' + punteggio;
document.getElementById('wish').innerHTML = 'Don\'t give up! Hope you\'ll do better next time!';


// DI SEGUITO VADO A RIPRENDERE E DEFINIRE TUTTE LE FUNZIONI SOPRA CITATE


// mathRandomMaker
//  LO RICHIAMO DENTRO IL PRIMO CICLO WHILE COSÌ CHE GENERI UN NUMERO CASUALE DA 1 A 100 

function mathRandomMaker(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// checkNumbers
// USO QUESTA FUNZIONE PER VERIFICARE CHE IL VALORE SIA DENTRO IL RANGE min, max E CHE SIA UN NUMERO
function checkNumbers(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}


// insideOfArray
// DEFINISCO LA MIA FUNZIONE CHE VADA A PESCARE ALL'INTERNO DEL MIO ARRAY UN ELEMENTO E CHE CONFRONTI CHE QUESTO ELEMENTO SIA CONTENTUTO NELL'
// MIO ARRAY. CERCO DI SCRIVERLA GENERALE COSÌ DA POTERLA USARE QUANDO NECESSARIO
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

// controlloNumeroInserito
// UTILIZZO QUESTA FUNZIONE PER CONTROLLARE CHE IL NUMERO INSERITO SIA CORRETTO. SE IL MIO NUMERO NON È CORRETTO PONGO UN CICLO WHILE
// CHE SFRUTTANDO LA FUNZIONE checkNumbers MI RESTITUISCA UN NUOVO PROMPT CON UN MESSAGGIO DI ERRORE E DI RICHIESTA DI UN NUOVO NUMERO 
// IMPEDENDO UN AUMENTO DEL PUNTEGGIO
function   controlloNumeroInserito() {
  while (checkNumbers(1, 100, numeroUtente) == false) {
    numeroUtente = parseInt(prompt('Nice Try. Ora però inserisci un vero numero da 1 a 100'));
  }
}










// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…
// Buon appetito a tutti e buon pomeriggio dal vostro Presidente!