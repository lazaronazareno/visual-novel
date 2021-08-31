import { createSlice } from '@reduxjs/toolkit'

export const visualNovelSlice = createSlice({
	name: 'visualNovel',
	initialState: {
		indexStories: 0,
		indexRoute: 0,
		choicesIndex: 0,
		showStory: false,
		showTitle: true,
		showText: true
	},
	reducers: {
		isShowStory: (state, action) => {
			state.showHistory = action.payload
		},
		isShowTitle: (state, action) => {
			state.showTitle = action.payload
		},
		setStoriesIndex : (state) => {
			state.indexStories += 1
		},
		setInitialIndexStories : (state,action) => {
			state.indexStories = action.payload
		},
		setRouteIndex : (state) => {
			state.indexRoute += 1
		},
		setInitialRouteIndex : (state,action) => {
			state.indexRoute = action.payload
		},
	},
})

export const {
	isShowStory,
	isShowTitle,
	setStoriesIndex,
	setInitialIndexStories,
	setRouteIndex,
	setInitialRouteIndex
} = visualNovelSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount))
// 	}, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.visualNovel.value)`
export const selectStory = (state) => state.visualNovel.history
export const selectShowStory = (state) => state.visualNovel.showHistory
export const selectShowTitle = (state) => state.visualNovel.showTitle
export const selectIndexStories = (state) => state.visualNovel.indexStories
export const selectIndexRoute = (state) => state.visualNovel.indexRoute

export default visualNovelSlice.reducer