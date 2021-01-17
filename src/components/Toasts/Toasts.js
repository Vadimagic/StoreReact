import { observer } from 'mobx-react'
import store from '../../store'
import './Toasts.css'

const Toasts = () => {
	const {toasts} = store
	return (
		<div className="toast-container">
			{
				toasts.map((toast) => (
					<div className="toast" key={toast.id}>{toast.title}</div>
				))
			}
		</div>
	)
}

export default observer(Toasts)