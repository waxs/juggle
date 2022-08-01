/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _createPath from '@util/format/_createPath'; 
import _structure from '@util/function/_structure'; 
import _valueToArray from '@util/format/_valueToArray'; 

/** ----------------------------------------
    Bundle
 ---------------------------------------- */

/**
 * The bundle method can be used to assign
 * multiple keys to a newly created key and
 * bundle the information.
 * 
 * @param { object } set - parsed set
 * @param { array } keys - keys to be added
 * @return { this } instance
 */

function bundle({ name, data, path, event }, keys) {    
    _structure(data, item => {
        keys && _valueToArray(keys).forEach(key => {
            _createPath(item, [...path, key], item[key]);
            delete item[key];
        });
    });

    event && event(name);

    return this; 
}

/** ----------------------------------------
    Export
 ---------------------------------------- */ 

export default bundle;