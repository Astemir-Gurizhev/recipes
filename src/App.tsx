import Header from './components/header/Header'
import RecipeItem from './components/recipe-item/RecipeItem'
import { useGetRecipesQuery } from './store/api/api'

function App() {
	const { isLoading, data } = useGetRecipesQuery()

	return (
		<section>
			<Header />
			{/* <User/> */}

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
