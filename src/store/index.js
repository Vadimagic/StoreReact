import { action, makeObservable, observable } from 'mobx';

class Store {
	cards = [
		{id: 1, title: 'Bread', price: '35', description: 'Хлеб', selected: false},
		{id: 2, title: 'Milk', price: '70', description: 'Молоко', selected: false},
		{id: 3, title: 'Carrot', price: '30', description: 'Морковка', selected: false},
		{id: 4, title: 'Sweets', price: '350', description: 'Конфеты', selected: false},
		{id: 5, title: 'Pie', price: '210', description: 'Пирог', selected: false},
		{id: 6, title: 'Chocolate', price: '80', description: 'Шоколад', selected: false},
		{id: 7, title: 'Fish', price: '150', description: 'Рыба', selected: false},
		{id: 8, title: 'Lobster', price: '750', description: 'Омар', selected: false},
		{id: 9, title: 'Сhicken', price: '250', description: 'Курица', selected: false},
	]

	constructor() {
		makeObservable(this, {
			cards: observable,
			toggleSelectedCards: action,
			cardById: action
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

	cardById = id => {
		return this.cards.find(card => card.id === +id)
	}
}

export default new Store()