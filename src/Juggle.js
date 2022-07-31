/** ----------------------------------------
    Hangin Core
 ---------------------------------------- */
 
import Core from '@js/Core'; 

/** ----------------------------------------   
    Utils
 ---------------------------------------- */

import _schema from '@util/debug/_schema';

/** ----------------------------------------   
    Setup
 ---------------------------------------- */

import construct from '@js/setup/_construct';
import middleware from '@js/setup/_middleware';
 
/** ----------------------------------------
    Juggle 
 ---------------------------------------- */

class Juggle extends Core {    
   
    /** ----------------------------------------
        Constructor
     ---------------------------------------- */

    constructor(config = {}) {  
        super(); 

        if(typeof window !== 'undefined' || typeof global !== 'undefined') {
            this.validate(config);
            construct(this, config);
            this.init();
        }
    }

    validate(config) {
        const validate = _schema({
            log: {
                value: Boolean,
                required: false
            },
            watch: {
                value: Boolean,
                required: false
            }
        }); 

        const check = validate(config);

        if(!check) return console.error(`Unvalid configuration set: ${ config }`);
    }

    init() {
        Object.seal(this);
    }
     
}    

/** ----------------------------------------
    Exports
 ---------------------------------------- */
 
export default middleware(Juggle);