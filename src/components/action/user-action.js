export function getUsers(payload) {
    return {
        type: "GET_USERS_REQUEST",
        payload: payload
    };
}

export function getUsersLoading() {
    return {
        type: "GET_USERS_LOADING"
    };
}

export function getUsersSuccess(data) {
    return {
        type: "GET_USERS_SUCCESS",
        data: data
    };
}
export function getUsersFailure(error) {
    return {
        type: "GET_USERS_FAILURE",
        error: error
    };
}