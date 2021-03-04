// Chiedere all’utente il cognome
var cognome = prompt("Dammi il tuo cognome:");
// Capitalizzo la prima lettera altrimenti mi ordina in base a minuscolo o maiuscolo
cognome = cognome[0].toUpperCase() + cognome.substring(1);

// creo un array di cognomi

var cognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

// Pusho all'interno dell'array pushando solamente se è un cognome

if (isNaN(cognome)) {
  cognomi.push(cognome);
  // inserisco il sort per ordinare alfabeticamente
  cognomi.sort();
} else {
  console.log("Devi darmi un cognome");
}

document.getElementById('lista').innerHTML = "<li>" + cognomi + "</li>";
console.log(cognomi);
// Riordino l'array
