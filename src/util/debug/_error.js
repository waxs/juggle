 /** ----------------------------------------
    Utilties
 ---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Error
 ---------------------------------------- */

const error = (checks, message) => {
    const validated = !message || _isType(checks) === 'array' ? checks.every(check => check) : checks;
    if(validated) return console.error(message) && true;
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default error;