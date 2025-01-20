import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './favorites/favorite.slice'

export const store = configureStore({
	reducer,
})