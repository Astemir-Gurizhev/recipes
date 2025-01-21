import { useSelector } from 'react-redux'

export default function User() {
	const { isLoading, error, user } = useSelector(state => state.user)

	return (
		<div>
			{isLoading} ? <div>Loading...</div> : error ?{' '}
			<div>
				{error.message} : user ? <h1>User: {user.name}</h1> :{' '}
				<h1>USER NOT FOUND</h1>{' '}
			</div>
		</div>
	)
}
