import React from 'react'
import { useDispatch } from 'react-redux'
import { isShowTitle, isShowStory } from '../../redux/visualNovelSlice'
import { Container, Button } from 'react-bootstrap'

function MenuButtons() {
	const dispatch = useDispatch()
	const handleBack = () => {
		dispatch(isShowStory(false))
		dispatch(isShowTitle(true))
	}
	return (
		<Container>
			<Button variant="outline-light" onClick={() => handleBack()}>Back</Button>
			<Button variant="outline-light">Options</Button>
		</Container>
	)
}

export default MenuButtons
