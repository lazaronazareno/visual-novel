import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIndexStories, setStoriesIndex, selectIndexRoute } from '../../redux/visualNovelSlice'
import { Container } from 'react-bootstrap'
import story from './story'
import Choices from '../choices'
import './styles.scss'
import Character from './character'

function Story() {
	const dispatch = useDispatch()
	const storyIndex = useSelector(selectIndexStories)
	const routeIndex = useSelector(selectIndexRoute)

	const handleNext =() =>{
		dispatch(setStoriesIndex())
	}
	if (storyIndex === story[routeIndex].route.length) {
		return (
			<Container className="d-flex flex-column justify-content-center text-center h-100 background-image">
				<Choices />
			</Container>
		)
	}
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center background-image"
			onClick={() => handleNext()}
		>
			<Character />
			<Container
				className="d-flex flex-column justify-content-center align-items-center rounded-pill textScreen text-center"
			>
				<span className=" fs-3">{story[routeIndex].route[storyIndex].text}</span>
			</Container>
		</Container>
	)
}

export default Story
