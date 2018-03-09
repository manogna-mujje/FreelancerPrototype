
export const clickEmail=(data) => {
	return {
		type: 'CLICK_EMAIL',
		data
	}
		
}

export const clickPassword = () =>  {
	return {
		type: 'CLICK_PASSWORD'
	}
		
}

export const clickUsername = (data) => {
	return {
		type: 'CLICK_USERNAME',
		data
	}
}


export const createAccount = () => {
	return {
		type: 'SUBMIT_FORM'
	}
}