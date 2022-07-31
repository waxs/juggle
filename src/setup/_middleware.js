/** ----------------------------------------
    Utils
---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Excluded Watchers
 ---------------------------------------- */

const execluded = [
	'flush',
	'info',
	'log',
	'schema',
	'select'
];

/** ----------------------------------------
    Middleware
 ---------------------------------------- */

/**
 * The middleware will deconstruct any given
 * set name to a path, dataset, name and 
 * related infomation. If a set is not 
 * available it will set an error letting
 * the user know that the called set is
 * unavailable.
 */

function middleware(obj) {
	const extend = Object.getPrototypeOf(new obj());
	const prototype = Object.getPrototypeOf(extend);
	const methods = Object.getOwnPropertyNames(prototype);

	for(const method of methods) { 
		const fn = prototype[method];

		if(typeof fn === 'function' && fn.name !== 'Core') {
			prototype[method] = function(...args) {
				if(!method.includes('_')) {
					const set = args.shift();

					const data = Object.assign({
						event: name => this._config.watch && !execluded.includes(method) && this.event.dispatch(method, this.select(name)),
						...this._deconstruct(set)
					});
					
					this._config.log && console.log(method, data);

					if(!this._exists(data.name) && method !== 'create') {
						console.error(`This set does not exists: ${ data.name } called on ${ method }.`);
						return null; 
					};
 
					return fn.call(this, ...[data].concat(args));
				}

				return fn.call(this, ...args); 
			};
		}
	}

	return obj;
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default middleware;