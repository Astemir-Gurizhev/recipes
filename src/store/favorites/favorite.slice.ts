import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload: recipe }) => {
			const isExists = state.some(r => r.id === recipe.id)

			if (isExists) 
				state = state.filter(r => r.id !== recipe.id)
			else 
				state.push(recipe)
		},
	},
})

export const {actions, reducer} = favoritesSlice