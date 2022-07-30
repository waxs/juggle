/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';
import _structure from '@util/function/_structure';

/** ----------------------------------------
    Unique Key
 ---------------------------------------- */

const uniqueKey = (array, keys = ['id']) => {
    return keys.map(key => {
        return [...new Set(array.map(item => item[key]))];
    });
};

/** ----------------------------------------
    Unique
 ---------------------------------------- */
 
const unique = array => {
    // if(_isType(array === 'array')) {
    //     const sample = array[0];
    
    //     if(_isType(sample) === 'object') {
    //         const keys = Object.keys(sample);
    //         return keys.includes('id') ? uniqueKey(array) : uniqueKey(array, keys);
    //     };

    //     if(_isType(sample) !== 'object') {
    //         return [...new Set(array)]; 
    //     } 
    // }

    // // _structure(array, (item, key) => {
    // //     return [item[key], item];
    // // });

    return array;
};
 
/** ----------------------------------------
    Export
 ---------------------------------------- */
 
export default unique;