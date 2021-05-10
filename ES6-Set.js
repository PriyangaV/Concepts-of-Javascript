/*
  @ Set (ES6)
    $ Sets are a new object type with ES6 that allow creating collections of unique values!

    ? The values in a set can be either simple primitives like strings or integers as well as more complex object types like object literals or arrays...

    # Available methods on it
        * add()
        * size()
        * has()
        * forEach()
        * delete()
        * clear()

        - // Simple Primitive Values

          let numbers = new Set();

          numbers.add(1);
          numbers.add(2);
          numbers.add(3);
          numbers.add(4);
          numbers.add(5);
          console.log(numbers.size); // 5
          numbers.add(5);
          console.log(numbers.size); // 5

          console.log(numbers.has(1)); // true
          console.log(numbers.has(6)); // false

          numbers.delete(1); // delete returns true
          console.log(numbers.has(1)); // false

          numbers.forEach(num => console.log(num))
          - // 2, 3, 4, 5

          numbers.clear();
          console.log(numbers.size); // 0

        - // Passing an array

        let myNumbers = new Set([1, 2, 3, 4, 5, 6, 1, 4, 3]);

        myNumbers.add([7, 8, 5]);
        myNumbers.add({val: 9, val: 10});

        console.log(myNumbers.size); // 8

        myNumbers.forEach(num => console.log(num));
          - // 1, 2, 3, 4, 5, 6
          - // [7, 8, 5]
          - // {val: 10}

          myNumbers.add({val9: 9, val: 10});
            - // {val9: 9, val: 10}

        ? for...of instead of "forEach"
          for (let num of myNumbers) console.log(num);

    # Passing Strings
        let sentence = new Set('Only unique characters will be in this set.');
        console.log(sentence.size); // 18

        'Only unique characters will be in this set.'.length // 43

    # Keys and Values
        > Sets also have the keys and values methods

          $ With "keys" being an alias for values, so both methods do exactly the same thing

          $ Using either of these methods returns a new iterator object with the values of the set in the same order in which they were added to the set

          let partyItems = new Set(['cake', 'drinks', 'gifts']);
          let items = partyItems.values();

          console.log(items.next()); // { value: 'cake', done: false }
          console.log(items.next()); // { value: 'drinks', done: false }
          console.log(items.next()); // { value: 'gifts', done: false }
          console.log(items.next().done); // true
*/
