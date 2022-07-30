/** ----------------------------------------
    Unchunk
---------------------------------------- */

const unchunk = data => {
    return data.reduce((array, chunks) => {
        return [...array, ...chunks];
    }, []);
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default unchunk;