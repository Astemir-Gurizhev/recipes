import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload: recipe }) => {
			const isExists = state.some(r => r.id === recipe.id)

			if (isExists) {
				const index = state.findIndex(item => item.id === recipe.id)

				if (index !== -1) {
					state.splice(index, 1)
				}
			} else state.push(recipe)
		},
	},
})

export const { actions, reducer } = favoritesSlice
