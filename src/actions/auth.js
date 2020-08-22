import { userProfile } from '../utils/credentials';

export const loginUser = (user) => {
    const promise = new Promise((resolve, reject) => {
	    setTimeout(() => {
	    	if (user.username === userProfile.username && user.password === userProfile.password) {
                resolve(user.username);
                //login(user.username);
	    	} else {
	    		reject('Invalid user credentials');
	    	}
	        
	    }, 1500);
	});
	return promise
}

export const login = (user) => ({
    type: 'LOGIN',
    payload: user
});

export const logout = () => ({
    type: 'LOGOUT'
});