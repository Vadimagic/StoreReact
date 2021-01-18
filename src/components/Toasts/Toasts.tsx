import { observer } from 'mobx-react'
import { FunctionComponent, useCallback, useEffect } from 'react'
import store from '../../store/'
import './Toasts.css'

const Toasts : FunctionComponent = () => {
	const {toasts, deleteToast} = store

	const dragToast = useCallback((id) => {

		const element = document.getElementById(id)

		if (element === null) {
			return
		}

		let shift = 0, position = 0
		element!.onmousedown = dragMouseDown;
		
		function dragMouseDown(e: any) {
			position = e.clientX;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		}
		
		function elementDrag(e: any) {
			shift = position - e.clientX;
			position = e.clientX;
			element!.style.left = (element!.offsetLeft - shift) + "px";
		}
		
		function closeDragElement() {
			if (element!.offsetLeft - shift > 150 || element!.offsetLeft - shift < -150) {
				deleteToast(id)
			} else {
				element!.style.left = "0px";
			}
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}, [deleteToast])

	useEffect(() => {
		toasts.forEach(toast => dragToast(toast.id))
	}, [toasts, dragToast])

	return (
		<div className="toast-container">
			{
				toasts.map((toast) => (
					<div 
						className="toast"
						id={toast.id}
						key={toast.id}
					>{toast.title}</div>
				))
			}
		</div>
	)
}

export default observer(Toasts)