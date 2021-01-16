import { action, makeObservable, observable } from 'mobx';

class Store {
	cards = [
		{id: 1, title: 'Bread', price: '35', description: 'eat', selected: false},
		{id: 2, title: 'Milk', price: '70', description: 'eat', selected: false},
		{id: 3, title: 'Carrot', price: '30', description: 'eat', selected: false},
	]

	constructor() {
		makeObservable(this, {
			cards: observable,
			toggleSelectedCards: action
		})
	}

	toggleSelectedCards = id => {
		this.cards = this.cards.map(card => {
			if (card.id === id) {
				return {
					...card,
					selected: !card.selected
				}
			}
			return card
		})
	}
}

export default new Store()