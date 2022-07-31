/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _createPath from '@util/format/_createPath'; 
import _structure from '@util/function/_structure'; 

/** ----------------------------------------
    Assign
 ---------------------------------------- */

/**
 * The assign method will create a new key
 * value pair using a loop that will pass each
 * item within the set to callback, making it 
 * possible to create new keys from excisting
 * data and merging multiple values. 
 * 
 * @param { object } set - parsed set
 * @param { function } callback - assigned value
 * @return { this } instance
 */

function assign({ name, path, data, event }, callback) {
    _structure(data, item => {
        _createPath(item, path, callback(item));
        return item; 
    });

    event && event(name);

    return this;
}; 

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default assign;