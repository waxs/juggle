/** ----------------------------------------
    Package
 ---------------------------------------- */

const Juggle = require('../dist/juggle.pkg');

/** ----------------------------------------
    Test
 ---------------------------------------- */

/**
 * This file is used for testing, it will be 
 * executed using "npm run start" command and  
 * log the results within the terminal.
 */

const juggle = new Juggle({
    watch: true,
    log: false
});

juggle.event.on('limit', data => {
    console.log('LIMIT:', data);
});

// [
//     {
//         name: 'Sander Hidding', 
//         role: {
//             id: 1, 
//             name: 'Developer'
//         }
//     }
// ]

juggle
    .create('user', [
        {
            name: 'Sander Hidding',
            role: 1
        },
        {
            name: 'Peter Phillips',
            role: 1
        }
    ])
    .create('role', {
        id: 1,
        name: 'Developer'
    })
    .join('user', 'role')
    .limit('user', 1)
    .flatten('user')
    .log('user');

// [
//     {
//         name: 'Sander Hidding', 
//         role_id: 1, 
//         role_name: 'Developer'
//     }
// ]