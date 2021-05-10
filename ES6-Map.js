/*
  @ Map (ES6)
    $ Maps are a new object type that allow to store collections of key-value pairs!

    ? Unlike with objects, map keys can be of any type, even objects or functions

      ^ Easy to get the size of a map, while it's not as straightforward for objects

      * We can iterate in the order in which the values were added, contrary to objects where there’s no guarantee about the order

    @ Methods
        * set()
        * get()
        * size()
        * has()
        * delete()
        * clear()

        let things = new Map();

        const myFunc = () => '4';

        things.set('1', 'Car');
        things.set('2', 'House');
        things.set('3', 'Robot');
        things.set(myFunc, 'Key is a function!');

        things.size; // 4

        things.has('1'); // true

        things.has(myFunc) // true
        things.has(() => '4'); // false, not the same reference
        things.get(myFunc); // 'Key is a function!'

        things.delete('2'); // delete returns true
        things.has('2'); // false

        things.clear(); // clear returns undefined
        things.size; // 0

      # Setting key-value pairs is chainable

          things.set('5', 'Watch')
                .set('6', 'Guitar')
                .set('7', 'Joystick');

          const myMap = new Map();

          ! Even another map can be a key

          things.set(myMap, 'Oh gosh!');
          things.size; // 4
          things.get(myMap); // 'Oh gosh!'

      # Initializing Maps from Arrays
        & We can initialize a map from an array that contains arrays of two values...

        const partyArray = [
          ['1', 'Champagne'],
          ['2', 'Cake'],
          ['3', 'Gifts'],
        ];

        let partyMap = new Map(partyArray);
        partyMap.get('1'); // Champagne

      # Iterating Over Maps
        & We can iterate over maps using "for…of" and "array destructuring"

          let activities = new Map();

          activities.set(1, 'Swim');
          activities.set(2, 'Race');
          activities.set(3, 'Sail');
          activities.set(4, 'Jump');

          for (let [key, activity] of activities) {
            console.log(`Activity ${key} is ${activity}`);
          }

          - // Activity 1 is Swim
          - // Activity 2 is Race
          - // Activity 3 is Sail
          - // Activity 4 is Jump

      $ activities.forEach((activity, key) => console.log(`Activity ${key} is ${value}`));


*/
