/** ----------------------------------------
    Event
 ---------------------------------------- */

import Emit from '@util/helper/Emit';

/** ----------------------------------------
    Events
 ---------------------------------------- */

/**
 * Declares a global event listener that can
 * be used to either dispatch events or listen
 * to changes made handeling 
 */

function event(model) {
    let _event = new Emit();

    Object.defineProperty(model, 'event', {
        get: () => {
            return _event;
        },
        set: () => {}
    }); 
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default event;