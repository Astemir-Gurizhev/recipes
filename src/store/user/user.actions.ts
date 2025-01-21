const fetchUserById = userId => {
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
}

export const getUserById = userId => {}
