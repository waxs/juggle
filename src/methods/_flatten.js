/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType'; 
import _structure from '@util/function/_structure'; 

/** ----------------------------------------
    Flat
 ---------------------------------------- */

/**
 * The flat function will take an object
 * and flatten it's nested values to a 
 * single root item, each key that holds an
 * object will be converted to a snakecased
 * key containing a reference to the path.
 */

const flat = (obj, parent, item = {}) => {
    const keys = Object.keys(obj);

    keys.forEach(key => {
        const prefix = parent ? parent + '_' + key : key;

        _isType(obj[key]) === 'object' 
            ? flat(obj[key], prefix, item)
            : item[prefix] = obj[key];
    });

    return item;
};

/** ----------------------------------------
    Flatten
 ---------------------------------------- */

/**
 * The flatted method will loop over each
 * item within a given set and flatten the
 * item to a single rooted object. Any nested
 * objects will be flattend according to a 
 * snake cased prefix based on their parents
 * keys. 
 * 
 * @param { object } set - parsed set
 * @return { this } instance
 */

function flatten({ name, data, info, event }) {
    const set = _structure(data, flat);

    this._replace(name, set);

    event && event(name);
    
    return this;
} 
 
/** ----------------------------------------
    Export
 ---------------------------------------- */

export default flatten;