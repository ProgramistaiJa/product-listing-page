import { combineReducers } from 'redux';
import { color } from './color.reducer';
import { category } from './category.reducer';

const rootReducer = combineReducers({
    color,
    category
});

export default rootReducer;