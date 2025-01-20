import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorite.slice'

const reducers = combineReducers({
	favorites:favoritesReducer,
})

export const store = configureStore({
	reducer: reducers
})