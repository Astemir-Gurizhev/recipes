import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'
import styles from './RecipeItem.module.css'

interface IRecipeItem {
	recipe: IRecipe
}

const RecipeItem = ({ recipe }:IRecipeItem) => {
	const { favorites } = useFavorites()

	const { toggleFavorites } = useActions()

	const isExists = favorites.some(r => r.id === recipe.id)

	return (
		<div className={styles.item}>
			<img src={recipe.image} alt={recipe.name} width={100} />
			<h3>{recipe.name}</h3>
			<button onClick={() => toggleFavorites(recipe)}>
				{isExists ? 'Remove from' : 'Add to'} favorites
			</button>
		</div>
	)
}
export default RecipeItem
