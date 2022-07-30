/** ----------------------------------------
    Sum Arrays
 ---------------------------------------- */

 /**
 * Will sum the length of multiple arrays
 * contained within an array.
 * 
 * @param { array } data - array of arrays
 * @return { number } total length
 */

const sumArrays = data => {
    return data.reduce((total, item) => total += item.length, 0);
};

/** ----------------------------------------
    Export
 ---------------------------------------- */
  
export default sumArrays;