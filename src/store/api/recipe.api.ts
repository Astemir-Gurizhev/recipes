import { IRecipeData } from '../../types/recipe.types'
import { api } from './api'

export const recipeApi = api.injectEndpoints({
	endpoints: builder => ({
		createRecipes: builder.mutation<null, IRecipeData>({
			query: recipe => ({
				body: recipe,
				url: '/',
				method: 'POST',
			}),
			invalidatesTags: () => [
				{
					type: 'Recipe',
				},
			],
		}),
	}),
})

export const { useCreateRecipesMutation } = recipeApi

// useMutation
