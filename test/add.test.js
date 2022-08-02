/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test add()
 ---------------------------------------- */

describe('Test add() method', () => {
    test('A new value should be added to a set', () => {
        const juggle = new Juggle();

        const input = {
            name: {
                first: 'Sander',
                last: 'Hidding'
            },
            city: 'Deventer'
        };

        const add = {
            name: {
                first: 'Peter',
                last: 'Phillips'
            },
            city: 'Amsterdam'
        };

        const set = juggle
            .create('user', input)
            .add('user', add)
            .select('user');

        const output = [
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
        ];

        expect(set).toEqual(output);
    });

    test('A new item should be added to a chunked set', () => {
        const juggle = new Juggle();

        const user = [
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
        ];

        const add = {
            name: {
                first: 'Nicole',
                last: 'Johnson'
            },
            city: 'Rotterdam'
        };

        const set = juggle
            .create('user', user)
            .chunk('user', 1)
            .add('user', add)
            .select('user');

        const output = [
            [
                {
                    name: {
                        first: 'Sander',
                        last: 'Hidding'
                    },
                    city: 'Deventer'
                }
            ],
            [
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

    test('A new value should be added to each item', () => {
        const juggle = new Juggle();

        const input = [
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
        ];

        const set = juggle
            .create('user', input)
            .add('user.active', true)
            .select('user');

        const output = [
            {
                active: true,
                name: {
                    first: 'Sander',
                    last: 'Hidding'
                },
                city: 'Deventer'
            },
            {
                active: true,
                name: {
                    first: 'Peter',
                    last: 'Phillips'
                },
                city: 'Amsterdam'
            }
        ];

        expect(set).toEqual(output);
    });
});