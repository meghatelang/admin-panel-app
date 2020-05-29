/**
 * Created by iSmile on 2/4/2020.
 */
import { fork, all } from 'redux-saga/effects';

import userSaga from './user-saga';

export default function* rootSaga() {
    yield all([
        fork(userSaga)
    ]);
}