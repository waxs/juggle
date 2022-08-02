/** ----------------------------------------
    Utils
---------------------------------------- */

import _chunk from '@util/function/_chunk';
import _createPath from '@util/format/_createPath';
import _path from '@util/function/_path';
import _structure from '@util/function/_structure';
import _unchunk from '@util/function/_unchunk';
import _valueToArray from '@util/format/_valueToArray';

/** ----------------------------------------
    Convert Path
---------------------------------------- */

const convertPath = (data, path, key) => {
    const sample = data[0];
    return _path(sample, path) ? path : [key];
};

/** ----------------------------------------
    Find Item
---------------------------------------- */

const findItem = (data, keys, value) => {
    const match = data.filter(item => _path(item, keys) === value);
    return match.length && match[0]; 
};

/** ----------------------------------------
    Merge
---------------------------------------- */

/**
 * The merge method will create a new set
 * merging two excisting sets together. 
 * 
 * @param { object } set - parsed set
 * @param { string } target - parsed target
 * @return { this } instance
 */

function merge(set, target) {
    const setInfo = set.info;
    const targetInfo = target.info;

    const setArray = _valueToArray(setInfo.chunks ? _unchunk(set.data) : set.data);
    const targetArray = _valueToArray(targetInfo.chunks ? _unchunk(target.data) : target.data);

    const setPath = convertPath(setArray, set.path, target.name);
    const targetPath = convertPath(targetArray, target.path, 'id');

    const data = _structure(setArray, item => {
        const setValue = _path(item, setPath);
        const targetValue = findItem(targetArray, targetPath, setValue);
        
        _createPath(item, setPath, targetValue || null);
        
        return item;
    });

    setInfo.chunks && _chunk(set.data, setInfo.size);
    targetInfo.chunks && _chunk(target.data, targetInfo.size);

    return data;
}

/** ----------------------------------------
    Export
---------------------------------------- */

export default merge;