/** ----------------------------------------
    Utils
---------------------------------------- */

import _createPath from '@util/format/_createPath'; 
import _isType from '@util/check/_isType'; 
import _prefixKeys from '@util/format/_prefixKeys'; 

/** ----------------------------------------
    Config
---------------------------------------- */

/**
 * This accepted types.
 */

const types = ['array', 'object'];

/** ----------------------------------------
    Replace
---------------------------------------- */

function replace(name, data, options) {
    const type = _isType(data);

    if(!types.includes(type)) return console.error(`Not a valid type given: ${ type }`);

    const config = {
        format: type, 
        data: data,
        length: data && (data.length || 1),
        ...options
    }; 

    const settings = _prefixKeys(config, name, '.');

    Object.entries(settings)
        .forEach(setting => {
            _createPath(this._data, ...setting);
        });
 
    return this;
}

/** ----------------------------------------
    Export
---------------------------------------- */

export default replace;