/** ----------------------------------------
    Exists
---------------------------------------- */

function exists(name) { 
    const sets = Object.keys(this._data);
    return sets.includes(name);
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default exists;