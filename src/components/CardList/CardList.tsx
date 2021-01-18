import { observer } from 'mobx-react'
import { FunctionComponent } from 'react'
import { ICard } from '../../interfaces'
import store from '../../store'
import CardItem from './CardItem/CardItem'
import './CardList.css'


const CardList: FunctionComponent = () => {
	const {cards} = store
	return (
		<ul className="card-list">
			{
				cards.map((card: ICard) => (
					<CardItem card={card} key={card.id}/>
				))
			}
		</ul>
	)
}

export default observer(CardList)