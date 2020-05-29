/**
 * Created by iSmile on 2/3/2020.
 */
import { combineReducers } from 'redux';

import userReducer from './user-reducer';

const rootReducer = combineReducers({
    userReducer
});

export default rootReducer;