/** ----------------------------------------
    Extend
 ---------------------------------------- */

const extend = (model, fn) => {
    Object.keys(fn).forEach((method) => model.prototype[method] = fn[method]);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default extend;