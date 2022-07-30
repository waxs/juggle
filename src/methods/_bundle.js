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

function bundle({ data, path }, keys) {
    if(!path) return console.error('No path given, use "[set].[path]" to target a key.');
    if(!keys) console.error('No keys have been specified to bundle.');
    
    _structure(data, item => {
        keys && _valueToArray(keys).forEach(key => {
            _createPath(item, [...path, key], item[key]);
            delete item[key];
        });
    });

    return this; 
}

/** ----------------------------------------
    Export
 ---------------------------------------- */ 

export default bundle;