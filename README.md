# Juggle JS

![Testing](https://github.com/waxs/juggle/workflows/Testing/badge.svg)

Juggle is a simple package for manipulating objects. With Juggle you are able to quickly flip an object around and recreate it's structure. This specially beneficial for messy endpoints that need that bit of extra care before passing it on to the frontend or a component. It provides a clean and easy to read syntax for manipulation.

## Initiate Juggle JS

Getting started is easy, just initiate a new set of data and start manipulating the set with the help of Juggle.

```javascript
const juggle = new Juggle();

juggle.create('user', {
    name: 'Sander',
    year: 1989
});
```

Next you are able to either merge multiple sets, reassign keys, add new items to the set or chunk the set into smaller amounts. The following example will combine some of the helpers available, merging two sets, limiting the amount, and flatten the outcome with the help of 5 lines of code.

```javascript
const users = [
    {
        name: 'Sander Hidding',
        role: 1
    },
    {
        name: 'Peter Phillips',
        role: 1
    }
]

const role = {
    id: 1,
    name: 'Developer'
}

juggle
    .create('user', users)
    .create('role', role)
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
```

🚧 Package is currently in beta.

## Getting started

Start creating a set of data with the `create` method and apply one of the helpers to juggle your set around. The 

**Methods**

- `add()` add new item to set or related key
- `assign()` create new key on item within set
- `bundle()` bundle multiple keys into one
- `chunk()` chunk data set
- `construct()` rebuild or change items from set
- `create()` create a new data set
- `flatten()` flatten items within the set
- `flush()` remove a data set
- `join()` create a new data set based on relation
- `limit()` limit the size of the set
- `merge()` merge two data set based on relation
- `remove()` remove keys from items from set
- `rename()` rename keys of items within data set
- `segment()` retrieve a segment of data

**Selectors**

- `info()` retrieve infomation about a set
- `select()` select data from set

**Validation**

- `log()` log data from set
- `schema` validate items from the set

## Usage

The following examples gives an impression on how to use the package. Note that each function will take set information as a first parameter. The argument uses a dot notation for deconstructing sets and reading paths. For example `user` will reflect data set `user`, while `user.name` will reflect the `name` key of each item within the `user` set. Every extra dot notation will reflect a nested objects, so for example `user.name.first` will refer to the name `Sander` based on the example below. In this case the item can either be the set (single object) or be part of set (within an array).

```javascript
const item = {
    name: {
        first: 'Sander',
        last: 'Hidding'
    }
}
```

### Manipulators

#### add(set, item)
The add function will either add a new item to an excisting set or add a new key within the excisting items. 

```javascript
juggle 
    .create('user', {
        name: 'Sander',
        city: 'Deventer'
    })
    .add('user', {
        name: 'Peter',
        city: 'Amsterdam'
    });
```

This will result in the following set:

```javascript
[
    {
        name: 'Sander', 
        city: 'Deventer'
    },
    {
        name: 'Peter',
        city: 'Amsterdam'
    }   
]
```

#### assign(set, item)
The assign function can create new keys based of an excisting item within the set. It makes it possible to use available information to create new key value pairs. 

```javascript
const currentYear = new Date().getFullYear();

juggle 
    .create('user', [
        {
            name: 'Sander',
            year: 1989
        },
        {
            name: 'Peter',
            year: 1970
        }
    ])
    .assign('user.age', item => {
        return currentYear - item.year;
    });
```

This will result in the following set:

```javascript
[
    {
        age: 33,
        name: 'Sander',
        year: 1989
    },
    {
        age: 42
        name: 'Peter',
        year: 1970
    } 
]
```

#### bundle(set, keys)
The bundle method can bundle multiple keys into one, specified as the set path. The second argument takes the keys that need to be combined.

```javascript
juggle
    .create('user', {
        first: 'Sander',
        last: 'Hidding',
        city: 'Deventer'
    })
    .bundle('user.name', ['first', 'last'])
```

This will result in the following set:

```javascript
[ 
    { 
        name: { 
            first: 'Sander', 
            last: 'Hidding'
        },
        city: 'Deventer'
    } 
]
```

#### chunk(set, amount)
The chunk method will created smaller chunks of data based on a given set. The amount will specify the number of items per chunk. 

```javascript
juggle 
    .create('user', [
        {
            name: 'Sander',
            year: 1989
        },
        {
            name: 'Peter',
            year: 1970
        }
    ])
    .chunk('user', 1);
```

This will result in the following set:

```javascript
[
    [
        {
            name: 'Sander',
            year: 1989
        }
    ]
    [
        {
            name: 'Peter',
            year: 1970
        }
    ]
]
```

#### construct(set, callback)
Using the construct method it's possible to reconstruct an item with a callback. The original structure of the item will be kept, and can be extended upon. Be aware that this function does not support path definitions.

```javascript
juggle 
    .create('user', [
        {
            name: 'Sander',
            birthday: '12-02-1989'
        }
    ])
    .construct('user', item => {
        const [day, month, year] = item.birthday.split('-');
        const date = new Date(year, month - 1, day);

        return {
            iso: date.toISOString(),
            unix: date.getTime()
        };
    });
```

This will result in the following set:

```javascript
[
    {
        name: 'Sander',
        birthday: '12-02-1989',
        iso: '1989-02-12T00:00:00.000Z',
        unix: 603241200000
    }
]
```

#### create(set, data)
The create methodn will create a new set within the store. The data can either be an object or an array with multiple objects. The set can be retrieved using the `select` method, refering to the given name of the set. A set name can not use a dot notation!

```javascript
juggle 
    .create('user', [
        {
            name: 'Sander',
            country: 'The Netherlands',
            year: 1989
        }
    ]);
```

It's also possible to create multiple sets and merge them using either the `join` or `merge` method.

```javascript
juggle 
    .create('user', [
        {
            name: 'Sander',
            role: 1
        }
    ])
    .create('role', [
        {
            id: 1,
            name: 'Developer'
        }
    ]);
```

In this case the `role` within the `user` set is refering to an `id` within the `role` set. The merger will try to resolve this relation, for more information see `join()` and `merge()`.

#### flatten(set)
This method will flatten objects contained within the data set. This function is recursive and will flatten all nested keys.

```javascript
juggle 
    .create('user', [
        {
            name: {
                first: 'Sander',
                last: 'Hidding',
            },
            year: 1989
        }
    ])
    .flatten('user');
```

This will result in the following set:

```javascript
[
    {
        name_first: 'Sander',
        name_last: 'Hidding'
        year: 1989
    }
] 
```

#### flush(set, data)
The flush method will remove a set from the Juggle store. 

```javascript
juggle 
    .flush('user');
```

#### join(set, target)
This join method will merge two related sets into one set, it will remove the target and apply the merge to a given data set. 

```javascript
juggle 
    .create('user', [
        {
            name: 'Sander Hidding'
            role: 1
        }
    ])
    .create('role', [
        {
            id: 1,
            name: 'Developer'
        }
    ]);
```

This will result in the following set:

```javascript
[
    {
        name: 'Sander Hidding',
        role: {
            id: 1,
            name: 'Developer'
        }
    }
]
```

#### merge(set, target)
This merge method will do the same as a `join()`, however, it will create a new unique data set based on the merger, leaving both individual data sets intact. 

#### remove(set, keys)
The remove method can remove multiple keys at once. The second argument takes the keys that need to be removed.

```javascript
juggle
    .create('user', {
        first: 'Sander',
        last: 'Hidding',
        city: 'Deventer'
    })
    .remove('user', ['first', 'last'])
```

This will result in the following set:

```javascript
[ 
    { 
        city: 'Deventer'
    } 
]
```

#### rename(set, options)
This rename method is used for reassigning keys within items, you can either nest information or unnest keys. The `options` argument takes an object where each key represents the current key within the item, the related value represents the new assignment. Any unavailable keys will not be processed.

```javascript
juggle 
    .create('user', [
        {
            name: 'Sander Hidding',
            contact: {
                phone: '+31 0570 123456',
                city: 'Deventer',
            }
        }
    ])
    .rename('user', {
        'contact.phone': 'phone',
        'contact.city': 'address.city'
    })
```

This will result in the following set:

```javascript
[
    {
        name: 'Sander Hidding',
        phone: '+31 0570 123456',
        address: {
            city: 'Deventer'
        }
    }
] 
```

#### segment(set, options)
A segment represents part of an excisting data set. For example, let's say a user contains a role, if you want to create a unique set containing each unique rol, the `segment()` method will automatically create a new set.

```javascript
juggle 
    .create('user', [
        {
            name: 'Sander Hidding',
            role: {
                id: 1,
                name: 'Developer'
            }
        },
        {
            name: 'Peter Phillips',
            role: {
                id: 2,
                name: 'Projectmanger'
            }
        }
    ])
    .segment('user.role');
```

Using the `select()` method a new data set will be available as `role` (as such: `juggle.select('role')`).

```javascript
[
    {
        id: 1,
        name: 'Developer'
    },
    {
        id: 2,
        name: 'Projectmanger'
    }
]
```

### Selectors

#### select(set, unique)
The select method retrieves a set from the Juggle store. The select method can also be used to retrieve any nested values. Using the unique argument you can pass a boolean for retrieving each selected value or return an array of unique values (by default this will be true). If a given setname is unavailable it will return `null`.

```javascript
juggle 
    .create('user', [
        {
            name: 'Sander Hidding'
            age: 33
        },
        {
            name: 'Peter Phillips',
            age: 40
        }
    ])
    .select('user.name');
```

This will result in the following set:

```javascript
[
    'Sander Hidding', 
    'Peter Phillips'
]
```

#### info(set)
The info method retrieves related information to a data set. This contains information about the lengt, format type among other configurations. 

### Validation

#### log(set)
The log function will select a data set and directly log the result to console or terminal. This method can be chained to log sets in between differtent manipulations. It's also possible to log each action automatically passing a configuration to the constructor like so, this will log every method called with the manipulated data. 

```javascript
const juggle = new Juggle({
    log: true
});
```

#### schema(set, options)
If you need a consitent output and need to make sure that all objects match a certain schema this method will cover that need. A schema will validate for a specific 

```javascript
juggle
    .create('user', {
        name: {
            first: 'Sander',
            last: 'Hidding'
        },
        birthday: '12-02-1989'
    })
    .schema('user', {
        name: {
            value: Object,
            required: true
        },
        birthday: String
    });
```

If a key is left unspecified it will be validated as not required. You can also accept multiple types at once. The validation below will be accepted.

```javascript
juggle
    .create('user', [
        {
            name: 'Sander',
            city: 'Deventer',
            birthday: '12-02-1989'
        },
        {
            name: false,
            city: 'Amsterdam',
            birthday: '12-02-1989'
        }
    ])
    .schema('user', {
        name: [String, Boolean],
        birthday: String
    });
```

If a validation failed a error will be returned with the related object. 

### Validation

You can watch changes being made if the `watch` option has been set to true. Watcher can help you hook into a certain event taking place while manipulating your data set.

```javascript
const juggle = new Juggle({
    watch: true
});
```

Make sure that watchers are declared before manipulation.

```javascript
juggle.event.on('limit', data => {
    console.log(data);
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
```

Most actions are supported except for `flush`, `info`, `log`, `schema`, `select`, they will return the manipulated data set as shown above. In this case the `join()` method has already been called, the set is limited to a size of 1, but the `flatten()` method has not yet been executed. 

## About

Check out my [personal website](http://sanderhidding.nl) for more information. That's all folks! Cheers.