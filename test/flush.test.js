/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test flush()
 ---------------------------------------- */

describe('Flush the set', () => {
    test('The set should be deleted', () => {
        const juggle = new Juggle();

        const user = {
            name: {
                first: 'Sander',
                last: 'Hidding'
            },
            city: 'Deventer'
        };

        const set = juggle
            .create('user', user)
            .flush('user')
            .select('user');

        const output = null;

        expect(set).toEqual(output);
    });
});