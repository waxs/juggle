/** ----------------------------------------
    Flush
 ---------------------------------------- */

/**
 * The flush method will delete a data set
 * from the store and removes all related
 * data.
 * 
 * @param { object } set - parsed set
 * @return { this } instance
 */

function flush({ name, event }) {
    if(!this._exists(name)) return console.error(`This set is not active: ${ name }`);
    delete this._data[name];
    return this;
}  
 
/** ----------------------------------------
    Export
 ---------------------------------------- */

export default flush; 