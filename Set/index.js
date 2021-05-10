/*
  @ Set
    $ lets us store unique values of any type, whether primitive values or object references

    $ Set objects are collections of values

    $ We can iterate through the elements of a set in insertion order

    $ A value in the Set may only occur once; it is unique in the Set's collection

    > Value equality
      ? Because each value in the Set has to be unique, the value equality will be checked

        * NaN and undefined can also be stored in a Set.

        * All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN

          $ new Set([iterable])

              const set1 = new Set([1, 2, 3, 4, 5]);

              console.log(set1.has(1)); // true

              console.log(set1.has(5)); // true

              console.log(set1.has(6)); // false


              let mySet = new Set()

              mySet.add(1)           // Set [ 1 ]
              mySet.add(5)           // Set [ 1, 5 ]
              mySet.add(5)           // Set [ 1, 5 ]
              mySet.add('some text') // Set [ 1, 5, 'some text' ]

              let o = {a: 1, b: 2}
              mySet.add(o) //

      ? Instance properties
          * size()
              $ Returns the number of values in the Set object.

      ? Instance methods
          * add(value)
              $ Appends value to the Set object. Returns the Set object with added value.

          * clear()
              $ Removes all elements from the Set object

          * delete(key)
              $ removes the specified element from a Set object

              $ Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not

              $ Set.prototype.has(value) will return false afterwards

          * has(value)
              $ Returns a boolean asserting whether an element is present with the given value in the Set object or not

      ? Iteration methods
          * [@@iterator]()
              $ The initial value of the @@iterator property is the same function object as the initial value of the values property.

          * keys()
              $ Returns a new Iterator object that yields the values for each element in the Set object in insertion order.

          * values()
              $ Returns a new Iterator object that yields the values for each element in the Set object in insertion order.

          * entries()
              $ Returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order.

              $ This is similar to the Map object, so that each entry's key is the same as its value for a Set.

          * forEach(callback)
              $ Calls callbackFn once for each value present in the Set object, in insertion order

                - // Use to remove duplicate elements from the array

                const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

                console.log([...new Set(numbers)])  // [2, 3, 4, 5, 6, 7, 32]

                let text = 'India'
                let mySet = new Set(text)  // Set ['I', 'n', 'd', 'i', 'a']
                mySet.size  // 5

                - // case sensitive & duplicate ommision
                new Set("Firefox")  // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]
                new Set("firefox")  // Set(6) [ "f", "i", "r", "e", "o", "x" ]

                - // uniqueness of a list of values

                const array = Array
                .from(document.querySelectorAll('[id]'))
                .map(function(e) {
                    return e.id
                });

              const set = new Set(array);
              console.assert(set.size == array.length);


*/
