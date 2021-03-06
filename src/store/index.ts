import { observable, action, makeObservable } from 'mobx'
import { ICard, IToast } from '../interfaces'

class Store {
	@observable cards: ICard[] = [
		{id: '1', title: 'Bread', price: '35', description: 'Хлеб', selected: false},
		{id: '2', title: 'Milk', price: '70', description: 'Молоко', selected: false},
		{id: '3', title: 'Carrot', price: '30', description: 'Морковка', selected: false},
		{id: '4', title: 'Sweets', price: '350', description: 'Конфеты', selected: false},
		{id: '5', title: 'Pie', price: '210', description: 'Пирог', selected: false},
		{id: '6', title: 'Chocolate', price: '80', description: 'Шоколад', selected: false},
		{id: '7', title: 'Fish', price: '150', description: 'Рыба', selected: false},
		{id: '8', title: 'Lobster', price: '750', description: 'Омар', selected: false},
		{id: '9', title: 'Сhicken', price: '250', description: 'Курица', selected: false},
	]

	@observable toasts: IToast[] = []

	constructor() {
		makeObservable(this);
	}

	@action toggleSelectedCards = (id: string) => {
		this.cards = this.cards.map(card => {
			if (card.id === id) {
				this.createToast(card.selected, card.title)
				return {
					...card,
					selected: !card.selected
				}
			}
			return card
		})
	}
	
	@action createToast = (selected: boolean, title: string) => {
		const id = String(Date.now())
		this.toasts = [...this.toasts, {
			id,
			title: (selected ? 'Вы убрали ' : 'Вы добавили ') + title
		}]
		setTimeout(() => { 
			this.deleteToast(id)
		}, 7000)
	}

	@action deleteToast = (id: string) => {
		this.toasts = this.toasts.filter(toast => toast.id !== id)
	}

	cardById = (id: string) => {
		return this.cards.find(card => card.id === id)
	}
}

export default new Store()