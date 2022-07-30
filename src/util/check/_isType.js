/** ----------------------------------------
    Util
 ---------------------------------------- */

import _isArray from '@util/check/_isArray'; 

/** ----------------------------------------
    Is Type 
 ---------------------------------------- */

/**
 * Check the type of a given value.
 *
 * @param { string | number | array | object } value - value to check
 * @return { string } type of given value
 */

const isType = value => {
    return _isArray(value) && 'array' || typeof value;
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default isType;