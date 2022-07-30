/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Delete Path
 ---------------------------------------- */

/**
 * Will delete a specifc path on a given object.
 * The keys argument may be specified as a
 * dot seperated path for nested key.
 * 
 * @param { object } item 
 * @param { string | array } keys - a given key path
 * @return { object } manipulated object
 */

const deletePath = (item, keys) => {
    if(!item || !keys) return;
  
    const array = _isType(keys) === 'array' ? keys : keys.split('.');
  
    for(let i = 0; i < array.length - 1; i++) {
        item = item[array[i]];
        if (typeof item === 'undefined') return;
    }
  
    delete item[array.pop()];
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

 export default deletePath;