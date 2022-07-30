/** ----------------------------------------
    Utils
---------------------------------------- */

import _isType from '@util/check/_isType';
import _isEmptyObj from '@util/check/_isEmptyObj';

/** ----------------------------------------
    Checks
---------------------------------------- */

/**
 * This function will check if a given value
 * matches the declared type.
 */

const check = (value, type) => {
    return _isType(value) === type.name.toLowerCase();
};

/**
 * Check will delegate the schema depending
 * on multiple accepted types, a required 
 * option and return a validation. 
 */

const checks = (schema, obj, keys) => {
    return keys.reduce((array, key) => {
        let value = obj[key];
        let types = schema[key];

        const format = _isType(types);
    
        if(format === 'object') types = types.required ? types.value : null;

        if(types === null) return array;

        if(!types) {
            console.error(`A key (${ key }) has not been declared on the item:`, obj);
            array.push(false);
            return array;
        }

        const multiple = _isType(types) === 'array';

        const compare = !multiple 
            ? check(value, types) 
            : types.some(type => {
                return check(value, type);
            });
    
        const log = multiple ? types.map(type => type.name).join(', ') : types.name;
        
        if(!compare) console.error(`Given value for ${ key } (${ typeof value }) is not of a valid type matching the schema: [${ log }]`);
    
        array.push(compare);
    
        return array;
    }, []);
};

/** ----------------------------------------
    Schema
---------------------------------------- */

/**
 * A simple (schema) type validator for matching
 * types. Used for type validation in objects, 
 * will return a closure that can validate a given
 * object. The closure will resolve a boolean
 * that will output the resolved checks. 
 * 
 * Use as follows:
 * 
 * const validate = schema({
 *   title: String,
 *   category: [Array, Boolean]
 * });
 * 
 * const check = validate({
 *   title: 'Sander',
 *   category: ['developer']
 * })
 * 
 * console.log(check)
 * 
 * It's also possible to set required values
 * within the schema, meaning, a value should
 * be present to validate.
 * 
 * const validate = schema({
 *   title: {
 *      value: String,
 *      required: true
 *   },
 *   category: [Array, Boolean]
 * });
 * 
 * @param { schema } object - keys and matching type(s)
 * @return { function } validate
 */

const schema = (schema, empty = true) => {
    if(!schema) return () => true;

    return obj => {
        if(!empty && (_isEmptyObj(obj) || !obj)) {
            console.error(`No item (or empty object) passed to validate`);
            return true;
        }

        const keys = Object.keys(schema);
        const validation = checks(schema, obj, keys);

        return validation.every(check => !!check);
    };
}; 

/** ----------------------------------------
    Export
---------------------------------------- */

export default schema;