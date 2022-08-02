/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test remove()
 ---------------------------------------- */

describe('Test remove() method', () => {
    test('Keys should be removed within a set', () => {
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

    test('Keys should be removed within a chunked set', () => {
        const juggle = new Juggle();

        const users = [
            {
                name: 'Sander Hidding',
                phone: '+31 0570 123456',
                city: 'Deventer'
            },
            {
                name: 'Peter Phillips',
                phone: '+31 020 1234567',
                city: 'Amsterdam'
            }
        ];

        const set = juggle
            .create('user', users)
            .chunk('user', 1)
            .remove('user', ['phone', 'city'])
            .select('user');

        const output = [
            [
                {
                    name: 'Sander Hidding'
                }
            ],
            [
                {
                    name: 'Peter Phillips'
                }
            ]
        ];

        expect(set).toEqual(output);
    });
});