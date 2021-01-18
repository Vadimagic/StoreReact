import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { useRouteMatch } from 'react-router-dom'
import store from '../../store'
import './CardInfo.css'

interface MatchParams {
	id: string;
}

const CardInfo = () => {
	const match = useRouteMatch<MatchParams>()
	const {toggleSelectedCards, cardById} = store
	const card = computed(() => cardById(match.params.id)).get()
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
				: <p>Карточки с таким товаром не существует! :)</p>
			}
		</>
	)
}

export default observer(CardInfo)