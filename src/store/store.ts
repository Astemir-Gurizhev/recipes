import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer } from './favorites/favorite.slice'

const reducers = combineReducers(reducer)

export const store = configureStore({
	reducer: reducers
})