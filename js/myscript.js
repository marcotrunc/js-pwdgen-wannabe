console.log('JS OK')
/* 
1. Recupero elemento dalla Dom
2. Chiedo all'utente il nome e lo salvo in una varibile
3. Chiedo all'utente il cognome e lo salvo in una variabile
4. Chiedo il suo colore preferito e lo salvo in una variabile
5. Dichiaro una variabile per la passwordGenerate
6. Stampo la variabile della passwordGenerate
*/

// Recupero elemento in pagina
const passwordElement = document.getElementById('password'); 

// Chiedo all'utente il nome e lo salvo in una variabile
const firstName = prompt('Inserisci il tuo nome');
console.log(firstName);

// Chiedo all'utente il cognome e lo salvo in una variabile
const lastName = prompt('Inserisci il tuo cognome');
console.log(lastName);

// Chiedo all'utente il suo colore preferito
const favoriteColor = prompt('qual è il tuo colore preferito?');
console.log(favoriteColor);

// Dichiaro una variabile per la password
const passwordGenerate = firstName + lastName + favoriteColor + 21;
console.log(passwordGenerate);

// Stampo la variabile passwordGenerate 
passwordElement.innerHTML = `La tua password è ${passwordGenerate}.`;