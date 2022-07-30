/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Structure
 ---------------------------------------- */
   
const structure = (data, callback) => {
    const handleObject = obj => {
        if(_isType(obj) === 'array') return handleArray(obj);
        return callback(obj);
    };

    const handleArray = array => {
        return array.map(handleObject);
    };
     
    const types = {
        array: array => handleArray(array), 
        object: obj => handleObject(obj)
    };

    const type = _isType(data);

    if(!Object.keys(types).includes(type)) return console.error(`Not a valid type given: ${ type }`);
    
    return types[type](data);
};
   
/** ----------------------------------------
    Export
---------------------------------------- */
  
export default structure;