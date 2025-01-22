import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { api } from './api/api'
import { reducer as favoritesReducer } from './favorites/favorite.slice'
import { userSlice } from './user/user.slice'

const logger = createLogger({
	collapsed: true
})

const reducers = combineReducers({
	favorites: favoritesReducer,
	user: userSlice.reducer,
	[api.reducerPath]: api.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware).concat(logger),
})
