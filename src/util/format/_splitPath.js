/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Split Path
---------------------------------------- */

/**
 * A given string can be split into a unique
 * set name and (if dot seperated) a path.
 * This function will format a string into
 * multiple seperated values use for
 * deconstructing a given set name.
 * 
 * @param { string } path 
 * @return { array } seperated name and path
 */
 
const splitPath = path => {
    const split = _isType(path) === 'array' ? path : path.split('.');
    const set = split.shift();
    return [set, !!split.length && split];
};
 
/** ----------------------------------------
    Export
 ---------------------------------------- */

export default splitPath;