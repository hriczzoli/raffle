const initialState = {
    currentUser: {}
};

export default ((state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, currentUser: action.payload};
        case 'LOGOUT':
            return {currentUser: {}};
        default:
            return state;
    }
})