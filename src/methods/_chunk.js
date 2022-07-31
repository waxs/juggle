/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _chunk from '@util/function/_chunk'; 
import _sumArrays from '@util/function/_sumArrays'; 
import _valueToArray from '@util/format/_valueToArray'; 

/** ----------------------------------------
    Chunk
---------------------------------------- */

/**
 * The chunk method can split a given set
 * into smaller chunks based on a given
 * amount for each chunk. 
 * 
 * @param { object } set - parsed set
 * @param { number } amount - chunk size
 * @return { this } instance
 */

function chunk({ name, data, event }, amount = 10) {
    const chunks = _chunk(_valueToArray(data), amount);
 
    this._replace(name, chunks, {
        size: amount,
        chunks: chunks.length,
        length: _sumArrays(chunks)
    });
    
    event && event(name);

    return this;
}  
 
/** ----------------------------------------
    Export
 ---------------------------------------- */

export default chunk; 