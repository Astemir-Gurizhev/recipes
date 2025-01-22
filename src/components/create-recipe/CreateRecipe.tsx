import { useState, FormEvent } from 'react'
import { useCreateRecipesMutation } from '../../store/api/recipe.api'
import { IRecipeData } from '../../types/recipe.types'

const CreateRecipe = () => {
	const defaultValue:IRecipeData = {
		name: '',
		image: '',
	}

	const [recipe, setRecipe] = useState<IRecipeData>(defaultValue)

	const [createRecipe] = useCreateRecipesMutation()

	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createRecipe(recipe).then(() => {
			setRecipe(defaultValue)
		})
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<p>Create new recipe:</p>
				<label>
					<input
						type='text'
						placeholder='Name'
						value={recipe.name}
						onChange={e => setRecipe({ ...recipe, name: e.target.value })}
					/>
					<input
						type='text'
						placeholder='Image'
						value={recipe.image}
						onChange={e => setRecipe({ ...recipe, image: e.target.value })}
					/>
				</label>
				<button type='submit'>Create</button>
			</form>
		</div>
	)
}
export default CreateRecipe
