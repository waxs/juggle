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

function flush({ name }) {
    delete this._data[name];
    return this;
}  
 
/** ----------------------------------------
    Export
 ---------------------------------------- */

export default flush; 