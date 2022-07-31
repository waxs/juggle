/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _structure from '@util/function/_structure'; 
import _path from '@util/function/_path'; 
import _unique from '@util/function/_unique'; 
import _valueToArray from '@util/format/_valueToArray'; 

/** ----------------------------------------
    Select
 ---------------------------------------- */
 
/**
 * The select method will return the data
 * based on a given set. It's also possible
 * to retrieve a collection of items based
 * on a specifc path. This will return all
 * values related to any nested key. 
 * 
 * @param { object } set - parsed set
 * @param { boolean } unique - return unique items
 * @return { array } data related to set
 */

function select({ path, data }, unique = false) {
    const set = !path || !path.length 
        ? data || null 
        : _structure(data, item => {
            return _path(item, path);
        });

    const array = _valueToArray(set);

    return unique ? _unique(array, unique) : array; 
};

/** ----------------------------------------
    Export
 ---------------------------------------- */ 

export default select;