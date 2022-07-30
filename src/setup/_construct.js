/** ----------------------------------------
    Defaults
 ---------------------------------------- */

import setDefaults from '@js/config/default.config';

/** ----------------------------------------
    Construct
 ---------------------------------------- */

function construct(model, config) {
    const defaults = setDefaults(config);
    defaults.forEach(config => model['_' + config.name] = config.value);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default construct;