import { configureStore } from '@reduxjs/toolkit'
import visualNovelReducer from '../redux/visualNovelSlice'

export default configureStore({
	reducer: {
		visualNovel: visualNovelReducer,
	},
})
