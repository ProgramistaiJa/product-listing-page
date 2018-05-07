import { actionsConstans } from '../utilitys/constants/filters';

export const addColor = color => {
    console.log(color);
    return {
        type: actionsConstans.ADD_COLOR,
        color: color.color
    }
};