import React from 'react'
import { useSelector } from 'react-redux'
import { selectIndexStories, selectIndexRoute } from '../../redux/visualNovelSlice'
import { Container, Image } from 'react-bootstrap'
import story from './story'
import './styles.scss'

function Character() {
	const storyIndex = useSelector(selectIndexStories)
	const routeIndex = useSelector(selectIndexRoute)

	return (
		<Container className="d-flex justify-content-center align-items-center storyScreen">
			<Image className="img img-fluid" src={story[routeIndex].route[storyIndex].image}/>
		</Container>
	)
}

export default Character
