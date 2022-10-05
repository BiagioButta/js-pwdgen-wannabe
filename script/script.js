// Chiedere il nome 
// Chiedere il cognome
// Chiedere il colore preferito
// Chiedere l'età

const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci iltuo colore preferito');
const age = prompt('Inserici la tua età');

let password = document.getElementById('new_password');

password.innerHTML = `
<h2>Ecco la tua password!</h2>
<h2>${firstName}${lastName}${color}${age -7}</h2>
`;
