import { api } from './api'

export const recipeApi = api.injectEndpoints({
	endpoints: builder => ({
		createRecipes: builder.mutation({
			query: recipe => ({
				body: recipe,
				url: '/',
				method: 'POST',
			}),
		}),
	}),
})

export const {useCreateRecipesMutation} = recipeApi

// useMutation