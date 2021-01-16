import { observer } from 'mobx-react'
import store from '../../store'
import CardItem from './CardItem/CardItem'
import './CardList.css'

const CardList = () => {
	const {cards} = store
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

export default observer(CardList)