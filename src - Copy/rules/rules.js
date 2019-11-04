import { basicSectionRules } from './basicSectionRules';

export const rules = (updatedObj, idsArray = [], value) => {

    if (idsArray.indexOf('basic') !== -1) {
        basicSectionRules(updatedObj, idsArray, value)
    }

    return updatedObj;
}