import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorite.slice'
import { userSlice } from './user/user.slice'

const reducers = combineReducers({
	favorites: favoritesReducer,
	user: userSlice.reducer
})

export const store = configureStore({
	reducer: reducers,
})
