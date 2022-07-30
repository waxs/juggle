/** ----------------------------------------
    Utils
---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Path
 ---------------------------------------- */

const path = (item, keys) => {
    if(!keys || !keys.length) return false;
    const array = _isType(keys) === 'array' ? keys : keys.split('.');
    if(!array.length) return item[key];
    return array.reduce((array, key) => array[key] || false, item);
};

/** ----------------------------------------
    Export
 ---------------------------------------- */
  
export default path;