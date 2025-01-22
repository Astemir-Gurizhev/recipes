import CreateRecipe from './components/create-recipe/CreateRecipe'
import Header from './components/header/Header'
import RecipeItem from './components/recipe-item/RecipeItem'
import { useGetRecipesQuery } from './store/api/api'

// const userId = 1

function App() {
	const { isLoading, data } = 
	useGetRecipesQuery()
	// 	undefined, {
	// 	skip: !userId,
	// })

	return (
		<section>
			<Header />
			{/* <User/> */}
			<CreateRecipe />
			<div>
				{isLoading ? (
					<div>Loading...</div>
				) : data ? (
					data.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
				) : (
					<div> Not found </div>
				)}
			</div>
		</section>
	)
}

export default App
