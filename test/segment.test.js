/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test remove()
 ---------------------------------------- */

describe('Test segment() method', () => {
    test('A new segment is created from a set', () => {
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
            .segment('user.contact')
            .select('contact');

        const output = [
            {
                phone: '+31 0570 123456',
                city: 'Deventer'
            },
            {
                phone: '+31 020 1234567',
                city: 'Amsterdam'
            }
        ];

        expect(set).toEqual(output);
    });

    test('A new segment is created from a chunked set', () => {
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
            .segment('user.contact')
            .select('contact');

        const output = [
            {
                phone: '+31 0570 123456',
                city: 'Deventer'
            },
            {
                phone: '+31 020 1234567',
                city: 'Amsterdam'
            }
        ];

        expect(set).toEqual(output);
    });
});