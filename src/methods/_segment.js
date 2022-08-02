/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';
import _path from '@util/function/_path';
import _structure from '@util/function/_structure';
import _unchunk from '@util/function/_unchunk';

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

function segment({ path, data, event, info }, name) { 
    const _name = name || path[path.length - 1];

    const set = _structure(data, item => {
        const value = _path(item, path);
        if(_isType(value) === 'object') return value;
    });

    this._replace(_name, info.chunks ? _unchunk(set) : set);

    event && event(name);

    return this;
}

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default segment;