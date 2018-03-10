import * as API from '../APIs/api';
export const clickEmail=(data) => {
	return {
		type: 'CLICK_EMAIL',
		data
	}
		
}

export const clickPassword = (data) =>  {
	return {
		type: 'CLICK_PASSWORD',
		data
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
		type: 'CREATE_ACCOUNT'
	}
}
