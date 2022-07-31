/** ----------------------------------------
    Extend
 ---------------------------------------- */

const init = (model, fn) => {
    Object.keys(fn).forEach((state) => {
        fn[state](model.prototype);
    });
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default init;