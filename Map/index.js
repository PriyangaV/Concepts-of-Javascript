/*
  @ Map
    * Holds key-value pairs and remembers the original insertion order of the keys

    * Any value (both objects and primitive values) may be used as either a key or a value

    $ A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.

    > Key equality
      $ Key equality is based on the sameValueZero algorithm

      $ NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator

      $ ES6 - -0 and +0 are considered equal

    > Objects (vs) Maps
      $ Object is similar to Map

      $ —both let us set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key

      * There were no built-in alternatives), Object has been used as Map historically

      ! There are important differences that make Map preferable in certain cases

        ? Map
          > Accidental Keys
            $ A Map does not contain any keys by default. It only contains what is explicitly put into it.

          > Key Types
            $ A Map's keys can be any value (including functions, objects, or any primitive).

          > Key Order
            $ The keys in Map are ordered in a simple, straightforward way: A Map object iterates entries, keys, and values in the order of entry insertion.

          > Size
            $ The number of items in a Map is easily retrieved from its size property.

          > Iteration
            $ A Map is an iterable, so it can be directly iterated.

          > Performance
            $ Performs better in scenarios involving frequent additions and removals of key-value pairs.

        ? Object
          > Accidental Keys
            $ An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful

              * As of ES5, this can be bypassed by using Object.create(null), but this is seldom(rarely) done.

          > Key Types
            $ The keys of an Object must be either a String or a Symbol.

          > Key Order
            $ Although the keys of an ordinary Object are ordered now, they didn't used to be, and the order is complex. As a result, it's best not to rely on property order.

              * for..in -  includes only enumerable string-keyed properties
              * Object.keys - includes only own, enumerable, string-keyed properties
              * Object.getOwnPropertyNames includes own, string-keyed properties even if non-enumerable
              * Object.getOwnPropertySymbols does the same for just Symbol-keyed properties

          > Size
            $ The number of items in an Object must be determined manually.

          > Iteration
            $ Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default).

                * An object can implement the iteration protocol, or we can get an iterable for an object using Object.keys or Object.entries

                * The for...in statement allows us to iterate over the enumerable properties of an object.

          > Performance
            $ Not optimized for frequent additions and removals of key-value pairs.


    > Setting object properties
        $ Setting Object properties works for Map objects as well, and can cause considerable confusion.

            let wrongMap = new Map()
            wrongMap['bla'] = 'blaa'
            wrongMap['bla2'] = 'blaaa2'

            console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

            * This way of setting a property does not interact with the Map data structure

            * It uses the feature of the generic object

            * The value of 'bla' is not stored in the Map for queries

            * Other operations on the data fail

                wrongMap.has('bla')    // false
                wrongMap.delete('bla') // false
                console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }


          > The correct usage for storing data in the Map is through the set(key, value) method

                let contacts = new Map();

                console.log(contacts.size) // 0

                contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})

                contacts.has('Jessie') // true

                contacts.get('Hilary') // undefined

                contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})

                console.log(contacts.size) // 2

                contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}

                contacts.delete('Raymond') // false

                contacts.delete('Jessie') // true

                console.log(contacts.size) // 1

      > Map() constructor creates Map objects
        $ new Map([iterable])
          * [iterable] - An Array or other iterable object whose elements are key-value pairs

                ? Arrays with two elements, such as [[ 1, 'one' ],[ 2, 'two' ]]

                ? Each key-value pair is added to the new Map.


                let myMap = new Map([
                  [1, 'one'],
                  [2, 'two'],
                  [3, 'three'],
                ]);

                for(const [index, value] of myMap.entries()) {
                  console.log(index, value) // 1, 'one' - 2, 'two', 3, 'three'
                  console.log(typeof index, typeof value) - 'number', 'string'
                }

      > Static properties - get Map[@@species]
        $ The species accessor property returns the default constructor for Map objects. Subclass constructors may over-ride it to change the constructor assignment

                Map[Symbol.species]; // function Map()

                class MyMap extends Map {
                  - // Overwrite MyMap species to the parent Map constructor
                  static get [Symbol.species]() { return Map; }
                }

      > Instance properties - size (accessor property)
        $ Returns the number of key/value pairs in the Map object

          const map1 = new Map();

          map1.set('a', 'alpha');
          map1.set('b', 'beta');
          map1.set('g', 'gamma');

          console.log(map1.size);

      > Instance methods
          * clear() - removes all elements from a Map object

                const map1 = new Map();

                map1.set('bar', 'baz');
                map1.set(1, 'foo');

                console.log(map1.size); // 2

                map1.clear(); // return value - undefined

                console.log(map1.size); // 0

          * delete(key) - removes the specified element from a Map object by key

                const map1 = new Map();
                map1.set('bar', 'foo');

                console.log(map1.delete('bar')); // true
                - // (true indicates successful removal)

                - // false if the element does not exist.

                console.log(map1.has('bar')); // false

          * get()
              $ Returns a specified element from a Map object

              $ If the value that is associated to the provided key is an object, then we will get a reference to that object

              $ Any change made to that object will effectively modify it inside the Map object

                const map1 = new Map();
                map1.set('bar', 'foo');

                console.log(map1.get('bar')); // "foo"

                console.log(map1.get('baz')); // undefined

          * has(key) - returns a boolean indicating whether an element with the specified key exists or not

                const map1 = new Map();
                map1.set('bar', 'foo');

                console.log(map1.has('bar')); // true

                console.log(map1.has('baz')); // false

          * set(key, value)
                $ adds or updates an element with a specified key and a value to a Map object

                $ Returns the Map object

                  let myMap = new Map()

                  - // Add new elements to the map
                  myMap.set('bar', 'foo')
                  myMap.set(1, 'foobar')

                  - // Update an element in the map
                  myMap.set('bar', 'baz')

                > set() with chaining

                  - // Add new elements to the map with chaining.
                      myMap.set('bar', 'foo')
                        .set(1, 'foobar')
                        .set(2, 'baz');


        > Iteration methods
              $ [@@iterator]()

                  * @@iterator property is the same function object as the initial value of the entries method

                  * Returns the map iterator function, which is the entries() function by default

                    const map1 = new Map();

                    map1.set('0', 'foo');
                    map1.set(1, 'bar');
                    myMap.set({}, 'baz')

                    const iterator1 = map1[Symbol.iterator]();

                    - [@@iterator]() with for..of

                    for (const item of iterator1) {
                      console.log(item); // ["0", "foo"], [1, "bar"], [{}, "baz"]
                    }

                    for (const [key, value] of myMap) {
                      console.log(`${key}: ${value}`); // 0: foo, 1: bar, [Object]: baz
                    }

                    - [@@iterator]()

                    console.log(iterator1.next().value) // ["0", "foo"]
                    console.log(iterator1.next().value) // [1, "bar"]
                    console.log(iterator1.next().value) // [Object, "baz"]
                    console.log(iterator1.next().value) // undefined


              $ keys()
                    * returns a new Iterator object that contains the keys for each element in the Map object in insertion order

                        const map1 = new Map();

                        map1.set('0', 'foo');
                        map1.set(1, 'bar');

                        const iterator1 = map1.keys();

                        console.log(iterator1.next().value); // "0"

                        console.log(iterator1.next().value); // 1

              $ values()
                    * returns a new Iterator object that contains the values for each element in the Map object in insertion order

                        const map1 = new Map();

                        map1.set('0', 'foo');
                        map1.set(1, 'bar');

                        const iterator1 = map1.values();

                        console.log(iterator1.next().value); // "foo"

                        console.log(iterator1.next().value); // "bar"

              $ entries()
                    * returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order

                        const map1 = new Map();

                        map1.set('0', 'foo');
                        map1.set(1, 'bar');

                        const iterator1 = map1.entries();

                        console.log(iterator1.next().value); // ["0", "foo"]

                        console.log(iterator1.next().value); // [1, "bar"]


              $ forEach()
                    * executes a provided function once per each key/value pair in the Map object, in insertion order

                    function logMapElements(value, key, map) {
                      console.log(`m[${key}] = ${value}`);
                    }

                    new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
                      .forEach(logMapElements);

                      > Callback with three arguments
                          $ the entry's value
                          $ the entry's key
                          $ the Map object being traversed

                    - // "m[foo] = 3"
                    - // "m[bar] = [object Object]"
                    - // "m[baz] = undefined"

                    * return value is undefined

                    ? NaN can also be used as a key

                        let myMap = new Map()
                        myMap.set(NaN, 'not a number')

                        myMap.get(NaN) // "not a number"

                        let otherNaN = Number('foo')
                        myMap.get(otherNaN) // "not a number"


                    > Relation with Array objects

                        let kvArray = [['key1', 'value1'], ['key2', 'value2']]

                        - // Use the regular Map constructor to transform a 2D key-value Array into a map
                        let myMap = new Map(kvArray)

                        myMap.get('key1') // returns "value1"

                        - // Use Array.from() to transform a map into a 2D key-value Array
                        console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

                        - // A succinct way to do the same, using the spread syntax
                        console.log([...myMap])

                        - // Or use the keys() or values() iterators, and convert them to an array
                        console.log(Array.from(myMap.keys())) // ["key1", "key2"]

                    > Cloning and merging Maps
                        $ Just like Arrays, Maps can be cloned:

                          let original = new Map([
                            [1, 'one']
                          ])

                          let clone = new Map(original)

                          console.log(clone.get(1))       // one
                          console.log(original === clone) // false (useful for shallow comparison)

                          ! Keep in mind that the data itself is not cloned

                    > Maps can be merged, maintaining key uniqueness

                          let first = new Map([
                            [1, 'one'],
                            [2, 'two'],
                            [3, 'three'],
                          ])

                          let second = new Map([
                            [1, 'uno'],
                            [2, 'dos']
                          ])

                          - // Merge two maps. The last repeated key wins.
                          - // Spread operator essentially converts a Map to an Array
                          let merged = new Map([...first, ...second])

                          console.log(merged.get(1)) // uno
                          console.log(merged.get(2)) // dos
                          console.log(merged.get(3)) // three

                          * Merge with arrays

                                let first = new Map([
                                  [1, 'one'],
                                  [2, 'two'],
                                  [3, 'three'],
                                ])

                                let second = new Map([
                                  [1, 'uno'],
                                  [2, 'dos']
                                ])

                                - // Merge maps with an array. The last repeated key wins.
                                let merged = new Map([...first, ...second, [1, 'eins']])

                                console.log(merged.get(1)) // eins
                                console.log(merged.get(2)) // dos
                                console.log(merged.get(3)) // three













*/
