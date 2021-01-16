import './CardItem.css'

const CardItem = ({card}) => {
	return (
		<li className="card-item">
			<span className="card-item__title">{card.title}</span>
			<img className="card-item__img" src="https://cdn.iconscout.com/icon/free/png-256/gift-1020-542634.png" alt="product"/>
			<span className="card-item__price">{card.price} руб.</span>
			<button className="card-item__button">{card.selected ? '-' : '+'}</button>
		</li>
	)
}

export default CardItem