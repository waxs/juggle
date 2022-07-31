/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _createPath from '@util/format/_createPath'; 
import _structure from '@util/function/_structure'; 
import _valueToArray from '@util/format/_valueToArray'; 

/** ----------------------------------------
    Add
 ---------------------------------------- */

/**
 * The add method can either add a new item
 * to an excisting set or add a new key to
 * each element within the set, the value will 
 * represent the newly added item or key.
 * 
 * @param { object } set - parsed set
 * @param { any } value - given value
 * @return { this } instance
 */

function add({ name, path, data, event }, value = null) {
    if(path) { 
        _structure(data, item => {
            _createPath(item, path, value);
        });
    }

    if(!path) {
        const array = _valueToArray(data);
        array.push(value);
        this._replace(name, array);
    }

    event && event(name);
  
    return this; 
}

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default add;