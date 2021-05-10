// @ Issue
// function environment() {
//   var storedClosures = [];
//   for (var i = 0; i < 10; i++) {
//     storedClosures.push(function () {
//       // last valid value in the loop is 9, when closure is called i is now 10
//       console.log(i);
//     });
//   }

//   return storedClosures;
// }

// environment().forEach((func) => func());

// @ Pre ES5 - .bind()

// function environment1() {
//   var storedClosures = [];
//   for (var i = 0; i < 10; i++) {
//     storedClosures.push(closeOver.bind(this, i));
//   }
//   return storedClosures;
// }
// environment1().forEach((f) => f());

// function closeOver(i) {
//   console.log(i, "=====");
// }

// @ Double closures, double functions - IIFE
// function environment1() {
//   var storedClosures = [];
//   for (var i = 0; i < 10; i++) {
//     storedClosures.push(
//       (function (i) {
//         return function () {
//           console.log(i);
//         };
//       })(i)
//     );
//   }
//   return storedClosures;
// }
// environment1().forEach((f) => f());

// @forEach FTW

// - (Pre-ES6): use forEach to manage iteration
// function environmentWithForEach() {
//   var storedClosures = [];
//   var range = Array.apply(null, { length: 10 }).map(Function.call, Number); // ugly range hack
//   range.forEach((i) =>
//     storedClosures.push(function () {
//       console.log(i);
//     })
//   );
//   return storedClosures;
// }

// environmentWithForEach().forEach((func) => func());

// @ let usage

// function environmentWithLet() {
//   var storedClosures = [];

//   //let is required for iteration variable i which creates a block level scope to close over
//   for (let i = 0; i < 10; i++) {
//     storedClosures.push(function () {
//       console.log(i);
//     });
//   }

//   return storedClosures;
// }

// environmentWithLet().forEach((func) => func());

// var ob = { a: "1" };
// var ob1 = Object.create(ob);

// var ob2 = ob1;
// console.log(ob1.a, ob2.a);
// ob2.a = "2";
// console.log(ob1.a, ob2.a);
// delete ob1.a;
// console.log(ob1);
// console.log(ob1.a, ob2.a);

// ob1.a = "2";
// console.log(ob1);
// console.log(ob, "sss");
// delete ob.a;
// console.log(ob.a);

// var objA = Object.create({
//   foo: "foo"
// });
// var objB = objA;
// objB.foo = "bar";

// delete objA.foo;
// console.log(objA.foo);
// console.log(objB.foo);

// var promise = job1();

// promise

//   .then(function (data1) {
//     console.log("data1", data1);
//     return job2();
//   })

//   .then(function (data2) {
//     console.log("data2", data2);
//     return "Hello world";
//   })

//   .then(function (data3) {
//     console.log("data3", data3);
//     return job3();
//   })
//   .then(function (data4) {
//     console.log("data4", data4);
//   })
//   .catch(function (err) {
//     console.log("err1", err);
//   })
//   .catch(function (err) {
//     console.log("err2", err);
//     throw err + "=======";
//   })
//   .catch(function (err) {
//     console.log("err3", err);
//   });

// function job1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("result of job 1");
//     }, 1000);
//   });
// }

// function job2() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("result of job 2");
//     }, 1000);
//   });
// }

// function job3() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       reject("result of job 3");
//     }, 1000);
//   });
// }

// Promise.allSettled([
//   Promise.resolve("a"),
//   Promise.reject("b"),
//   Promise.resolve("c"),
//   Promise.resolve("d"),
//   Promise.reject("e")
// ]).then(console.log);

async function foo() {
  await new Promise((r) => setTimeout(r, 1000));
  console.log("foo completed");
  return "foo result";
}

async function bar() {
  await new Promise((r) => setTimeout(r, 1000));
  console.log("bar completed");
  return "bar result";
}

async function bam() {
  try {
    await new Promise((_, reject) => setTimeout(reject, 2000));
  } catch {
    console.log("bam errored");
    throw "bam";
  }
}

function handleRejection(p) {
  return p.catch((error) => ({
    error
  }));
}

function waitForAll(...ps) {
  console.log("started...");
  console.log(...ps, ps.map(handleRejection));
  return Promise.all(ps.map(handleRejection));
}

waitForAll(foo(), bar(), bam()).then((results) => console.log("done", results));

