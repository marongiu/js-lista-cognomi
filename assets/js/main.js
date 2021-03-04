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
  // Stabilisco l'ordine all'interno della lista
  var posizione = cognomi.indexOf(cognome)+1;
  document.getElementById('posizione').innerHTML = "La tua posizione nella lista: " + posizione;
  // Stampo
  document.getElementById('lista').innerHTML = "<li>" + cognomi + "</li>";
} else {
  document.getElementById('wrong').innerHTML = "Devi darmi un cognome";
  console.log("Devi darmi un cognome");
}

// Riordino l'array
