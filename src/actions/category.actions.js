import { actionsConstans } from '../utilitys/constants/filters';

export const addCategory = category => {
    // console.log(category);
    return {
        type: actionsConstans.ADD_CATEGORY,
        category: category.category
    }
};