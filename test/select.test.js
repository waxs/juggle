/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test select()
 ---------------------------------------- */

describe('Select data from set', () => {
    test('Select a key from an set', () => {
        const juggle = new Juggle();

        const users = [
            {
                name: 'Sander Hidding',
                mail: 'sander@example.com',
                role: 1
            },
            {
                name: 'Peter Phillips',
                mail: 'peter@example.com',
                role: 2
            }
        ];

        const set = juggle
            .create('user', users)
            .select('user.mail');

        const output = [
            'sander@example.com',
            'peter@example.com'
        ];

        expect(set).toEqual(output);
    });
});