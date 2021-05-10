/*
  @ Array
    $ An array is a data structure that contains list of elements which store multiple values in a single variable

    $ arrays use numbered indexes whereas objects use named indexes

      var person = [];
      person[0] = "John";

      var person = [];
      person["firstName"] = "John";

  @ Array Declaration / Creation

    > new keyword
      let arr = new Array();
      let arr = new Array("item", "item", "item");

      $ The new keyword only complicates the code. It can also produce some unexpected results:

          var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
          var points = new Array(40);  // Creates an array with 40 undefined elements !!!!!

    > arr literal
      let arr = [];
      let arr = ["item", "item", "item"];

    > Access the Elements of an Array
        $ by referring to the index number

        $ Array indexes start with 0
          let item = arr[0];

    > typeof arr [ "object" ]

    > Array Elements Can Be Objects

    > Array Properties and Methods
        $ The real strength of JavaScript arrays are the built-in array properties and methods

    > Recognize an Array
        $ ES6 Array.isArray()
          Array.isArray(arr);   // returns true

        $ Custom isArray(arr)
            function isArray(arr) {
              return arr.constructor.toString().indexOf("Array") > -1;
            }

            * if the object prototype contains the word "Array"

        $ instanceof operator
          arr instanceof Array; // returns true

    @ Array Properties
        $ length
          * An array returns the length of an array (the number of array elements)
          * The length property is always one more than the highest array index

  @ Array Methods
    $ Array methods are functions built-in to JavaScript that we can apply to our arrays

    $ Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch

    > A cheat sheet of array methods:

      ? To add/remove elements:

          * push(...items) – adds items to the end.

          * pop() – extracts an item from the end.

          * shift() – extracts an item from the beginning.

          * unshift(...items) – adds items to the beginning.

          * splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

          * slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

          * concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

      ? To search among elements:

          * indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

          * includes(value) – returns true if the array has value, otherwise false.

          * find/filter(func) – filter elements through the function, return first/all values that make it return true.

          * findIndex is like find, but returns the index instead of a value.

      ? To iterate over elements:

          * forEach(func) – calls func for every element, does not return anything.

      ? To transform the array:

          * map(func) – creates a new array from results of calling func for every element.

          * sort(func) – sorts the array in-place, then returns it.

          * reverse() – reverses the array in-place, then returns it.

          * split/join – convert a string to array and back.

          * reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

      ? Additionally:

          * Array.isArray(arr) checks arr for being an array.

          ! Note: Methods sort, reverse and splice modify the array itself.


      ? Few others:
          * arr.some(fn)/arr.every(fn) check the array.
              $ The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

              $ These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items;

              $ if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

              $ every - to compare arrays

          * arr.fill(value, start, end) – fills the array with repeating value from index start to end.

          * arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

          * arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

          * arr.values() method returns a new Array Iterator object that contains the values for each index in the array.

*/
