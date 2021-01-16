import CardItem from './CardItem/CardItem'
import './CardList.css'

const CardList = () => {
	const cards = [
		{id: 1, title: 'Bread', price: '35', description: 'eat', selected: false},
		{id: 2, title: 'Milk', price: '70', description: 'eat', selected: false},
		{id: 3, title: 'Carrot', price: '30', description: 'eat', selected: false},
	]
	return (
		<ul className="card-list">
			{
				cards.map(card => (
					<CardItem card={card} key={card.id}/>
				))
			}
		</ul>
	)
}

export default CardList