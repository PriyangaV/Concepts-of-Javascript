/*
  @ Concurrency Model / Event Loop

    $ Concurrency - The ability to execute more than one program or task simultaneously

    * Event Loop
        > What is Javascript?
            $ A single-threaded, non-blocking, concurrency and asynchronous language.

            $ Javascript have a call stack, event loop, a callback queue, some other apis and stuff.

            $ It use V8 engine developed by google and written in C++.

        > Does V8 engine have a call stack an event loop a callback queue some other apis and stuff?
            $ V8 engine has only call stack and a heap.

        > The call stack
          $ Call stack is a data structure which records basically where in the program we are

          $ If we step into a function, we put something on to the stack

          $ If we return from the function, we pop off the top of the stack

            * one thread == one call stack == one thing at a time

            ? Javascript is a single threaded programming language with means it has a single call stack and it can do one thing at a time

                  function multiply(x, y) {
                    return x * y;
                  }

                  function square(z) {
                    return multiply(z * z);
                  }

                  function printSquare(z) {
                    let sqr = square(z);
                    console.log('sqr value', sqr);
                  }

                  printSquare(4);

                $ if we run this file there’s kind of a main function, right, like the file itself, so we push that on the stack

                  multiply() - we have a final return statement

                  square() - push on to the stack which calls multiply

                  printSquare() -  is a function call so we push that on to the stack

                  main()

                  > When we return we pop something from stack

                  > Blocking
                      $ Blocking means when thing are slow, like network request, Image request etc..

                      ? What happen when thing are slow?

                        var one = getSynchronous();
                        var two = getSynchronous();
                        var three = getSynchronous();

                        * getSynchronous like Ajax request

                        console.log(one, two, three)

                        $ synchronous requests
                          * we call getSync and then we wait, because doing network request, request completes, we can move on then wait, move on

                          * In programming language like single threaded, we make a network request and we have to wait till its done, because we have no way to handling that.

                  > Why is this a problem?
                      $ The problem is because we are running code in browser.

                      $ So when we make any request on browser, the browser is blocked, it stuck, it can’t do anything until those requests complete.

                  > How do we handle this?
                      $ simplest solution - asynchronous callbacks
                        * It means we run some code, give it a callback and run that later.

                        console.log('Hi');
                        setTimeout(function() {
                          console.log('there');
                        }, 2000);
                        console.log('Event Loop');

                        $ It prints console.log “Hi”

                        $ we run the setTimeout, but that quest the console log for future so skip on to “Event Loop” and five seconds later we log “There”.

                  > Async Callbacks and Call stack
                        * “main” put into the stack console log prints “Hi”, then we setTimeout doesn’t run immediately,

                        * we know it’s going to run five second time we can’t push it on to the stack, somehow it disappears

                        * and then “Event Loop” and call stack clears and after five seconds console log “There” appears.

                  > How does this happen? How does this disappears and magically appears after five seconds?

                        ? The concept of Concurrency and the Event Loop

                          $ we all know javascript can do only one thing at a time, that’s true javascript Runtime can only do one thing at a time.

                          $ It can’t make any ajax request while you are dong other code. It can’t setTimeout while you are doing other code.

                          $ The reason we can do things concurrently is that the browser is more than just a Runtime.

                      @ Web APIs
                        > DOM (document)

                        > ajax (XMLHttpRequest)
                          $ stack
                            * (foo(), bar(), baz(), )

                        > setTimeout
                            $ event loop
                              * callback queue (onClick, onLoad)

                  ? Event Loop
                      * The event loop look at the stack and look at the task queue.

                      * If the stack is empty it takes the first thing on the queue and pushed it on the stack.which effectively run it.

*/
