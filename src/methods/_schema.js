/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _schema from '@util/debug/_schema';
import _structure from '@util/function/_structure';

/** ----------------------------------------
    Schema
 ---------------------------------------- */
 
/**
 * Validate the result using a schema, a 
 * schema will check if the object match
 * a specific setup. 
 * 
 * @param { object } set - parsed set
 * @param { object } options - schema
 * @return { this } instance
 */

function schema({ data }, options) {
    _structure(data, item => {
        const validate = _schema(options); 
        if(!validate(item)) return console.error(`This item ${ item } is unvalidated and does not match the given schema:`, options);
    });

    return this;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */ 

export default schema;