/*
  @ Promises
    ?Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.

    ? Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:

    ? status: "fulfilled" or "rejected"

      $ value (if fulfilled) or reason (if rejected).

    ? Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.

    ? Promise.any(promises) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.

    ? Promise.resolve(value) – makes a resolved promise with the given value.
    ? Promise.reject(error) – makes a rejected promise with the given error.

    $ Of these five, Promise.all is probably the most common in practice
*/

/*
  @ recursive - pow
    function pow(x, n) {
      let result = 1;

      - // multiply result by x n times in the loop
      for (let i = 0; i < n; i++) {
        result *= x;
      }

      return result;
    }

    alert( pow(2, 3) ); // 8

    ? recursive
    function pow(x, n) {
      if (n == 1) {
        return x;
      } else {
        return x * pow(x, n - 1);
      }
    }

    alert( pow(2, 3) ); // 8


            if n==1  = x
            /
pow(x, n) =
            \
              else  = x * pow(x, n - 1)

        function pow(x, n) {
          return (n == 1) ? x : (x * pow(x, n - 1));
        }

        $ When a function makes a nested call, the following happens:

        ? The current function is paused.
        ? The execution context associated with it is remembered in a special data structure called execution context stack.
        ? The nested call executes.
        ? After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped

        function sumSalaries(department) {
          if (Array.isArray(department)) { // case (1)
            return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
          } else { // case (2)
            let sum = 0;
            for (let subdep of Object.values(department)) {
              sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
            }
            return sum;
          }
        }
*/

/*
        function go() {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }

  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0); // Because we set a timeout, that will add the width/height at a later time, at which the circle has been declared
    })
  }
*/

/*
  @ Promise Error
      ? .catch handles errors in promises of all kinds: be it a reject() call, or an error thrown in a handler.

      ? We should place .catch exactly in places where we want to handle errors and know how to handle them. The handler should analyze errors (custom error classes help) and rethrow unknown ones (maybe they are programming mistakes).

      ? It’s ok not to use .catch at all, if there’s no way to recover from an error.

      ? In any case we should have the unhandledrejection event handler (for browsers, and analogs for other environments) to track unhandled errors and inform the user (and probably our server) about them, so that our app never “just dies”.


        new Promise(function(resolve, reject) {
          setTimeout(() => {
            throw new Error("Whoops!");
          }, 1000);
        }).catch(alert);

          $ there’s an "implicit try..catch" around the function code. So all synchronous errors are handled.

          $ But here the error is generated not while the executor is running, but later. So the promise can’t handle it.

          new Promise(function(resolve, reject) {
            setTimeout(() => {
              reject (new Error("Whoops!"));
            }, 1000);
          }).catch(console.log);

          new Promise(function(resolve, reject) {
            setTimeout(() => {
              try {
                throw new Error("Whoops!");
              } catch(e) {
                reject(e)
              }
            }, 1000);
          }).catch(console.log);
*/

/*
  @ Await

    ? await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

    ? It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write

    ? await accepts “thenables”
*/

/*
  @ Async
          class Waiter {
            async wait() {
              return await Promise.resolve(1);
            }
          }

          new Waiter()
            .wait()
            .then(alert); // 1
*/

/*
  @ Async/await ... promise.then/catch
    $ async/await and promise.then/catch

    ? When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

    ? But at the top level of the code, when we’re outside any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error, like in the line (*) of the example above.
*/

/*
  @ Promise.all()
      let results = await Promise.all([
        fetch(url1),
        fetch(url2),
        ...
      ]);



# Summary
      ? The async keyword before a function has two effects:

      ? Makes it always return a promise.

      ? Allows await to be used in it.

      ? The await keyword before a promise makes JavaScript wait until that promise settles, and then:

      ? If it’s an error, the exception is generated — same as if throw error were called at that very place.

      ? Otherwise, it returns the result.

      ? Together they provide a great framework to write asynchronous code that is easy to both read and write.

      ? With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also Promise.all is nice when we are waiting for many tasks simultaneously.

        # promise.then/catch
        function loadJson(url) {
          return fetch(url)
            .then(response => {
              if (response.status == 200) {
                return response.json();
              } else {
                throw new Error(response.status);
              }
            });
        }

        loadJson('no-such-user.json')
          .catch(alert); // Error: 404

        # Async/await
          async function loadJson(url) { // (1)
            let response = await fetch(url); // (2)

            if (response.status == 200) {
              let json = await response.json(); // (3)
              return json;
            }

            throw new Error(response.status);
          }

          loadJson('no-such-user.json')
            .catch(alert); // Error: 404 (4)
*/
