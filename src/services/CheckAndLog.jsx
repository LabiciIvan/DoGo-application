import jwt_decode from 'jwt-decode';

/**
 * Checks for a token in localStorage, if token exists
 * it will try to decode it and check the exp time, if exp 
 * time is valid it will return the decode token (JSON object) 
 * containing the user info, otherwise it will return null.
 * 
 * @param {JWT} newToken 
 * 
 * @returns JSON || null
 */
const CheckAndLog  = (newToken) => {

	// When a new token is passed. 
	if (newToken) {
		// Remove previous one and store new one.
		localStorage.removeItem('TOKEN');

		// Store the new token
		localStorage.setItem('TOKEN', newToken);
	}

	// Get token from local storage.
	const token = localStorage.getItem('TOKEN');

	// Decode the token.
	const tokenDecoded = token ? jwt_decode(token) : null;

	// Enter if token existed in local storage.
	if (tokenDecoded) {
		const currentTimeSec = Math.floor(Date.now()/1000);
		const tokenExpDate = tokenDecoded.exp;

		if (tokenExpDate < currentTimeSec) {
			// Token expired, remove it from local storage.
			localStorage.removeItem('TOKEN');
			return null;
		}

		// Token not expired, keep it.
		return tokenDecoded;
	}

	// Token does not exist in local storage.
	return null;
}
 
export default CheckAndLog;