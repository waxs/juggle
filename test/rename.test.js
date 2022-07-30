/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test rename()
 ---------------------------------------- */

describe('Rename keys on set', () => {
    test('Rename the keys on a given set', () => {
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
});