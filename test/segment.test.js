/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test remove()
 ---------------------------------------- */

describe('Create segments of data', () => {
    test('Create a new segment', () => {
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
});