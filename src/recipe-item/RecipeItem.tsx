import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/favorites/favorite.slice'
import styles from './RecipeItem.module.css'

const RecipeItem = ({ recipe }) => {
	const { favorites } = useSelector(state => state)

	const dispatch = useDispatch()

	console.log(favorites)

	return (
		<div className={styles.item}>
			{/* <img src="" alt="" /> */}
			<h3>{recipe.name}</h3>
			<button onClick={() => dispatch(actions.toggleFavorites(recipe))}>
				Add to favorites
			</button>
		</div>
	)
}
export default RecipeItem
