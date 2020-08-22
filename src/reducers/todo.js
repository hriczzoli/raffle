const todoReducerDefaultState = [];

export default (state = todoReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE_TODO':
            return state.filter(( item ) => item.id !== action.payload.id);
        case 'EDIT_TODO':
            return state.map((todo) => {
                console.log(action)
                if (todo.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                } else {
                    return todo;
                };
            });
        default:
            return state;
    }
};