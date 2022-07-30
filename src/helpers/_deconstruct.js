/** ----------------------------------------
    Utils
---------------------------------------- */

import _createPath from '@util/format/_createPath'; 
import _isType from '@util/check/_isType'; 
import _prefixKeys from '@util/format/_prefixKeys'; 
import _splitPath from '@util/format/_splitPath'; 

/** ----------------------------------------
    Deconstruct
---------------------------------------- */

function deconstruct(set) {
    const [_set, _path] = _splitPath(set);
    const data = this._data[_set] && this._data[_set]['data'];
    
    const info = Object.assign({}, this._data[_set]);
    delete info['data'];

    return {
        name: _set, 
        path: _path,
        data: data,
        info: data && info
    };
} 
 
/** ----------------------------------------
    Export
---------------------------------------- */

export default deconstruct;