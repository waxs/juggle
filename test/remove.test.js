/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test remove()
 ---------------------------------------- */

describe('Remove keys on set', () => {
    test('Remove the keys on a given set', () => {
        const juggle = new Juggle();

        const user = {
            name: 'Sander Hidding',
            phone: '+31 0570 123456',
            city: 'Deventer'
        };

        const set = juggle
            .create('user', user)
            .remove('user', ['phone', 'city'])
            .select('user');

        const output = [
            {
                name: 'Sander Hidding'
            }
        ];

        expect(set).toEqual(output);
    });
});