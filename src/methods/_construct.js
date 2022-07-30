/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _structure from '@util/function/_structure'; 

/** ----------------------------------------
    Construct
 ---------------------------------------- */

/**
 * The construct method can be used to assign
 * and construct an item within a given set. 
 * This method does not support paths, meaning
 * the complete item has to be build from the 
 * ground up, the callback needs to return an
 * array that will be merged leaving the orginal
 * item intact. 
 * 
 * @param { object } set - parsed set
 * @param { function } callback - new key values
 * @return { this } instance
 */

function construct({ name, data }, callback) {
    let array = [];

    _structure(data, item => {
        array.push({
            ...item,
            ...callback(item)
        });

        return array;
    });

    this._replace(name, array);

    return this;
}

/** ----------------------------------------
    Export
 ---------------------------------------- */ 

export default construct;