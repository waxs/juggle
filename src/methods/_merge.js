/** ----------------------------------------
    Merge
 ---------------------------------------- */

/**
 * The merge method will blend two sets
 * together replacing the given set.
 * 
 * @param { object } set - parsed set
 * @param { string } target - selected target
 * @return { this } instance
 */

function merge(set, target) {     
    const copy = JSON.parse(JSON.stringify(set.data));

    const _target = this._deconstruct(target);
    const name = `${ set.name }_${ _target.name }`;

    const data = this._merge(set, _target);

    this._replace(set.name, copy);
    this._replace(name, data);

    set.event && set.event(name);

    return this;
}

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default merge;