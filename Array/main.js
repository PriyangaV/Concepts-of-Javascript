/*
  @ Array
    $ Non-Primitive Type

    $ [1, 2, 3]

    $ new Array()

    $ length
      * arr.length

    $ loop over an array
      * forEach

    $ add an item to the end of an Array
      * push()

    $ add an item to the start of an Array
      * unshift()

    $ remove an item from end of an Array
      * pop()

    $ remove an item from start of an Array
      * shift()

    $ find the index of an item in the Array
      * indexOf()

    $ remove an item by index position
      * splice(pos, n)
        ? n defines the number of items to be removed

        ? starting at the index position specified by pos and progressing toward the end of array.

        ! original array changes

    $ copy an array
      * slice()


  @ Static Methods -> array.
    $ Array.from(arr) - new Array
      ? it creates a new Array instance from an array-like or iterable object.

        * array-like objects (objects with a length property and indexed elements)
        * iterable objects (objects where you can get its elements, such as Map and Set).

      Array.from = function( array ) {
        return [].slice.call( array );
      };

      > converting an array-like DOM result into an array.
        var divs = document.querySelectorAll("div");
        Array.from( divs ).forEach(function( node ) {
            console.log( node );
        });

    $ Array.isArray(arr) - true | false

    $ Array.of(arr) - new Array

      console.log(new Array(42)); // [ <42 empty items> ]
      console.log(Array.of(42)); // [ 42 ]

      Array.of = function() {
        return [].slice.call( arguments );
      };

      Array.of("red", "green", "blue") // [ 'red', 'green', 'blue' ]


  @ Instance Methods -> array.prototype.
      $ concat()
        * Returns a new array that is this array joined with other array(s) and/or value(s).

          const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

      $ copyWithIn()
        * Shallow copies part of an array to another location in the same array and returns it without modifying its length.

      $ entries()
        * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

        const array = ['a', 'b', 'c'];

        const iterator = array.entries();

        iterator.next() // { value: [ 0, 'a' ], done: false }
        iterator.next().value // [ 0, 'b' ]
        iterator.next().value // [ 0, 'c' ]
        iterator.next().done

        for (const [index, element] of array.entries())
          console.log(index, element);

          - // 0 'a'
          - // 1 'b'
          - // 2 'c'

        var iterator = a.entries();

        for (let e of iterator) {
          console.log(e);

          - // [0, 'a']
          - // [1, 'b']
          - // [2, 'c']

      $ every()
          * tests whether all elements in the array pass the test implemented by the provided function.

          * It returns a Boolean value.

          function isBelowThreshold (currentValue) {
            return currentValue < 40;
          }

          const array = [1, 30, 39, 29, 10, 13];

          array.every(isBelowThreshold) // true

          const array = [1, 30, 39, 29, 10, 13, 45, 55, 60];

          array.every(isBelowThreshold) // false

        ! Calling this method on an empty array will return true for any condition!

        $ "every" does not mutate the array on which it is called

    $ fill(value[, start[, end]])
          * changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

          const array = [1, 2, 3, 4];

          - fill with 0 from position 2 until position 4
          array.fill('$', 2, 4); // [1, 2, '$', '$'];

          - fill with 5 from position 1
          array.fill(5, 1); // [1, 5, 5, 5];

          array.fill(6); // [6, 6, 6, 6]

          array.fill({a: 'b'}, 3); // [ 1, 2, 3, { a: 'b' } ]

          $ If start is negative, it is treated as array.length + start

          $ If end is negative, it is treated as array.length + end

      ! it will change the array itself and return it, not a copy of it.

    $ filter()
          * creates a new array with all elements that pass the test implemented by the provided function.

          * return element for newArray, if true

          const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

          const result = words.filter(word => word.length > 6); // ["exuberant", "destruction", "present"]

    $ find()
        * returns the value of the first element in the provided array that satisfies the provided testing function

        * If no values satisfies the testing function, undefined is returned.

        const array = [5, 12, 8, 130, 44];

        const found = array.find(element => element > 10); // 12

    $ findIndex()
          * returns the index of the first element in the array that satisfies the provided testing function

          * it returns -1, indicating that no element passed the test.

                  const array = [5, 12, 8, 130, 44];

                  array.findIndex(item => item < 40) // 0

                  array[0] // 5

                  array[array.findIndex( item => item < 40)] // 5

                  array[array.findIndex( item => item > 40)] // 130

    $ flat([depth])
          * A new array with the sub-array elements concatenated into it.

          * The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

            const arr = [1, 2, [3, 4]];

            arr.flat(); // [1, 2, 3, 4]

              arr.reduce((acc, val) => acc.concat(val), []); // reduce/concat
              const flattened = arr => [].concat(...arr); // decomposition syntax


            const array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

            array.flat(4) // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

            array.flat(Infinity);

            $ The flat method removes empty slots in arrays:

              const arr = [1, 2, , 4, 5];
              arr.flat() // [1, 2, 4, 5]


          > Generator function
            function* flatten(array, depth) {
              if(depth === undefined) {
                depth = 1;
              }
              for(const item of array) {
                  if(Array.isArray(item) && depth > 0) {
                    yield* flatten(item, depth - 1);
                  } else {
                    yield item;
                  }
              }
            }

          const arr = [1, 2, [3, 4, [5, 6]]];
          const flattened = [...flatten(arr, Infinity)]; // [1, 2, 3, 4, 5, 6]



    $ flatMap()
            * Returns a new array with each element being the result of the callback function and flattened to a depth of 1.

            * It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.

              let arr = [1, 2, 3, 4];

              arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6, 4, 8]

              arr.reduce((acc, x) => acc.concat([x, x * 2]), []); // [1, 2, 2, 4, 3, 6, 4, 8]

              let arr1 = [1, 2, 3, 4];

              arr1.map(x => [x * 2]);  // [[2], [4], [6], [8]]

              arr1.flatMap(x => [x * 2]); // [2, 4, 6, 8]

              arr1.flatMap(x => [[x * 2]]); // [[2], [4], [6], [8]] - only one level is flattened

              let arr1 = ["it's Sunny in", "", "California"];

              arr1.map(x => x.split(" ")); // [["it's", "Sunny", "in"], [""],["California"]]

              arr1.flatMap(x => x.split(" ")); // ["it's", "Sunny", "in", "", "California"]


    $ forEach()
            * executes a provided function once for each array element.

            * returns undefined

            * There is no way to stop or break a forEach() loop other than by throwing an exception.

            * If you need such behavior, the forEach() method is the wrong tool.

            * forEach expects a synchronous function
              $ forEach does not wait for promises

              $ aware of the implications while using promises(or async functions) as forEach callback

            const array = ['a', 'b', 'c'];

            array.forEach(element => console.log(element));

            > forEach callback
                let ratings = [5, 4, 5];
                let sum = 0;

                let sumFunction = async function (a, b)
                {
                  return a + b
                }

                ratings.forEach(async function(rating) {
                  sum = await sumFunction(sum, rating)
                })

                console.log(sum) // 0 -> expected [5 + 4 + 5] = 14

            > array modify
                let words = ['one', 'two', 'three', 'four']
                words.forEach(function(word) {
                  if (word === 'two') {
                    words.shift() //'one' will delete from array
                  }
                })

                console.log(words);  //['two', 'three',​​​​ 'four']

            > flatten
                function flatten(arr) {
                  const result = []

                  arr.forEach(function(i) {
                    if (Array.isArray(i)) {
                      result.push(...flatten(i))
                    } else {
                      result.push(i)
                    }
                  })

                  return result
                }

              - Usage
              const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]
              flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]



    $ includes(valueToFind[, fromIndex])
          * determines whether an array includes a certain value among its entries, returning true or false as appropriate.

          ! When comparing strings and characters, includes() is case-sensitive.

          * fromIndex is negative - arr.length + fromIndex, default is 0

          ! Technically speaking, includes() uses the sameValueZero algorithm to determine whether the given element is found.

          [1, 2, 3].includes(2)      // true
          [1, 2, 3].includes(4)      // false
          [1, 2, 3].includes(3, 3)   // false
          [1, 2, 3].includes(3, -1)  // true - [3 + -1] = 2
          [1, 2, NaN].includes(NaN)  // true

          (function() {
            console.log(Array.prototype.includes.call(arguments, 'a'))  // true
            console.log(Array.prototype.includes.call(arguments, 'd'))  // false
          })('a','b','c')

          * fromIndex is greater than or equal to the length of the array, false is returned, the array will not be searched.

            let arr = ['a', 'b', 'c']

            arr.includes('c', 3)    // false
            arr.includes('c', 100) // false

          * fromIndex is negative, the computed index is calculated.

          * If the computed index is less or equal than -1 * arr.length, the entire array will be searched

            - // array length is 3
            - // fromIndex is -100
            - // computed index is 3 + (-100) = -97

            let arr = ['a', 'b', 'c']

            arr.includes('a', -100) // true
            arr.includes('b', -100) // true
            arr.includes('c', -100) // true
            arr.includes('a', -2)   // false


    $ indexOf(searchElement[, fromIndex])
          * returns the first index at which a given element can be found in the array, or -1 if it is not present

            const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

            beasts.indexOf('bison') // 1

            beasts.indexOf('bison', 2) // 4

            beasts.indexOf('giraffe') // -1

          * compares the Array using strict equality

            var array = [2, 9, 9];
            array.indexOf(2);     // 0
            array.indexOf(7);     // -1
            array.indexOf(9, 2);  // 2
            array.indexOf(2, -1); // -1
            array.indexOf(2, -3); // 0

          > Finding all the occurrences of an element

            var indices = [];
            var array = ['a', 'b', 'a', 'c', 'a', 'd'];
            var element = 'a';
            var idx = array.indexOf(element);
            while (idx != -1) {
              indices.push(idx);
              idx = array.indexOf(element, idx + 1);
            }
            console.log(indices); // [0, 2, 4]

          > Finding if an element exists in the array or not and updating the array

            function updateVegetablesCollection (veggies, veggie) {
              if (veggies.indexOf(veggie) === -1) {
                  veggies.push(veggie);
                  console.log('New veggies collection is : ' + veggies);
              } else if (veggies.indexOf(veggie) > -1) {
                  console.log(veggie + ' already exists in the veggies collection.');
              }
            }

            var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

            updateVegetablesCollection(veggies, 'spinach');
            updateVegetablesCollection(veggies, 'spinach');  // spinach already exists in the veggies collection.


    $ join([separator])
            * creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

            * returns a string with all array elements joined. If arr.length is 0, the empty string is returned.

            ! If an element is undefined, null or an empty array [], it is converted to an empty string.

            var a = ['Wind', 'Water', 'Fire'];
            a.join();      // 'Wind,Water,Fire'
            a.join(', ');  // 'Wind, Water, Fire'
            a.join(' + '); // 'Wind + Water + Fire'
            a.join('');    // 'WindWaterFire'

          > Joining an array-like object

            function f(a, b, c) {
              var s = Array.prototype.join.call(arguments);
              console.log(s); // '1,a,true'
            }
            f(1, 'a', true);

    $ keys()
            * returns a new Array iterator object that contains the keys for each index in the array.

              const array = ['a', 'b', 'c'];
              const iterator = array.keys();

              for (const key of iterator) {
                console.log(key); // 0, 1, 2
              }

            * Key iterator doesn't ignore holes

              var arr = ['a', , 'c'];
              var sparseKeys = Object.keys(arr); // [ '0', '2' ]
              var denseKeys = [...arr.keys()]; // [ '0', '1', '2' ]

              for (const key of arr.keys()) {
                console.log(key); // 0, 1, 2

                console.log(arr[key]) // 'a', undefined, 'c'

                console.log(typeof arr[key]); // 'string', 'undefined', 'string'
              }

    $ lastIndexOf(searchElement[, fromIndex])

            ! Array.lastIndexOf(searchElement[, fromIndex = Array.length - 1])

            * returns the last index at which a given element can be found in the array, or -1 if it is not present.

            * The array is searched backwards, starting at fromIndex.

            * compares the Array using strict equality

            var numbers = [2, 5, 9, 2];
            numbers.lastIndexOf(2);     // 3
            numbers.lastIndexOf(7);     // -1
            numbers.lastIndexOf(2, 3);  // 3
            numbers.lastIndexOf(2, 2);  // 0
            numbers.lastIndexOf(2, -2); // 0
            numbers.lastIndexOf(2, -1); // 3

            var numbers = [2, 3, 5, 3, 2, 5, 9, 2];
            numbers.lastIndexOf(2, -9) // -1
            numbers.lastIndexOf(2, -2) // 4

            > Finding all the occurrences of an element
              var indices = [];
              var array = ['a', 'b', 'a', 'c', 'a', 'd'];
              var element = 'a';
              var idx = array.lastIndexOf(element);
              while (idx != -1) {
                indices.push(idx);
                idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
              }

              console.log(indices); // [4, 2, 0]

              var guests = [
                {name: 'John Doe', age: 30},
                {name: 'Lily Bush', age: 20},
                {name: 'William Gate', age: 25}
              ];

              console.log(guests.indexOf({ name: 'John Doe', age: 30 })); // -1 - two different objects


    $ map(callback)
              * creates a new array populated with the results of calling a provided function on every element in the calling array.

              const array = [1, 4, 9, 16];

              const mapped = array.map(x => x * 2); // [2, 8, 18, 32]

              * We shouldn't be using map if

                  ! we're not using the array it returns; and/or
                  ! we're not returning a value from the callback.

    $ pop()
              * removes the last element from an array and returns that element.

              * This method changes the length of the array.

                const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

                plants.pop() // "tomato"

                console.log(plants); // ['broccoli', 'cauliflower', 'cabbage', 'kale'];

              * pop() on an empty array, returns undefined.

              > Using apply( ) or call ( ) on array-like objects

                var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

                var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

                console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

                console.log(popped); // 'sturgeon'

    $ push(elementN)
              * adds one or more elements to the end of an array and returns the new length of the array.

                const animals = [goats', 'sheep'];

                const count = animals.push('cows'); // 3

                animals.push('chickens', 'cats', 'dogs'); // 6 - Array ["goats", "sheep", "cows", "chickens", "cats", "dogs"]

            > Merging two arrays

                let vegetables = ['parsnip', 'potato']
                let moreVegs = ['celery', 'beetroot']

                - // Merge the second array into the first one
                - // Equivalent to vegetables.push('celery', 'beetroot')
                Array.prototype.push.apply(vegetables, moreVegs)

                console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

            > Using an object in an array-like fashion

              let obj = {
                length: 0,

                addElem: function addElem(elem) {
                    - // obj.length is automatically incremented
                    - // every time an element is added.
                    [].push.call(this, elem)
                }
              }

              - // Let's add some empty objects just to illustrate.
              obj.addElem({})
              obj.addElem({})
              console.log(obj.length) // 2

              ! although obj is not an array, the method push successfully incremented obj's length property just like if we were dealing with an actual array

              const ob = {b: 1}
              const ss = [].push.call(ob, {a: 1})
              const ss1 = [].push.call(ob, {a: 1})
              console.log(ss) // 1
              console.log(ss1) // 2

    $ reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue]) - left-to-right
              * executes a reducer function (that we provide) on each element of the array, resulting in single output value.

              * The reducer function takes four arguments:

                  $ Accumulator
                  $ Current Value
                  $ Current Index
                  $ Source Array

              * our reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

              * The single value that results from the reduction.

              ! If initialValue is not provided, reduce() will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0.

              ! If the array is empty and no initialValue is provided, TypeError will be thrown.

                [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
                  return accumulator + currentValue
                })

              > Arrow Function
                [0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue )

                $ 0 + 1 --> 1 + 2 --> 3 + 3 --> 6 + 4 --> 10

              > with initialValue
                [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
                    return accumulator + currentValue
                }, 10)

                $ 10 + 0 --> 10 + 1 --> 11 + 2 --> 13 + 3 --> 16 + 4 --> 20

    $ reduceRight()
                * applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

                const array = [[0, 1], [2, 3], [4, 5]].reduceRight(
                  (accumulator, currentValue) => accumulator.concat(currentValue)
                );

                console.log(array); // expected output: Array [4, 5, 2, 3, 0, 1]

    $ reverse()
              * reverses an array in place

              * The first array element becomes the last, and the last array element becomes the first.

                const array = ['one', 'two', 'three'];

                array.reverse(); [ 'three', 'two', 'one' ]

                console.log(array); [ 'three', 'two', 'one' ]

              > Reversing the elements in an array-like object (values only)
                  const a = {0: 1, 1: 2, 2: 3, length: 3};

                  Array.prototype.reverse.call(a); // same syntax for using apply()
                  Array.prototype.reverse.apply(a); // same syntax for using call()

                  console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}

    $ shift()
              * removes the first element from an array and returns that removed element.

              * This method changes the length of the array

                const array = [1, 2, 3];

                array.shift(); // 1

                console.log(array) // [2, 3]

              *  undefined if the array is empty.

              > in while loop
                  var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

                  while( (i = names.shift()) !== undefined ) {
                      console.log(i); // Andrew, Edward, Paul, Chris, John
                  }

    $ slice([start[, end]])
              * returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

              * The original array will not be modified

              const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

              animals.slice(2); // ['camel', 'duck', 'elephant']

              animals.slice(2, 4); // ['camel', 'duck']

              animals.slice(1, 5); // ['bison', 'camel', 'duck', 'elephant']

              const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'dog', 'sheep', 'goat'];

              animals.slice(4, -2) // ['elephant', 'dog']

              ! The original and new array refer to the same object. If a object changes, the changes are visible to both the new and original arrays.

              ! For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array.

              ! Changes to the string, number, or boolean in one array do not affect the other array

    $ some(callback)
              * tests whether at least one element in the array passes the test implemented by the provided function

              * It returns a Boolean value.

                const array = [1, 7, 3, 9, 5];

                const array1 = [1, 2, 3, 4, 5];

                const even = (element) => element % 2 === 0;

                array.some(even) // false
                array1.some(even) // true

    $ sort([compareFunction])
            * sorts the elements of an array in place and returns the sorted array

            * The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

            !  Note that the array is sorted in place, and no copy is made

            function compare(a, b) {
              if (a is less than b by some ordering criterion) {
                return -1;
              }
              if (a is greater than b by the ordering criterion) {
                return 1;
              }
              - // a must be equal to b
              return 0;
            }

            function compareNumbers(a, b) {
              return a - b;
            }

            * It will sort the array in ascending order (if it doesn't contain Infinity and NaN):

            var numbers = [4, 2, 5, 1, 3];
            numbers.sort(function(a, b) {
              return a - b;
            });
            console.log(numbers); // [1, 2, 3, 4, 5]

            let numbers = [4, 2, 5, 1, 3];
            numbers.sort((a, b) => b - a);
            console.log(numbers); // [5, 4, 3, 2, 1]


            var items = [
              { name: 'Edward', value: 21 },
              { name: 'Sharpe', value: 37 },
              { name: 'And', value: 45 },
              { name: 'The', value: -12 },
              { name: 'Magnetic', value: 13 },
              { name: 'Zeros', value: 37 }
            ];

            - // sort by value
            items.sort(function (a, b) {
              return a.value - b.value;
            });

            - // sort by name
            items.sort(function(a, b) {
              var nameA = a.name.toUpperCase(); // ignore upper and lowercase
              var nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              - // names must be equal
              return 0;
            });

            > Sorting non-ASCII characters
              var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
              items.sort(function (a, b) {
                return a.localeCompare(b);
              }); // items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']

            > Sorting with map
              ...

    $ splice()
            * An array containing the deleted elements.

            * If only one element is removed, an array of one element is returned.

            * If no elements are removed, an empty array is returned.

            const months = ['Jan', 'March', 'April', 'June'];
            months.splice(1, 0, 'Feb'); // inserts at index 1

            console.log(months) // ["Jan", "Feb", "March", "April", "June"]

            months.splice(4, 1, 'May'); // replaces 1 element at index 4

            console.log(months); // ["Jan", "Feb", "March", "April", "May"]


            let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
            let removed = myFish.splice(2, 0, 'drum') // ["angel", "clown", "drum", "mandarin", "sturgeon"]

            let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
            let removed = myFish.splice(3, 1) // ['angel', 'clown', 'drum', 'sturgeon']

    $ toLocaleString()
              * returns a string representing the elements of the array

              * The elements are converted to Strings using their toLocaleString methods

              * these Strings are separated by a locale-specific String (such as a comma “,”)


              const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
              const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

              console.log(localeString); // '1,a,12/21/1997, 2:12:00 PM'

              * // This assumes "en" locale and UTC timezone - results may vary


    $ toString()
              * returns a string representing the specified array and its elements.

              const array1 = [1, 2, 'a', '1a'];

              console.log(array1.toString()); // "1,2,a,1a"

    $ unshift()
              * adds one or more elements to the beginning of an array and returns the new length of the array.

              const array1 = [1, 2, 3];

              array1.unshift(4, 5);

              console.log(array) // [4, 5, 1, 2, 3]

    $ values()
              * returns a new Array Iterator object that contains the values for each index in the array.

              const array1 = ['a', 'b', 'c'];
              const iterator = array1.values();

              for (const value of iterator) {
                console.log(value);
              } // 'a', 'b', 'c'

              *  Array.prototype.values is default implementation of Array.prototype[Symbol.iterator].

              ! Array.prototype.values === Array.prototype[Symbol.iterator] // true

              var arr = ['a', 'b', 'c', 'd', 'e'];
              var iterator = arr.values();
              iterator.next();               // Object { value: "a", done: false }
              iterator.next().value;         // "b"
              iterator.next()["value"];      // "c"
              iterator.next();               // Object { value: "d", done: false }
              iterator.next();               // Object { value: "e", done: false }
              iterator.next();               // Object { value: undefined, done: true }
              iteraror.next().value;         // undefined

              ! One-use: the array iterator object is one use or temporary object
                  * When next().done=true or currentIndex>length the for..of loop ends.

              var arr = ['a', 'b', 'c', 'd', 'e'];
              var iterator = arr.values();

              for (let letter of iterator) {
                console.log(letter);
              } //"a" "b" "c" "d" "e"

              for (let letter of iterator) {
                console.log(letter);
              } // undefined


              * if the values in the array changed the array iterator object values change too.





































*/
