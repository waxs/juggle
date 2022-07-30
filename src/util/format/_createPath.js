/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Create Path
 ---------------------------------------- */

/**
 * Will create a new path on a given object.
 * The keys argument may be specified as a
 * dot seperated path for nested key creation.
 * 
 * @param { object } item 
 * @param { string | array } keys - a given key path
 * @param { any } value - the assigned value
 * @return { object } manipulated object
 */

const createPath = (item, keys, value) => {
    const array = _isType(keys) === 'array' ? keys : keys.split('.');

    const path = array.slice(0, -1);
    const last = array[array.length - 1];

    return path.reduce((obj, key) => {
        return obj[key] = obj[key] || {}; 
    }, item)[last] = value;
};    

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default createPath;