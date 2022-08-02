/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';
import _isEmptyObj from '@util/check/_isEmptyObj';

/** ----------------------------------------
    Rules
 ---------------------------------------- */

const validate = config => {

    const error = msg => {
        throw new Error(msg);
    };

    const warning = msg => {
        if(config.warning) console.error(msg);
    };

    /** ----------------------------------------
        Type Validation
     ---------------------------------------- */

    const type = (arg, validate) => {
        const type = _isType(arg);
        if(type !== validate) error(`Given ${ arg } should be of ${ validate } while ${ type } given`);
    };

    /** ----------------------------------------
        Validations
     ---------------------------------------- */

    return {

        add: (_, value) => {
            if(!value) error(`No value specified for add method.`);
        },

        assign: (_, callback) => {
            type(callback, 'function');
        },

        bundle: ({ path }, keys) => {
            if(!path) warning(`No path given for bundle method, use "[set].[path]" to target a key.`);
            if(!keys) error(`No keys have been specified to bundle.`);
            type(keys, 'array');
        },

        construct: (_, callback) => {
            type(callback, 'function');
        },

        create: ({ name, data }) => {
            if(data !== undefined) error(`This set (${ name }) has already been created.`);
        },

        join: ({ name, data }, target) => {
            if(!name && !target) error(`The join method requires a name and target.`);
            type(target, 'string');
        },

        merge: ({ name }, target) => {
            if(!name && !target) error(`The merge method requires a name and target.`);
            type(target, 'string');
        },

        limit: ({ info }, size) => {
            if(info.length < size) warning(`The selected size (${ size }) is larger then the set (${ info.length }).`);
            type(size, 'number');
        },

        remove: (_, keys) => {
            if(!keys) warning(`No keys have been specified to remove.`);
            type(keys, 'array');
        },

        rename: (_, options) => {
            if(_isEmptyObj(options)) warning(`No options have been specified to rename.`);
            type(options, 'object');
        }

    };

};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default validate;