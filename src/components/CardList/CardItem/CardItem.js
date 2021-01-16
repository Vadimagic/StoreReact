import './CardItem.css'

const CardItem = ({card}) => {
	return (
		<li className="card-item">
			{card.title}
		</li>
	)
}

export default CardItem