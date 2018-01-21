// classes
export class Livre {
	constructor (prix, titre) {
		this.prix = prix;
		this.titre = titre;
		this.editeur = 'acte sud';
	}
	getNotice () {
		setTimeout(function () {
			// console.log(this);
		}, 3000);
		return `Titre: ${this.titre} /
			Editeur: ${this.editeur}`;
	}
};

export class Roman extends Livre {
	constructor (prix, titre) {
		super(prix, titre);
		this.type = 'Roman';
	}
};
