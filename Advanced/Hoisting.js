/*
  @ Hoisting
    $ “weird” behavior where some variables are randomly undefined, ReferenceErrors get thrown

    * When the JS engine gets our script, the first thing it does is setting up memory for the data in our code

    ^ No code is executed at this point, it’s simply just preparing everything for execution

    ? The way that function declarations and variables are stored is different

    @ Creation Phase:

      # "Functions" are stored with a reference to the "entire function"

        function sum(x, y) {
          return x + y;
        }

        $ Memory (function)
          ? Name: sum
          ? Value: <function>

      # Variables declared with the "let" or "const" keyword are stored uninitialized (includes ES6 classes)

        const name = "Bob";

        let info = {
          age: 22,
          nationality: 'German'
        }

        var city = "Berlin"

        $ Memory (const)
          ? Name: name
          ? Value: <uninitialized>

        $ Memory (let)
          ? Name: info
          ? Value: <uninitialized>

        * Variables declared with the "var" keyword are stored with the default value of "undefined"

          $ Memory (var)
            ? Name: city
            ? Value: undefined

      ^ Creation phase is done, execution of the code starts

    @ Execution Phase

        * [console.log] statement on top of file, before we declared the functions/variables

        $ During the execution phase, we can invoke a function before we declared them, since we reference to the entire function in memory

          - console.log(sum(2, 3));

          - console.log(city); // undefined - default value

          - console.log(name); // ReferenceError

          - console.log(info); // ReferenceError

          # When we reference a variable declared with the "var" keyword before its declaration, its value will be the default
            ? undefined

          # "ReferenceError" gets thrown whenever we try reference uninitializad variables before their declarion - "TDZ"

            $ The "zone" before their actual declaration, is called the "Temporal Dead Zone [TDZ]"

            * TDZ: We cannot reference the variables (includes ES6 classes as well) before initialization

              ? The values in memory get overwritten once we passed the line on which we declared the variables


    @ Summary:
        $ Functions and Variables are stored in memory for an execution context before we execute our code - This is called Hoisting!

        ? Functions are stored with a reference to the entire functions

        # Variables with the "var" keyword with the value of "undefined"

        ^ Variables with the "let" and "const" keywords are stored "uninitialized"

*/
