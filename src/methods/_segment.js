/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';
import _path from '@util/function/_path';

/** ----------------------------------------
    Segment
 ---------------------------------------- */

/**
 * The segment method will create a new set
 * based on an excisting nested object related
 * to a key within a given set. 
 * 
 * @param { object } set - parsed set
 * @param { string } name - optional name for set
 * @return { this } instance
 */

function segment({ path, data }, name) { 
    const _name = name || path[path.length - 1];

    const _data = data.map(item => {
        const value = _path(item, path);
        if(_isType(value) === 'object') return value;
    });

    this._replace(_name, _data);

    return this;
}

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default segment;