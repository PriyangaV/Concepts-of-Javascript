/*
  @ Async/Await Functions, a new addition with ES2017 (ES8)

      $ When writing JavaScript, we often have to deal with tasks that rely on other tasks!

      $ Let's say that we want to get an image, compress it, apply a filter, and save it

      * It helps us to write completely synchronous-looking code while performing asynchronous tasks behind the scenes

      ! The functionality achieved using async functions can be recreated by combining promises with generators, but async functions give us what we need without any extra boilerplate code

      # "await" is a new operator used to wait for a promise to resolve or reject

      # It can only be used inside an async function

      ^ Get the image that we want to edit
            getImage('./image.png, (image, err) => {
              if(err) throw new Error(err);
              compressImage(image, (compressedImage, err) => {
                if(err) throw new Error(err);
                applyFilter(compressedImage, (filteredImage, err) => {
                  if(err) throw new Error(err);
                  saveImage(filteredImage, (res, err) => {
                    if(err) throw new Error(err);
                    console.log('Succuessfully saved image!');
                  });
                });
              });
            });

            $ It's... fine but, it's not great

            $ We end up with many nested callback functions that are dependent on the previous callback function

            * This is often referred to as a "callback hell", as we end up with tons of nested callback functions that make the code quite difficult to read!

      > Luckily, we got something called promises to help us out!

        $ Promise Syntax
            * Promise constructor that receives a callback

              @ new Promise(() => {});
                - A Promise is an object that contains a status, ([[PromiseStatus]]) and a value ([[PromiseValue]])

              $ PromiseStatus, the state, can be one of three values:
                * fulfilled:
                    - The promise has been resolved
                    - Everything went fine, no errors occurred within the promise

                * rejected:
                    - The promise has been rejected
                    - Something went wrong

                * pending:
                    - The promise has neither resolved nor rejected (yet), the promise is still pending

              $ Promise callback function receives two callbacks
                  # 1. resolve() - to handle success
                      = When the data is ready and no errors occurred, pass the data to the "resolve" method
                  # 2. reject() - to handle errors
                      = If an error occurred during the task, we pass the error to the "reject" method

                      ! new Promise((response, reject) => response('Yah!'))

                    $ The status of a promise is "fulfilled" if we invoked the resolve method

                    $ The status of the promise is "rejected" if we invoked the rejected method

                    function getImage(file) {
                      return new Promise((resolve, reject) => {
                        try {
                          const data = readFile(file);
                          resolve(data);
                        } catch(err) {
                          reject(new Error(err));
                        }
                      })
                    }

                      ? .then(): Gets called after a promise resolved
                        - receives the value passed to the resolve()

                      ? .catch(): Gets called after a promise rejected
                        - - receives the value passed to the rejecte()

                      ? .finally(): Always gets called, whether the promise resolved or rejected

                        getImage(file)
                          .then(image => console.log(image))
                          .catch(error => console.log(error))
                          .finally(() => console.log('All done!'))

            $ Promise Chain
                # We can chain as many .thens as we want

                ? The result of the previous then callback will be passed as an argument to the next then callback!

                    Promise.resolve(5)
                      .then(res => res * 2) // 10
                      .then(res => res * 2) // 20
                      .then(res => res * 2) // 40
                      .then(res => res * 2) // 80

                getImage('./image.png')
                  .then(image => compressImage(image))
                  .then(compressedImage => applyFilter(compressedImage))
                  .then(filteredImage => saveImage(filteredImage))
                  .then(res => console.log('Successfully saved image!'))
                  .catch(err => throw new Error(err))

            $ Microtasks and (Macro)tasks
                    console.log('Start!');

                    Promise.resolve('Promise!')
                      .then(res => console.log(res))

                    console.log('End!')

                    - // Start!, End!, Promise!

                ! Although JavaScript is single-threaded, we can add asynchronous behavior using a Promise!

                # Javascript Event Loop - setTimeout() - same sort of behaviour

                    $ However, within the Event Loop, there are actually two types of queues:
                      ? The macrotask queue (or just called the task queue)
                        - for (macro) tasks

                      ? The microtask queue
                        - for microtasks

                    $ (Macro) task
                      * setTimeout
                      * setInterval
                      * setImmediate

                    $ Microtask
                      * process.nextTick
                      * Promise callback
                      * queueMicrotask

                  # Promise is in the "microtask"

                  - When a "Promise" resolves and calls its
                    * then()
                    * catch()
                    * finally()
                      - method, the callback within the method gets added to the microtask queue!

                    = The callback within the then(), catch() or finally() method isn't executed immediately, essentially adding some async behavior to our JavaScript code!

            $ The event loop gives a different priority to the tasks:
                  ? 1. All functions in that are currently in the call stack get executed
                    - When they returned a value, they get popped off the stack

                  ? 2. When the call stack is empty, all queued up microtasks are popped onto the callstack one by one, and get executed!
                    - (Microtasks themselves can also return new microtasks, effectively creating an infinite microtask loop)

                  ? 3. If both the call stack and microtask queue are empty, the event loop checks if there are tasks left on the (macro)task queue
                    - The tasks get popped onto the callstack, executed, and popped off!


    |--------------------|
    |                    |
    |    Call Stack      | Task 1
    |                    |
    |--------------------|
              ^
              |
              |
              |
              |                 Microtask Queue (Task 2, Tast3, Task 4)
              |           |------------------------|
              ^           |                        | process.nextTick()
|-------------|<--------->|                        | Promise callback
|             |           |                        | async function
|             |           |                        | queueMicroTask
|  Event      |           |------------------------|
|  Loop       |
|             |                Macrotask Queue (Task 5, Task 6)
|   <-->      |           |------------------------| setTimeout()
|             |           |                        | setInteralVal()
|             |<--------->|                        | setImmediate()
|             |           |                        | WEB API
|             |           |                        |
|-------------|           |------------------------|


    # Task 1:
        $ A function that's added to the call stack immediately, for example by invoking it instantly in our code

    # Task 2, Task 3, Task 4:
        $ Microtasks, for example a promise then callback, or a task added with queueMicrotask

    # Task 5, Task 6:
        $ A (macro)task, for example a setTimeout or setImmediate callback

      - Task1 returned a value and got popped off the call stack

      - Then, the engine checked for tasks queued in the microtask queue

      - Once all the tasks were put on the call stack and eventually popped off

      - The engine checked for tasks on the (macro)task queue, which got popped onto the call stack, and popped off when they returned a value

          console.log('Start!'); // Call Stack

          setTimeout(() => { // Macrotask
            console.log('Timeout!')
          }, 0)

          Promise.resolve('Promise!')
            .then(res => console.log(res)) // Microtask

          console.log('End!'); // Call Stack

          $ Engine Encounter: console.log() // "Start!"
            - Gets added to the call stack immediately
                = Logs the value "Start!""
                # Gets popped off

          $ Engine Encounter: setTimeout() - macro task
            - Gets popped on to the call stack

            # It's a native to the browser
              = its callback [() => console.log()] gets added to the WEB API, until timer is done, although the value 0
                ? Gets pushed to the WEB API, after gets added to the (macro) task queue

          $ Engine Encounter: Promise.resolve()
            - Gets added to the call stack
              ? Resolves with the value 'Promise!'
                # Callback function gets added to the microtask queue

          $ Engine Encounter: console.log() // "End!"
            - Gets added to the call stack immediately
                = Logs the value "End!""
                # Gets popped off

          ! And the engine continues...

          ? The engine sees the callstack is empty now, it's gonna check whether there are queued tasks in the microtask queue!

            $ The promise then callback is waiting for its turn!
                - It gets popped on to the call stack, after which it logs the resolved value of the promise

          ? The engine sees the call stack is empty now, it's gonna check the microtask queue once again to see if tasks are queued

            $ When the microtask queue is all empty, it's time to check the (macro) task queue!
                - setTimeout callback is still waiting there!

                  = The setTimeout callback gets popped on to the callstack, after which does its given work

                    ! The setTimeout callback get popped off the callstack

    $ Async/Await keywords
      - "async" behavior in JavaScript helps to work with promises easier!

      # We can create asynchronous functions that implicitly return an object!

            > Promise.resolve('Hello!') --->

                async function greet() {
                  return 'Hello!'
                }

            $ "async" functions implicitly return promises is pretty great, the real power of async functions can be seen when using the await keyword!

                ? With the "await" keyword, we can suspend the asynchronous function while we wait for the awaited value return a resolved promise

                - If we want to get the value of this resolved promise, like we previously did with the then() callback, we can assign variables to the awaited promise value!


                const one = () => Promise.resolve('One!');

                async function myFunc() {
                  console.log('In function!');
                  const res = await one()
                  console.log(res);
                }

                console.log('Before function!');
                myFunc();
                console.log('After function!');

                - // Before function!
                - // In function!
                - // After function!
                - // 'One!'

                $ console.log() - added to callstack and popped off

                $ async myFunc()
                  - console.log() - added to callstack and popped off
                  = await one() - added to callstack and returns resolved promise with return value
                      # When encounters an "await" keyword
                        ! "async" function gets suspended
                          $ The execution of the function body gets paused, and the rest of the async function gets run in a microtask instead of a regular task!

                  ? Engine jumps out of the async function and continues executing the code in the execution context in which the async function got called
                    # The global execution context in this case!

                  $ No more tasks to run in the global execution context

                  $ The event loop checks to see if there are any microtasks queued up

                  $ The "async myFunc" function is queued up after resolving the value

                  $ "myFunc" gets popped back onto the call stack, and continues running where it previously left off

                  ! The value of the resolved promise that returned!
                      # Gets popped off the call stack

                  $ "async" functions are different compared to a promise then?
                    ? The await keyword suspends the async function, whereas the Promise body would've kept on being executed if we would've used then!

*/
