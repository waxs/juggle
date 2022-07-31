/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _createPath from '@util/format/_createPath'; 
import _deletePath from '@util/format/_deletePath'; 
import _path from '@util/function/_path'; 
import _isEmptyObj from '@util/check/_isEmptyObj'; 
import _isType from '@util/check/_isType'; 
import _structure from '@util/function/_structure'; 

/** ----------------------------------------
    Remove
---------------------------------------- */

const removeEmptyObj = obj => {
    const keys = Object.keys(obj);

    keys.forEach(key => {
        const item = obj[key];

        if(_isType(item) === 'object') {
            removeEmptyObj(item);
            if(_isEmptyObj(item)) delete obj[key];
        } 

        return item; 
    }); 
}; 

/** ----------------------------------------
    Rename
 ---------------------------------------- */

/**
 * The rename method can rename keys
 * based on a given configuration. 
 * 
 * @param { object } set - parsed set
 * @param { object } options - configured names
 * @return { this } instance
 */

function rename({ name, data, event }, options) {
    const entries = Object.entries(options);

    _structure(data, item => {
        entries.forEach(entry => {
            const [key, value] = entry; 
            const _value = _path(item, key);

            if(value && _value) {
                _createPath(item, value, _value);
                _deletePath(item, key);
            }
        });
    
        return removeEmptyObj(item); 
    });

    event && event(name);
  
    return this;
}

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default rename;