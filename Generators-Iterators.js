/*
  @ Generators and Iterators (ES6)

    ^ Regular Function
        function normalFunction() {
          console.log('I am the coolest function!');
          console.log('There is no way of stopping me!');
          console.log('Oh boi we're still going go...');
          console.log('Okay finally all done now...');
        }

        ? Normal function that logs a value 4 times!
          & normalFunction();

          - // I am the coolest function!
          - // There is no way of stopping me!
          - // Oh boi we're still going go...
          - // Okay finally all done now...

          * Normal functions follow something called a "run-to-completion" model
            $ When we invoke a function, it'll always run until it completes, unless there's an error somewhere...

            > We can't just randomly pause a function somewhere in the middle whenever we want to!

            # Cool part comes here - Generator functions
              & It doesn't follow the "run-to-completion" model!

                - Does this mean that we can randomly pause a generator function in the middle of executing it? Well, sort of!


      @ Writing an asterisk (*) after the function keyword - Generator function
        ^ function* generatorFunction() {...}

        ? Generator functions actually work in a completely different way compared to regular functions

          $ Invoking generator function returns a generator object, which is an iterator

          $ We can use the 'yield' keyword in a generator function to "pause" the execution


          * We invoke a regular function, the function body gets executed and eventually returns a value!

          * When we invoke a generator function, a generator object gets returned!

            ^ We can use the 'yield' keyword in a generator function to "pause" the execution

              function generatorFunction() {
                yield '1';
                console.log('First log!');
                yield '2';
                console.log('Second log!');
                return 'Done!';
              }

              ? The execution of the generator gets "paused" when it encounters a yield keyword
                  & The best thing is that the next time we run the function, it remembered where it previously paused, and runs from there on!

              - 1. 'yield' -> pauses and yields the string value

              - 2. From 'previous yield' -> second 'yield' keyword and yields the value

              - 3. From 'previous yield' -> returns the value 'Done!'

              ! Generator contains a 'next' method on the prototype chain

                ^ Will use this to iterate the generate object

                  * In order to remember the state of where it previously left off after yielding a value, we need to assign the generator object to a variable...

                  const generatorObj = generatorFunction();

                  generatorObj.next(); // { value: '1', done: false }

                    # The generator ran until it encountered the first "yield" keyword

                      $ It yielded an object containing a value property, and a done property
                        { value: ..., done: ... }

                        ? The value property is equal to the value that we yielded

                        ? The done property is a boolean value, which is only set to true once the generator function returned a value (not yielded! 😊)

                        ^ We stopped iterating over the generator, which makes it look like the function just paused! How cool is that.

              * Let's invoke the next method again!

                generatorObj.next();
                  ? This is neither a yield nor return keyword, so it continues!
                    - // 'First log!'
                    - // { value: '2', done: false }

                    $ We haven't returned from the generator yet

                    generatorObj.next();
                       - // 'Second log!'
                      - // { value: 'Done', done: true }

                    $ We actually returned this time, so the value of done is set to true!

            ! The done property is actually very important. We can only iterate a generator object once

            ^ What?! So what happens when we call the next method again?

              generatorObj.next();
                - // { value: undefined, done: true }
                    = undefined --> forever!
                      = If we want to iterate it again, we just have to create a new generator object!


          @ Iterator
              & Iterator? Does that mean we can use for of loops, and the spread operator on the returned object? Yas! :)

              function* getNumbers() {
                yield 1;
                yield 2;
                yield 3;
                yield 4;
                yield 5;
              }

              const numbersObject = getNumbers();

              console.log([...numbersObject])

              for (let num of numbersObject) {
                console.log(num);
              }

              # Iterator implements the iterator protocol
                ! [Symbol.iterator]

                ^ We have the following values (with very descriptive names
                    const array = [1, 2, 3];

                    const string = "I love Javascript!";

                    const object ={ name: 'Bob' };

                    function regularFunction() {
                      return 'I am a basic function!';
                    }

                    function* generatorFunction() {
                      return 'I am a generator function!';
                    }

                    const generatorObject = generatorFunction();

                    - The array, string, and generatorObject are all iterators!

                    ? [Symbol.iterator]

                      $ We can simply just add the [Symbol.iterator] property manually, and make non-iterables iterable

                      ! [Symbol.iterator] has to return an iterator, containing a next method which returns an object just like we saw before:
                        # { value: '...', done: false/true }

                        object[Symbol.iterator] = function* () {
                          yield this
                        }

                        object[Symbol.iterator]
                          [Symbol.iterator]() { yield this }

                          [...object]
                            [{name: 'Bob'}]

                              for(let n of object) console.log(n)
                                {name: 'Bob'}

                      object[Symbol.iterator] = function* () {
                        yield Object.keys(this)
                      }
                        [...object]
                          [['name']]

                    $ We can yield individual values from iterators within a generator using the "yield*"
                      @ The yield keyword with an asterisk (yield*)
                          const num = [1, 2];
                          function* getNum() {
                            yield 1;
                            yield* num;
                            yield 3;
                        }
                        const nums = getNum();
                        [...nums] ==> [1, 1, 2, 3]

                        * Each value of the delegated generator gets yielded, before it continued iterating the genObj iterator

                        = This is exactly what we need to do in order to get all object keys individually!

                          function* generatorFunction() {
                            const second = yield 'First!';
                            console.log(second);
                            return 'All done!'
                          }

                          ^ It's important to see here that the first invocation of the next method doesn't keep track of any input yet

                          > We simply start the observer by invoking it the first time

                          & The generator waits for our input, before it continues, and possibly processes the value that we pass to the next method

          @ One of the biggest advantages of generators is the fact that they are lazily evaluated

              # The value that gets returned after invoking the next method, is only computed after we specifically asked for it!

              & Normal functions don't have this: all the values are generated for you in case you need to use it some time in the future

              function* getLargeNumber() {
                let number = 0;
                while (true) {
                  yield getVeryLargeNumber(10, number);
                  number++;
                }
              }

              ! There are several other use cases, but I usually like to do it to have way more control when I'm iterating large datasets!


              ^ We have a list of book clubs! Each book club just has one member, a member is currently reading several books, which is represented in the books array!

                const bookClubs = [
                  {
                    name: 'The cool club',
                    clubMembers: [
                      {
                        name: 'John',
                        books: [
                          {
                            id: '1', title: 'A'
                          },
                          {
                            id: '2', title: 'B'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: 'The better club',
                    clubMembers: [
                      {
                        name: 'Doe',
                        books: [
                          {
                            id: '3', title: 'C'
                          },
                          {
                            id: '4', title: 'D'
                          }
                        ]
                      }
                    ]
                  }
                ]

          # Look for a book with the id '2'
                $ We use a nested for-loop or a forEach helper, but that means that we'd still be iterating through the data even after finding the team member we were looking for!

                ? The awesome thing about generators, is that it doesn't keep on running unless we tell it to

                ^ We can evaluate each returned item, and if it's the item we're looking for, we simply don't call next! Let's see what that would look like


            function* iterateBooks(books) {
              for (let i = 0; i < books.length; i++) {
                yield books[i]
              }
            }

            * we have to make a generator that iterates through the clubMembers array
              ! We don't really care about the club member itself, we just need to iterate through their books
                # In the iterateMembers generator, let's delegate the iterateBooks iterator in order to just yield their books!

            function* iterateMembers(members) {
              for (let i = 0; i < members.length; i++) {
                const clubMember = members[i]
                yield* iterateBooks(clubMember.books)
              }
            }

            > The last step is to iterate through the bookclubs
              & We don't really care about the bookclubs themselves, we just care about the club members (and especially their books)
                = Let's delegate the iterateClubMembers iterator and pass the clubMembers array to it

                  function* iterateBookClubs(bookClubs) {
                    for (let i = 0; i < bookClubs.length; i++) {
                      const bookClub = bookClubs[i]
                      yield* iterateMembers(bookClub.clubMembers)
                    }
                  }

              ^ We need to get the generator object iterable by passing the bookClub array to the iterateBookClubs generator

                  const bookClubsObj = iterateBookClubs(bookClubs);

                  * Invoke the next method, until we get a book with the id '2'

                  bookClubsObj.next(); // 1
                  bookClubsObj.next(); // 2

                  ? We didn't have to iterate through all the data in order to get the book we were looking for. Instead, we just looked for the data on demand!

                  & Calling the next method manually each time isn't very efficient... So let's make a function instead!

          function findBook(id) {
            const genObj = iterateBookClubs(bookClubs);
            let result = genObj.next();

            while(!result.done) {
              if(result.value.id == id) {
                return result.value;
              } else {
                result = genObj.next();
              }
            }
          }

          findBook('2');
            - // { value: {id: '2', title: 'B'}, done: false }


    ! We have tons and tons of data, or maybe an incoming stream that we need to parse in order to just find one value...

      ^ Normally, we'd have to wait for the entire dataset to be ready, in order to begin parsing

        ? With generator functions, we can simply require small chunks of data, check that data, and the values are only generated when we invoke the next method!

*/
