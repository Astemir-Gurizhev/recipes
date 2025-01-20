import { useActions } from '../../hooks/useActions'
import styles from './RecipeItem.module.css'
import { useFavorites } from '../../hooks/useFavorites'

const RecipeItem = ({ recipe }) => {
	const {favorites} = useFavorites()

	const { toggleFavorites } = useActions()

	const isExists = favorites.some(r => r.id === recipe.id)

	return (
		<div className={styles.item}>
			{/* <img src="" alt="" /> */}
			<h3>{recipe.name}</h3>
			<button onClick={() => toggleFavorites(recipe)}>
				{isExists ? 'Remove from' : 'Add to'} favorites
			</button>
		</div>
	)
}
export default RecipeItem
