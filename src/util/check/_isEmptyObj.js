/** ----------------------------------------
    Is Empty Object
 ---------------------------------------- */

/**
 * Will check if a given object has key
 * value pairs present.
 *
 * @param { object } obj - given object
 * @return { boolean } result
 */

const isEmptyObj = obj => !!(obj && Object.keys(obj).length === 0);

/** ----------------------------------------
    Exports
 ---------------------------------------- */
 
export default isEmptyObj;