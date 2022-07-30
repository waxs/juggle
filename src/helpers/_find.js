/** ----------------------------------------
    Utils
---------------------------------------- */

import _createPath from '@util/format/_createPath'; 
import _isType from '@util/check/_isType'; 
import _prefixKeys from '@util/format/_prefixKeys'; 

/** ----------------------------------------
    Find
---------------------------------------- */

function find(set, data, options) {
    const types = ['array', 'object'];
    const type = _isType(data);

    const selected = this._data[type].filter(item => {
        return item && item[key] === value;
    });

    if(!selected.length) return null;

    return selected[0];
}

/** ----------------------------------------
    Export
---------------------------------------- */

export default find;