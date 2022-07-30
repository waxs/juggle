/** ----------------------------------------
    Create
 ---------------------------------------- */

/**
 * The create method will create a new set
 * of data and assign additional information 
 * to the set for internal use. 
 * 
 * @param { object } set - parsed set
 * @param { array, object } data - item(s) assigned
 * @return { this } instance
 */

function create({ name }, data) {
    if(this._exists(name)) return console.error(`This set is already active: ${ name }`);

    this._replace(name, data, {   
        chunks: false
    });
 
    return this;
}

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default create;