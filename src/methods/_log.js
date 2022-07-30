/** ----------------------------------------
    Log
 ---------------------------------------- */
 
/**
 * The log method will return log the result
 * selected and by reusing the select method.
 * 
 * @param { object } set - parsed set
 * @return { this } instance
 */

function log({ name, path }, unique = false) {
    const set = !!path.length ? `${ name }.${ path.join('.') }` : name;
    const data = this.select(set, unique);

    console.log(data);
    
    return this;
}; 

/** ----------------------------------------
    Export
 ---------------------------------------- */ 

export default log;