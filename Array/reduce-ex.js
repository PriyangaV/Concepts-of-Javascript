let obj = {};
function ss(ob) {
  if ("Alice" in ob) {
    ob["Alice"]++;
  } else {
    ob["Alice"] = 1;
  }
  return ob;
}
function ss1(ob) {
  if ("Bob" in ob) {
    ob["Bob"]++;
  } else {
    ob["Bob"] = 1;
  }
  return ob;
}
function ss2(ob) {
  if ("Tiff" in ob) {
    ob["Tiff"]++;
  } else {
    ob["Tiff"] = 1;
  }
  return ob;
}
function ss3(ob) {
  if ("Bruce" in ob) {
    console.log(ob["Bruce"]++);
  } else {
    ob["Bruce"] = 1;
  }
  return ob;
}
function ss4(ob) {
  if ("Alice" in ob) {
    ob["Alice"]++; // ob['Alice'] + 1
  } else {
    ob["Alice"] = 1;
  }
  return ob;
}
ss(obj);
ss1(obj);
ss2(obj);
ss3(obj);
ss4(obj);
/*
<!DOCTYPE html>
<html>
<head>
<title>Circleeeee</title>
<style>
.circle {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 3px solid #666666;
    box-sizing: border-box;
    border-radius: 100%;
}
</style>
</head>
<body>

<div></div>


<script>
var initialValue = 20;
var tgt = document.querySelector('div');
for(var count = 1; count <= 3; count++){
    initialValue += 30;
console.log(initialValue)
    tgt.insertAdjacentHTML('beforeend',('<div class="circle" style="width:'+initialValue+'px;height:'+initialValue+'px;margin:-'+(initialValue/2)+'px 0 0 -'+(initialValue/2)+'px"></div>'));
};
</script>
</body>
</html>

*/

/*
  > Sum of values in an object array
    let initialValue = 0;
    let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.x
    }, initialValue)

    console.log(sum) // 6

  > Flatten an array of arrays
    let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
      function(accumulator, currentValue) {
        return accumulator.concat(currentValue)
      },
      []
    )
    - // flattened is [0, 1, 2, 3, 4, 5]

    const initial = [].concat([0, 1])
    const updatedOne = initial.concat([2, 3])
    updatedOne.concat([4, 5])

    let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
          ( accumulator, currentValue ) => accumulator.concat(currentValue),[] )


  > Vowels Count
      function vowelCount(word) {
        return word.split('').reduce((obj, val) => {
          if(val in obj) {
            obj[val]++;
          }
          return obj;
        }, { a: 0, e: 0, i: 0, o: 0, u: 0 });
      }

  > Grouping Objects by a property
      let people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ];

      function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          let key = obj[property]
          if (!acc[key]) {
            acc[key] = []
          }
          acc[key].push(obj)
          return acc
        }, {})
      }

      let groupedPeople = groupBy(people, 'age')

    - // { '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ], '21': [ { name: 'Alice', age: 21 } ] }

  > Bonding arrays contained in an array of objects using the spread operator and initialValue

    - // friends - an array of objects
    - // where object field "books" is a list of favorite books
    let friends = [{
      name: 'Anna',
      books: ['Harry Potter'],
      age: 21
    }, {
      name: 'Bob',
      books: ['War and peace', 'Romeo and Juliet'],
      age: 26
    }, {
      name: 'Alice',
      books: ['The Lord of the Rings', 'The Shining'],
      age: 18
    }]

    - // allbooks - list which will contain all friends' books +
    - // additional list contained in initialValue
      let allbooks = friends.reduce(function(accumulator, currentValue) {
        return [...accumulator, ...currentValue.books]
      }, [])

    - // allbooks = ['Harry Potter', 'War and peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining']

  > Remove duplicate items in an array

      let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
      let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
        if (accumulator.indexOf(currentValue) === -1) {
          accumulator.push(currentValue)
        }
        return accumulator
      }, [])

      console.log(myOrderedArray) // [ 'a', 'b', 'c', 'e', 'd' ]

  > Replace .filter().map() with .reduce()
      * Using Array.filter() then Array.map() traverses the array twice.

      * We can achieve the same effect while traversing only once with Array.reduce(), thereby being more efficient.

      * (If we like for loops, we can filter and map while traversing once with Array.forEach()).

        const numbers = [-5, 6, 2, 0,];
        $ Using filter & map

            const filtered = numbers.filter(item => item > 0) // [6, 2]
            const doubled = filtered.map(item => item * 2) // [12, 4]

        $ Using Reduce:
          const doubled = numbers.reduce((acc, cur) => {
            if(cur > 0) {
              acc.push(cur * 2)
            }
            return acc

          }, []); // [12, 4]

*/

/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200

// Building-blocks to use for composition
const double = (x) => x + x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => (input) =>
  functions.reduce((acc, fn) => fn(acc), input);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240

if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, thisArg) {
    return this.reduce(function (mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
); // [5, 7, , 10]
