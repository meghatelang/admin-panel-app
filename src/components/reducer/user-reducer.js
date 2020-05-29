
const _state = {
    usersList: [],
    loading: false,
    usersError: null
};


const dayReducer = (state = _state, action) => {
    switch (action.type) {
        case "GET_USERS_REQUEST":
            return {...state, loading: false};
        case "GET_USERS_LOADING":
            return {...state, loading: true};
        case "GET_USERS_SUCCESS":
            const _data = action.data.data.data;
            return {...state, usersList: _data, usersError: null, loading: false};
        case "GET_USERS_FAILURE":
            const _error = action.error;
            return {...state, usersList: [], usersError: _error, loading: false};

        default :
            return state;
    }
};

export default dayReducer;