/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test add()
 ---------------------------------------- */

describe('Add a value to the set', () => {
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

    test('A new value should be added to each key', () => {
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