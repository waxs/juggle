/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test rename()
 ---------------------------------------- */

describe('Test rename() method', () => {
    test('Keys should be renamed within a set', () => {
        const juggle = new Juggle();

        const user = {
            name: 'Sander Hidding',
            contact: {
                phone: '+31 0570 123456',
                city: 'Deventer'
            }
        };

        const set = juggle
            .create('user', user)
            .rename('user', {
                'contact.phone': 'phone',
                'contact.city': 'address.city'
            })
            .select('user');

        const output = [
            {
                name: 'Sander Hidding',
                phone: '+31 0570 123456',
                address: {
                    city: 'Deventer'
                }
            }
        ];

        expect(set).toEqual(output);
    });

    test('Keys should be renamed within a chunked set', () => {
        const juggle = new Juggle();

        const users = [
            {
                name: 'Sander Hidding',
                contact: {
                    phone: '+31 0570 123456',
                    city: 'Deventer'
                }
            },
            {
                name: 'Peter Phillips',
                contact: {
                    phone: '+31 020 1234567',
                    city: 'Amsterdam'
                }
            }
        ];

        const set = juggle
            .create('user', users)
            .chunk('user', 1)
            .rename('user', {
                'contact.phone': 'phone'
            })
            .select('user');

        const output = [
            [
                {
                    name: 'Sander Hidding',
                    phone: '+31 0570 123456',
                    contact: {
                        city: 'Deventer'
                    }
                }
            ],
            [
                {
                    name: 'Peter Phillips',
                    phone: '+31 020 1234567',
                    contact: {
                        city: 'Amsterdam'
                    }
                }
            ]
        ];

        expect(set).toEqual(output);
    });
});