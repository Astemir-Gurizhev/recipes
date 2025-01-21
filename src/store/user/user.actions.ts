import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchUserById = userId => 
	new Promise(resolve =>
		setTimeout(
			() =>
				resolve({
					id: 1,
					name: 'Astemir',
				}),
			1000
		)
	)


export const getUserById = createAsyncThunk('users/by-id', async(userId, thunkApi) => {
	const response = await fetchUserById(userId)
	return response
})
