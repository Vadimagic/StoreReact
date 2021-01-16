import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import store from '../../store'
import './CardInfo.css'

const CardInfo = ({match}) => {
	const {cards, toggleSelectedCards, cardById} = store
	// Создаю state в котором будет храниться card, которую найдём по id
	const [card, setCard] = useState(null)
	useEffect(() => {
		setCard(cardById(match.params.id))
	}, [cards, cardById, match.params.id])
	return (
		<>
			{
				card
				? <div className="card-info">
					<img className="card-info__img" src="https://cdn.iconscout.com/icon/free/png-256/gift-1020-542634.png" alt="product"/>
					<span className="card-info__title">{card.title}</span>
					<p className="card-info__description">{card.description}</p>
					<span className="card-info__price">{card.price} руб.</span>
					<button
						className="card-info__button"
						onClick={() => toggleSelectedCards(card.id)}
					>{card.selected ? '-' : '+'}</button>
				</div>
				: null
			}
		</>
	)
			
}

export default withRouter(observer(CardInfo))