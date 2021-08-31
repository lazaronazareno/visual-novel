import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setInitialRouteIndex, selectIndexRoute, setInitialIndexStories} from '../../redux/visualNovelSlice'
import choices from './choices'
import './styles.scss'

function Choices() {
	const dispatch = useDispatch()
	const routeIndex = useSelector(selectIndexRoute)
	const handleRoute =(index) =>{
		dispatch(setInitialIndexStories(0))
		dispatch(setInitialRouteIndex(index))
	}
	console.log(choices)
	if (routeIndex != 0) {
		if(routeIndex === 1) {
			return (
				<Container className="d-flex flex-column justify-content-center align-items-center screen">
					<h1>Bad Ending! :(</h1>
				</Container>
			)
		} else if (routeIndex === 2) {
			return (
				<Container className="d-flex flex-column justify-content-center align-items-center screen">
					<h1>Good Ending! :)</h1>
				</Container>
			)
		}
		return (
			<Container className="d-flex flex-column justify-content-center align-items-center screen">
				<h1>fin</h1>
			</Container>
		)
	}
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center screen">
			<Container className="choices d-flex flex-column justify-content-evenly align-items-center">
				<h1>Llego el momento de tomar una decision!</h1>
				<h1>Selecciona una opcion y descubre tu destino :</h1>
				{choices[routeIndex].choice && (
					choices[routeIndex].choice.map((option, index) => {
						return (
							console.log(option.text),
							<Button variant="outline-dark" className="fs-3" onClick={() => handleRoute(index +1)} size='lg'>{option.text}</Button>
						)
					})
				)
				}
			</Container>
		</Container>
	)
}

export default Choices
