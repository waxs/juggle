/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';
import _structure from '@util/function/_structure';
import _valueToArray from '@util/format/_valueToArray';

/** ----------------------------------------
    Unique Object
 ---------------------------------------- */

const uniqueObj = (array, keys = ['id']) => {
	return keys.reduce((combine, key) => {
        const items = [...new Map(array.map((item) => [item[key], item])).values()];
        items.forEach(item => !combine.includes(item) && combine.push(item));
        return combine;
    }, []);
};

/** ----------------------------------------
    Sample Keys
 ---------------------------------------- */

const sampleKeys = obj => {
    const keys = Object.keys(obj);

    const selection = keys.filter(key => {
        const type = _isType(key);
        return type === 'string' || 'number';
    });

    if(selection.includes('id')) {
        selection.sort((x, y) => { 
            return x == 'id' ? -1 : y == 'id' ? 1 : 0; 
        });
    }

    return selection.slice(0, 3);
};

/** ----------------------------------------
    Unique
 ---------------------------------------- */
 
const unique = (array, keys) => {
    const _keys = _isType(keys) !== 'boolean' ? _valueToArray(keys) : [];

    if(_isType(array === 'array')) {
        const sample = array[0];

        if(_isType(sample) === 'object') {
            const keys = _keys.length ? _keys : sampleKeys(sample);
            return uniqueObj(array, keys);
        };

        if(_isType(sample) !== 'object') {
            return [...new Set(array)]; 
        } 
    }

    return array;
};
 
/** ----------------------------------------
    Export
 ---------------------------------------- */
 
export default unique;