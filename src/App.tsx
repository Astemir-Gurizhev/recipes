import Header from './components/header/Header'
import RecipeItem from './components/recipe-item/RecipeItem'
import User from './components/user/User'
import { useGetRecipesQuery } from './store/api/api'




function App() {

	const {isLoading, data} = useGetRecipesQuery()
	console.log(data);
	

	return (
		<section>
			<Header />
			<User/>

			<div>
				<RecipeItem
					recipe={{
						id: 1,
						name: 'Лазанья',
					}}
				/>

				<RecipeItem
					recipe={{
						id: 2,
						name: 'Каша',
					}}
				/>

				<RecipeItem
					recipe={{
						id: 3,
						name: 'Паста',
					}}
				/>
			</div>
		</section>
	)
}

export default App
