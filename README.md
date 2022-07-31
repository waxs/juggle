# Juggle JS

![Testing](https://github.com/waxs/juggle/workflows/Testing/badge.svg)

Juggle is a simple package for manipulating objects. With Juggle you are able to quickly flip an object around and recreate an objects structure. This specially beneficial for messy endpoints that need that bit of extra care before passing it on to the frontend or a component. It provides a clean and easy to read syntax for manipulating objects, setting up sets and segments.

## Initiate Juggle JS

Getting started is easy, just initiate a new set of data and start manipulating the set with the help of Juggle.

```javascript
const juggle = new Juggle();

juggle.create('user', {
  name: 'Sander',
  year: 1989,
});
```

You just created a set called `user`. Next you are able to either merge multiple sets, reassign keys, add new items to the set, or chunk the set into smaller amounts. The following example will combine some of the helpers available, merging two sets, limiting the amount, and flatten the outcome with the help of 5 lines of code.

```javascript
const users = [
  {
    name: 'Sander Hidding',
    role: 1,
  },
  {
    name: 'Peter Phillips',
    role: 1,
  },
];

const role = {
  id: 1,
  name: 'Developer',
};

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

Start creating a set of data with the `create` method and apply one of the helpers to juggle your set around.

**Methods**

- `add()` add new item to set or apply a key
- `assign()` create new key on a item within set
- `bundle()` bundle multiple keys into one
- `chunk()` chunk data set
- `construct()` rebuild or change items from set
- `create()` create a new data set
- `flatten()` flatten items within the set
- `flush()` remove a set
- `join()` create a new data set based on relation
- `limit()` limit the size of the set
- `merge()` merge two data set based on relation
- `remove()` remove keys from items within a set
- `rename()` rename keys of items within a set
- `segment()` retrieve a segment of data and create new set

**Selectors**

- `info()` retrieve infomation about a set
- `select()` select data from set

**Validation**

- `log()` log data from set
- `schema` validate items from the set

## Usage

The following examples gives an impression on how to use the package. Note that each function will take set information as a first parameter. The argument uses a dot notation for deconstructing sets and reading paths. For example `user` will reflect a set called `user`, while `user.name` will reflect the `name` key of each item within the `user` set. Every extra dot notation will reflect a nested objects, so for example `user.name.first` will refer to the name `Sander` based on the example below. In this case the item can either be the set (single object) or be part of set (within an array). Most methods will support the use of object paths as described within this documentation.

```javascript
const item = {
  name: {
    first: 'Sander',
    last: 'Hidding',
  },
};
```

### Manipulators

#### add(set, item)

The add function will either add a new item to an excisting set or add a new key within the excisting items.

```javascript
juggle
  .create('user', {
    name: 'Sander',
    city: 'Deventer',
  })
  .add('user', {
    name: 'Peter',
    city: 'Amsterdam',
  });
```

This will result in the following set:

```javascript
[
  {
    name: 'Sander',
    city: 'Deventer',
  },
  {
    name: 'Peter',
    city: 'Amsterdam',
  },
];
```

#### assign(set, item)

The assign function can create new keys based of an excisting item within the set. It makes it possible to use the data from an item to create new key value pair. In the following example we will calculate the age of a user.

```javascript
const currentYear = new Date().getFullYear();

juggle
  .create('user', [
    {
      name: 'Sander',
      year: 1989,
    },
    {
      name: 'Peter',
      year: 1970,
    },
  ])
  .assign('user.age', (item) => {
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
    city: 'Deventer',
  })
  .bundle('user.name', ['first', 'last']);
```

This will result in the following set:

```javascript
[
  {
    name: {
      first: 'Sander',
      last: 'Hidding',
    },
    city: 'Deventer',
  },
];
```

#### chunk(set, amount)

The chunk method will created smaller chunks of data based on a given set. The amount will specify the number of items per chunk.

```javascript
juggle
  .create('user', [
    {
      name: 'Sander',
      year: 1989,
    },
    {
      name: 'Peter',
      year: 1970,
    },
  ])
  .chunk('user', 1);
```

This will result in the following set:

```javascript
[
  [
    {
      name: 'Sander',
      year: 1989,
    },
  ][
    {
      name: 'Peter',
      year: 1970,
    }
  ],
];
```

#### construct(set, callback)

Using the construct method it's possible to reconstruct an item with a callback. The original structure of the item will be kept, and can be extended upon. Be aware that this function does not support path definitions.

```javascript
juggle
  .create('user', [
    {
      name: 'Sander',
      birthday: '12-02-1989',
    },
  ])
  .construct('user', (item) => {
    const [day, month, year] = item.birthday.split('-');
    const date = new Date(year, month - 1, day);

    return {
      iso: date.toISOString(),
      unix: date.getTime(),
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
    unix: 603241200000,
  },
];
```

#### create(set, data)

The create method will create a new set within the store. The data can either be an object or an array with multiple objects. The set can be retrieved using the `select` method, refering to the given name of the set. A set name can not use a dot notation!

```javascript
juggle.create('user', [
  {
    name: 'Sander',
    country: 'The Netherlands',
    year: 1989,
  },
]);
```

It's also possible to create multiple sets and merge them using either the `join` or `merge` method.

```javascript
juggle
  .create('user', [
    {
      name: 'Sander',
      role: 1,
    },
  ])
  .create('role', [
    {
      id: 1,
      name: 'Developer',
    },
  ]);
```

In this case the `role` within the `user` set is refering to an `id` within the `role` set. The merger will try to resolve this relation, for more information see `join()` and `merge()`.

#### flatten(set)

This method will flatten objects contained within a set. This function is recursive and will flatten all nested keys snake casing each key.

```javascript
juggle
  .create('user', [
    {
      name: {
        first: 'Sander',
        last: 'Hidding',
      },
      year: 1989,
    },
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
juggle.flush('user');
```

#### join(set, target)

This join method will merge two related sets into one set, it will remove the target and apply the merge to a given data set. If both sets are related with the use of a unique ID, a shorthand function will automatically determine the relation as shown below.

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
    ])
    .join('user', 'role')
```

The same thing can be achieved being more explicit, if an `id` is not presented within the set as such `.join('user.role', 'role.id')`. Both will result in the following set:

```javascript
[
  {
    name: 'Sander Hidding',
    role: {
      id: 1,
      name: 'Developer',
    },
  },
];
```

#### merge(set, target)

This merge method will do the same as a `join()`, however, it will create a new unique data set based on the merger, leaving both individual data sets intact. In the example shown within the `join()` method the same output will be generated, but a new set is available as `user_role` this can be retrieved using the `select()` method (as such: `juggle.select('user_role')`).

#### remove(set, keys)

The remove method can remove multiple keys at once. The second argument takes the keys that need to be removed.

```javascript
juggle
  .create('user', {
    first: 'Sander',
    last: 'Hidding',
    city: 'Deventer',
  })
  .remove('user', ['first', 'last']);
```

This will result in the following set:

```javascript
[
  {
    city: 'Deventer',
  },
];
```

#### rename(set, options)

This rename method is used for reassigning keys within items, you can either nest information or unnest keys. The `options` argument takes an object where each key represents the current key within the item (target), the related value represents the new assignment (assigned key). Any unavailable keys will not be processed.

```javascript
juggle
  .create('user', [
    {
      name: 'Sander Hidding',
      contact: {
        phone: '+31 0570 123456',
        city: 'Deventer',
      },
    },
  ])
  .rename('user', {
    'contact.phone': 'phone',
    'contact.city': 'address.city',
  });
```

This will result in the following set:

```javascript
[
  {
    name: 'Sander Hidding',
    phone: '+31 0570 123456',
    address: {
      city: 'Deventer',
    },
  },
];
```

#### segment(set, options)

A segment represents part of an excisting data set. For example, let's say each user contains a role, if you want to create a unique set containing each unique role, the `segment()` method will automatically create a new set.

```javascript
juggle
  .create('user', [
    {
      name: 'Sander Hidding',
      role: {
        id: 1,
        name: 'Developer',
      },
    },
    {
      name: 'Peter Phillips',
      role: {
        id: 2,
        name: 'Projectmanger',
      },
    },
  ])
  .segment('user.role');
```

Using the `select()` method a new data set will be available as `role` (as such: `juggle.select('role')`).

```javascript
[
  {
    id: 1,
    name: 'Developer',
  },
  {
    id: 2,
    name: 'Projectmanger',
  },
];
```

### Selectors

#### select(set, unique)

The select method retrieves a set from the Juggle store. The select method can also be used to retrieve any nested values, for instance `juggle.select('name.age')`. If a given set is unavailable it will return `null`.

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

This will result in the following set, while `.select('user')` would have returned the created set.

```javascript
['Sander Hidding', 'Peter Phillips'];
```

If you need to return a unique set of items a second paramater is available. It is recommended that the set holds a unique key like an `id` and pass it as a argument. By default this options will be `false`.

| type                       | description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| .select('user')            | Will return the set `user`                                     |
| .select('user.name')       | Will return the `name` of each item within the set `user`      |
| .select('user.name', true) | Will return unique values based on `name` from the `user` set  |
| .select('user', 'name')    | Will return unique objects based on `name` from the `user` set |

The following options are available but not recommended! What will happen using `.select('user', true)` is that a sample is taking from the array (the first item), it will look for 3 keys and try to find unique values. If an `id` is present, this will be the first key that is being checked, this has the highest outcome of a unqiue dataset. If this is not presented it will look for multiple other keys (strings or numbers). In the case a name (for example) is used more then once, or an age is presented more than once this will cause complications. The same thing is true for doing this process manually (shown in the second example below).

| type                             | description                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| .select('user', true)            | Will try (!!) to return all unique items from `user` set based                      |
| .select('user', ['name', 'age']) | Will try to return all unique objects based on `name` and `age` from the `user` set |

👀 Warning: be aware that setting the `unique` parameter to true, or settings more then one key for a set of objects, that does not include a unique value (like an `id`) key may result in unexpected results.

#### info(set)

The info method retrieves related information to a data set. This contains information about the length, format among other configurations added to a set while juggling it around.

### Validation

#### log(set)

The log function will select a set and directly log the result to console or terminal. This method can be chained in between differtent manipulations. It's also possible to log each action automatically passing a configuration to the constructor like so, this will log every method called with the manipulated data.

```javascript
const juggle = new Juggle({
  log: true,
});
```

#### schema(set, options)

If you need a consitent output and need to make sure that all objects match a certain schema, this `schema()` method will cover that need. A schema will validate for a specific configuration given, keys could either be required or support multiple types.

```javascript
juggle
  .create('user', {
    name: {
      first: 'Sander',
      last: 'Hidding',
    },
    birthday: '12-02-1989',
  })
  .schema('user', {
    name: {
      value: Object,
      required: true,
    },
    birthday: String,
  });
```

If a key is left unspecified it will be validated as not required. You can also accept multiple types at once. The validation below for example will be accepted.

```javascript
juggle
  .create('user', [
    {
      name: 'Sander',
      city: 'Deventer',
      birthday: '12-02-1989',
    },
    {
      name: false,
      city: 'Amsterdam',
      birthday: '12-02-1989',
    },
  ])
  .schema('user', {
    name: [String, Boolean],
    birthday: String,
  });
```

If a validation failed an error will be returned with the related object.

### Watcher

You can watch changes being made if the `watch` option has been set to true. Watchers can help you hook into a certain event taking place while manipulating your data set, it will return the manipulated set from that specific action.

```javascript
const juggle = new Juggle({
  watch: true,
});
```

Make sure that watchers are declared before manipulation.

```javascript
juggle.event.on('limit', (data) => {
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
      role: 1,
    },
    {
      name: 'Peter Phillips',
      role: 1,
    },
  ])
  .create('role', {
    id: 1,
    name: 'Developer',
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

Most actions are supported except for `flush`, `info`, `log`, `schema`, `select`, they will return the manipulated data set as shown above. In this case the `join()` method has already been called, the set is limited to a size of 1, but the `flatten()` method has not yet been executed, the final output will be flattened while you are able to work with the data inbetween manipulations.

## About

Check out my [personal website](http://sanderhidding.nl) for more information. That's all folks! Cheers.
