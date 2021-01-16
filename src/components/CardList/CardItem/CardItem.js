import { withRouter } from 'react-router-dom'
import store from '../../../store'
import './CardItem.css'

const CardItem = ({history, card}) => {
	const { toggleSelectedCards } = store
	return (
		<li className="card-item" onClick={() => history.push(`/card/${card.id}`)}>
			<span className="card-item__title">{card.title}</span>
			<img className="card-item__img" src="https://cdn.iconscout.com/icon/free/png-256/gift-1020-542634.png" alt="product"/>
			<span className="card-item__price">{card.price} руб.</span>
			<button
				className="card-item__button"
				onClick={(e) =>  {
					e.stopPropagation()
					toggleSelectedCards(card.id)
				}}
			>{card.selected ? '-' : '+'}</button>
		</li>
	)
}

export default withRouter(CardItem)