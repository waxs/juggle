/** ----------------------------------------
    Chunk
---------------------------------------- */

/**
 * The chunk function will chunk a given
 * amount of data into seperated arrays.
 * 
 * @param { array } data - array of items
 * @param { array } amount - size of the chunks 
 * @return { array } chunked data
 */

const chunk = (data, amount) => {
    let chunks = [];

    for (let i = 0; i < data.length; i += amount) {
        chunks.push(data.slice(i, i + amount));
    }

    return chunks;
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default chunk;