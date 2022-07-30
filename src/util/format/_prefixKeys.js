/** ----------------------------------------
    Prefix Keys
 ---------------------------------------- */

/**
 * This function will connect a set of keys
 * on a given item with a declared prefix.
 * 
 * @param { object } item 
 * @param { string } prefix
 * @param { string } connector - the seperation symbol
 * @return { object } manipulated object
 */

const prefixKeys = (item, prefix, connector = '_') => {
    const keys = Object.keys(item);

    return keys.reduce((obj, key) => {
        obj[prefix + (connector && connector) + key] = item[key];
        delete item[key];
        return obj;
    }, item);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */
 
export default prefixKeys;