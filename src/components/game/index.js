import React from 'react'
import { useSelector } from 'react-redux'
import { selectShowStory, selectShowTitle } from '../../redux/visualNovelSlice'
import Menu from '../buttons'
import TittleScreen from '../tittleScreen'
import { Container } from 'react-bootstrap'
import Story from '../story'

function Game() {
	const showTitle = useSelector(selectShowTitle)
	const showStory = useSelector(selectShowStory)
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center screen" fluid>
			{showTitle && ( <TittleScreen /> )}
			{showStory && ( <Story /> )}
			<Menu />
		</Container>
	)
}

export default Game
