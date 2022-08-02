/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test assign()
 ---------------------------------------- */

describe('Test assign() method', () => {
    test('A new key value pair should be assigned to a set', () => {
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
            .assign('user.fullname', item => {
                return `${ item.name.first } ${ item.name.last }`;
            })
            .select('user');

        const output = [
            {
                name: {
                    first: 'Sander',
                    last: 'Hidding'
                },
                fullname: 'Sander Hidding',
                city: 'Deventer'
            }
        ];

        expect(set).toEqual(output);
    });

    test('A new key value pair should be assigned to a chunked set', () => {
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

        const set = juggle
            .create('user', user)
            .chunk('user', 1)
            .assign('user.fullname', item => {
                return `${ item.name.first } ${ item.name.last }`;
            })
            .select('user');

        const output = [
            [
                {
                    name: {
                        first: 'Sander',
                        last: 'Hidding'
                    },
                    fullname: 'Sander Hidding',
                    city: 'Deventer'
                }
            ],
            [
                {
                    name: {
                        first: 'Peter',
                        last: 'Phillips'
                    },
                    fullname: 'Peter Phillips',
                    city: 'Amsterdam'
                }
            ]
        ];

        expect(set).toEqual(output);
    });
});