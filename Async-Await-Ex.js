/*

  ^ Async/await functions, a new addition with ES2017 (ES8), help us even more in allowing us to write completely synchronous-looking code while performing asynchronous tasks behind the scenes

  ? The functionality achieved using async functions can be recreated by combining promises with generators, but async functions give us what we need without any extra boilerplate code.

  $ await is a new operator used to wait for a promise to resolve or reject

  * It can only be used inside an async function

  @ The power of async functions becomes more evident when there are multiple steps involved:

*/

function who() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success!");
    }, 200);
  });
}

function what() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("lurks");
    }, 300);
  });
}

function where() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("in the shadows");
    }, 500);
  });
}

async function msg() {
  const a = await who();
  const b = await what();
  const c = await where();

  console.log(`${a} ${b} ${c}`);
}

msg(); // Success! lurks in the shadows <-- after 1 second

/*
  ^ A word of caution however, in the above example each step is done sequentially, with each additional step waiting for the step before to resolve or reject before continuing

  ? If we instead want the steps to happen in parallel, we can simply use Promise.all to wait for all the promises to have fulfilled:

    async function msg() {
      const [a, b, c] = await Promise.all([who(), what(), where()]);
      - // some nice array destructuring to make our code succinct
      console.log(`${ a } ${ b } ${ c }`);
    }

    msg(); // Success! lurks in the shadows <-- after 5000ms

    & Promise.all returns an array with the resolved values once all the passed-in promises have resolved

    # Promise-Returning

      Async functions always return a promise, so the following may not produce the result we’re after:

        async function hello() {
          return 'Hello javascript!';
        }
        const b = hello();
        console.log(b); // [object Promise] { ... }

        ? With then
          async function hello() {
            return 'Hello javascript!';
          }
          const b = hello();
          b.then(x => console.log(x)); // Hello javascript!

          * (or)
            async function hello() {
              return 'Hello javascript!';
            }
            hello().then(x => console.log(x)); // Hello javascript!

    # Different Forms

        $ async function expressions and async arrow functions:

        > Async Function Expression
            const msg = async function() {
              const msg = await scaryClown();
              console.log('Message:', msg);
            }

        > Async Arrow Function
            const msg = async () => {
              const msg = await scaryClown();
              console.log('Message:', msg);
            }

    # Error Handling
          & Something else that’s very nice about async functions is that error handling is also done completely synchronously, using good old try…catch statements

          function yayOrNay() {
            return new Promise((resolve, reject) => {
              const val = Math.round(Math.random() * 1); // 0 or 1, at random

              val ? resolve('Lucky!!') : reject('Nope!');
            });
          }

          async function msg() {
            try {
              const msg = await yayOrNay();
              console.log(msg);
            } catch(err) {
              console.log(err);
            }
          }

          ? Given that async functions always return a promise, we can also deal with unhandled errors as we would normally using a catch statement:
              async function msg() {
                const msg = await yayOrNay();
                console.log(msg);
              }

              msg().catch(x => console.log(x));

          $ This synchronous error handling doesn’t just work when a promise is rejected, but also when there’s an actual runtime or syntax error happening

              ^ Our try…catch block catches that error just as well:

                function caserUpper(val) {
                  return new Promise((resolve, reject) => {
                    resolve(val.toUpperCase());
                  });
                }

                async function msg(x) {
                  try {
                    const msg = await caserUpper(x);
                    console.log(msg);
                  } catch(err) {
                    console.log('Ohh no:', err.message);
                  }
                }

                msg('Hello'); // HELLO
                msg(34); // Ohh no: val.toUpperCase is not a function



    # Async Functions With Promise-Based APIS
          $ Fetch API, web APIs are promise-based are a perfect candidate for async functions:

              async function fetchUsers(endpoint) {
                const res = await fetch(endpoint);
                let data = await res.json();

                data = data.map(user => user.username);

                console.log(data);
              }

              fetchUsers('https://jsonplaceholder.typicode.com/users');
              - // ["Bret", "Antonette", "Samantha", "Karianne", "Kamren", "Leopoldo_Corkery", "Elwyn.Skiles", "Maxime_Nienow", "Delphine", "Moriah.Stanton"]


      ! Before Async/await functions, JavaScript code that relied on lots of asynchronous events
        ^ (for example: code that made lots of calls to APIs) would end up in what some called “callback hell” - A chain of functions and callbacks that was very difficult to read and understand

      # Async and await allow us to write asynchronous JavaScript code that reads much more clearly






*/
