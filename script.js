/* 
**** EXERCISE 1 *****
Créer une variable nom et afficher "Bonjour [nom]!" dans la console.

*/
const nom = "Ibrahim";
console.log(`Bonjour ${nom}!`);

/*
**** EXERCISE 2 ****
Créer deux variables a et b, afficher leur somme.
 
*/
let a = 40;
let b = 20;
console.log(`${a} + ${b} = ${a + b}`);

/*
**** EXERCISE 3 ****
Créer un objet utilisateur avec 2 propriètés, et afficher une phrase comme: "L'utilisateur s'appelle Alex et habite à Paris."

*/
const utilisateur = {
    nom: "Alex",
    ville: "Paris"
}
console.log(`L'utilisateur s'appelle ${utilisateur.nom} et habite à ${utilisateur.ville}.`)