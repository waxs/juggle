/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test join()
 ---------------------------------------- */

describe('Join two sets into one', () => {
    test('The role should be merged into users', () => {
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

        const roles = [
            {
                id: 1,
                name: 'Frontend Developer'
            },
            {
                id: 2,
                name: 'Backend Developer'
            },
        ];

        const set = juggle
            .create('user', users)
            .create('role', roles)
            .join('user', 'role')
            .select('user');

        const output = [
            {
                name: 'Sander Hidding',
                mail: 'sander@example.com',
                role: {
                    id: 1,
                    name: 'Frontend Developer'
                }
            },
            {
                name: 'Peter Phillips',
                mail: 'peter@example.com',
                role: {
                    id: 2,
                    name: 'Backend Developer'
                }
            }
        ];

        expect(set).toEqual(output);
    });
});