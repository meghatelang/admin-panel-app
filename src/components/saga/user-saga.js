/**
 * Created by iSmile on 2/10/2020.
 */
import { put, call, fork, takeEvery, all } from 'redux-saga/effects';

import { userActions } from '../action/index';
import * as userService from '../service/user-service';

function* getUsers(action) {
    try {
        yield put(userActions.getUsersLoading());
        const userResponse = yield call(userService.getUsers, action.payload);
        yield put(userActions.getUsersSuccess(userResponse));
    } catch (error) {
        console.log(error.response);
        let _errorMsg = (error.response && error.response.data) || 'Something went wrong. Please try again after some time.';
        yield put(userActions.getUsersFailure(_errorMsg));
    }
}

export function* watchGetUsers() {
    yield takeEvery("GET_USERS_REQUEST", getUsers);
}



export default function* userSaga() {
    yield all([
        fork(watchGetUsers)
    ]);
}