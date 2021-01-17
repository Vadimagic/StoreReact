import { observer } from 'mobx-react'
import { useCallback, useEffect } from 'react'
import store from '../../store'
import './Toasts.css'

const Toasts = () => {
	const {toasts, deleteToast} = store

	const dragToast = useCallback((id) => {
		const elmnt = document.getElementById(id)
		let pos1 = 0, pos3 = 0
			elmnt.onmousedown = dragMouseDown;
		
		function dragMouseDown(e) {
			pos3 = e.clientX;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		}
		
		function elementDrag(e) {
			e = e || window.event;
			pos1 = pos3 - e.clientX;
			pos3 = e.clientX;
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}
		
		function closeDragElement() {
			if (elmnt.offsetLeft - pos1 > 150 || elmnt.offsetLeft - pos1 < -150) {
				deleteToast(id)
			} else {
				elmnt.style.left = "0px";
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