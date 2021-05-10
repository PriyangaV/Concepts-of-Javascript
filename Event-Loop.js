/*
  @ Event Loop
    # JavaScript is single-threaded
      $ Only one task can run at a time

    ^ Imagine we’re running a task which takes 30 seconds..

    ^ During that task we’re waiting for 30 seconds before anything else can happen
      * JavaScript runs on the browser’s main thread by default, so the entire UI is stuck :(

        ! No one wants a slow, unresponsive website

      $ Luckily, the browser gives us some features that the JavaScript engine itself doesn’t provide
        @ WEB API
          > Includes,
            ^ DOM API
            ^ setTimeout
            ^ HTTP requests and so on...

            * which will help us create some async, non-blocking behavior

      $ Invoking function() - Gets added to call stack
        # Call stack is part of JS Engine, isn't browser specific

        > Stack - FIFO (First In First Out)
          - When a function returns a value, it gets popped off the stack


        ! Functions get "Pushed to" call stack when they're "Invoked" and "Popped Off" when they return a value

          function greet() {
            return "Hello!";
          }

          function respond() {
            return setTimeout(() => {
              return "Hey!";
            }, 1000);
          }

          $ greet() -> callstack -> Outputs "Hello!" -> Popped off

          $ respond() -> callstack -> setTimeout(() => {}) -> WEB API
            # It lets us delay tasks without blocking the main thread
              ? callback() = arrow function () => { return 'Hey' } gets added to the Web API

              ^ In the meantime, the setTimeout function and the respond function get popped off the stack, they both returned their values!

          ! setTimeout is provided to us by the browser, the WEB API takes care of the callback we pass to it

            $ callstack
              * respond()
              * setTimeout(() => { return "Hey!" })

                # WEB API
                  - () => { return "Hey!" }

                  ? In the Web API, a timer runs for as long as the second argument we passed to it (1000ms)

                  ^ The callback doesn’t immediately get added to the call stack, instead it’s passed to something called the queue

                    # WEB API --> Queue --> () => { return "Hey!" }

                      $ It’s a queue, the function has got to wait for its turn!

                  ! Time for the event loop to do its only task: "Connecting the queue with the call stack!"

                      * Call stack is empty:
                          $ All previously invoked functions have returned their values and have been popped off the stack

                          $ The first item in the queue gets added to the call stack


                  ! Event loop looks at the "callback queue" and the "call stack"
                    # If the call stack is "EMPTY", it pushes the first item in the queue onto the stack

                      $ Callback is added to the call stack, gets invoked, and returns a value, and gets popped off the stack


        ?  Call Stack (setTimeout(cb)) ------>  WEB API ( cb )
                ^                                 |
                ^                                 |
                ^                                 |
        #     ( cb )                              |
                ^                                 |
                ^                                 |
                ^                                 |
        $   Event Loop   <------------------->  Queue ( cb )


        * const foo = () => console.log('First');
        * const bar = () => setTimeout( () => console.log('Second'), 1000)
        * const baz = () => console.log('Third');

        - bar(); // "Second" - 3
        - foo(); // "First" - 1
        - baz(); // "Third" - 2

        $ bar() -> callstack -> setTimeout() -> WEB API(cb) -> queue(cb) -> bar() -> popped off

        # Timer runs, meantime "foo()" -> callstack -> prints -> popped off

        $ baz() -> callstack -> prints -> popped off

        # Event loop -> callstack empty check -> callback added from queue -> callstack -> prints -> popped off

*/
