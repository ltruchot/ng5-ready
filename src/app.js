/** *************** ES5 ***************/
// "window" in browser
// window.console.log('test 3');
window.test = 'bonjour';
// var, scope, globals
var test2 = 'aurevoir';
// console.log(test2);

function lire () {
	var test2 = 'un livre';
	console.log(test2);
	function relire () {
		console.log(test2);
	}
	relire();
}
// lire();
// console.log(test2);

// primary types vs objects: reference value vs reference
var livre = 'crime et châtiment';
var isBlack = true;
var count = 56;

var bouquin = livre;
// console.log(bouquin);
livre = 'le joueur';
// console.log(livre);

var monObjet = { prenom: 'Loïc'};
var monObjet2 = { prenom: 'Loïc'};
monObjet2.nom = 'Truchot';
// console.log(monObjet);

// check equality, falsy, truthy
// console.log(monObjet === monObjet2);

// closure
function test18 () {
	var test19 = 'bonjour';
	return function () {
		console.log(test19);
	};
}
var func = test18();
// func();

// this
function Livre (auteur, titre) {
	this.auteur = auteur;
	this.titre = titre;
	this.direTitre = function () {
		console.log('le titre de cet ouvrage est', this.titre);
	};
}

var livre = new Livre('Platon', 'Le banquets');
var livre2 = new Livre('Aristote', 'De l\'âme');
console.log(livre, livre2);
livre2.direTitre();

/** *************** ES6+ ***************/
// import/export

// let, const

// array methods

// spread operator

// destructuring

// arrow function

// classes
