import React from 'react'
import { useDispatch } from 'react-redux'
import { isShowTitle, isShowStory, setInitialIndexStories, setInitialRouteIndex } from '../../redux/visualNovelSlice'
import { Container, Button } from 'react-bootstrap'
import './styles.scss'

function TittleScreen() {
	const dispatch = useDispatch()
	const handleStart = () => {
		dispatch(setInitialIndexStories(0))
		dispatch(setInitialRouteIndex(0))
		dispatch(isShowTitle(false))
		dispatch(isShowStory(true))
	}
	const handleContinue = () => {
		dispatch(isShowTitle(false))
		dispatch(isShowStory(true))
	}
	
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center screen">
			<Container className="choices h-50 d-flex flex-column justify-content-evenly align-items-center">
				<h1>Welcome to this &quot;try&quot; of Visual Novel</h1>
				<Container className="d-flex w-50 justify-content-evenly">
					<Button variant="outline-dark" onClick={() => handleStart()} size='lg'>Start</Button>
					<Button variant="outline-dark" onClick={() => handleContinue()} size='lg'>Continue</Button>
				</Container>
			</Container>
		</Container>
	)
}

export default TittleScreen
