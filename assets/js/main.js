// Chiedere all’utente il cognome
var cognome = prompt("Dammi il tuo cognome:");

// creo un array di cognomi

var cognomi = ["Bianchi", "Zossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

// Pusho all'interno dell'array pushando solamente se è un cognome

if (isNaN(cognome)) {
  cognomi.push(cognome);
  console.log(cognomi);
} else {
  console.log("Devi darmi un cognome");
}
