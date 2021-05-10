/*
  @ ES6 - Let keyword

        # "let" brings some new functionality that will help to keep our code from falling into some of JavaScript’s tricky parts

        $ function scope and block scope

          function foo() {
            var bar = 0;
            if (true) {
              var bar = 1; // Same variable
            }
            console.log(bar); // '1'
            - // Inner bar assignment is not scoped to the if block

            - // It's function scope - a common source of bugs

            - // In JS, any variables declared in a function are hoisted to the top of the function

            - // So it behaves like,

                function foo() {
                  var bar = 0;
                  var bar = undefined;
                    if (true) {
                      bar = 1; // Same variable
                    }
                    console.log(bar); // '1'
                  }
                }

            $ The inner bar is hoisted to the top of the function then reassigned to equal one in the inner block

          > In for...loops (common case of this behaviour)

            function foo() {
              var i = 'hello'; // Same variable
              - // i - variable was hoisted to the top of the function
              for (var i = 0; i < 3; i++) {
                - // Same variable
                console.log(i); // '1 2 3'
              }
              console.log(i); // '3'
            }

            $ Using 'let' keyword
              function foo() {
                let i = 'hello'; // Different variable
                for (let i = 0; i < 3; i++) {
                  - // Different variable
                  console.log(i); // '1 2 3'
                }
                console.log(i); // 'hello'
              }

              * "let" - helps us to block scope our variables and prevent them from being hoisted

              * It also prevents the accidental creation of duplicate variables

              * We'll get error if two variables declared with the same name using let within the same block

              $ "var" - would of silently and override the first declaration

                function foo() {
                  console.log(bar); // ReferenceError
                  let bar = 2;
                }

                function foo() {
                  let bar;
                  let bar; // TypeError
                }

*/
