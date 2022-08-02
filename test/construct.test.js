/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test construct()
 ---------------------------------------- */

describe('Test construct() method', () => {
    test('Items should be reconstructed within a set', () => {
        const juggle = new Juggle();

        const users = [
            {
                name: {
                    first: 'Sander',
                    last: 'Hidding'
                },
                birthday: '12-02-1989',
                city: 'Deventer'
            },
            {
                name: {
                    first: 'Peter',
                    last: 'Phillips'
                },
                birthday: '27-07-1981',
                city: 'Amsterdam'
            }
        ];

        const set = juggle
            .create('user', users)
            .construct('user', item => {
                const [day, month, year] = item.birthday.split('-');
                const date = new Date(year, month - 1, day);

                return {
                    iso: date.toISOString(),
                    unix: date.getTime()
                };
            })
            .select('user');

        const output = [
            {
                name: {
                    first: 'Sander',
                    last: 'Hidding'
                },
                birthday: '12-02-1989',
                iso: '1989-02-12T00:00:00.000Z',
                unix: 603244800000,
                city: 'Deventer'
            },
            {
                name: {
                    first: 'Peter',
                    last: 'Phillips'
                },
                birthday: '27-07-1981',
                iso: '1981-07-27T00:00:00.000Z',
                unix: 365040000000,
                city: 'Amsterdam'
            }
        ];

        expect(set).toEqual(output);
    });

    test('Items should be reconstructed within a chunked set', () => {
        const juggle = new Juggle();

        const users = [
            {
                name: {
                    first: 'Sander',
                    last: 'Hidding'
                },
                birthday: '12-02-1989',
                city: 'Deventer'
            },
            {
                name: {
                    first: 'Peter',
                    last: 'Phillips'
                },
                birthday: '27-07-1981',
                city: 'Amsterdam'
            }
        ];

        const set = juggle
            .create('user', users)
            .chunk('user', 1)
            .construct('user', item => {
                const [day, month, year] = item.birthday.split('-');
                const date = new Date(year, month - 1, day);

                return {
                    iso: date.toISOString(),
                    unix: date.getTime()
                };
            })
            .select('user');

        const output = [
            [
                {
                    name: {
                        first: 'Sander',
                        last: 'Hidding'
                    },
                    birthday: '12-02-1989',
                    iso: '1989-02-12T00:00:00.000Z',
                    unix: 603244800000,
                    city: 'Deventer'
                }
            ],
            [
                {
                    name: {
                        first: 'Peter',
                        last: 'Phillips'
                    },
                    birthday: '27-07-1981',
                    iso: '1981-07-27T00:00:00.000Z',
                    unix: 365040000000,
                    city: 'Amsterdam'
                }
            ]
        ];

        expect(set).toEqual(output);
    });
});