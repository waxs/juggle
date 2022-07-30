/** ----------------------------------------
    Juggle
 ---------------------------------------- */

import Juggle from '@build/juggle.pkg';

/** ----------------------------------------
    Test merge()
 ---------------------------------------- */

describe('Merge two sets into new set', () => {
    test('A new set should be available', () => {
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
            .merge('user.role', 'role')
            .select('user_role');

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