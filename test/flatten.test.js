/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test flatten()
 ---------------------------------------- */

describe('Flatten the set', () => {
    test('A single object should be flattened', () => {
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
            .flatten('user')
            .select('user');

        const output = [
            {
                name_first: 'Sander',
                name_last: 'Hidding',
                city: 'Deventer'
            }
        ];

        expect(set).toEqual(output);
    });

    test('An array of objects should be flattened', () => {
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
            }
        ];

        const set = juggle
            .create('user', users)
            .flatten('user')
            .select('user');

        const output = [
            {
                name_first: 'Sander',
                name_last: 'Hidding',
                city: 'Deventer'
            },
            {
                name_first: 'Peter',
                name_last: 'Phillips',
                city: 'Amsterdam'
            }
        ];

        expect(set).toEqual(output);
    });
});