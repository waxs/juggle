/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _deletePath from '@util/format/_deletePath'; 
import _structure from '@util/function/_structure'; 
import _valueToArray from '@util/format/_valueToArray'; 

/** ----------------------------------------
    Remove
 ---------------------------------------- */

/**
 * The remove method can be used to delete
 * multiple keys from an item within the set
 * 
 * @param { object } set - parsed set
 * @param { array } keys - keys to be added
 * @return { this } instance
 */

function remove({ name, data, event }, keys) {    
    _structure(data, item => {
        keys && _valueToArray(keys).forEach(key => {
            item[key] && _deletePath(item, key);
        });
    });

    event && event(name);

    return this;
}

/** ----------------------------------------
    Export
 ---------------------------------------- */ 

export default remove;