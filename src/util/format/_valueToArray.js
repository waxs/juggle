/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';
 
/** ----------------------------------------
    Value to Array
 ---------------------------------------- */

/**
 * This function will make sure a given value
 * will be converted into an array.
 * 
 * @param { array | object } value 
 * @return { array } created array
 */
  
const valueToArray = value => {
    return _isType(value) !== 'array' ? [value] : value;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */
 
export default valueToArray;