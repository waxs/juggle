/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test bundle()
 ---------------------------------------- */

describe('Bundle keys into one', () => {
    test('New key should be assigned', () => {
        const juggle = new Juggle();

        const users = [
            {
                name: 'Sander Hidding',
                mail: 'sander@example.com',
                city: 'Deventer'
            },
            {
                name: 'Peter Phillips',
                mail: 'peter@example.com',
                city: 'Amsterdam'
            }
        ];

        const set = juggle
            .create('user', users)
            .bundle('user.contact', ['mail', 'city'])
            .select('user');

        const output = [
            {
                name: 'Sander Hidding',
                contact: {
                    mail: 'sander@example.com',
                    city: 'Deventer'
                }
            },
            {
                name: 'Peter Phillips',
                contact: {
                    mail: 'peter@example.com',
                    city: 'Amsterdam'
                }
            }
        ];

        expect(set).toEqual(output);
    });
});