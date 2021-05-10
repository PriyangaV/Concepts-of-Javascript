/*
  @ Clousure - Final

    $ Closures help keep any state or privacy within that function

    $ Closures are one of the best and most powerful features of JavaScript

    $ Closure give us access to outer function scope parameters from an inner function, even after the outer function has returned

    ! In Javascript, closures are created every time function is created

      *  Javascript has Lexical Scope.

          $ Lexical Scoping means the variable that are defined outside our scope are automatically available in inner scope, which means we don’t need to pass those to inner scope

            let i = 1;
            const test = () => { console.log(i); }
            test() // 1

          > ChildFunction can access the parentVariable even if execute separately

            function ParentFunction() {
              var parentVariable = 6;
              function ChildFunction() {
                console.log(parentVariable);
              }
              ChildFunction();
            }
            ParentFunction() // 6

            function ParentFunction() {
              var parentVariable = 60;
              function ChildFunction() {
                console.log(parentVariable);
              }
              return ChildFunction();
            }

            var executeChild = ParentFunction();
            executeChild() // 60

            * executeChild has a reference to ChildFunction only not to ParentFunction

            * when code get executed ChildFunction still have access to parentVariable which is defined outside scope in ParentFunction. This is called Closures


            ? It keeps the state of outer variable between the multiple calls.

            ? Inner function does not contain the separate copy of variable, it just keeps the reference of the outer variable

                function ParentFunction() {
                  var parentVariable = 60;
                  function ChildFunction() {
                    return parentVariable += 1;
                  }
                  return ChildFunction;
                }

                var executeChild = ParentFunction();
                console.log(executeChild()); //61
                console.log(executeChild()); //62
                console.log(executeChild()); //63
                console.log(executeChild()); //64

                $ ParentFunction return the reference of ChildFunction

                $ ChildFunction increase parentVariable every time executeChild executed it increase parentVariable value by one


          > When to use Closures?
                $ Closures are very helpful to hide the implementation details in javascript

                $ Closures can be useful to create private variables and functions

                    var counter = (function() {
                      var privateCounter = 0;
                      function changeBy(val) {
                        privateCounter += val;
                      }
                      return {
                        increment: function() {
                          changeBy(1);
                        },
                        decrement: function() {
                          changeBy(-1);
                        },
                        value: function() {
                          return privateCounter;
                        }
                      };
                    })();

                    counter.value(); // 0
                    counter.increment();
                    counter.increment();
                    counter.value(); // 2
                    counter.decrement();
                    counter.value(); // 1

                    $ incremet(), decrement() and value() be public function because they are included in return type

                    $ where as changeBy() becomes private function because it is not returned and only used internally by increment() and decrement()


          > Advantages of using Closures

              * As we all know variables which we create inside function have local scope and only accessible in side the function not outside the function

              ? Problem 1:
                $ Also variable defined inside the function created when we call function and destroyed which function close

                $ We can define global variables which created when program starts till the end of program and accessible any where in the program

              ? Problem 2:
                $ If we define the global variable these can be changed any where in program

              ? Solution:

                > Data Encapsulation
                  $ we can overcome above problems by using closures

                    * 1. By using a closure we can have private variables that are available even after a function task is finished

                    * 2. With a function closure we can store data in a separate scope, and share it only where necessary

          > Disadvantages of using Closures
              * As long as the closure are active, the memory can’t be garbage collected

                ? Example:
                  $ If we are using closure in ten places then unless all the ten process complete it hold the memory which cause memory leak

                ? How to fix this?
                  $ If there come a point in you program where you are done using closure then you need to set closure to null

              * Creating a function inside a function leads to duplicity in memory and cause slowing down the application

                ? How to fix?
                  $ Use closures only when you need privacy otherwise use module pattern to create new objects with shared methods
*/
