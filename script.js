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
const result = a + b;
console.log(`${a} + ${b} = ${result}`);

/*
**** EXERCISE 3 ****
Créer un objet utilisateur avec 2 propriètés, et afficher une phrase comme: "L'utilisateur s'appelle Alex et habite à Paris."

*/
const utilisateur = {
    nom: "Alex",
    ville: "Paris"
}
console.log(`L'utilisateur s'appelle ${utilisateur.nom} et habite à ${utilisateur.ville}.`)


/*
*** EXERCISE 4 ***
Créer une application en javascript qui demande à l'utilisateur de saisir son nom, email, num"ro de téléphone et son age à recevoir à travers la fonction prompt.
Stocke les données de cet utilisateur dans un objet, et vérifier si l'age de la personne est supérieur ou égal à 18, lui dire qu'il est majeur, si c'est inférieur lui dire qu'il est mineur.
*/

const name = prompt("Tapez votre nom:");
const email = prompt("Tapez votre email");
const phoneNumber = prompt("Tapez votre numéro de téléphone:");
const old = prompt("Quel est votre age?");

const userDatas = {
    userName,
    email,
    phoneNumber,
    old
}

if (userDatas.userName === '' || userDatas.email === '' || userDatas.phoneNumber === '' || userDatas.old === ''){

    console.log("Veillez remplir les champs vides!");

} else if(userDatas.old >= 18){
        console.log("Vous etes majeur.")
    } else {
        console.log("Vous etes mineur.");
 
}