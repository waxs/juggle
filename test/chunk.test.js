/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test chunk()
 ---------------------------------------- */

describe('Chunk the set in smaller chunks', () => {
    test('The data should be chunked', () => {
        const juggle = new Juggle();

        const users = [
            {
                name: {
                    first: 'Sander',
                    last: 'Hidding'
                },
                city: 'Deventer'
            },
            {
                name: {
                    first: 'Peter',
                    last: 'Phillips'
                },
                city: 'Amsterdam'
            },
            {
                name: {
                    first: 'Nicole',
                    last: 'Johnson'
                },
                city: 'Rotterdam'
            },
        ];

        const set = juggle
            .create('user', users)
            .chunk('user', 2)
            .select('user');

        const output = [
            [
                {
                    name: {
                        first: 'Sander',
                        last: 'Hidding'
                    },
                    city: 'Deventer'
                },
                {
                    name: {
                        first: 'Peter',
                        last: 'Phillips'
                    },
                    city: 'Amsterdam'
                }
            ],
            [
                {
                    name: {
                        first: 'Nicole',
                        last: 'Johnson'
                    },
                    city: 'Rotterdam'
                }
            ]
        ];

        expect(set).toEqual(output);
    });
});