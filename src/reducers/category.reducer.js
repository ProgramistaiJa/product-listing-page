import {actionsConstans} from '../utilitys/constants/filters';

export const category = (state = [], action) => {
    // console.log(action);
    switch (action.type) {
        case actionsConstans.ADD_CATEGORY:
            return action.category;
        default:
            return state;
    }
};