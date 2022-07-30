/** ----------------------------------------
    Join
 ---------------------------------------- */

/**
 * The join method will create a new set
 * merging two excisting sets together. 
 * 
 * @param { object } set - parsed set
 * @param { string } target - selected target
 * @return { this } instance
 */

function join(set, target) {
    const _target = this._deconstruct(target);
    const data = this._merge(set, _target);

    this._replace(set.name, data);
    this.flush(_target.name);

    return this;
}

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default join;