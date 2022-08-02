/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test select()
 ---------------------------------------- */

describe('Test select() method', () => {
    test('Select values from a set', () => {
        const juggle = new Juggle();

        const users = [
            {
                name: 'Sander Hidding',
                mail: 'sander@example.com',
                role: 1
            },
            {
                name: 'Peter Phillips',
                mail: 'peter@example.com',
                role: 2
            }
        ];

        const set = juggle
            .create('user', users)
            .select('user.mail');

        const output = [
            'sander@example.com',
            'peter@example.com'
        ];

        expect(set).toEqual(output);
    });

    test('Select unique values from a set', () => {
        const juggle = new Juggle();

        const users = [
            {
                name: 'Sander Hidding',
                mail: 'sander@example.com',
                role: 1
            },
            {
                name: 'Peter Phillips',
                mail: 'peter@example.com',
                role: 2
            },
            {
                name: 'Sander Johnson',
                mail: 'sander@example.com',
                role: 1
            }
        ];

        const set = juggle
            .create('user', users)
            .select('user.mail', true);

        const output = [
            'sander@example.com',
            'peter@example.com'
        ];

        expect(set).toEqual(output);
    });

    test('Select unique items from a set based on a key', () => {
        const juggle = new Juggle();

        const users = [
            {
                id: 1,
                name: 'Sander Hidding',
                mail: 'sander@example.com'
            },
            {
                id: 1,
                name: 'Sander Hidding',
                mail: 'sander@example.com'
            },
            {
                id: 2,
                name: 'Peter Phillips',
                mail: 'peter@example.com'
            }
        ];

        const set = juggle
            .create('user', users)
            .select('user', true);

        const output = [
            {
                id: 1,
                name: 'Sander Hidding',
                mail: 'sander@example.com'
            },
            {
                id: 2,
                name: 'Peter Phillips',
                mail: 'peter@example.com'
            }
        ];

        expect(set).toEqual(output);
    });
});