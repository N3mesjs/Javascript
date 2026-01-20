alert("benvenuto nel mio sito");

let username = prompt("inserisci il tuo nome utente");
document.getElementById("userName").innerHTML = "benvenuto " + username;

let response = confirm("sei sicuro di voler continuare la navigazione?");

console.log(response);