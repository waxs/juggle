/** ----------------------------------------
    Utils
---------------------------------------- */

import _chunk from '@util/function/_chunk';

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

    const replace = set.info.chunks ? _chunk(data, set.info.size) : data;

    this._replace(set.name, replace);
    this.flush(_target.name);

    set.event && set.event(set.name);

    return this;
} 

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default join;