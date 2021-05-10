/*
  @ Scope Chain

    const name = "Bob";
    const age = 24;
    const city = "Berlin";

    function getPersonalInfo() {
      const name = "Peter";
      const age = 27;

      return `${name} is {age} and lives in ${city}`
    }

    - console.log(getPersonalInfo()) // "Peter is 27 and lives in Berlin"

    $ But, getPersonalInfo() doesn't contain a variable named 'city' :-O

    ? Memory space is set up for the different contexts

      * Global Context (window in a browser, global in Node)

      * Local Context for the "getPersonalInfo()"

      ! Block Scope

      # Each context also has a "scope chain"

        = Local Execution Context --> Local Scope Chain --> (Activation | Global) Object

        * Activation Object
          $ this
          $ arguments
          $ name
          $ age

        * Global Object
          $ this
          $ name
          $ age
          $ city

        ! Scope Chain = "Chain of References"
            ^ To objects that contain references to values/other scopes that are referencable in that execution context

            ? (Hey, these are all the values you can reference from within this context)

            # The scope chain gets created when the execution context is created, meaning it's created at runtime!

        * Global Execution Context
          - NAME                VALUE
            name                "Bob"
            age                  24
            city                "Berlin"

        * Local Execution Context
          - NAME                VALUE
            name                "Peter"
            age                  27

      $ getPersonalInfo() - Engine first checks the
          ? Local scope chain (name and age available)

          ^ city?
            > Engine "Goes down the scope chain"

            $ Engine works hard to find a value for the variable in the "Outer Scope" that "Local Scope" has a reference to
              * Global Object here...

      ! We can go down the scope chain, but we can't go up the scope chain!
          ^ We can go to "Outer Scopes", but not to more inner... scopes!

          * Outer(Global) Scope - Ground Floor ^

          * Inner Scope1 - 1st Floor ^

          * Inner Scope2 - 2st Floor ^

          * Inner Scopen - nth Floor ^

            const name = "Bob";

            function firstFunction() { // Ground Floor

              function secondFunction() { // 1st Floor

                function thirdFunction() { // 2nd Floor

                  function nthFunction() { // 3rd Floor

                  }
                }
              }
            }

            const name = "Bob";
            const age = 24;

            function getPersonalInfo() {
              const name = "Peter";
              const age = 27;
              const city = "Berlin"; // inner scope

              return `${name} is ${age} and lives in ${city}`
            }

            console.log(`${name} is ${age} and lives in ${city}); // city - ReferenceError

            # This way, we can use scope as a way to "protect" our variables and re-use variable names


      $ Block Scope
            * Variables declared with the "let" or "const" keyword are scoped to the nearest curly brackets [ "{ }" ]

            const age = 21;

            function checkAge() {
              if(age < 21) {
                const message = "You cannot drink!";
                return message;
              } else {
                const message = "You can drink!";
                return message;
              }
            }

            > We have a
                $ Global Scope
                $ Function Scope
                $ And two block scopes

                * Able to declare the variable "message" twice, since the variables were scoped to the curly brackets


    @ Summary:
          $ We can see "scope chain" as a chain of references to values that we can access in the current context

          ? Scopes also make it possible to re-use variable names that were defined further down the scope chain, since it can only go down the scope chain, not up

*/
