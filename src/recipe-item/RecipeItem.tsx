import styles from "./RecipeItem.module.css"
const RecipeItem = ({recipe}) => {
	return (
		<div className={styles.item}>
			{/* <img src="" alt="" /> */}
			<h3>{recipe.name}</h3>
			<button>Add to favorites</button>
		</div>
	)
}
export default RecipeItem