import {actionsConstans} from '../utilitys/constants/filters';

export const color = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case actionsConstans.ADD_COLOR:
            return action.color;
        default:
            return state;
    }
};