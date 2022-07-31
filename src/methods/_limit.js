/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _createPath from '@util/format/_createPath'; 
import _structure from '@util/function/_structure'; 
import _valueToArray from '@util/format/_valueToArray'; 

/** ----------------------------------------
    Limit
 ---------------------------------------- */

/**
 * The limit method can be used to limit
 * the size of a set, by default the size will
 * be 10 items.
 * 
 * @param { object } set - parsed set
 * @param { number } size - size of the set
 * @return { this } instance
 */

function limit({ name, data, event }, size = 10) {
    const set = data.slice(0, size);
    this._replace(name, set);
    event && event(name);
    return this; 
}

/** ----------------------------------------
    Export
 ---------------------------------------- */ 

export default limit;