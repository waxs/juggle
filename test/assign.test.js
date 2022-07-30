/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test assign()
 ---------------------------------------- */

describe('Assign value to the set', () => {
    test('A new key should be assigned', () => {
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
});